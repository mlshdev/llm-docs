> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandsadgroupreportresponse](https://developer.apple.com/documentation/apple-ads-platform-api/brandsadgroupreportresponse)

# BrandsAdGroupReportResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The top-level response envelope for brands ad group reports.

## Declaration

```
object BrandsAdGroupReportResponse
```

## Properties

- `result` — `BrandsAdGroupResultContainer`: Wraps the array of report rows, each containing the ad group `metadata` (including targeting configuration) and performance metrics segmented by the requested `groupBy` dimensions. If no rows match the request, `result` is returned as an empty object. See [BrandsAdGroupResultContainer](brandsadgroupresultcontainer.md) for details.
- `pagination` — `ResponsePagination`: Returned for paging through large result sets. See [ResponsePagination](responsepagination.md) for details.
- `error` — `Error`: See [ErrorResponse](errorresponse.md) for details.

<a id="Discussion"></a>

## Discussion

The `brands` ad group reports support `groupBy` dimensions `deviceClass`, `locationId`, and `supplyPlacement`.

<a id="Example"></a>

### Example

```json
{
  "result": {
    "rows": [
      {
        "metadata": {
          "id": 555666888,
          "name": "AwayFinder - SF Metro Locations",
          "adAccountId": 123456789,
          "campaignId": 444555999,
          "status": "ENABLED",
          "deleted": false,
          "locationId": "loc-002"
        },
        "totalMetrics": {
          "localSpend": {
            "amount": "4200.00",
            "currency": "USD"
          },
          "impressions": 420000,
          "taps": 8400,
          "ttr": 0.02
        },
        "granularMetrics": [
          {
            "date": "2025-01-10",
            "localSpend": {
              "amount": "420.00",
              "currency": "USD"
            },
            "impressions": 42000,
            "taps": 840
          }
        ]
      }
    ],
    "summary": {
      "grandTotal": {
        "localSpend": {
          "amount": "4200.00",
          "currency": "USD"
        },
        "impressions": 420000,
        "taps": 8400
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
- [BrandsAdGroupReportRow](brandsadgroupreportrow.md): A single row in a Brands (Apple Maps) ad group report, pairing ad group metadata with total and granular performance metrics.
- [BrandsAdGroupReportSummary](brandsadgroupreportsummary.md): The grand-total metrics aggregated across all rows in a Brands ad group report.
- [BrandsAdGroupResultContainer](brandsadgroupresultcontainer.md): Wraps the array of Brands ad group report rows along with a grand-total summary.
- [BrandsAdReportResponse](brandsadreportresponse.md): The top-level response envelope for brands ad-level reports.
