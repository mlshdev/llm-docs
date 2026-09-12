> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appinfo](https://developer.apple.com/documentation/apple-ads-platform-api/appinfo)

# AppInfo

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A single app search result.

## Declaration

```
object AppInfo
```

## Properties

- `adamId` — `int64` (required): The Adam ID of the app. Use this value when creating campaigns targeting this app.
- `appName` — `string` (required): The app display name as shown in the App Store.
- `developerName` — `string` (required): The developer or publisher name.
- `countryOrRegionCodes` — `[string]` (required): ISO 3166-1 alpha-2 codes for all App Store countries or regions where this app is available.

<a id="Discussion"></a>

## Discussion

The `AppInfo` object represents one app returned from the search apps endpoint. It includes the app’s Adam ID, display name, developer name, and the country or region codes where the app is available.

<a id="Example"></a>

### Example

```json
{
  "adamId": 123456789,
  "appName": "AwayFinder",
  "developerName": "AwayFinder Inc.",
  "countryOrRegionCodes": [
    "US",
    "CA",
    "GB"
  ]
}
```

## See Also

- [AppLocaleDetails](applocaledetails.md): Localized content for an app’s Default Product Page.
- [AppsSearchResponse](appssearchresponse.md): Apps search response envelope.
- [AppLocaleDetailsQueryResponse](applocaledetailsqueryresponse.md): Paginated response object for app locale detail queries.
- [AppSupportedLanguages](appsupportedlanguages.md): App supported and default languages for an App Store country or region.
- [AppSupportedLanguagesQueryResponse](appsupportedlanguagesqueryresponse.md): Paginated response object for the supported app languages query.
