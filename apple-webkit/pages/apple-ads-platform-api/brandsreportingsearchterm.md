> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandsreportingsearchterm](https://developer.apple.com/documentation/apple-ads-platform-api/brandsreportingsearchterm)

# BrandsReportingSearchTerm

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Search term metadata for brands report rows, extending the base reporting search term with brands-only internal fields.

## Declaration

```
object BrandsReportingSearchTerm
```

## Properties

- `campaignId` — `int64`: The identifier of the campaign that owns the search term.
- `adAccountId` — `int64`: The identifier of the ad account that owns the search term.
- `searchTermText` — `string`: The actual user-entered query string.
- `searchTermSource` — `string`: Indicates whether the search term came from a direct user search or an auto-match source.
- `keyword` — `BrandsReportingKeyword`: See [BrandsReportingKeyword](brandsreportingkeyword.md) for details.
- `adGroupId` — `int64`: The identifier of the ad group that owns the search term.
- `adGroup` — `ReportingAdGroupMin`: See [ReportingAdGroupMin](reportingadgroupmin.md) for details.
- `countryOrRegion` — `string`: Country or region groupBy dimension value.
- `deviceClass` — `string`: Device class groupBy dimension value.
- `locationId` — `string`: Location ID groupBy dimension value.

<a id="Discussion"></a>

## Discussion

The `BrandsReportingSearchTerm` extends the base `ReportingSearchTerm` object with a `brands`-only `locationId` field. The base object provides the `searchTermText` and `searchTermSource`, along with `campaignId`, `adAccountId`, `adGroupId`, `adGroup`, `countryOrRegion`, and `deviceClass`, all inherited unchanged from [ReportingSearchTerm](reportingsearchterm.md). The `keyword` field here is a `BrandsReportingKeyword` rather than the standard `ReportingKeyword`, capturing the `brands` keyword context that the search term matched against.

Search term reports require the ORTZ timezone. The `brands` search term reports exclude the `supplyPlacement` and `locationId` dimensions from `groupBy`. Only `deviceClass` is available if dimensioned grouping is needed.

<a id="Example"></a>

### Example

```json
{
  "keyword": {
    "locationId": "555666777",
    "matchType": "PHRASE"
  },
  "locationId": "555666777"
}
```

## See Also

- [BrandsReportingRequest](brandsreportingrequest.md): Request body for brands reporting queries.
- [BrandsReportingCampaign](brandsreportingcampaign.md): Campaign metadata for Apple Maps report rows.
- [BrandsReportingAdGroup](brandsreportingadgroup.md): Ad group metadata for brands report rows.
- [BrandsReportingAd](brandsreportingad.md): Ad metadata for brands report rows.
- [BrandsReportingCreative](brandsreportingcreative.md): Creative metadata for brands ads.
- [BrandsReportingKeyword](brandsreportingkeyword.md): Keyword metadata for brands report rows, extending the base reporting keyword with brands-only internal fields.
- [BrandsCampaignReportResponse](brandscampaignreportresponse.md): The top-level response envelope for Apple Maps campaign-level reports.
- [BrandsCampaignReportRow](brandscampaignreportrow.md): A single row in an Apple Maps campaign report, containing campaign metadata, total metrics, and optional granular time-series metrics.
- [BrandsCampaignReportSummary](brandscampaignreportsummary.md): The grand-total metrics aggregated across all rows in an Apple Maps campaign report.
- [BrandsCampaignResultContainer](brandscampaignresultcontainer.md): Wraps the array of Apple Maps campaign report rows along with a grand-total summary.
- [BrandsAdGroupReportResponse](brandsadgroupreportresponse.md): The top-level response envelope for brands ad group reports.
- [BrandsAdGroupReportRow](brandsadgroupreportrow.md): A single row in a Brands (Apple Maps) ad group report, pairing ad group metadata with total and granular performance metrics.
- [BrandsAdGroupReportSummary](brandsadgroupreportsummary.md): The grand-total metrics aggregated across all rows in a Brands ad group report.
- [BrandsAdGroupResultContainer](brandsadgroupresultcontainer.md): Wraps the array of Brands ad group report rows along with a grand-total summary.
- [BrandsAdReportResponse](brandsadreportresponse.md): The top-level response envelope for brands ad-level reports.
