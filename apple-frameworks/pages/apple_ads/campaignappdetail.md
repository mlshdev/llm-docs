> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/campaignappdetail

# CampaignAppDetail

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+ (deprecated in 5.2)

The app data to fetch from campaign-level reports.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object CampaignAppDetail
```

## Properties

- `adamId` — `int64`: Displays as `app:{adamId}` in [ReportingCampaign](reportingcampaign.md).

  Each time you use an `adamId` in the API, it must match the `adamId` in your campaign. Use [Get a Campaign](get-a-campaign.md) or [Get all Campaigns](get-all-campaigns.md) to obtain your `adamId` and correlate it to the correct campaign.
- `appName` — `string`: The [App Store Connect](https://appstoreconnect.apple.com) app identifier, which displays as `app:{appName}` in [ReportingCampaign](reportingcampaign.md).

## See Also

### Reports Request and Response Objects

- [ReportingRequest](reportingrequest.md): Deprecated. The report request body.
- [ReportingResponseBody](reportingresponsebody.md): Deprecated. The container object for the report response body.
- [ReportingResponse](reportingresponse.md): Deprecated. The container object of report metrics.
- [ReportingDataResponse](reportingdataresponse.md): Deprecated. The total metrics for a report.
- [GrandTotalsRow](grandtotalsrow.md): Deprecated. The summary of cumulative metrics.
- [SpendRow](spendrow.md): Deprecated. The reporting response metrics.
- [ExtendedSpendRow](extendedspendrow.md): Deprecated. The descriptions of metrics with dates.
- [Row](row.md): Deprecated. The report metrics by time granularity.
- [ReportingCampaign](reportingcampaign.md): Deprecated. The response to a request to fetch campaign-level reports.
- [ReportingAdGroup](reportingadgroup.md): Deprecated. The response to a request to fetch ad group-level reports.
- [ReportingKeyword](reportingkeyword.md): Deprecated. The response to a request to fetch keyword-level reports.
- [ReportingSearchTerm](reportingsearchterm.md): Deprecated. The response to a request to fetch search term-level reports.
- [ReportingAd](reportingad.md): Deprecated. The response to a request to fetch ad-level reports.
- [InsightsObject](insightsobject.md): Deprecated. The container object for bid recommendations.
- [KeywordInsights](keywordinsights.md): Deprecated. The object that contains bid recommendations.
