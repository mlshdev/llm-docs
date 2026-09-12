> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandstargetingprojection](https://developer.apple.com/documentation/apple-ads-platform-api/brandstargetingprojection)

# BrandsTargetingProjection

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Targeting projection for brands ad groups and campaigns.

## Declaration

```
object BrandsTargetingProjection
```

## Properties

- `supplyPlacement` — `IncludeExclude`: Restricts delivery to specific placement slots within Maps supply. Supported values: `MAPS_SEARCH_RESULTS`, `MAPS_SEARCH_HOME`. See [IncludeExclude](includeexclude.md) for details.
- `lifetimeStorefronts` — `IncludeExclude`: Controls country or region targeting over the lifetime of the campaign. See [IncludeExclude](includeexclude.md) for details.
- `supplySource` — `IncludeExclude`: Restricts delivery to a specific supply source. Use `MAPS` for Apple Maps placements. See [IncludeExclude](includeexclude.md) for details.
- `promotedLocationGroup` — `IncludeExclude`: Targets a specific location group. Use for campaigns targeting many locations at once. The location group ID identifies a saved set of brand locations. See [IncludeExclude](includeexclude.md) for details.
- `promotedLocation` — `IncludeExclude`: Targets an individual brand location by location ID. Use for single-location targeting. See [IncludeExclude](includeexclude.md) for details.

<a id="Discussion"></a>

## Discussion

The `BrandsTargetingProjection` appears in `brands` report rows, capturing the targeting configuration at the time of the report. All fields use `IncludeExclude` objects containing an `include` array of string values.

<a id="Example"></a>

### Example

```json
{
  "supplyPlacement": {
    "include": ["MAPS_SEARCH_RESULTS", "MAPS_SEARCH_HOME"]
  },
  "lifetimeStorefronts": {
    "include": ["US", "CA"]
  },
  "supplySource": {
    "include": ["MAPS"]
  },
  "promotedLocationGroup": {
    "include": ["555666777"]
  },
  "promotedLocation": {
    "include": ["123456789"]
  }
}
```

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
