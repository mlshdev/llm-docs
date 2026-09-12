> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/certificateresponse](https://developer.apple.com/documentation/enterpriseprogramapi/certificateresponse)

# CertificateResponse

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

A response that contains a single Certificates resource.

## Declaration

```
object CertificateResponse
```

## Properties

- `data` — `Certificate` (required): The resource data.
- `included` — `[PassTypeId]`:
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## Topics

### Related Documentation

- [Create a Certificate](create-a-certificate.md): Create a new certificate using a certificate signing request.

## See Also

### Object and Data Types

- [Certificate](certificate.md): The data structure that represents a Certificates resource.
- [CertificatesWithoutIncludesResponse](certificateswithoutincludesresponse.md): A response that contains a single certificate resource without includes.
- [CertificateCreateRequest](certificatecreaterequest.md): The request body you use to create a Certificate.
- [CertificatesResponse](certificatesresponse.md): A response that contains a list of Certificates resources.
- [CertificateType](certificatetype.md): Literal values that represent types of signing certificates.
