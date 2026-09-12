> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-passtypeids-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-passtypeids-_id_)

# Read passtypeid information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get information about a specific pass type ID.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/passTypeIds/{id}
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

### Managing pass type Ids

- [List passtypeid ids for a certificate](get-v1-certificates-_id_-passtypeid.md): List all PassTypeID Ids for a specific certificate.
- [List passtypeid ids for a certificate](get-v1-certificates-_id_-relationships-passtypeid.md): List all PassTypeIDId Ids for a specific certificate.
- [List pass type ids](get-v1-passtypeids.md): Find and list pass type IDs that are registered to your team.
- [List all certificates for a passtypeid](get-v1-passtypeids-_id_-certificates.md): List all certificates for a specific pass type ID.
- [List certificate ids for a passtypeid](get-v1-passtypeids-_id_-relationships-certificates.md): List all certificate IDs for a specific pass type ID.
- [Modify a passtypeid](patch-v1-passtypeids-_id_.md): Update a specific pass type ID’s name.
- [Create a passtypeid](post-v1-passtypeids.md): Create a new identifier for use with a pass type ID certificate using a certificate signing request.
- [Delete a passtypeid](delete-v1-passtypeids-_id_.md): Delete a pass type ID that is used for app distribution.
