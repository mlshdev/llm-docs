> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/certificate](https://developer.apple.com/documentation/enterpriseprogramapi/certificate)

# Certificate

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

The data structure that represents a Certificates resource.

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
- [Certificate.Relationships](certificate/relationships-data.dictionary.md): The data and links that describe the relationship between the resources.

## See Also

### Object and Data Types

- [CertificatesWithoutIncludesResponse](certificateswithoutincludesresponse.md): A response that contains a single certificate resource without includes.
- [CertificateCreateRequest](certificatecreaterequest.md): The request body you use to create a Certificate.
- [CertificateResponse](certificateresponse.md): A response that contains a single Certificates resource.
- [CertificatesResponse](certificatesresponse.md): A response that contains a list of Certificates resources.
- [CertificateType](certificatetype.md): Literal values that represent types of signing certificates.
