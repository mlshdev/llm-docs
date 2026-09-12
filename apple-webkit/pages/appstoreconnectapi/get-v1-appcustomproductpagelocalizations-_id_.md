> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appcustomproductpagelocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appcustomproductpagelocalizations-_id_)

# Read Custom Product Page Localization Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+

Get information about a specific app custom product page localization.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appCustomProductPageLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app custom product page localization resource ID from the [List Custom Product Pages Localizations](get-v1-appcustomproductpageversions-_id_-appcustomproductpagelocalizations.md) response.

## Query Parameters

- `fields[appCustomProductPageLocalizations]` — `[string]`: Additional fields to include for each app custom product page localization resource returned by the response.
  **Allowed values:** `locale`, `promotionalText`, `appCustomProductPageVersion`, `appScreenshotSets`, `appPreviewSets`, `searchKeywords`
- `fields[appPreviewSets]` — `[string]`: Additional fields to include for each app preview set resource returned by the response.
  **Allowed values:** `previewType`, `appStoreVersionLocalization`, `appCustomProductPageLocalization`, `appStoreVersionExperimentTreatmentLocalization`, `appPreviews`
- `fields[appScreenshotSets]` — `[string]`: Additional fields to include for each app screenshot set resource returned by the response.
  **Allowed values:** `screenshotDisplayType`, `appStoreVersionLocalization`, `appCustomProductPageLocalization`, `appStoreVersionExperimentTreatmentLocalization`, `appScreenshots`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appCustomProductPageVersion`, `appScreenshotSets`, `appPreviewSets`, `searchKeywords`
- `limit[appPreviewSets]` — `integer`: The maximum number of related app preview sets resources to return.
  **Maximum:** `50`
- `limit[appScreenshotSets]` — `integer`: The maximum number of related app screenshot sets resources to return.
  **Maximum:** `50`
- `limit[searchKeywords]` — `integer`: The maximum number of related search keywords resources to return.
  **Maximum:** `50`
- `fields[appCustomProductPageVersions]` — `[string]`: **Allowed values:** `version`, `state`, `deepLink`, `appCustomProductPage`, `appCustomProductPageLocalizations`

## Response Codes

- `200` OK — `AppCustomProductPageLocalizationResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Other**

```not specified
https://api.appstoreconnect.apple.com/v1/appCustomProductPageLocalizations/dad51248-3c38-4f19-a814-3c4f6da719dd
```

**Other**

```json
{
  "data": {
    "type": "appCustomProductPageLocalizations",
    "id": "dad51248-3c38-4f19-a814-3c4f6da719dd",
    "attributes": {
      "locale": "en-US",
      "promotionalText": "This app will inspire!"
    },
    "relationships": {
      "appScreenshotSets": {
        "links": {
          "self": "https://api.appstoreconnect.apple.com/v1/appCustomProductPageLocalizations/dad51248-3c38-4f19-a814-3c4f6da719dd/relationships/appScreenshotSets",
          "related": "https://api.appstoreconnect.apple.com/v1/appCustomProductPageLocalizations/dad51248-3c38-4f19-a814-3c4f6da719dd/appScreenshotSets"
        }
      },
      "appPreviewSets": {
        "links": {
          "self": "https://api.appstoreconnect.apple.com/v1/appCustomProductPageLocalizations/dad51248-3c38-4f19-a814-3c4f6da719dd/relationships/appPreviewSets",
          "related": "https://api.appstoreconnect.apple.com/v1/appCustomProductPageLocalizations/dad51248-3c38-4f19-a814-3c4f6da719dd/appPreviewSets"
        }
      }
    },
    "links": {
      "self": "https://api.appstoreconnect.apple.com/v1/appCustomProductPageLocalizations/dad51248-3c38-4f19-a814-3c4f6da719dd"
    }
  },
  "links": {
    "self": "https://api.appstoreconnect.apple.com/v1/appCustomProductPageLocalizations/dad51248-3c38-4f19-a814-3c4f6da719dd"
  }
}
```

## See Also

### Related Documentation

- [Create a Custom Product Page Localization](post-v1-appcustomproductpagelocalizations.md): Add a localization for your app custom product page.
- [Modify Custom Product Page Localization Information](patch-v1-appcustomproductpagelocalizations-_id_.md): Update the promotional text for an app custom product page localization.
- [List Custom Product Pages Localizations](get-v1-appcustomproductpageversions-_id_-appcustomproductpagelocalizations.md): List all localizations for an app custom product page.
- [List App Preview Sets for a Custom Product Page Localization](get-v1-appcustomproductpagelocalizations-_id_-apppreviewsets.md): List the app preview sets for a specific custom product page localization.
- [List App Screenshot Sets for a Custom Product Page Localization](get-v1-appcustomproductpagelocalizations-_id_-appscreenshotsets.md): List the app screenshot sets for a specific custom product page localization.
- [List app preview set IDs for a custom product page localization](get-v1-appcustomproductpagelocalizations-_id_-relationships-apppreviewsets.md): List the app preview set IDs for a specific custom product page localization.
- [List app screenshot sets IDs for a custom product page localization](get-v1-appcustomproductpagelocalizations-_id_-relationships-appscreenshotsets.md): List the app screenshot set IDs for a specific custom product page localization.
- [Delete an App Custom Product Page Localization](delete-v1-appcustomproductpagelocalizations-_id_.md): Delete localized metadata that you configured for a custom product page.

### Managing localizations

- [List Custom Product Pages Localizations](get-v1-appcustomproductpageversions-_id_-appcustomproductpagelocalizations.md): List all localizations for an app custom product page.
- [Create a Custom Product Page Localization](post-v1-appcustomproductpagelocalizations.md): Add a localization for your app custom product page.
- [Modify Custom Product Page Localization Information](patch-v1-appcustomproductpagelocalizations-_id_.md): Update the promotional text for an app custom product page localization.
- [Delete an App Custom Product Page Localization](delete-v1-appcustomproductpagelocalizations-_id_.md): Delete localized metadata that you configured for a custom product page.
