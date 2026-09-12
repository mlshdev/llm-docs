> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/list-and-download-certificates](https://developer.apple.com/documentation/enterpriseprogramapi/list-and-download-certificates)

# List and Download Certificates

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Find and list certificates and download their data.

## URL

```http
GET https://api.enterprise.developer.apple.com/v1/certificates
```

## Query Parameters

- `fields[certificates]` — `[string]`: **Allowed values:** `certificateContent`, `certificateType`, `csrContent`, `displayName`, `expirationDate`, `name`, `passTypeId`, `platform`, `serialNumber`
- `fields[passTypeIds]` — `[string]`: **Allowed values:** `certificates`, `identifier`, `name`
- `filter[certificateType]` — `[string]`: **Allowed values:** `IOS_DEVELOPMENT`, `IOS_DISTRIBUTION`, `MAC_APP_DISTRIBUTION`, `MAC_INSTALLER_DISTRIBUTION`, `MAC_APP_DEVELOPMENT`, `DEVELOPER_ID_KEXT`, `DEVELOPER_ID_APPLICATION`, `DEVELOPMENT`, `DISTRIBUTION`, `PASS_TYPE_ID`, `PASS_TYPE_ID_WITH_NFC`
- `filter[displayName]` — `[string]`:
- `filter[id]` — `[string]`:
- `filter[serialNumber]` — `[string]`:
- `include` — `[string]`: **Allowed values:** `passTypeId`
- `limit` — `integer`: **Maximum:** `200`
- `sort` — `[string]`: **Allowed values:** `certificateType`, `-certificateType`, `displayName`, `-displayName`, `id`, `-id`, `serialNumber`, `-serialNumber`

## Response Codes

- `200` OK — `CertificatesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.

## See Also

### Getting Certificate Infomation and Data

- [Read and Download Certificate Information](read-and-download-certificate-information.md): Get information about a certificate and download the certificate data.
