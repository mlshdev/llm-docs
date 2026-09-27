> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/keywordinsights

# KeywordInsights

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 3.0+ (deprecated in 5.2)

The object that contains bid recommendations.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object KeywordInsights
```

## Properties

- `bidRecommendation` — `KeywordBidRecommendation`: A bid recommendation for a keyword.

<a id="Discussion"></a>

## Discussion

A `bidRecommendation` helps you apply your bid strategy to exact match keywords and similar keywords in a broad match. Use `bidRecommendation` to optimize campaign performance through your Search Match discovery campaigns. For more information, see the Build a Campaign Keywords Strategy section in [Ad Groups](ad-groups.md).

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
- [CampaignAppDetail](campaignappdetail.md): Deprecated. The app data to fetch from campaign-level reports.
- [InsightsObject](insightsobject.md): Deprecated. The container object for bid recommendations.
