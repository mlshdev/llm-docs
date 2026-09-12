> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-certificates-_id_-passtypeid](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-certificates-_id_-passtypeid)

# List passtypeid ids for a certificate

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

List all PassTypeID Ids for a specific certificate.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/certificates/{id}/passTypeId
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[certificates]` — `[string]`: **Allowed values:** `name`, `certificateType`, `displayName`, `serialNumber`, `platform`, `expirationDate`, `certificateContent`, `activated`, `passTypeId`
- `fields[passTypeIds]` — `[string]`: **Allowed values:** `name`, `identifier`, `certificates`
- `include` — `[string]`: **Allowed values:** `certificates`
- `limit[certificates]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `PassTypeIdResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting certificate infomation and data

- [List and download certificates](get-v1-certificates.md): Find and list certificates and download their data.
- [Read and download certificate information](get-v1-certificates-_id_.md): Get information about a certificate and download the certificate data.
- [List passtypeid ids for a certificate](get-v1-certificates-_id_-relationships-passtypeid.md): List all PassTypeIDId Ids for a specific certificate.
