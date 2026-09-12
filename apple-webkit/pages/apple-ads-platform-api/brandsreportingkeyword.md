> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandsreportingkeyword](https://developer.apple.com/documentation/apple-ads-platform-api/brandsreportingkeyword)

# BrandsReportingKeyword

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Keyword metadata for brands report rows, extending the base reporting keyword with brands-only internal fields.

## Declaration

```
object BrandsReportingKeyword
```

## Properties

- `id` — `int64`: The keyword identifier.
- `campaignId` — `int64`: The identifier of the campaign that owns the keyword.
- `adAccountId` — `int64`: The identifier of the ad account that owns the keyword.
- `deleted` — `boolean`: `true` if the keyword has been deleted.
- `text` — `string`: The keyword text.
- `status` — `string`: Possible values: `ENABLED`, `PAUSED`.
  **Allowed values:** `ENABLED`, `PAUSED`
- `matchType` — `string`: Match type for the keyword in Maps campaigns. Possible values: `PHRASE`, `CATEGORY`.
  **Allowed values:** `PHRASE`, `CATEGORY`
- `bid` — `Money`: See [Money](money.md) for details.
- `adGroupId` — `int64`: The identifier of the ad group that owns the keyword.
- `modificationTime` — `date-time`: The time the keyword was last modified.
- `creationTime` — `date-time`: The time the keyword was created.
- `displayStatus` — `string`: The computed display status of the keyword.
- `adGroup` — `ReportingAdGroupMin`: See [ReportingAdGroupMin](reportingadgroupmin.md) for details.
- `countryOrRegion` — `string`: Country or region groupBy dimension value.
- `deviceClass` — `string`: Device class groupBy dimension value.
- `locationId` — `string`: Location ID groupBy dimension value.

<a id="Discussion"></a>

## Discussion

The `BrandsReportingKeyword` extends the base `ReportingKeyword` object with a `brands`-only `locationId` field and a Maps-specific `matchType` override. All other fields, including `id`, `text`, `bid`, `status`, and `adGroupId`, are inherited unchanged from [ReportingKeyword](reportingkeyword.md) and appear alongside these fields in an actual response.

<a id="Example"></a>

### Example

```json
{
  "locationId": "555666777",
  "matchType": "PHRASE"
}
```

## See Also

- [BrandsReportingRequest](brandsreportingrequest.md): Request body for brands reporting queries.
- [BrandsReportingCampaign](brandsreportingcampaign.md): Campaign metadata for Apple Maps report rows.
- [BrandsReportingAdGroup](brandsreportingadgroup.md): Ad group metadata for brands report rows.
- [BrandsReportingAd](brandsreportingad.md): Ad metadata for brands report rows.
- [BrandsReportingCreative](brandsreportingcreative.md): Creative metadata for brands ads.
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
