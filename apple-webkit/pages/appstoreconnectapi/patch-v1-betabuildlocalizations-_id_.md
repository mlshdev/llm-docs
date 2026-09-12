> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-betabuildlocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-betabuildlocalizations-_id_)

# Modify a beta build localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Update the localized What’s New text for a specific beta build and locale.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/betaBuildLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## HTTP Body

Content type: `application/json`

Type: `BetaBuildLocalizationUpdateRequest`

## Response Codes

- `200` OK — `BetaBuildLocalizationResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, Modifying, and Deleting Beta Build Localizations

- [Create a beta build localization](post-v1-betabuildlocalizations.md): Create localized What’s New text for a build.
- [Delete a beta build localization](delete-v1-betabuildlocalizations-_id_.md): Delete a specific beta build localization associated with a build.
