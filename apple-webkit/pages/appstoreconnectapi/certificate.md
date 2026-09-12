> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/certificate](https://developer.apple.com/documentation/appstoreconnectapi/certificate)

# Certificate

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.1+

A code signing certificate registered in your Apple developer account, used for development, distribution, or provisioning.

## Declaration

```
object Certificate
```

## Properties

- `attributes` — `Certificate.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `certificates`
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `relationships` — `Certificate.Relationships`:

## Topics

### Objects

- [Certificate.Attributes](certificate/attributes-data.dictionary.md): Attributes that describe a Certificates resource.

### Dictionaries

- [Certificate.Relationships](certificate/relationships-data.dictionary.md)

## See Also

### Object and data types

- [CertificatesWithoutIncludesResponse](certificateswithoutincludesresponse.md): A response containing a list of certificates, without related resources.
- [CertificateCreateRequest](certificatecreaterequest.md): The request body you use to create a Certificate.
- [CertificateResponse](certificateresponse.md): The response body for endpoints that create or read a single signing certificate.
- [CertificatesResponse](certificatesresponse.md): The response body for endpoints that list signing certificates.
- [CertificateUpdateRequest](certificateupdaterequest.md): The request body you use to update a certificate activation status.
- [CertificateType](certificatetype.md): Literal values that represent types of signing certificates.
- [CertificatePassTypeIdLinkageResponse](certificatepasstypeidlinkageresponse.md): A response body that contains the ID of a single related resource.
