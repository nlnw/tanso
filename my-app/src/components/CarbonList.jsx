import { useQuery } from "urql";
import { schemaRegistry, schemaUIDs } from "../utils/eas.js";
import { useEffect, useState } from "react";
import { SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";

const FILMS_QUERY = `
query Attestations {
    attestations(where: {schemaId: {equals:"0x447cefc057bdd611bc853756d3fd633e495d4d8d75a1aaed7ae5598573984c13"}}) {
      id
      attester
      recipient
      refUID
      revocable
      revocationTime
      expirationTime
      data
    }
  }
`;

export default function CarbonList() {
  const [result] = useQuery({
    query: FILMS_QUERY,
  });
  const [schema, setSchema] = useState("");

  const { data, fetching, error } = result;

  useEffect(() => {
    async function fetchData() {
      const schemaRecord = await schemaRegistry.getSchema({
        uid: schemaUIDs.CCVA_attests_project_approval,
      });
      console.log(schemaRecord.schema);
      setSchema(schemaRecord.schema);
    }
    fetchData();
  }, []);

  if (schema == "") return "Loading schema...";
  if (fetching) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  const schemaEncoder = new SchemaEncoder(schema);
  const schemaColumns = schemaEncoder.decodeData(data.attestations[0].data);
  console.log(schemaColumns);

  const attestIt = async () => {
    const eas = new EAS(EASContractAddress);
    eas.connect(signer);

    // Initialize SchemaEncoder with the schema string
    const schemaEncoder = new SchemaEncoder("uint256 eventId, uint8 voteIndex");
    const encodedData = schemaEncoder.encodeData([
      { name: "eventId", value: 1, type: "uint256" },
      { name: "voteIndex", value: 1, type: "uint8" },
    ]);

    const schemaUID =
      "0xb16fa048b0d597f5a821747eba64efa4762ee5143e9a80600d0005386edfc995";

    const tx = await eas.attest({
      schema: schemaUID,
      data: {
        recipient: "0xFD50b031E778fAb33DfD2Fc3Ca66a1EeF0652165",
        expirationTime: 0,
        revocable: true,
        data: encodedData,
      },
    });

    const newAttestationUID = await tx.wait();

    console.log("New attestation UID:", newAttestationUID);
  };

  return (
    <>
      <thead className="bg-gray-50 dark:bg-slate-900">
        <tr>
          <th scope="col" className="px-6 py-3 text-left" key="id">
            <div className="flex items-center gap-x-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                PROJECT_ID
              </span>
            </div>
          </th>
          {schemaColumns.map((schemaColumn) => (
            <th
              scope="col"
              className="px-6 py-3 text-left"
              key={schemaColumn.name}
            >
              <div className="flex items-center gap-x-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                  {schemaColumn.name}
                </span>
              </div>
            </th>
          ))}
          <th scope="col" className="px-6 py-3 text-right"></th>
          <th scope="col" className="px-6 py-3 text-right"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        {data.attestations.map((attestation) => {
          const decodedData = schemaEncoder.decodeData(attestation.data);
          return (
            <tr
              className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
              key={attestation.id}
            >
              <td className="h-px w-px whitespace-nowrap">
                <a
                  className="block"
                  href={`https://sepolia.easscan.org/offchain/attestation/view/${attestation.id}`}
                  data-hs-overlay="#hs-ai-invoice-modal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="px-6 py-2">
                    <span className="font-mono text-sm text-blue-600 dark:text-blue-500">
                      {attestation.id.substring(0, 15)}
                    </span>
                  </div>
                </a>
              </td>
              {decodedData.map((ddata) => (
                <td className="h-px w-px whitespace-nowrap" key={ddata.name}>
                  <a className="block" data-hs-overlay="#hs-ai-invoice-modal">
                    <div className="px-6 py-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {ddata.value.value}
                      </span>
                    </div>
                  </a>
                </td>
              ))}

              <td className="h-px w-px whitespace-nowrap">
                <a
                  className="block"
                  href="javascript:;"
                  data-hs-overlay="#hs-ai-invoice-modal"
                >
                  <div className="px-6 py-2">
                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      <svg
                        className="w-2.5 h-2.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                      </svg>
                      Attested
                    </span>
                  </div>
                </a>
              </td>
            </tr>
          );
        })}
        <tr
          className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
          key="new"
        >
          <td className="h-px w-px whitespace-nowrap">
            <a
              className="block"
              data-hs-overlay="#hs-ai-invoice-modal"
              target="_blank"
              rel="noreferrer"
            >
              <div className="px-6 py-2">
                <span className="font-mono text-sm text-blue-600 dark:text-blue-500"></span>
              </div>
            </a>
          </td>
          <td className="h-px w-px whitespace-nowrap">
            <a className="block" data-hs-overlay="#hs-ai-invoice-modal">
              <div className="px-6 py-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Solar
                </span>
              </div>
            </a>
          </td>
          <td className="h-px w-px whitespace-nowrap">
            <a className="block" data-hs-overlay="#hs-ai-invoice-modal">
              <div className="px-6 py-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  2222
                </span>
              </div>
            </a>
          </td>
          <td className="h-px w-px whitespace-nowrap">
            <a className="block" data-hs-overlay="#hs-ai-invoice-modal">
              <div className="px-6 py-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  422
                </span>
              </div>
            </a>
          </td>
          <td className="h-px w-px whitespace-nowrap">
            <a className="block" data-hs-overlay="#hs-ai-invoice-modal">
              <div className="px-6 py-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  645
                </span>
              </div>
            </a>
          </td>
          <td className="h-px w-px whitespace-nowrap">
            <a className="block" data-hs-overlay="#hs-ai-invoice-modal">
              <div className="px-6 py-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Germany
                </span>
              </div>
            </a>
          </td>
          <td className="h-px w-px whitespace-nowrap">
            <a className="block" data-hs-overlay="#hs-ai-invoice-modal">
              <div className="px-6 py-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Bavaria
                </span>
              </div>
            </a>
          </td>
          <td className="h-px w-px whitespace-nowrap">
            <a className="block" data-hs-overlay="#hs-ai-invoice-modal">
              <div className="px-6 py-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Friedberg
                </span>
              </div>
            </a>
          </td>

          <td className="h-px w-px whitespace-nowrap">
            <a
              className="block"
              href="javascript:;"
              onClick={attestIt}
              data-hs-overlay="#hs-ai-invoice-modal"
            >
              <div className="px-6 py-2">
                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                  <svg
                    className="w-2.5 h-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  Not Attested
                </span>
              </div>
            </a>
          </td>
        </tr>
      </tbody>
    </>
  );
}
