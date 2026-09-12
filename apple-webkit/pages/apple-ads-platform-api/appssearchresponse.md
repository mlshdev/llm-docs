> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appssearchresponse](https://developer.apple.com/documentation/apple-ads-platform-api/appssearchresponse)

# AppsSearchResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Apps search response envelope.

## Declaration

```
object AppsSearchResponse
```

## Properties

- `result` — `[AppInfo]` (required): Array of apps matching the search criteria. See [AppInfo](appinfo.md).
- `pagination` — `QueryPaginationResult`: Pagination metadata for the current result page. See [QueryPaginationResult](querypaginationresult.md).
- `error` — `Error`: Error details if the request failed. Absent on success. See [Error](error.md).

<a id="Discussion"></a>

## Discussion

The search apps endpoint returns `AppsSearchResponse` as the top-level envelope. It extends the standard [QueryResponse](queryresponse.md) envelope. To retrieve additional pages, use `pagination`.

<a id="Example"></a>

### Example

```json
{
  "result": [
    {
      "adamId": 123456789,
      "appName": "AwayFinder",
      "developerName": "AwayFinder Inc.",
      "countryOrRegionCodes": [
        "US",
        "GB",
        "CA",
        "AU"
      ]
    },
    {
      "adamId": 123456790,
      "appName": "AwayFinder Pro",
      "developerName": "AwayFinder Inc.",
      "countryOrRegionCodes": [
        "US"
      ]
    }
  ],
  "pagination": {
    "totalCount": 2,
    "offset": 0,
    "pageSize": 2
  }
}
```

## See Also

- [AppInfo](appinfo.md): A single app search result.
- [AppLocaleDetails](applocaledetails.md): Localized content for an app’s Default Product Page.
- [AppLocaleDetailsQueryResponse](applocaledetailsqueryresponse.md): Paginated response object for app locale detail queries.
- [AppSupportedLanguages](appsupportedlanguages.md): App supported and default languages for an App Store country or region.
- [AppSupportedLanguagesQueryResponse](appsupportedlanguagesqueryresponse.md): Paginated response object for the supported app languages query.
