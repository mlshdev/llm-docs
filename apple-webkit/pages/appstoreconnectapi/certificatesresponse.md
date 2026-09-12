> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/certificatesresponse](https://developer.apple.com/documentation/appstoreconnectapi/certificatesresponse)

# CertificatesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.1+

The response body for endpoints that list signing certificates.

## Declaration

```
object CertificatesResponse
```

## Properties

- `data` — `[Certificate]` (required): The resource data.
- `included` — `[PassTypeId]`:
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information

## See Also

### Related Documentation

- [List and download certificates](get-v1-certificates.md): Find and list certificates and download their data.

### Object and data types

- [Certificate](certificate.md): A code signing certificate registered in your Apple developer account, used for development, distribution, or provisioning.
- [CertificatesWithoutIncludesResponse](certificateswithoutincludesresponse.md): A response containing a list of certificates, without related resources.
- [CertificateCreateRequest](certificatecreaterequest.md): The request body you use to create a Certificate.
- [CertificateResponse](certificateresponse.md): The response body for endpoints that create or read a single signing certificate.
- [CertificateUpdateRequest](certificateupdaterequest.md): The request body you use to update a certificate activation status.
- [CertificateType](certificatetype.md): Literal values that represent types of signing certificates.
- [CertificatePassTypeIdLinkageResponse](certificatepasstypeidlinkageresponse.md): A response body that contains the ID of a single related resource.
