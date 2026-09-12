> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/certificateresponse](https://developer.apple.com/documentation/appstoreconnectapi/certificateresponse)

# CertificateResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.1+

The response body for endpoints that create or read a single signing certificate.

## Declaration

```
object CertificateResponse
```

## Properties

- `data` — `Certificate` (required): The resource data.
- `included` — `[PassTypeId]`:
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## See Also

### Related Documentation

- [Create a certificate](post-v1-certificates.md): Create a new certificate using a certificate signing request.

### Object and data types

- [Certificate](certificate.md): A code signing certificate registered in your Apple developer account, used for development, distribution, or provisioning.
- [CertificatesWithoutIncludesResponse](certificateswithoutincludesresponse.md): A response containing a list of certificates, without related resources.
- [CertificateCreateRequest](certificatecreaterequest.md): The request body you use to create a Certificate.
- [CertificatesResponse](certificatesresponse.md): The response body for endpoints that list signing certificates.
- [CertificateUpdateRequest](certificateupdaterequest.md): The request body you use to update a certificate activation status.
- [CertificateType](certificatetype.md): Literal values that represent types of signing certificates.
- [CertificatePassTypeIdLinkageResponse](certificatepasstypeidlinkageresponse.md): A response body that contains the ID of a single related resource.
