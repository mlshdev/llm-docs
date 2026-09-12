> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandsreportingcreative](https://developer.apple.com/documentation/apple-ads-platform-api/brandsreportingcreative)

# BrandsReportingCreative

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Creative metadata for brands ads.

## Declaration

```
object BrandsReportingCreative
```

## Properties

- `id` — `int64`: The creative’s unique identifier.
- `creativeType` — `BrandsReportingCreative.CreativeType`: Possible values: `LOCAL_ADS_SEARCH_CREATIVE`.
- `systemStatus` — `BrandsReportingCreative.SystemStatus`: Possible values: `VALID`, `INVALID`, `PENDING`.

<a id="Discussion"></a>

## Discussion

The `BrandsReportingCreative` object is the creative metadata snapshot embedded within `BrandsReportingAd` in `brands` ad report rows. The `creativeType` field uses the shared `CreativeType` enumeration, but Brands (Apple Maps) creative reports only ever return `LOCAL_ADS_SEARCH_CREATIVE`.

The `systemStatus` field reflects whether the creative was valid at report time. Creatives with `INVALID` status were not eligible to serve during the reporting period and won’t contribute to impression or engagement metrics.

<a id="Example"></a>

### Example

```json
{
  "id": 555666777,
  "creativeType": "LOCAL_ADS_SEARCH_CREATIVE",
  "systemStatus": "VALID"
}
```

## Topics

### Type Aliases

- [BrandsReportingCreative.CreativeType](brandsreportingcreative/creativetype-data.typealias.md): The visual format and placement context of the creative at report time.
- [BrandsReportingCreative.SystemStatus](brandsreportingcreative/systemstatus-data.typealias.md): System-evaluated validation state of the creative at report time.

## See Also

- [BrandsReportingRequest](brandsreportingrequest.md): Request body for brands reporting queries.
- [BrandsReportingCampaign](brandsreportingcampaign.md): Campaign metadata for Apple Maps report rows.
- [BrandsReportingAdGroup](brandsreportingadgroup.md): Ad group metadata for brands report rows.
- [BrandsReportingAd](brandsreportingad.md): Ad metadata for brands report rows.
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
