> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/read-the-pass-type-id-information-of-a-certificate](https://developer.apple.com/documentation/enterpriseprogramapi/read-the-pass-type-id-information-of-a-certificate)

# Read the Pass Type Id Information of a Certificate

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

## URL

```http
GET https://api.enterprise.developer.apple.com/v1/certificates/{id}/passTypeId
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[certificates]` — `[string]`: **Allowed values:** `certificateContent`, `certificateType`, `csrContent`, `displayName`, `expirationDate`, `name`, `passTypeId`, `platform`, `serialNumber`
- `fields[passTypeIds]` — `[string]`: **Allowed values:** `certificates`, `identifier`, `name`
- `include` — `[string]`: **Allowed values:** `certificates`
- `limit[certificates]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `PassTypeIdResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
