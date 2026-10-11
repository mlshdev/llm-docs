> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstoreversionexperimenttreatmentlocalizations-_id_-apppreviewsets

# List all preview sets for an experiment treatment localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+ (deprecated in 4.5)

Get a list of preview sets for a specific App Store version experiment treatment localization.

> This relationship is deprecated. Use the [AppAssetLibraryPlacement](appassetlibraryplacement.md) relationship instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appStoreVersionExperimentTreatmentLocalizations/{id}/appPreviewSets
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the App Store version experiment treatment localization resource ID from the [List all localizations for an app store version experiment treatment](get-v1-appstoreversionexperimenttreatments-_id_-appstoreversionexperimenttreatmentlocalizations.md) response.

## Query Parameters

- `fields[appPreviewSets]` — `[string]`: Additional fields to include for each app preview set resource returned by the response.
  **Allowed values:** `previewType`, `appStoreVersionLocalization`, `appCustomProductPageLocalization`, `appStoreVersionExperimentTreatmentLocalization`, `appPreviews`
- `fields[appPreviews]` — `[string]`: Additional fields to include for each app preview resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `previewFrameTimeCode`, `mimeType`, `videoUrl`, `previewFrameImage`, `previewImage`, `uploadOperations`, `assetDeliveryState`, `videoDeliveryState`, `appPreviewSet`
- `filter[appCustomProductPageLocalization]` — `[string]`: Filter the returned app preview sets by app custom product page localization.
- `filter[appStoreVersionLocalization]` — `[string]`: Filter the returned app preview sets by App Store version localization.
- `filter[previewType]` — `[string]`: Filter the returned app preview sets by preview type.
  **Allowed values:** `IPHONE_67`, `IPHONE_61`, `IPHONE_65`, `IPHONE_58`, `IPHONE_55`, `IPHONE_47`, `IPHONE_40`, `IPHONE_35`, `IPAD_PRO_3GEN_129`, `IPAD_PRO_3GEN_11`, `IPAD_PRO_129`, `IPAD_105`, `IPAD_97`, `DESKTOP`, `APPLE_TV`, `APPLE_VISION_PRO`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appStoreVersionLocalization`, `appCustomProductPageLocalization`, `appStoreVersionExperimentTreatmentLocalization`, `appPreviews`
- `limit` — `integer`: The maximum number of app preview set resources to return.
  **Maximum:** `200`
- `limit[appPreviews]` — `integer`: The maximum number of related app preview resources to return.
  **Maximum:** `50`
- `fields[appCustomProductPageLocalizations]` — `[string]`: Additional fields to include for each app custom product page localization resource returned by the response.
  **Allowed values:** `locale`, `promotionalText`, `appCustomProductPageVersion`, `appScreenshotSets`, `appPreviewSets`, `searchKeywords`, `placements`
- `fields[appStoreVersionExperimentTreatmentLocalizations]` — `[string]`: Additional fields to include for each App Store version experiment treatment localization resource returned by the response.
  **Allowed values:** `locale`, `appStoreVersionExperimentTreatment`, `appScreenshotSets`, `appPreviewSets`, `placements`
- `fields[appStoreVersionLocalizations]` — `[string]`: Additional fields to include for each App Store version localization resource returned by the response.
  **Allowed values:** `description`, `locale`, `keywords`, `marketingUrl`, `promotionalText`, `supportUrl`, `whatsNew`, `appStoreVersion`, `appScreenshotSets`, `appPreviewSets`, `searchKeywords`, `placements`

## Response Codes

- `200` OK — `AppPreviewSetsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Read app store version experiment treatment localization information](get-v1-appstoreversionexperimenttreatmentlocalizations-_id_.md): Get information about a specific App Store version experiment treatment localization.
- [List all screenshot sets for an experiment treatment localization](get-v1-appstoreversionexperimenttreatmentlocalizations-_id_-appscreenshotsets.md): Deprecated. Get a list of screenshot sets for a specific App Store version experiment treatment localization.
- [List preview set IDs for an App Store version experiment treatment localization](get-v1-appstoreversionexperimenttreatmentlocalizations-_id_-relationships-apppreviewsets.md): Deprecated.
- [List screenshot set IDs for an App Store version experiment treatment localization](get-v1-appstoreversionexperimenttreatmentlocalizations-_id_-relationships-appscreenshotsets.md): Deprecated.
- [Create an app store version experiment treatment localization](post-v1-appstoreversionexperimenttreatmentlocalizations.md): Add a new localization for an App Store version experiment treatment.
- [Delete a treatment localization for an app store version experiment](delete-v1-appstoreversionexperimenttreatmentlocalizations-_id_.md): Delete localized metatdata that you configured for an App Store Version experiment treatment.
- [List related placements](get-v1-appstoreversionexperimenttreatmentlocalizations-_id_-placements.md): List the placements for an App Store version experiment treatment localization.
- [List the placement IDs for an App Store version experiment treatment localization](get-v1-appstoreversionexperimenttreatmentlocalizations-_id_-relationships-placements.md): Get a list of placement resource IDs for a specific App Store version experiment treatment localization.
