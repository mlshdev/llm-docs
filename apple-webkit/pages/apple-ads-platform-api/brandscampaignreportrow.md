> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandscampaignreportrow](https://developer.apple.com/documentation/apple-ads-platform-api/brandscampaignreportrow)

# BrandsCampaignReportRow

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A single row in an Apple Maps campaign report, containing campaign metadata, total metrics, and optional granular time-series metrics.

## Declaration

```
object BrandsCampaignReportRow
```

## Properties

- `totalMetrics` — `BrandsCampaignMetrics`: Aggregated performance figures including the `brands`-specific engagement metrics (directions, calls, shares, etc.). See [BrandsCampaignMetrics](brandscampaignmetrics.md) for details.
- `granularMetrics` — `[BrandsCampaignMetrics]`: Time-series breakdown, present when a `granularity` is specified in the request.
- `metadata` — `BrandsReportingCampaign`: Campaign identifiers, targeting projection, budget, and operational status at report time. See [BrandsReportingCampaign](brandsreportingcampaign.md) for details.

<a id="Discussion"></a>

## Discussion

For `brands` reports, supported `groupBy` dimensions are `deviceClass`, `locationId`, and `supplyPlacement`. These appear as dimension values within the `metadata` object.

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
    "getDirections": {
      "tap": 320
    },
    "call": {
      "tap": 145
    },
    "share": {
      "tap": 95
    }
  },
  "granularMetrics": [
    {
      "date": "2025-01-10",
      "localSpend": {
        "amount": "420.25",
        "currency": "USD"
      },
      "impressions": 310000,
      "taps": 4900,
      "ttr": 0.0158,
      "cpt": {
        "amount": "0.09",
        "currency": "USD"
      },
      "cpm": {
        "amount": "1.36",
        "currency": "USD"
      },
      "getDirections": {
        "tap": 160
      },
      "call": {
        "tap": 72
      },
      "share": {
        "tap": 48
      }
    }
  ],
  "metadata": {
    "id": 555666777,
    "promotedObjectType": "BUSINESS_BRAND",
    "promotedObjectId": "123456789",
    "name": "AwayFinder Apple Maps Campaign",
    "status": "ENABLED",
    "deleted": false,
    "displayStatus": "RUNNING",
    "modificationTime": "2025-01-10T08:00:00.000",
    "creationTime": "2025-01-05T08:00:00.000",
    "adAccountId": 987654321,
    "systemStatus": "RUNNING",
    "billingEvent": "IMPRESSIONS",
    "dailyBudget": {
      "value": {
        "amount": "50.00",
        "currency": "USD"
      }
    },
    "startTime": "2025-01-10T08:00:00.000",
    "endTime": "2025-12-31T08:00:00.000",
    "bidStrategy": {
      "bidStrategyType": "MANUAL_CPT",
      "bid": {
        "amount": "1.50",
        "currency": "USD"
      }
    },
    "deviceClass": "IPHONE",
    "locationId": "123456789",
    "supplyPlacement": "MAPS_SEARCH_RESULTS"
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
- [BrandsCampaignReportSummary](brandscampaignreportsummary.md): The grand-total metrics aggregated across all rows in an Apple Maps campaign report.
- [BrandsCampaignResultContainer](brandscampaignresultcontainer.md): Wraps the array of Apple Maps campaign report rows along with a grand-total summary.
- [BrandsAdGroupReportResponse](brandsadgroupreportresponse.md): The top-level response envelope for brands ad group reports.
- [BrandsAdGroupReportRow](brandsadgroupreportrow.md): A single row in a Brands (Apple Maps) ad group report, pairing ad group metadata with total and granular performance metrics.
- [BrandsAdGroupReportSummary](brandsadgroupreportsummary.md): The grand-total metrics aggregated across all rows in a Brands ad group report.
- [BrandsAdGroupResultContainer](brandsadgroupresultcontainer.md): Wraps the array of Brands ad group report rows along with a grand-total summary.
- [BrandsAdReportResponse](brandsadreportresponse.md): The top-level response envelope for brands ad-level reports.
