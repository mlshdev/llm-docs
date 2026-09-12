> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-bundleids-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-bundleids-_id_)

# Modify a bundle id

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.1+

Update a specific bundle ID’s name.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/bundleIds/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `BundleIdUpdateRequest`

## Response Codes

- `200` OK — `BundleIdResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Modifying and Removing Bundle IDs

- [Delete a bundle id](delete-v1-bundleids-_id_.md)
