> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appstoreversionlocalizations-_id_-appscreenshotsets](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstoreversionlocalizations-_id_-appscreenshotsets)

# List all app screenshot sets for an app store version localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

List all screenshot sets for a specific localization.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appStoreVersionLocalizations/{id}/appScreenshotSets
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the App Store version localization resource ID from the [List all app store version localizations for an app store version](get-v1-appstoreversions-_id_-appstoreversionlocalizations.md) response.

## Query Parameters

- `fields[appScreenshotSets]` — `[string]`: Additional fields to include for each app screenshot set resource returned by the response.
  **Allowed values:** `screenshotDisplayType`, `appStoreVersionLocalization`, `appCustomProductPageLocalization`, `appStoreVersionExperimentTreatmentLocalization`, `appScreenshots`
- `fields[appScreenshots]` — `[string]`: Additional fields to include for each app screenshot resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `imageAsset`, `assetToken`, `assetType`, `uploadOperations`, `assetDeliveryState`, `appScreenshotSet`
- `filter[screenshotDisplayType]` — `[string]`: Filter the returned app screenshot sets by screenshot display type.
  **Allowed values:** `APP_IPHONE_67`, `APP_IPHONE_61`, `APP_IPHONE_65`, `APP_IPHONE_58`, `APP_IPHONE_55`, `APP_IPHONE_47`, `APP_IPHONE_40`, `APP_IPHONE_35`, `APP_IPAD_PRO_3GEN_129`, `APP_IPAD_PRO_3GEN_11`, `APP_IPAD_PRO_129`, `APP_IPAD_105`, `APP_IPAD_97`, `APP_DESKTOP`, `APP_WATCH_ULTRA`, `APP_WATCH_SERIES_10`, `APP_WATCH_SERIES_7`, `APP_WATCH_SERIES_4`, `APP_WATCH_SERIES_3`, `APP_APPLE_TV`, `APP_APPLE_VISION_PRO`, `IMESSAGE_APP_IPHONE_67`, `IMESSAGE_APP_IPHONE_61`, `IMESSAGE_APP_IPHONE_65`, `IMESSAGE_APP_IPHONE_58`, `IMESSAGE_APP_IPHONE_55`, `IMESSAGE_APP_IPHONE_47`, `IMESSAGE_APP_IPHONE_40`, `IMESSAGE_APP_IPAD_PRO_3GEN_129`, `IMESSAGE_APP_IPAD_PRO_3GEN_11`, `IMESSAGE_APP_IPAD_PRO_129`, `IMESSAGE_APP_IPAD_105`, `IMESSAGE_APP_IPAD_97`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appStoreVersionLocalization`, `appCustomProductPageLocalization`, `appStoreVersionExperimentTreatmentLocalization`, `appScreenshots`
- `limit` — `integer`: The maximum number of app screenshot set resources to return.
  **Maximum:** `200`
- `limit[appScreenshots]` — `integer`: The maximum number of related app screenshot resources to return.
  **Maximum:** `50`
- `filter[appStoreVersionExperimentTreatmentLocalization]` — `[string]`: Filter the returned app screenshot sets by App Store version experiment treatment localization.
- `filter[appCustomProductPageLocalization]` — `[string]`: Filter the returned app screenshot sets by app custom product page localization.
- `fields[appCustomProductPageLocalizations]` — `[string]`: Additional fields to include for each app custom product page localization resource returned by the response.
  **Allowed values:** `locale`, `promotionalText`, `appCustomProductPageVersion`, `appScreenshotSets`, `appPreviewSets`, `searchKeywords`
- `fields[appStoreVersionExperimentTreatmentLocalizations]` — `[string]`: Additional fields to include for each App Store version experiment treatment localization resource returned by the response.
  **Allowed values:** `locale`, `appStoreVersionExperimentTreatment`, `appScreenshotSets`, `appPreviewSets`
- `fields[appStoreVersionLocalizations]` — `[string]`: Additional fields to include for each App Store version localization resource returned by the response.
  **Allowed values:** `description`, `locale`, `keywords`, `marketingUrl`, `promotionalText`, `supportUrl`, `whatsNew`, `appStoreVersion`, `appScreenshotSets`, `appPreviewSets`, `searchKeywords`

## Response Codes

- `200` OK — `AppScreenshotSetsResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Information from a Localization

- [List all app preview sets for an app store version localization](get-v1-appstoreversionlocalizations-_id_-apppreviewsets.md): List all app preview sets for a specific localization.
- [List preview set IDs for an App Store version localization](get-v1-appstoreversionlocalizations-_id_-relationships-apppreviewsets.md)
- [List screenshot set IDs for an App Store version localization](get-v1-appstoreversionlocalizations-_id_-relationships-appscreenshotsets.md)
