> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandskeywordreportresponse](https://developer.apple.com/documentation/apple-ads-platform-api/brandskeywordreportresponse)

# BrandsKeywordReportResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The top-level response envelope for brands keyword-level reports.

## Declaration

```
object BrandsKeywordReportResponse
```

## Properties

- `result` — `BrandsKeywordResultContainer`: Wraps the report rows, each containing keyword metadata and associated `brands` performance metrics. If no rows match the request, `result` is returned as an empty object. See [BrandsKeywordResultContainer](brandskeywordresultcontainer.md) for details.
- `pagination` — `ResponsePagination`: See [ResponsePagination](responsepagination.md) for details.
- `error` — `Error`: See [ErrorResponse](errorresponse.md) for details.

<a id="Discussion"></a>

## Discussion

The `brands` keyword reports exclude both `supplyPlacement` and `locationId` from supported `groupBy` dimensions. Use `deviceClass` only.

<a id="Example"></a>

### Example

```json
{
  "result": {
    "rows": [
      {
        "metadata": {
          "locationId": "555666777",
          "matchType": "PHRASE"
        },
        "totalMetrics": {
          "date": "2025-01-10",
          "localSpend": {
            "amount": "845.50",
            "currency": "USD"
          },
          "impressions": 620000,
          "taps": 9800,
          "ttr": 0.0158,
          "cpt": {
            "amount": "0.09",
            "currency": "USD"
          },
          "cpm": {
            "amount": "1.36",
            "currency": "USD"
          }
        },
        "granularMetrics": [
          {
            "date": "2025-01-10",
            "localSpend": {
              "amount": "845.50",
              "currency": "USD"
            },
            "impressions": 620000,
            "taps": 9800,
            "ttr": 0.0158,
            "cpt": {
              "amount": "0.09",
              "currency": "USD"
            },
            "cpm": {
              "amount": "1.36",
              "currency": "USD"
            }
          }
        ],
        "insights": {
          "bidRecommendation": {
            "suggestedBidAmount": 2.35
          }
        }
      }
    ],
    "summary": {
      "grandTotal": {
        "date": "2025-01-10",
        "localSpend": {
          "amount": "845.50",
          "currency": "USD"
        },
        "impressions": 620000,
        "taps": 9800,
        "ttr": 0.0158,
        "cpt": {
          "amount": "0.09",
          "currency": "USD"
        },
        "cpm": {
          "amount": "1.36",
          "currency": "USD"
        }
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
