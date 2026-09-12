> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-betabuildlocalizations](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-betabuildlocalizations)

# Create a beta build localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Create localized What’s New text for a build.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/betaBuildLocalizations
```

## HTTP Body

Content type: `application/json`

Type: `BetaBuildLocalizationCreateRequest`

## Response Codes

- `201` Created — `BetaBuildLocalizationResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, Modifying, and Deleting Beta Build Localizations

- [Modify a beta build localization](patch-v1-betabuildlocalizations-_id_.md): Update the localized What’s New text for a specific beta build and locale.
- [Delete a beta build localization](delete-v1-betabuildlocalizations-_id_.md): Delete a specific beta build localization associated with a build.
