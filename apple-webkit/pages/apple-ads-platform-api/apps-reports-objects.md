> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/apps-reports-objects](https://developer.apple.com/documentation/apple-ads-platform-api/apps-reports-objects)

# Apps Data Objects

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** API Collection  
**Availability:** Apple Ads Platform API 1.0+

Request, response, and metadata objects for Apps report endpoints.

<a id="Overview"></a>

## Overview

Apps reports cover the five `apps` reporting entities: campaigns, ad groups, ads, keywords, and search terms. Each entity has its own endpoint, request and response pair, and metadata schema, but all five share the same row shape and request structure described below.

The five Apps reporting entities each have a dedicated endpoint.

| Entity | Endpoint |
| --- | --- |
| Campaign | [Campaigns Report](get-app-campaign-reports.md) |
| Ad Group | [Ad Groups Report](get-app-ad-group-reports.md) |
| Ad | [Ads Report](get-app-ad-reports.md) |
| Keyword | [Keywords Report](get-app-keyword-reports.md) |
| Search Term | [Search Terms Report](get-app-search-term-reports.md) |

<a id="Shared-Object-Model"></a>

### Shared Object Model

Every Apps report request uses [AppsReportingRequest](appsreportingrequest.md) as its body. Every Apps report request must include a `campaignId` filter. Brands report requests don’t have this requirement. Each response row follows the same three-part shape:

- `metadata`: entity attributes (name, status, identifiers) plus any `groupBy` dimension value (`deviceClass`, `ageRange`, `gender`, `countryCode`, `adminArea`, `locality`, `storefront`, or `countryOrRegion`, with entity-level restrictions) applied to that row. Entity-specific metadata schemas define the fields available for each entity, including [AppsReportingCampaign](appsreportingcampaign.md), [AppsReportingAdGroup](appsreportingadgroup.md), [AppsReportingAd](appsreportingad.md), [ReportingKeyword](reportingkeyword.md), and [ReportingSearchTerm](reportingsearchterm.md). Ad metadata nests creative details in an [AppsReportingCreative](appsreportingcreative.md) object rather than a flat creative ID.
- `totalMetrics`: aggregate [AppsMetrics](appsmetrics.md) (or entity variant, for example, [AppsAdGroupMetrics](appsadgroupmetrics.md)) values for the row over the full requested date range.
- `granularMetrics`: an array of pure metrics objects, one per period in the requested `granularity`, with no dimension fields of their own. Only present when `granularity` is specified in the request.

Each endpoint’s response envelope, row, and summary objects follow a consistent per-entity naming pattern, for example [AppsCampaignReportResponse](appscampaignreportresponse.md), [AppsCampaignReportRow](appscampaignreportrow.md), and [AppsCampaignResultContainer](appscampaignresultcontainer.md) for campaigns, with equivalent objects for ad groups, ads, keywords, and search terms.

For a side-by-side comparison of Apps and Brands reporting differences (groupBy dimensions, options, creative metadata), see [Managing Reports](reports.md).

## Topics

- [AppsReportingRequest](appsreportingrequest.md): Request body for apps reporting queries.
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
- [AppsAdResultContainer](appsadresultcontainer.md): Wraps the array of Apps ad-level report rows along with a grand-total summary.
- [AppsKeywordReportResponse](appskeywordreportresponse.md): The top-level response envelope for apps keyword-level reports.
- [AppsKeywordReportRow](appskeywordreportrow.md): A single row in an apps keyword report, containing keyword metadata, performance metrics, and optional bid recommendation insights.
- [AppsKeywordReportSummary](appskeywordreportsummary.md): The grand-total metrics aggregated across all rows in an Apps keyword report.
- [AppsKeywordResultContainer](appskeywordresultcontainer.md): Wraps the array of Apps keyword report rows along with a grand-total summary.
- [AppsSearchTermReportResponse](appssearchtermreportresponse.md): The top-level response envelope for apps search term reports.
- [AppsSearchTermReportRow](appssearchtermreportrow.md): A single row in an Apps search term report, pairing search-term metadata with total and granular performance metrics.
- [AppsSearchTermReportSummary](appssearchtermreportsummary.md): The grand-total metrics aggregated across all rows in an Apps search term report.
- [AppsSearchTermResultContainer](appssearchtermresultcontainer.md): Wraps the array of Apps search term report rows along with a grand-total summary.
- [AppsMetrics](appsmetrics.md): Metrics for apps promoted object type.
- [AppsCampaignMetrics](appscampaignmetrics.md): Campaign-level metrics for apps, inheriting all properties from `AppsMetrics`.
- [AppsAdGroupMetrics](appsadgroupmetrics.md): Ad group-level metrics for apps, inheriting all properties from `AppsMetrics`.
- [AppsOptions](appsoptions.md): Reporting options for apps promoted object type reports.
- [AppsTargetingProjection](appstargetingprojection.md): Targeting projection for apps campaigns.

## See Also

### Reports

- [Managing Reports](reports.md): Retrieve performance data for campaigns, ad groups, ads, keywords, and search terms.
- [App Store Reports Endpoints](apps-reports-endpoints.md): Endpoints for retrieving App Store campaign, ad group, ad, keyword, and search term performance data.
- [Brands Reports Endpoints](brands-reports-endpoints.md): Retrieve performance data for Apple Maps campaigns, ad groups, ads, keywords, and search terms.
- [Brands Data Objects](brands-reports-objects.md): Explore the request, response, and metadata objects that Brands report endpoints use.
- [Shared Objects](reports-shared-objects.md): Shared request and response objects used across Apps and Brands report endpoints.
