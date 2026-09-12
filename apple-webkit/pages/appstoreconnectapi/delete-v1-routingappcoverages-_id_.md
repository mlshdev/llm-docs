> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-routingappcoverages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-routingappcoverages-_id_)

# Delete a routing app coverage

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Delete the routing app coverage file that is associated with a version.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/routingAppCoverages/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Modifying and Deleting Routing App Coverages

- [Modify a routing app coverage](patch-v1-routingappcoverages-_id_.md): Commit a routing app coverage file after uploading it.
