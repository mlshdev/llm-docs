> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/certificatepasstypeidlinkageresponse](https://developer.apple.com/documentation/appstoreconnectapi/certificatepasstypeidlinkageresponse)

# CertificatePassTypeIdLinkageResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A response body that contains the ID of a single related resource.

## Declaration

```
object CertificatePassTypeIdLinkageResponse
```

## Properties

- `data` — `CertificatePassTypeIdLinkageResponse.Data` (required):
- `links` — `DocumentLinks` (required):

## Topics

### Dictionaries

- [CertificatePassTypeIdLinkageResponse.Data](certificatepasstypeidlinkageresponse/data-data.dictionary.md): The resource linkage data identifying the pass type ID associated with a certificate.

## See Also

### Object and data types

- [Certificate](certificate.md): A code signing certificate registered in your Apple developer account, used for development, distribution, or provisioning.
- [CertificatesWithoutIncludesResponse](certificateswithoutincludesresponse.md): A response containing a list of certificates, without related resources.
- [CertificateCreateRequest](certificatecreaterequest.md): The request body you use to create a Certificate.
- [CertificateResponse](certificateresponse.md): The response body for endpoints that create or read a single signing certificate.
- [CertificatesResponse](certificatesresponse.md): The response body for endpoints that list signing certificates.
- [CertificateUpdateRequest](certificateupdaterequest.md): The request body you use to update a certificate activation status.
- [CertificateType](certificatetype.md): Literal values that represent types of signing certificates.
