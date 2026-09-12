> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appstargetingprojection](https://developer.apple.com/documentation/apple-ads-platform-api/appstargetingprojection)

# AppsTargetingProjection

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Targeting projection for apps campaigns.

## Declaration

```
object AppsTargetingProjection
```

## Properties

- `supplyPlacement` — `IncludeExclude`: The ad placement slots included in delivery. Values: `APPSTORE_SEARCH_RESULTS`, `APPSTORE_SEARCH_TAB`, `APPSTORE_TODAY_TAB`, `APPSTORE_PRODUCT_PAGES`. See [IncludeExclude](includeexclude.md) for details.
- `lifetimeStorefronts` — `IncludeExclude`: App Store countries or regions targeted over the campaign’s lifetime, which may differ from the currently active `countryOrRegion` targeting. See [IncludeExclude](includeexclude.md) for details.
- `countryOrRegion` — `IncludeExclude`: ISO 3166-1 alpha-2 country codes currently targeted by the campaign. See [IncludeExclude](includeexclude.md) for details.

<a id="Discussion"></a>

## Discussion

The `AppsTargetingProjection` object describes the targeting scope for an apps campaign entity as captured in a report row. Each field is an `IncludeExclude` wrapper whose `include` array lists the active targeting values at the time of the report.

<a id="Example"></a>

### Example

```json
{
  "supplyPlacement": {
    "include": ["APPSTORE_SEARCH_RESULTS", "APPSTORE_SEARCH_TAB"]
  },
  "lifetimeStorefronts": {
    "include": ["US", "CA", "GB"]
  },
  "countryOrRegion": {
    "include": ["US", "CA"]
  }
}
```

## See Also

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
