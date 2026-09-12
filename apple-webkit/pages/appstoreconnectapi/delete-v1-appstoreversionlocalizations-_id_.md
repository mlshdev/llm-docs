> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-appstoreversionlocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-appstoreversionlocalizations-_id_)

# Delete an app store version localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Delete a language from your version metadata.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/appStoreVersionLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the App Store version localization resource ID from the [List all app store version localizations for an app store version](get-v1-appstoreversions-_id_-appstoreversionlocalizations.md) response.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Creating, Modifying, and Deleting Version Localizations

- [Create an app store version localization](post-v1-appstoreversionlocalizations.md): Add localized version-level information for a new locale.
- [Modify an app store version localization](patch-v1-appstoreversionlocalizations-_id_.md): Modify localized version-level information for a particular language.
