> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstoreversionexperimenttreatmentlocalizations-_id_-relationships-appscreenshotsets

# List screenshot set IDs for an App Store version experiment treatment localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+ (deprecated in 4.5)

> This relationship is deprecated. Use the [AppAssetLibraryPlacement](appassetlibraryplacement.md) relationship instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appStoreVersionExperimentTreatmentLocalizations/{id}/relationships/appScreenshotSets
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `AppStoreVersionExperimentTreatmentLocalizationAppScreenshotSetsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Read app store version experiment treatment localization information](get-v1-appstoreversionexperimenttreatmentlocalizations-_id_.md): Get information about a specific App Store version experiment treatment localization.
- [List all screenshot sets for an experiment treatment localization](get-v1-appstoreversionexperimenttreatmentlocalizations-_id_-appscreenshotsets.md): Deprecated. Get a list of screenshot sets for a specific App Store version experiment treatment localization.
- [List all preview sets for an experiment treatment localization](get-v1-appstoreversionexperimenttreatmentlocalizations-_id_-apppreviewsets.md): Deprecated. Get a list of preview sets for a specific App Store version experiment treatment localization.
- [List preview set IDs for an App Store version experiment treatment localization](get-v1-appstoreversionexperimenttreatmentlocalizations-_id_-relationships-apppreviewsets.md): Deprecated.
- [Create an app store version experiment treatment localization](post-v1-appstoreversionexperimenttreatmentlocalizations.md): Add a new localization for an App Store version experiment treatment.
- [Delete a treatment localization for an app store version experiment](delete-v1-appstoreversionexperimenttreatmentlocalizations-_id_.md): Delete localized metatdata that you configured for an App Store Version experiment treatment.
- [List related placements](get-v1-appstoreversionexperimenttreatmentlocalizations-_id_-placements.md): List the placements for an App Store version experiment treatment localization.
- [List the placement IDs for an App Store version experiment treatment localization](get-v1-appstoreversionexperimenttreatmentlocalizations-_id_-relationships-placements.md): Get a list of placement resource IDs for a specific App Store version experiment treatment localization.
