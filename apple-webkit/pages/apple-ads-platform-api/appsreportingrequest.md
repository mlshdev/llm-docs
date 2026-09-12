> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appsreportingrequest](https://developer.apple.com/documentation/apple-ads-platform-api/appsreportingrequest)

# AppsReportingRequest

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Request body for apps reporting queries.

## Declaration

```
object AppsReportingRequest
```

## Properties

- `pagination` — `RequestPagination`: Pagination settings for the report results. See [RequestPagination](requestpagination.md) for details.
- `sorting` — `[Sorting]`: Sort entities in ascending or descending order. The default behavior is to sort by ID, ascending. See [Sorting](sorting.md) for details.
- `filters` — `[Filter]`: Filter field conditions for the report. `campaignId` is a required filter for every apps report request. See [Filter](filter.md) for details.
- `fields` — `[string]`: A list of field names to return in the response. If you omit this field, the response includes all fields.
- `groupBy` — `[string]`: Groups responses by selected dimensions. Supported values for apps: `deviceClass`, `ageRange`, `gender`, `countryCode`, `adminArea`, `locality`, `storefront`, `countryOrRegion`. Note: `KEYWORD` and `SEARCHTERM` entities exclude `ageRange`, `gender`, `countryCode`, `adminArea`, `locality`. The `AD` entity also excludes `deviceClass`, `ageRange`, `gender`, `countryCode`, `adminArea`, `locality`, supporting only `storefront` and `countryOrRegion`.
  **Allowed values:** `deviceClass`, `ageRange`, `gender`, `countryCode`, `adminArea`, `locality`, `storefront`, `countryOrRegion`
- `timeRange` — `TimeRange`: The date range, timezone, and granularity for report data. Defines the start and end dates for the reporting period. See [TimeRange](timerange.md) for details.
- `options` — `AppsOptions`: Options to include additional rows in the report (for example, GRAND_TOTAL, EMPTY_METRICS). You can’t combine `EMPTY_METRICS` with `groupBy`. See [AppsOptions](appsoptions.md) for details.

<a id="Discussion"></a>

## Discussion

The `AppsReportingRequest` object is the request body for all apps entity-level report endpoints (campaign, ad group, ad, keyword, search term).

<a id="Example"></a>

### Example

```json
{
  "pagination": {
    "offset": 0,
    "pageSize": 20
  },
  "sorting": [
    {
      "field": "localSpend",
      "order": "DESC"
    }
  ],
  "filters": [
    {
      "field": "campaignId",
      "operator": "EQUALS",
      "value": [
        "444555666"
      ]
    }
  ],
  "fields": [
    "impressions",
    "taps",
    "localSpend"
  ],
  "groupBy": [
    "countryOrRegion"
  ],
  "timeRange": {
    "start": "2025-01-01",
    "end": "2025-01-31",
    "timeZone": "ORTZ",
    "granularity": "DAILY"
  },
  "options": {
    "includeRows": ["GRAND_TOTAL"]
  }
}
```

## See Also

- [AppsReportingCampaign](appsreportingcampaign.md): Campaign metadata for apps report rows.
- [AppsReportingAdGroup](appsreportingadgroup.md): Ad group metadata for apps report rows.
- [AppsReportingAd](appsreportingad.md): Ad metadata for apps report rows.
- [AppsReportingCreative](appsreportingcreative.md): Creative metadata for apps ads.
- [AppsCampaignReportResponse](appscampaignreportresponse.md): The top-level response envelope for apps campaign-level reports.
- [AppsCampaignReportRow](appscampaignreportrow.md): A single row in an apps campaign report, containing campaign metadata, total metrics, and optional granular time-series metrics.
- [AppsCampaignReportSummary](appscampaignreportsummary.md): The grand-total metrics aggregated across all rows in an Apps campaign report.
- [AppsCampaignResultContainer](appscampaignresultcontainer.md): Wraps the array of Apps campaign report rows along with a grand-total summary.
- [AppsAdGroupReportResponse](appsadgroupreportresponse.md): The top-level response envelope for apps ad group reports.
- [AppsAdGroupReportRow](appsadgroupreportrow.md): A single row in an Apps ad group report, containing ad group metadata, total metrics, and optional granular time-series metrics.
- [AppsAdGroupReportSummary](appsadgroupreportsummary.md): The grand-total metrics aggregated across all rows in an Apps ad group report.
- [AppsAdGroupResultContainer](appsadgroupresultcontainer.md): Wraps the array of Apps ad group report rows along with a grand-total summary.
- [AppsAdReportResponse](appsadreportresponse.md): The top-level response envelope for apps ad-level reports.
- [AppsAdReportRow](appsadreportrow.md): A single row in an Apps ad-level report, containing ad metadata, total metrics, and optional granular time-series metrics.
- [AppsAdReportSummary](appsadreportsummary.md): The grand-total metrics aggregated across all rows in an Apps ad-level report.
