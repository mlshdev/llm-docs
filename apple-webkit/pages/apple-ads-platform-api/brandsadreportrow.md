> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandsadreportrow](https://developer.apple.com/documentation/apple-ads-platform-api/brandsadreportrow)

# BrandsAdReportRow

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A single row in a Brands (Apple Maps) ad-level report, pairing ad metadata with total and granular performance metrics.

## Declaration

```
object BrandsAdReportRow
```

## Properties

- `totalMetrics` — `BrandsMetrics`: See [BrandsMetrics](brandsmetrics.md) for details.
- `granularMetrics` — `[BrandsMetrics]`: Time-series metrics broken down by the requested granularity (for example, `DAILY`, `WEEKLY`). Present only when a `granularity` is specified in the request. When it isn’t, this field is absent and all data appears in `totalMetrics` instead.
- `metadata` — `BrandsReportingAd`: See [BrandsReportingAd](brandsreportingad.md) for details.

<a id="Discussion"></a>

## Discussion

The `BrandsAdReportRow` object is the `brands` counterpart to [AppsAdReportRow](appsadreportrow.md). It uses [BrandsMetrics](brandsmetrics.md), a richer metric set than the apps metrics that includes Maps location-action fields such as `getDirections`, `call`, and `share` alongside the standard impression and tap metrics.

The `metadata` field captures ad identifiers and configuration at report time. The `totalMetrics` field contains the aggregated performance figures across the full reporting period.

<a id="Example"></a>

### Example

```json
{
  "totalMetrics": {
    "localSpend": {
      "amount": "845.50",
      "currency": "USD"
    },
    "impressions": 210000,
    "taps": 5200,
    "ttr": 0.0247,
    "cpt": {
      "amount": "0.16",
      "currency": "USD"
    },
    "cpm": {
      "amount": "4.03",
      "currency": "USD"
    },
    "firstActions": {
      "tap": 1300
    },
    "firstActionsPerTap": {
      "tap": 0.25
    },
    "firstActionsPerImpression": {
      "tap": 0.0062
    },
    "costPerFirstAction": {
      "tap": {
        "amount": "0.65",
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
      "tap": 620
    },
    "tapURL": {
      "tap": 410
    },
    "call": {
      "tap": 180
    },
    "share": {
      "tap": 95
    },
    "getTheApp": {
      "tap": 540
    },
    "galleryEngagement": {
      "tap": 255
    },
    "actionsPerTap": {
      "tap": 0.40
    },
    "actionsPerImpression": {
      "tap": 0.01
    }
  },
  "granularMetrics": [
    {
      "date": "2025-01-10",
      "localSpend": {
        "amount": "845.50",
        "currency": "USD"
      },
      "impressions": 210000,
      "taps": 5200,
      "ttr": 0.0247,
      "cpt": {
        "amount": "0.16",
        "currency": "USD"
      },
      "cpm": {
        "amount": "4.03",
        "currency": "USD"
      },
      "firstActions": {
        "tap": 1300
      },
      "firstActionsPerTap": {
        "tap": 0.25
      },
      "firstActionsPerImpression": {
        "tap": 0.0062
      },
      "costPerFirstAction": {
        "tap": {
          "amount": "0.65",
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
        "tap": 620
      },
      "tapURL": {
        "tap": 410
      },
      "call": {
        "tap": 180
      },
      "share": {
        "tap": 95
      },
      "getTheApp": {
        "tap": 540
      },
      "galleryEngagement": {
        "tap": 255
      },
      "actionsPerTap": {
        "tap": 0.40
      },
      "actionsPerImpression": {
        "tap": 0.01
      }
    }
  ],
  "metadata": {
    "id": 555666777,
    "name": "AwayFinder - Brands Ad",
    "deleted": false,
    "status": "ENABLED",
    "systemStatus": "RUNNING",
    "systemStatusReasons": [],
    "systemStatusLimitingReasons": [],
    "adAccountId": 123456789,
    "campaignId": 987654321,
    "adGroupId": 456789123,
    "creationTime": "2025-01-10T08:00:00.000",
    "modificationTime": "2025-01-10T08:00:00.000",
    "displayStatus": "RUNNING",
    "creative": {
      "id": 321654987,
      "creativeType": "LOCAL_ADS_SEARCH_CREATIVE",
      "systemStatus": "VALID"
    },
    "deviceClass": "IPHONE",
    "locationId": "location-98765",
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
- [BrandsCampaignReportRow](brandscampaignreportrow.md): A single row in an Apple Maps campaign report, containing campaign metadata, total metrics, and optional granular time-series metrics.
- [BrandsCampaignReportSummary](brandscampaignreportsummary.md): The grand-total metrics aggregated across all rows in an Apple Maps campaign report.
- [BrandsCampaignResultContainer](brandscampaignresultcontainer.md): Wraps the array of Apple Maps campaign report rows along with a grand-total summary.
- [BrandsAdGroupReportResponse](brandsadgroupreportresponse.md): The top-level response envelope for brands ad group reports.
- [BrandsAdGroupReportRow](brandsadgroupreportrow.md): A single row in a Brands (Apple Maps) ad group report, pairing ad group metadata with total and granular performance metrics.
- [BrandsAdGroupReportSummary](brandsadgroupreportsummary.md): The grand-total metrics aggregated across all rows in a Brands ad group report.
- [BrandsAdGroupResultContainer](brandsadgroupresultcontainer.md): Wraps the array of Brands ad group report rows along with a grand-total summary.
