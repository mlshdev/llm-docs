> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-appinfolocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-appinfolocalizations-_id_)

# Modify an app info localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Modify localized app-level information for a particular language.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appInfoLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app info localization resource ID from the [List all app info localizations for an app info](get-v1-appinfos-_id_-appinfolocalizations.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppInfoLocalizationUpdateRequest`

## Response Codes

- `200` OK — `AppInfoLocalizationResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, Modifying, and Deleting Localized App Information

- [Create an app info localization](post-v1-appinfolocalizations.md): Add app-level localized information for a new locale.
- [Delete an app info localization](delete-v1-appinfolocalizations-_id_.md): Delete an app information localization that is associated with an app.
