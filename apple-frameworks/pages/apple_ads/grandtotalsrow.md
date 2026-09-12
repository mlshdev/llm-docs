> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/grandtotalsrow](https://developer.apple.com/documentation/apple_ads/grandtotalsrow)

# GrandTotalsRow

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The summary of cumulative metrics.

## Declaration

```
object GrandTotalsRow
```

## Properties

- `other` — `boolean`: The impressions that return in reports when there are fewer than 100 demographic dimensions, and fewer than 10 search terms. If `Other` is `true`, the corresponding dimensions are `null`.
- `total` — `SpendRow`: The tap, conversion, and monetary totals ([SpendRow](spendrow.md)) in the response. This is the same as [ExtendedSpendRow](extendedspendrow.md) except it doesn’t include the `date` attribute.

## See Also

### Reports Request and Response Objects

- [ReportingRequest](reportingrequest.md): The report request body.
- [ReportingResponseBody](reportingresponsebody.md): The container object for the report response body.
- [ReportingResponse](reportingresponse.md): The container object of report metrics.
- [ReportingDataResponse](reportingdataresponse.md): The total metrics for a report.
- [SpendRow](spendrow.md): The reporting response metrics.
- [ExtendedSpendRow](extendedspendrow.md): The descriptions of metrics with dates.
- [Row](row.md): The report metrics by time granularity.
- [ReportingCampaign](reportingcampaign.md): The response to a request to fetch campaign-level reports.
- [ReportingAdGroup](reportingadgroup.md): The response to a request to fetch ad group-level reports.
- [ReportingKeyword](reportingkeyword.md): The response to a request to fetch keyword-level reports.
- [ReportingSearchTerm](reportingsearchterm.md): The response to a request to fetch search term-level reports.
- [ReportingAd](reportingad.md): The response to a request to fetch ad-level reports.
- [CampaignAppDetail](campaignappdetail.md): The app data to fetch from campaign-level reports.
- [InsightsObject](insightsobject.md): The container object for bid recommendations.
- [KeywordInsights](keywordinsights.md): The object that contains bid recommendations.
