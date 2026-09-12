> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/certificatesresponse](https://developer.apple.com/documentation/enterpriseprogramapi/certificatesresponse)

# CertificatesResponse

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

A response that contains a list of Certificates resources.

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

### Object and Data Types

- [Certificate](certificate.md): The data structure that represents a Certificates resource.
- [CertificatesWithoutIncludesResponse](certificateswithoutincludesresponse.md): A response that contains a single certificate resource without includes.
- [CertificateCreateRequest](certificatecreaterequest.md): The request body you use to create a Certificate.
- [CertificateResponse](certificateresponse.md): A response that contains a single Certificates resource.
- [CertificateType](certificatetype.md): Literal values that represent types of signing certificates.
