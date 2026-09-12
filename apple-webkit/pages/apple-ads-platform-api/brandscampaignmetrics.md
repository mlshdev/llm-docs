> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandscampaignmetrics](https://developer.apple.com/documentation/apple-ads-platform-api/brandscampaignmetrics)

# BrandsCampaignMetrics

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Campaign-level metrics for brands, inheriting all properties from `BrandsMetrics`.

## Declaration

```
object BrandsCampaignMetrics
```

## Properties

- `date` — `date`: Report date in YYYY-MM-DD format.
- `localSpend` — `Money`: Total spend. See [Money](money.md).
- `impressions` — `int64`: Total ad impressions.
- `taps` — `int64`: Total ad taps.
- `ttr` — `number`: Tap-through rate.
- `cpt` — `Money`: Average cost per tap. See [Money](money.md).
- `cpm` — `Money`: Average cost per thousand impressions. See [Money](money.md).
- `firstActions` — `ActionMetrics`: First-time action counts. See [ActionMetrics](actionmetrics.md).
- `firstActionsPerTap` — `RateMetrics`: First-action rates per tap. See [RateMetrics](ratemetrics.md).
- `firstActionsPerImpression` — `RateMetrics`: First-action rates per impression. See [RateMetrics](ratemetrics.md).
- `costPerFirstAction` — `CostMetrics`: Cost per first action. See [CostMetrics](costmetrics.md).
- `actions` — `ActionMetrics`: Total action counts. See [ActionMetrics](actionmetrics.md).
- `costPerAction` — `CostMetrics`: Cost per action. See [CostMetrics](costmetrics.md).
- `getDirections` — `ActionMetrics`: Get-directions action counts. See [ActionMetrics](actionmetrics.md).
- `tapURL` — `ActionMetrics`: Tap-URL action counts. See [ActionMetrics](actionmetrics.md).
- `call` — `ActionMetrics`: Call action counts. See [ActionMetrics](actionmetrics.md).
- `share` — `ActionMetrics`: Share action counts. See [ActionMetrics](actionmetrics.md).
- `getTheApp` — `ActionMetrics`: Get-the-app action counts. See [ActionMetrics](actionmetrics.md).
- `galleryEngagement` — `ActionMetrics`: Gallery engagement action counts. See [ActionMetrics](actionmetrics.md).
- `actionsPerTap` — `RateMetrics`: Total actions per tap rate. See [RateMetrics](ratemetrics.md).
- `actionsPerImpression` — `RateMetrics`: Total actions per impression rate. See [RateMetrics](ratemetrics.md).

<a id="Discussion"></a>

## Discussion

The `BrandsCampaignMetrics` extends [BrandsMetrics](brandsmetrics.md) with no additional fields. It’s the metrics object embedded in brands campaign report rows.

## See Also

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
