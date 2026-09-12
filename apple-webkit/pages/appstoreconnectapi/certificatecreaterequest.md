> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/certificatecreaterequest](https://developer.apple.com/documentation/appstoreconnectapi/certificatecreaterequest)

# CertificateCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.1+

The request body you use to create a Certificate.

## Declaration

```
object CertificateCreateRequest
```

## Properties

- `data` — `CertificateCreateRequest.Data` (required): The resource data.

## Topics

### Objects

- [CertificateCreateRequest.Data](certificatecreaterequest/data-data.dictionary.md): The data element of the request body.

## See Also

### Object and data types

- [Certificate](certificate.md): A code signing certificate registered in your Apple developer account, used for development, distribution, or provisioning.
- [CertificatesWithoutIncludesResponse](certificateswithoutincludesresponse.md): A response containing a list of certificates, without related resources.
- [CertificateResponse](certificateresponse.md): The response body for endpoints that create or read a single signing certificate.
- [CertificatesResponse](certificatesresponse.md): The response body for endpoints that list signing certificates.
- [CertificateUpdateRequest](certificateupdaterequest.md): The request body you use to update a certificate activation status.
- [CertificateType](certificatetype.md): Literal values that represent types of signing certificates.
- [CertificatePassTypeIdLinkageResponse](certificatepasstypeidlinkageresponse.md): A response body that contains the ID of a single related resource.
