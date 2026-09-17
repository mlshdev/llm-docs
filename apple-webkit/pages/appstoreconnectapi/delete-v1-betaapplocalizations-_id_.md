> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-betaapplocalizations-_id_

# Delete a beta app localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Delete a beta app localization associated with an app.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/betaAppLocalizations/{id}
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

### Creating, Modifying, and Deleting Localizations

- [Create a beta app localization](post-v1-betaapplocalizations.md): Create localized descriptive information for an app.
- [Modify a beta app localization](patch-v1-betaapplocalizations-_id_.md): Update the localized information for a specific beta app and locale.
