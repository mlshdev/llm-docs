> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-passtypeids](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-passtypeids)

# Create a passtypeid

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Create a new identifier for use with a pass type ID certificate using a certificate signing request.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/passTypeIds
```

## HTTP Body

Content type: `application/json`

Type: `PassTypeIdCreateRequest`

## Response Codes

- `201` Created — `PassTypeIdResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing pass type Ids

- [List passtypeid ids for a certificate](get-v1-certificates-_id_-passtypeid.md): List all PassTypeID Ids for a specific certificate.
- [List passtypeid ids for a certificate](get-v1-certificates-_id_-relationships-passtypeid.md): List all PassTypeIDId Ids for a specific certificate.
- [List pass type ids](get-v1-passtypeids.md): Find and list pass type IDs that are registered to your team.
- [Read passtypeid information](get-v1-passtypeids-_id_.md): Get information about a specific pass type ID.
- [List all certificates for a passtypeid](get-v1-passtypeids-_id_-certificates.md): List all certificates for a specific pass type ID.
- [List certificate ids for a passtypeid](get-v1-passtypeids-_id_-relationships-certificates.md): List all certificate IDs for a specific pass type ID.
- [Modify a passtypeid](patch-v1-passtypeids-_id_.md): Update a specific pass type ID’s name.
- [Delete a passtypeid](delete-v1-passtypeids-_id_.md): Delete a pass type ID that is used for app distribution.
