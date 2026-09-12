> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-betabuildlocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-betabuildlocalizations-_id_)

# Delete a beta build localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Delete a specific beta build localization associated with a build.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/betaBuildLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Creating, Modifying, and Deleting Beta Build Localizations

- [Create a beta build localization](post-v1-betabuildlocalizations.md): Create localized What’s New text for a build.
- [Modify a beta build localization](patch-v1-betabuildlocalizations-_id_.md): Update the localized What’s New text for a specific beta build and locale.
