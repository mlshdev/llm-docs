> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-appinfolocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-appinfolocalizations-_id_)

# Delete an app info localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Delete an app information localization that is associated with an app.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/appInfoLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app info localization resource ID from the [List all app info localizations for an app info](get-v1-appinfos-_id_-appinfolocalizations.md) response.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Creating, Modifying, and Deleting Localized App Information

- [Create an app info localization](post-v1-appinfolocalizations.md): Add app-level localized information for a new locale.
- [Modify an app info localization](patch-v1-appinfolocalizations-_id_.md): Modify localized app-level information for a particular language.
