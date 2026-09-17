> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-bundleids-_id_

# Delete a bundle id

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.1+

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/bundleIds/{id}
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

<a id="Discussion"></a>

## Discussion

You can only delete bundle IDs that are used for development. You can’t delete bundle IDs that are being used by an app in App Store Connect.

## See Also

### Modifying and Removing Bundle IDs

- [Modify a bundle id](patch-v1-bundleids-_id_.md): Update a specific bundle ID’s name.
