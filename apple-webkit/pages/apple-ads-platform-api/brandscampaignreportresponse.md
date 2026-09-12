> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandscampaignreportresponse](https://developer.apple.com/documentation/apple-ads-platform-api/brandscampaignreportresponse)

# BrandsCampaignReportResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The top-level response envelope for Apple Maps campaign-level reports.

## Declaration

```
object BrandsCampaignReportResponse
```

## Properties

- `result` — `BrandsCampaignResultContainer`: Contains the array of campaign report rows. Each row includes the campaign `metadata`, capturing targeting, budget, and status at report time, along with `totalMetrics` and optional `granularMetrics`. If no rows match the request, `result` is returned as an empty object. See [BrandsCampaignResultContainer](brandscampaignresultcontainer.md) for details.
- `pagination` — `ResponsePagination`: Provided for iterating through large result sets. See [ResponsePagination](responsepagination.md) for details.
- `error` — `Error`: See [ErrorResponse](errorresponse.md) for details.

<a id="Discussion"></a>

## Discussion

The `brands` campaign reports support `groupBy` dimensions `deviceClass`, `locationId`, and `supplyPlacement`.

<a id="Example"></a>

### Example

```json
{
  "result": {
    "rows": [
      {
        "metadata": {
          "id": 444555999,
          "name": "AwayFinder - Brand Q1",
          "adAccountId": 123456789,
          "promotedObjectType": "BUSINESS_BRAND",
          "promotedObjectId": "9151314442816847872",
          "promotedObject": {
            "name": "AwayFinder"
          },
          "bidStrategy": {
            "bidStrategyType": "MAX_ENGAGEMENTS"
          },
          "status": "ENABLED",
          "deleted": false,
          "locationId": "loc-001"
        },
        "totalMetrics": {
          "localSpend": {
            "amount": "4200.00",
            "currency": "USD"
          },
          "impressions": 420000,
          "taps": 8400,
          "ttr": 0.02,
          "cpt": {
            "amount": "0.50",
            "currency": "USD"
          },
          "firstActions": {
            "tap": 170
          },
          "actions": {
            "tap": 170
          },
          "getDirections": {
            "tap": 1260
          }
        },
        "granularMetrics": [
          {
            "date": "2025-01-10",
            "localSpend": {
              "amount": "42.00",
              "currency": "USD"
            },
            "impressions": 4200,
            "taps": 84,
            "actions": {
              "tap": 21
            },
            "getDirections": {
              "tap": 13
            }
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
    "pageSize": 20,
    "offset": 0,
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
- [BrandsCampaignReportRow](brandscampaignreportrow.md): A single row in an Apple Maps campaign report, containing campaign metadata, total metrics, and optional granular time-series metrics.
- [BrandsCampaignReportSummary](brandscampaignreportsummary.md): The grand-total metrics aggregated across all rows in an Apple Maps campaign report.
- [BrandsCampaignResultContainer](brandscampaignresultcontainer.md): Wraps the array of Apple Maps campaign report rows along with a grand-total summary.
- [BrandsAdGroupReportResponse](brandsadgroupreportresponse.md): The top-level response envelope for brands ad group reports.
- [BrandsAdGroupReportRow](brandsadgroupreportrow.md): A single row in a Brands (Apple Maps) ad group report, pairing ad group metadata with total and granular performance metrics.
- [BrandsAdGroupReportSummary](brandsadgroupreportsummary.md): The grand-total metrics aggregated across all rows in a Brands ad group report.
- [BrandsAdGroupResultContainer](brandsadgroupresultcontainer.md): Wraps the array of Brands ad group report rows along with a grand-total summary.
- [BrandsAdReportResponse](brandsadreportresponse.md): The top-level response envelope for brands ad-level reports.
