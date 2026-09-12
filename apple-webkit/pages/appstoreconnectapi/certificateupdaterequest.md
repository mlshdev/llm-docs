> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/certificateupdaterequest](https://developer.apple.com/documentation/appstoreconnectapi/certificateupdaterequest)

# CertificateUpdateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.8+

The request body you use to update a certificate activation status.

## Declaration

```
object CertificateUpdateRequest
```

## Properties

- `data` — `CertificateUpdateRequest.Data` (required):

## Topics

### Dictionaries

- [CertificateUpdateRequest.Data](certificateupdaterequest/data-data.dictionary.md): The data structure that represent a certificate update request resource.

## See Also

### Object and data types

- [Certificate](certificate.md): A code signing certificate registered in your Apple developer account, used for development, distribution, or provisioning.
- [CertificatesWithoutIncludesResponse](certificateswithoutincludesresponse.md): A response containing a list of certificates, without related resources.
- [CertificateCreateRequest](certificatecreaterequest.md): The request body you use to create a Certificate.
- [CertificateResponse](certificateresponse.md): The response body for endpoints that create or read a single signing certificate.
- [CertificatesResponse](certificatesresponse.md): The response body for endpoints that list signing certificates.
- [CertificateType](certificatetype.md): Literal values that represent types of signing certificates.
- [CertificatePassTypeIdLinkageResponse](certificatepasstypeidlinkageresponse.md): A response body that contains the ID of a single related resource.
