import { createAgent } from '@veramo/core'
import {
  IQRCodeGenerator,
  QrCodeProvider
} from '@sphereon/ssi-sdk.qr-code-generator'
import {
  ISIOPv2OID4VPRPRestClient,
  SIOPv2OID4VPRPRestClient
} from '@sphereon/ssi-sdk.siopv2-oid4vp-rp-rest-client'
import {
  IOID4VCIRestClient,
  OID4VCIRestClient
} from '@sphereon/ssi-sdk.oid4vci-issuer-rest-client'

const agent = createAgent<IQRCodeGenerator & ISIOPv2OID4VPRPRestClient & IOID4VCIRestClient>({
  plugins: [
    new QrCodeProvider(),
    new SIOPv2OID4VPRPRestClient({
      baseUrl: process.env.REACT_APP_OID4VP_AGENT_BASE_URL ?? 'https://ssi.sphereon.com/agent',
      definitionId: process.env.REACT_APP_ID4VP_PRESENTATION_DEF_ID ?? 'sphereon'
    }),
    new OID4VCIRestClient({
      baseUrl: process.env.REACT_APP_OID4VCI_AGENT_BASE_URL ?? 'https://ssi.sphereon.com/issuer',
    }),
  ]
})

export default agent