> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-certificates](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-certificates)

# List and download certificates

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.1+

Find and list certificates and download their data.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/certificates
```

## Query Parameters

- `fields[certificates]` — `[string]`: **Allowed values:** `name`, `certificateType`, `displayName`, `serialNumber`, `platform`, `expirationDate`, `certificateContent`, `activated`, `passTypeId`
- `filter[id]` — `[string]`:
- `filter[serialNumber]` — `[string]`:
- `limit` — `integer`: **Maximum:** `200`
- `sort` — `[string]`: **Allowed values:** `displayName`, `-displayName`, `certificateType`, `-certificateType`, `serialNumber`, `-serialNumber`, `id`, `-id`
- `filter[certificateType]` — `[string]`: **Allowed values:** `APPLE_PAY`, `APPLE_PAY_MERCHANT_IDENTITY`, `APPLE_PAY_PSP_IDENTITY`, `APPLE_PAY_RSA`, `DEVELOPER_ID_KEXT`, `DEVELOPER_ID_KEXT_G2`, `DEVELOPER_ID_APPLICATION`, `DEVELOPER_ID_APPLICATION_G2`, `DEVELOPMENT`, `DISTRIBUTION`, `IDENTITY_ACCESS`, `IOS_DEVELOPMENT`, `IOS_DISTRIBUTION`, `MAC_APP_DISTRIBUTION`, `MAC_INSTALLER_DISTRIBUTION`, `MAC_APP_DEVELOPMENT`, `PASS_TYPE_ID`, `PASS_TYPE_ID_WITH_NFC`
- `filter[displayName]` — `[string]`:
- `fields[passTypeIds]` — `[string]`: **Allowed values:** `name`, `identifier`, `certificates`
- `include` — `[string]`: **Allowed values:** `passTypeId`

## Response Codes

- `200` OK — `CertificatesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `429` — `ErrorResponse`:

## See Also

### Getting certificate infomation and data

- [Read and download certificate information](get-v1-certificates-_id_.md): Get information about a certificate and download the certificate data.
- [List passtypeid ids for a certificate](get-v1-certificates-_id_-passtypeid.md): List all PassTypeID Ids for a specific certificate.
- [List passtypeid ids for a certificate](get-v1-certificates-_id_-relationships-passtypeid.md): List all PassTypeIDId Ids for a specific certificate.
