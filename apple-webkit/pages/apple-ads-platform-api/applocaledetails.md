> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/applocaledetails](https://developer.apple.com/documentation/apple-ads-platform-api/applocaledetails)

# AppLocaleDetails

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Localized content for an app’s Default Product Page.

## Declaration

```
object AppLocaleDetails
```

## Properties

- `adamId` — `int64`: App Store identifier for the app.
- `language` — `string`: Language identifier (for example, `"en"`).
- `languageCode` — `string`: BCP-47 language code (for example, `"en-US"`).
- `isPrimaryLocale` — `boolean`: True if this locale’s `languageCode` matches the app’s primary language.
- `appName` — `string`: Localized app name.
- `subTitle` — `string`: Localized app subtitle.
- `promotionalText` — `string`: Promotional text for this locale (max 170 characters).
- `shortDescription` — `string`: Short description for this locale (max 4000 characters).
- `deviceClasses` — `[string]`: Device families with available assets for this locale.
  **Allowed values:** `IPHONE`, `IPAD`
- `assetsByDevice` — `AppLocaleDetails.AssetsByDevice`: Map of device type (for example, `"iphone_6_5"`) to a `DeviceAssetGroup` containing the ordered list of asset IDs and any fallback device references.

<a id="Discussion"></a>

## Discussion

The `AppLocaleDetails` object represents the localized metadata and asset groupings for a single locale of an app’s Default Product Page (DPP). The `language` (for example, `"en"`) and `languageCode` (for example, `"en-US"`) fields identify each locale entry.

<a id="Example"></a>

### Example

```json
{
  "adamId": 324684580,
  "language": "en",
  "languageCode": "en-US",
  "isPrimaryLocale": true,
  "appName": "AwayFinder - Travel Planner",
  "subTitle": "Discover new destinations",
  "promotionalText": "Get 3 months of Premium free",
  "shortDescription": "Plan trips and discover destinations with AwayFinder",
  "deviceClasses": [
    "IPHONE",
    "IPAD"
  ],
  "assetsByDevice": {
    "iphone_6_5": {
      "appPreviewDeviceFallBackDevices": [
        "iphone6",
        "iphone5"
      ],
      "assets": [
        {
          "assetId": "550e8400-e29b-41d4-a716-446655440000"
        },
        {
          "assetId": "660f9511-f3ac-52e5-b827-557766551111"
        }
      ]
    }
  }
}
```

## Topics

### Dictionaries

- [AppLocaleDetails.AssetsByDevice](applocaledetails/assetsbydevice-data.dictionary.md): Map of device type to a `DeviceAssetGroup` containing the ordered list of asset IDs and any fallback device references.

## See Also

- [AppInfo](appinfo.md): A single app search result.
- [AppsSearchResponse](appssearchresponse.md): Apps search response envelope.
- [AppLocaleDetailsQueryResponse](applocaledetailsqueryresponse.md): Paginated response object for app locale detail queries.
- [AppSupportedLanguages](appsupportedlanguages.md): App supported and default languages for an App Store country or region.
- [AppSupportedLanguagesQueryResponse](appsupportedlanguagesqueryresponse.md): Paginated response object for the supported app languages query.
