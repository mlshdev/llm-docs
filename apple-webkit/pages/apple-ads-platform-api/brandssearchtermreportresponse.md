> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandssearchtermreportresponse](https://developer.apple.com/documentation/apple-ads-platform-api/brandssearchtermreportresponse)

# BrandsSearchTermReportResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The top-level response envelope for brands search term reports.

## Declaration

```
object BrandsSearchTermReportResponse
```

## Properties

- `result` — `BrandsSearchTermResultContainer`: If no rows match the request, `result` is returned as an empty object. See [BrandsSearchTermResultContainer](brandssearchtermresultcontainer.md) for details.
- `pagination` — `ResponsePagination`: See [ResponsePagination](responsepagination.md) for details.
- `error` — `Error`: See [ErrorResponse](errorresponse.md) for details.

<a id="Discussion"></a>

## Discussion

The `result` field contains a `BrandsSearchTermResultContainer` with the array of search term rows, each capturing the actual user query text and associated `brands` performance metrics.

Like all search term reports, `brands` search term reports require the ORTZ timezone. UTC isn’t supported. Search term entity reports also exclude the `supplyPlacement` and `locationId` dimensions from `groupBy`. The `pagination` field provides the pagination state.

<a id="Example"></a>

### Example

```json
{
  "result": {
    "rows": [
      {
        "totalMetrics": {
          "date": "2025-01-10",
          "localSpend": {
            "amount": "245.50",
            "currency": "USD"
          },
          "impressions": 18400,
          "taps": 620
        },
        "metadata": {
          "searchTermText": "awayfinder travel app",
          "locationId": "555666777"
        }
      }
    ],
    "summary": {
      "grandTotal": {
        "localSpend": {
          "amount": "245.50",
          "currency": "USD"
        },
        "impressions": 18400,
        "taps": 620
      }
    }
  },
  "pagination": {
    "offset": 0,
    "pageSize": 20,
    "totalCount": 1
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
