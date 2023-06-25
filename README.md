# Tanso

Tanso is a carbon credits registry and marketplace with support for Ethereum Attestation Service.

[Whitepaper](https://docs.google.com/document/d/1-WQ08wNhecO2tWA-oNsmuYpA3qC-fQLblXSSCu-Wzfc/edit).

---

## Details

Stakeholders:

- Carbon Credit Project Developers (CCPD)
- Carbon Credit Verification Agencies (CCVA)
- Carbon Emissions Voluntary Reporting Platforms (CEVRP)
- Companies with Carbon Emissions (CCE)
- Carbon Accounting Engine (CAE)

Products/Items:

- Carbon Credits (CC)
- Carbon Emissions (CE)

CCPD Interactions:

- CCPD develops projects that would create carbon credits (CC)
- CCPD applies to CCVA for project approval
- CCPD receives pre-CCs (project approved but credit not generated yet)
- CCPD receives CCs (CCVA releases the credits)
- CCPD sells/transfers pre-CCs and CCs to CCE.

CCE Interactions:

- CCE reports their CE to CEVRP
- CCE receives CEs (negative of CCs)
- CCE buys CCs to offset CEs

CEVRP Interactions:

- CEVRP receives CE report from CCE
- CEVRP sends CE to CCE

CCVA Interactions:

- CCVA receives project from CCPD
- CCVA audits the project and approves if project is qualified
- CCVA issues CC to CCPD

CAE Interactions:

- CAE calculates the net of CEs and CCs
- CAE issues Net-Zero certificate to CCEs
  Attestations

## Attestations

CCVA attests to the approval of the project (pre-CC) of the CCPD

- Attestor/From: CCVA
- Recipient/To: CCPD
- Attestation/Message: Project approved
- Expiration: e.g. Jun 25, 2030 (life of the project, or when next audit is needed)
- Schema: 0x447cefc057bdd611bc853756d3fd633e495d4d8d75a1aaed7ae5598573984c13
- Project type: Biochar (e.g. biochar, solar, reforestation)
- Projected amount of total CCs (tCO2e): 5000 (projected total)
- Location: coordinates of the facility
- Sample attestations:
  - 0x5697bc78d2488c1a3b1cb84275919c85d4d6b25b770e3e473f240851d2188804
  - 0x0dc884c1e5713aa33735a91ad1d79d4d653403475c8c27cf2bd9c5f530cf3636
  - 0xa4042cdd60e62bf16f7d35a035f2c30b619b28f9f55ffdc29986fa8a8b6013ed

CCVA attests to the CCs of the CCPD
Attestor/From: CCVA
Recipient/To: CCPD
Attestation/Message: CC generated
Expiration: e.g. Jun 25, 2028 (expiry of the CCs, not the project life)
Schema: 0xceaae4d7e69d6612de328f03af8414c9f0cf83c584ebad4dbec387b83ebdf5ec
Project type: Biochar (e.g. biochar, solar, reforestation)
Realized amount of CCs (tCO2e): 770 (actual credits)
Location: <coordinates of the facility>
Sample attestations:
0x4e1a73b6c51ccb7684d12e429eecf8ca300405962e6de37d2ea30c4dfd8e2077
0x58ad068f8bebeb0264f8b10a4cf518ede6160eba081283a23926d5139279c42f
0xc3561b303b1a298efd79757798084e478c224d447de97f05b570a52b021f77bc

CEVRP attests to the CEs of CCE
Attestor/From: CEVRP CCE (self-attestation)
Recipient/To: CCE
Attestation/Message: CE generated
Expiration: June 25, 2050 [KG: not sure here, emissions are always there, maybe a long time]
Schema: 0x82a5b3d30bc24d0229954a8ec7993e68137791a51376c736d2cd2fb18161e60d
Company name: ABC Corp.
Company location: <location of the company or its unit/factory that creates the emission>
Emission type: CO2 (e.g. CO2, CH4, N2O)
Emission amount in tCO2e: 1230
Sample attestations:
0xf4e083cda2ab4b735111d6b1d8f30fe22d12e366d91e70e49e85275015c4ddf3
0x27135fc23a8e34c1c1ce6076431a43902347b540712aafdfadd01ef1e1a552c6
0x45df7ddece5687b963e20db8dd81b27db643feb86ce27b55fd01cf995e62aa9d

CCPD attests to the transfer of CCs to CCE
Attestor/From: CCPD
Recipient/To: CCE
Attestation/Message: CC transferred
Expiration: e.g. Jun 25, 2028 (expiry of the CCs originally assigned)
Schema: 0x6329287e9ee8bf0c1cd7760f90eb440aeb6e5dfc6b79caaa8c7dfaca714d626c
Project type: Biochar (e.g. biochar, solar, reforestation)
Realized amount of CCs (tCO2e): 770 (actual credits)
Location: <coordinates of the facility generated the credits>
Sample attestations:
Offchain Attestation
0x442be33e77ad1fcbfdae72714f8c8d0d90d91dc59e5386cc0b6654c155dba118
0x0b71c910448049947a0c20d33cf180f0d0393003be85eca0525fbd546f223b76
0x47b97aee1e054506321f89efaa64a7a14313cf6e42c38f3b13999b921b6f4542

CAE attests to that CCE is net-zero
Attestor/From: CAE
Recipient/To: CCE
Attestation/Message: Net Carbon Emissions
Expiration: e.g. Jun 25, 2028 [KG: not sure here]
Schema: 0xf7698882cf2e7bef1c0217e229303874bf2f86b77a6afd97e9c9b92c6eaab34d
Company name: ABC Corp.
Company location: <location of the company or its unit/factory that creates the emission>
Total emission amount in tCO2e: 1230
Total CC amount in tCO2e: 770
Net carbon emissions in tCO2e: 460
Is Net-zero: False
Sample attestations:
0xc4713324d776edd79506d2fd0f97c6e735cecd6f99ba3c58d1e9c28bfd752467
0x18eaf5fc1fdec2a781c6dff08d8e9956a34c35b81d8a2976c3aae8036104301c
0x89fd79f53da03ea530165ae6d1ad26d04deb6038dc598d2bf705e6865652f541
