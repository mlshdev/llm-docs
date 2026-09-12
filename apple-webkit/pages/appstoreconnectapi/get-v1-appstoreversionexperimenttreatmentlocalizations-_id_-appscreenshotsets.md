> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appstoreversionexperimenttreatmentlocalizations-_id_-appscreenshotsets](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstoreversionexperimenttreatmentlocalizations-_id_-appscreenshotsets)

# List all screenshot sets for an experiment treatment localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+

Get a list of screenshot sets for a specific App Store version experiment treatment localization.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appStoreVersionExperimentTreatmentLocalizations/{id}/appScreenshotSets
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the App Store version experiment treatment localization resource ID from the [List all localizations for an app store version experiment treatment](get-v1-appstoreversionexperimenttreatments-_id_-appstoreversionexperimenttreatmentlocalizations.md) response.

## Query Parameters

- `fields[appScreenshotSets]` — `[string]`: Additional fields to include for each app screenshot set resource returned by the response.
  **Allowed values:** `screenshotDisplayType`, `appStoreVersionLocalization`, `appCustomProductPageLocalization`, `appStoreVersionExperimentTreatmentLocalization`, `appScreenshots`
- `fields[appScreenshots]` — `[string]`: Additional fields to include for each app screenshot resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `imageAsset`, `assetToken`, `assetType`, `uploadOperations`, `assetDeliveryState`, `appScreenshotSet`
- `filter[appCustomProductPageLocalization]` — `[string]`: Filter the returned app screenshot sets by app custom product page localization.
- `filter[appStoreVersionLocalization]` — `[string]`: Filter the returned app screenshot sets by App Store version localization.
- `filter[screenshotDisplayType]` — `[string]`: Filter the returned app screenshot sets by screenshot display type.
  **Allowed values:** `APP_IPHONE_67`, `APP_IPHONE_61`, `APP_IPHONE_65`, `APP_IPHONE_58`, `APP_IPHONE_55`, `APP_IPHONE_47`, `APP_IPHONE_40`, `APP_IPHONE_35`, `APP_IPAD_PRO_3GEN_129`, `APP_IPAD_PRO_3GEN_11`, `APP_IPAD_PRO_129`, `APP_IPAD_105`, `APP_IPAD_97`, `APP_DESKTOP`, `APP_WATCH_ULTRA`, `APP_WATCH_SERIES_10`, `APP_WATCH_SERIES_7`, `APP_WATCH_SERIES_4`, `APP_WATCH_SERIES_3`, `APP_APPLE_TV`, `APP_APPLE_VISION_PRO`, `IMESSAGE_APP_IPHONE_67`, `IMESSAGE_APP_IPHONE_61`, `IMESSAGE_APP_IPHONE_65`, `IMESSAGE_APP_IPHONE_58`, `IMESSAGE_APP_IPHONE_55`, `IMESSAGE_APP_IPHONE_47`, `IMESSAGE_APP_IPHONE_40`, `IMESSAGE_APP_IPAD_PRO_3GEN_129`, `IMESSAGE_APP_IPAD_PRO_3GEN_11`, `IMESSAGE_APP_IPAD_PRO_129`, `IMESSAGE_APP_IPAD_105`, `IMESSAGE_APP_IPAD_97`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appStoreVersionLocalization`, `appCustomProductPageLocalization`, `appStoreVersionExperimentTreatmentLocalization`, `appScreenshots`
- `limit` — `integer`: The maximum number of app screenshot set resources to return.
  **Maximum:** `200`
- `limit[appScreenshots]` — `integer`: The maximum number of related app screenshot resources to return.
  **Maximum:** `50`
- `fields[appCustomProductPageLocalizations]` — `[string]`: Additional fields to include for each app custom product page localization resource returned by the response.
  **Allowed values:** `locale`, `promotionalText`, `appCustomProductPageVersion`, `appScreenshotSets`, `appPreviewSets`, `searchKeywords`
- `fields[appStoreVersionExperimentTreatmentLocalizations]` — `[string]`: Additional fields to include for each App Store version experiment treatment localization resource returned by the response.
  **Allowed values:** `locale`, `appStoreVersionExperimentTreatment`, `appScreenshotSets`, `appPreviewSets`
- `fields[appStoreVersionLocalizations]` — `[string]`: Additional fields to include for each App Store version localization resource returned by the response.
  **Allowed values:** `description`, `locale`, `keywords`, `marketingUrl`, `promotionalText`, `supportUrl`, `whatsNew`, `appStoreVersion`, `appScreenshotSets`, `appPreviewSets`, `searchKeywords`

## Response Codes

- `200` OK — `AppScreenshotSetsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Read app store version experiment treatment localization information](get-v1-appstoreversionexperimenttreatmentlocalizations-_id_.md): Get information about a specific App Store version experiment treatment localization.
- [List all preview sets for an experiment treatment localization](get-v1-appstoreversionexperimenttreatmentlocalizations-_id_-apppreviewsets.md): Get a list of preview sets for a specific App Store version experiment treatment localization.
- [List preview set IDs for an App Store version experiment treatment localization](get-v1-appstoreversionexperimenttreatmentlocalizations-_id_-relationships-apppreviewsets.md)
- [List screenshot set IDs for an App Store version experiment treatment localization](get-v1-appstoreversionexperimenttreatmentlocalizations-_id_-relationships-appscreenshotsets.md)
- [Create an app store version experiment treatment localization](post-v1-appstoreversionexperimenttreatmentlocalizations.md): Add a new localization for an App Store version experiment treatment.
- [Delete a treatment localization for an app store version experiment](delete-v1-appstoreversionexperimenttreatmentlocalizations-_id_.md): Delete localized metatdata that you configured for an App Store Version experiment treatment.
