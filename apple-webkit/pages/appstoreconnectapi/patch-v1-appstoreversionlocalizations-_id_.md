> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-appstoreversionlocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-appstoreversionlocalizations-_id_)

# Modify an app store version localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Modify localized version-level information for a particular language.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appStoreVersionLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the App Store version localization resource ID from the [List all app store version localizations for an app store version](get-v1-appstoreversions-_id_-appstoreversionlocalizations.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppStoreVersionLocalizationUpdateRequest`

## Response Codes

- `200` OK — `AppStoreVersionLocalizationResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, Modifying, and Deleting Version Localizations

- [Create an app store version localization](post-v1-appstoreversionlocalizations.md): Add localized version-level information for a new locale.
- [Delete an app store version localization](delete-v1-appstoreversionlocalizations-_id_.md): Delete a language from your version metadata.
