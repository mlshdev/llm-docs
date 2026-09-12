> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandsoptions](https://developer.apple.com/documentation/apple-ads-platform-api/brandsoptions)

# BrandsOptions

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Reports options for brands promoted object campaigns.

## Declaration

```
object BrandsOptions
```

## Properties

- `includeRows` — `[string]`: Row inclusion options for the report. Set to `GRAND_TOTAL` to append a summary row with aggregated totals across all result rows. `EMPTY_METRICS` is not a supported value for any `brands` entity type.
  **Allowed values:** `GRAND_TOTAL`

<a id="Discussion"></a>

## Discussion

The `BrandsOptions` configures optional row behavior for `brands` report responses. The only supported value for `includeRows` is `GRAND_TOTAL`, which appends an aggregated summary row at the end of the result set. This totals all numeric metric fields across the full result page, giving a quick overview without requiring a client-side sum.

Note that `EMPTY_METRICS` (which is available for some other promoted object types) is explicitly unsupported for `brands` entities. If you omit `BrandsOptions` entirely from the report request, the response returns only individual data rows with no summary.

<a id="Example"></a>

### Example

```json
{
  "includeRows": ["GRAND_TOTAL"]
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
