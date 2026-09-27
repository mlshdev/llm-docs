> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/reports

# Reports

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** API Collection

Generate performance metrics for your campaigns.

<a id="overview"></a>

## Overview

> **Deprecated**

> The Apple Ads Campaign Management API is deprecated and will be sunset on January 26, 2027. Use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api) instead.

You can fetch reports for campaigns, ad groups, targeting keywords, search terms, and creative sets. See the [ReportingRequest](reportingrequest.md) object for guidance for setting up your report request payloads.

## Topics

### Reports Endpoints

- [Get Campaign-Level Reports](get-campaign-level-reports.md): Deprecated. Fetches reports for campaigns.
- [Get Ad Group-Level Reports](get-ad-group-level-reports.md): Deprecated. Fetches reports for ad groups within a campaign.
- [Get Keyword-Level Reports](get-keyword-level-reports.md): Deprecated. Fetches reports for targeting keywords within a campaign.
- [Get Keyword-Level within Ad Group Reports](get-keyword-level-within-ad-group-reports.md): Deprecated. Fetches reports for targeting keywords within an ad group.
- [Get Search Term-Level Reports](get-search-term-level-reports.md): Deprecated. Fetches reports for search terms within a campaign.
- [Get Search Term-Level within Ad Group Reports](get-search-term-level-within-ad-group-reports.md): Deprecated. Fetches reports for search terms within an ad group.
- [Get Ad-Level Reports](get-ad-level-reports.md): Deprecated. Fetches ad performance data within a campaign.

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
- [KeywordInsights](keywordinsights.md): Deprecated. The object that contains bid recommendations.
- [KeywordBidRecommendation](keywordbidrecommendation.md): Deprecated. The suggested bid amount for a keyword.

### Data Types

- [MetaDataObject](metadataobject.md): Deprecated. The report response objects.

## See Also

### Reports

- [Impression Share Reports](impression-share-reports.md): Obtain metrics with impression share insights.
