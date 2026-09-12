> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandssearchtermreportrow](https://developer.apple.com/documentation/apple-ads-platform-api/brandssearchtermreportrow)

# BrandsSearchTermReportRow

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A single row in a Brands search term report, pairing search-term metadata with total and granular performance metrics.

## Declaration

```
object BrandsSearchTermReportRow
```

## Properties

- `totalMetrics` — `BrandsMetrics`: See [BrandsMetrics](brandsmetrics.md) for details.
- `granularMetrics` — `[BrandsMetrics]`: Time-series metrics broken down by the requested granularity. Present only when the request specifies a `granularity`. Otherwise, it’s omitted and all data appears in `totalMetrics`.
- `metadata` — `BrandsReportingSearchTerm`: See [BrandsReportingSearchTerm](brandsreportingsearchterm.md) for details.

<a id="Discussion"></a>

## Discussion

The `BrandsSearchTermReportRow` object is the `brands` counterpart to [AppsSearchTermReportRow](appssearchtermreportrow.md). The `metadata` field captures the search term text and its associated keyword, ad group, and location context at report time. The `totalMetrics` field contains the aggregated performance figures across the full reporting period.

Like all search term reports, `brands` search term reports require the ORTZ timezone. UTC isn’t supported. Search term entity reports also exclude the `supplyPlacement` and `locationId` dimensions from `groupBy`.

<a id="Example"></a>

### Example

```json
{
  "totalMetrics": {
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
    },
    "firstActions": {
      "tap": 1450
    },
    "firstActionsPerTap": {
      "tap": 0.1480
    },
    "firstActionsPerImpression": {
      "tap": 0.0023
    },
    "costPerFirstAction": {
      "tap": {
        "amount": "0.58",
        "currency": "USD"
      }
    },
    "actions": {
      "tap": 2100
    },
    "costPerAction": {
      "tap": {
        "amount": "0.40",
        "currency": "USD"
      }
    },
    "getDirections": {
      "tap": 320
    },
    "tapURL": {
      "tap": 610
    },
    "call": {
      "tap": 145
    },
    "share": {
      "tap": 95
    },
    "getTheApp": {
      "tap": 780
    },
    "galleryEngagement": {
      "tap": 150
    },
    "actionsPerTap": {
      "tap": 0.2143
    },
    "actionsPerImpression": {
      "tap": 0.0034
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
      },
      "firstActions": {
        "tap": 1450
      },
      "firstActionsPerTap": {
        "tap": 0.1480
      },
      "firstActionsPerImpression": {
        "tap": 0.0023
      },
      "costPerFirstAction": {
        "tap": {
          "amount": "0.58",
          "currency": "USD"
        }
      },
      "actions": {
        "tap": 2100
      },
      "costPerAction": {
        "tap": {
          "amount": "0.40",
          "currency": "USD"
        }
      },
      "getDirections": {
        "tap": 320
      },
      "tapURL": {
        "tap": 610
      },
      "call": {
        "tap": 145
      },
      "share": {
        "tap": 95
      },
      "getTheApp": {
        "tap": 780
      },
      "galleryEngagement": {
        "tap": 150
      },
      "actionsPerTap": {
        "tap": 0.2143
      },
      "actionsPerImpression": {
        "tap": 0.0034
      }
    }
  ],
  "metadata": {
    "campaignId": 555666777,
    "adAccountId": 123456789,
    "searchTermText": "AwayFinder",
    "searchTermSource": "SEARCH",
    "keyword": {
      "locationId": "555666777",
      "matchType": "PHRASE"
    },
    "adGroupId": 987654321,
    "adGroup": {
      "name": "AwayFinder Brand Ad Group",
      "deleted": false
    },
    "countryOrRegion": "US",
    "deviceClass": "IPHONE"
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
