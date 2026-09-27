> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/keywordbidrecommendation

# KeywordBidRecommendation

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 3.0+ (deprecated in 5.2)

The suggested bid amount for a keyword.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object KeywordBidRecommendation
```

## Properties

- `suggestedBidAmount` — `Money`: An indicator that varies over time to help you incrementally increase the likelihood of your ad showing in searches in the App Store. A `suggestedBidAmount` isn’t a representation of a bid floor or ceiling.  A `suggestedBidAmount` is based on various factors, including, but not limited to, historical data related to past performance and recommendations. Actual outcomes, including changes in spend and average CPA, may vary.

## Mentioned In

- [Apple Ads Campaign Management API 4](apple-search-ads-campaign-management-api-4.md)

<a id="overview"></a>

## Overview

For keywords in Maximize Conversions campaigns, the `suggestedBidAmount` field is returned as `null`.

<a id="Discussion"></a>

## Discussion

In [Apple Ads Campaign Management API 5](apple-search-ads-campaign-management-api-5.md), the `suggestedBidAmount` field  replaces the deprecated `bidMin` and `bidMax` fields.

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
