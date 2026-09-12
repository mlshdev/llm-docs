> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brands-reports-objects](https://developer.apple.com/documentation/apple-ads-platform-api/brands-reports-objects)

# Brands Data Objects

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** API Collection  
**Availability:** Apple Ads Platform API 1.0+

Explore the request, response, and metadata objects that Brands report endpoints use.

<a id="Overview"></a>

## Overview

Brands reports cover the five `business-brands` reporting entities: campaigns, ad groups, ads, keywords, and search terms. Each entity has its own endpoint, request and response pair, and metadata schema, but all five share the same row shape and request structure described below.

The five Brands reporting entities each have a dedicated endpoint.

| Entity | Endpoint |
| --- | --- |
| Campaign | [Campaigns Report (Brands)](get-brand-campaign-reports.md) |
| Ad Group | [Ad Groups Report (Brands)](get-brand-ad-group-reports.md) |
| Ad | [Ads Report (Brands)](get-brand-ad-reports.md) |
| Keyword | [Keywords Report (Brands)](get-brand-keyword-reports.md) |
| Search Term | [Search Terms Report (Brands)](get-brand-search-term-reports.md) |

<a id="Shared-Object-Model"></a>

### Shared Object Model

Every Brands report request uses [BrandsReportingRequest](brandsreportingrequest.md) as its body. Each response row follows the same three-part shape:

- `metadata`: entity attributes (name, status, identifiers) plus any `groupBy` dimension value (`deviceClass`, `locationId`, or `supplyPlacement`) applied to that row. Entity-specific metadata schemas define the fields available for each entity, including [BrandsReportingCampaign](brandsreportingcampaign.md), [BrandsReportingAdGroup](brandsreportingadgroup.md), [BrandsReportingAd](brandsreportingad.md), [BrandsReportingKeyword](brandsreportingkeyword.md), and [BrandsReportingSearchTerm](brandsreportingsearchterm.md). Ad metadata nests creative details in a [BrandsReportingCreative](brandsreportingcreative.md) object rather than a flat creative ID.
- `totalMetrics`: aggregate [BrandsMetrics](brandsmetrics.md) (or entity variant, for example, [BrandsAdGroupMetrics](brandsadgroupmetrics.md)) values for the row over the full requested date range.
- `granularMetrics`: an array of pure metrics objects, one per period in the requested `granularity`, with no dimension fields of their own. Only present when `granularity` is specified in the request.

Action-count fields (`actions`, `firstActions`, `getDirections`, `tapURL`, `call`, `share`, `getTheApp`, `galleryEngagement`) are objects keyed by attribution type (for example `{"tap": 170}`), not bare integers, in both `totalMetrics` and `granularMetrics`.

Each endpoint’s response envelope, row, and summary objects follow a consistent per-entity naming pattern, for example [BrandsCampaignReportResponse](brandscampaignreportresponse.md), [BrandsCampaignReportRow](brandscampaignreportrow.md), and [BrandsCampaignResultContainer](brandscampaignresultcontainer.md) for campaigns, with equivalent objects for ad groups, ads, keywords, and search terms.

For a side-by-side comparison of Brands and Apps reporting differences (groupBy dimensions, options, creative metadata), see [Managing Reports](reports.md).

## Topics

- [BrandsReportingRequest](brandsreportingrequest.md): Request body for brands reporting queries.
- [BrandsReportingCampaign](brandsreportingcampaign.md): Campaign metadata for Apple Maps report rows.
- [BrandsReportingAdGroup](brandsreportingadgroup.md): Ad group metadata for brands report rows.
- [BrandsReportingAd](brandsreportingad.md): Ad metadata for brands report rows.
- [BrandsReportingCreative](brandsreportingcreative.md): Creative metadata for brands ads.
- [BrandsReportingKeyword](brandsreportingkeyword.md): Keyword metadata for brands report rows, extending the base reporting keyword with brands-only internal fields.
- [BrandsReportingSearchTerm](brandsreportingsearchterm.md): Search term metadata for brands report rows, extending the base reporting search term with brands-only internal fields.
- [BrandsCampaignReportResponse](brandscampaignreportresponse.md): The top-level response envelope for Apple Maps campaign-level reports.
- [BrandsCampaignReportRow](brandscampaignreportrow.md): A single row in an Apple Maps campaign report, containing campaign metadata, total metrics, and optional granular time-series metrics.
- [BrandsCampaignReportSummary](brandscampaignreportsummary.md): The grand-total metrics aggregated across all rows in an Apple Maps campaign report.
- [BrandsCampaignResultContainer](brandscampaignresultcontainer.md): Wraps the array of Apple Maps campaign report rows along with a grand-total summary.
- [BrandsAdGroupReportResponse](brandsadgroupreportresponse.md): The top-level response envelope for brands ad group reports.
- [BrandsAdGroupReportRow](brandsadgroupreportrow.md): A single row in a Brands (Apple Maps) ad group report, pairing ad group metadata with total and granular performance metrics.
- [BrandsAdGroupReportSummary](brandsadgroupreportsummary.md): The grand-total metrics aggregated across all rows in a Brands ad group report.
- [BrandsAdGroupResultContainer](brandsadgroupresultcontainer.md): Wraps the array of Brands ad group report rows along with a grand-total summary.
- [BrandsAdReportResponse](brandsadreportresponse.md): The top-level response envelope for brands ad-level reports.
- [BrandsAdReportRow](brandsadreportrow.md): A single row in a Brands (Apple Maps) ad-level report, pairing ad metadata with total and granular performance metrics.
- [BrandsAdReportSummary](brandsadreportsummary.md): The grand-total metrics aggregated across all rows in a Brands ad-level report.
- [BrandsAdResultContainer](brandsadresultcontainer.md): Wraps the array of Brands ad-level report rows along with a grand-total summary.
- [BrandsKeywordReportResponse](brandskeywordreportresponse.md): The top-level response envelope for brands keyword-level reports.
- [BrandsKeywordReportRow](brandskeywordreportrow.md): A single row in a Brands keyword report response.
- [BrandsKeywordReportSummary](brandskeywordreportsummary.md): The grand-total metrics aggregated across all rows in a Brands keyword report.
- [BrandsKeywordResultContainer](brandskeywordresultcontainer.md): Wraps the array of Brands keyword report rows along with a grand-total summary.
- [BrandsSearchTermReportResponse](brandssearchtermreportresponse.md): The top-level response envelope for brands search term reports.
- [BrandsSearchTermReportRow](brandssearchtermreportrow.md): A single row in a Brands search term report, pairing search-term metadata with total and granular performance metrics.
- [BrandsSearchTermReportSummary](brandssearchtermreportsummary.md): The grand-total metrics aggregated across all rows in a Brands search term report.
- [BrandsSearchTermResultContainer](brandssearchtermresultcontainer.md): Wraps the array of Brands search term report rows along with a grand-total summary.
- [BrandsMetrics](brandsmetrics.md): Metrics for brands promoted object type.
- [BrandsCampaignMetrics](brandscampaignmetrics.md): Campaign-level metrics for brands, inheriting all properties from `BrandsMetrics`.
- [BrandsAdGroupMetrics](brandsadgroupmetrics.md): Ad group-level metrics for brands, inheriting all properties from `BrandsMetrics`.
- [BrandsOptions](brandsoptions.md): Reports options for brands promoted object campaigns.
- [BrandsTargetingProjection](brandstargetingprojection.md): Targeting projection for brands ad groups and campaigns.

## See Also

### Reports

- [Managing Reports](reports.md): Retrieve performance data for campaigns, ad groups, ads, keywords, and search terms.
- [App Store Reports Endpoints](apps-reports-endpoints.md): Endpoints for retrieving App Store campaign, ad group, ad, keyword, and search term performance data.
- [Brands Reports Endpoints](brands-reports-endpoints.md): Retrieve performance data for Apple Maps campaigns, ad groups, ads, keywords, and search terms.
- [Apps Data Objects](apps-reports-objects.md): Request, response, and metadata objects for Apps report endpoints.
- [Shared Objects](reports-shared-objects.md): Shared request and response objects used across Apps and Brands report endpoints.
