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
