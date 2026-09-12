> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/read-and-download-certificate-information](https://developer.apple.com/documentation/enterpriseprogramapi/read-and-download-certificate-information)

# Read and Download Certificate Information

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Get information about a certificate and download the certificate data.

## URL

```http
GET https://api.enterprise.developer.apple.com/v1/certificates/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[certificates]` — `[string]`: **Allowed values:** `certificateContent`, `certificateType`, `csrContent`, `displayName`, `expirationDate`, `name`, `passTypeId`, `platform`, `serialNumber`
- `fields[passTypeIds]` — `[string]`: **Allowed values:** `certificates`, `identifier`, `name`
- `include` — `[string]`: **Allowed values:** `passTypeId`

## Response Codes

- `200` OK — `CertificateResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.

## See Also

### Getting Certificate Infomation and Data

- [List and Download Certificates](list-and-download-certificates.md): Find and list certificates and download their data.
