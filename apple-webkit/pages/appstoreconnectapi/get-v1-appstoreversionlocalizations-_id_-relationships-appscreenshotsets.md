> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstoreversionlocalizations-_id_-relationships-appscreenshotsets

# List screenshot set IDs for an App Store version localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+ (deprecated in 4.5)

> This relationship is deprecated. Use the [AppAssetLibraryPlacement](appassetlibraryplacement.md) relationship instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appStoreVersionLocalizations/{id}/relationships/appScreenshotSets
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `AppStoreVersionLocalizationAppScreenshotSetsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Information from a Localization

- [List all app preview sets for an app store version localization](get-v1-appstoreversionlocalizations-_id_-apppreviewsets.md): Deprecated. List all app preview sets for a specific localization.
- [List all app screenshot sets for an app store version localization](get-v1-appstoreversionlocalizations-_id_-appscreenshotsets.md): Deprecated. List all screenshot sets for a specific localization.
- [List preview set IDs for an App Store version localization](get-v1-appstoreversionlocalizations-_id_-relationships-apppreviewsets.md): Deprecated.
