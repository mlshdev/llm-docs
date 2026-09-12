> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appsadreportrow](https://developer.apple.com/documentation/apple-ads-platform-api/appsadreportrow)

# AppsAdReportRow

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A single row in an Apps ad-level report, containing ad metadata, total metrics, and optional granular time-series metrics.

## Declaration

```
object AppsAdReportRow
```

## Properties

- `totalMetrics` — `AppsMetrics`: See [AppsMetrics](appsmetrics.md) for details.
- `granularMetrics` — `[AppsMetrics]`: Time-series metrics broken down by the requested granularity (for example, `DAILY`, `WEEKLY`). Present only when a `granularity` is specified in the request. When it isn’t, this field is absent and all data appears in `totalMetrics` instead.
- `metadata` — `AppsReportingAd`: See [AppsReportingAd](appsreportingad.md) for details.

<a id="Discussion"></a>

## Discussion

The `metadata` field captures ad identifiers and configuration at report time. The `totalMetrics` field contains the aggregated performance figures across the full reporting period.

<a id="Example"></a>

### Example

```json
{
  "metadata": {
    "id": 555666777,
    "name": "AwayFinder - Search Ad",
    "deleted": false,
    "status": "ENABLED",
    "systemStatus": "RUNNING",
    "systemStatusReasons": [],
    "systemStatusLimitingReasons": [],
    "adAccountId": 123456789,
    "campaignId": 234567890,
    "adGroupId": 345678901,
    "creationTime": "2025-01-10T08:00:00.000",
    "modificationTime": "2025-02-01T12:30:00.000",
    "displayStatus": "RUNNING",
    "creative": {
      "id": 456789012,
      "creativeType": "DEFAULT_PRODUCT_PAGE",
      "systemStatus": "VALID"
    },
    "countryOrRegion": "US",
    "storefront": "US"
  },
  "totalMetrics": {
    "localSpend": {
      "amount": "482.50",
      "currency": "USD"
    },
    "impressions": 41230,
    "taps": 980,
    "ttr": 0.0238,
    "cpt": {
      "amount": "0.49",
      "currency": "USD"
    },
    "cpm": {
      "amount": "11.71",
      "currency": "USD"
    },
    "tapInstalls": 312,
    "tapInstallCPI": {
      "amount": "1.55",
      "currency": "USD"
    },
    "totalNewDownloads": 298,
    "totalRedownloads": 41,
    "viewInstalls": 27,
    "totalInstalls": 339,
    "tapNewDownloads": 285,
    "tapRedownloads": 27,
    "viewNewDownloads": 13,
    "viewRedownloads": 14,
    "totalAvgCPI": {
      "amount": "1.42",
      "currency": "USD"
    },
    "totalInstallRate": 0.346,
    "tapInstallRate": 0.318,
    "tapPreOrdersPlaced": 5,
    "viewPreOrdersPlaced": 1,
    "totalPreOrdersPlaced": 6
  },
  "granularMetrics": [
    {
      "date": "2025-02-01",
      "localSpend": {
        "amount": "17.25",
        "currency": "USD"
      },
      "impressions": 1450,
      "taps": 34,
      "ttr": 0.0234,
      "cpt": {
        "amount": "0.51",
        "currency": "USD"
      },
      "cpm": {
        "amount": "11.90",
        "currency": "USD"
      },
      "tapInstalls": 11,
      "tapInstallCPI": {
        "amount": "1.57",
        "currency": "USD"
      },
      "totalNewDownloads": 10,
      "totalRedownloads": 2,
      "viewInstalls": 1,
      "totalInstalls": 12,
      "tapNewDownloads": 10,
      "tapRedownloads": 1,
      "viewNewDownloads": 0,
      "viewRedownloads": 1,
      "totalAvgCPI": {
        "amount": "1.44",
        "currency": "USD"
      },
      "totalInstallRate": 0.353,
      "tapInstallRate": 0.324,
      "tapPreOrdersPlaced": 0,
      "viewPreOrdersPlaced": 0,
      "totalPreOrdersPlaced": 0
    }
  ]
}
```

## See Also

- [AppsReportingRequest](appsreportingrequest.md): Request body for apps reporting queries.
- [AppsReportingCampaign](appsreportingcampaign.md): Campaign metadata for apps report rows.
- [AppsReportingAdGroup](appsreportingadgroup.md): Ad group metadata for apps report rows.
- [AppsReportingAd](appsreportingad.md): Ad metadata for apps report rows.
- [AppsReportingCreative](appsreportingcreative.md): Creative metadata for apps ads.
- [AppsCampaignReportResponse](appscampaignreportresponse.md): The top-level response envelope for apps campaign-level reports.
- [AppsCampaignReportRow](appscampaignreportrow.md): A single row in an apps campaign report, containing campaign metadata, total metrics, and optional granular time-series metrics.
- [AppsCampaignReportSummary](appscampaignreportsummary.md): The grand-total metrics aggregated across all rows in an Apps campaign report.
- [AppsCampaignResultContainer](appscampaignresultcontainer.md): Wraps the array of Apps campaign report rows along with a grand-total summary.
- [AppsAdGroupReportResponse](appsadgroupreportresponse.md): The top-level response envelope for apps ad group reports.
- [AppsAdGroupReportRow](appsadgroupreportrow.md): A single row in an Apps ad group report, containing ad group metadata, total metrics, and optional granular time-series metrics.
- [AppsAdGroupReportSummary](appsadgroupreportsummary.md): The grand-total metrics aggregated across all rows in an Apps ad group report.
- [AppsAdGroupResultContainer](appsadgroupresultcontainer.md): Wraps the array of Apps ad group report rows along with a grand-total summary.
- [AppsAdReportResponse](appsadreportresponse.md): The top-level response envelope for apps ad-level reports.
- [AppsAdReportSummary](appsadreportsummary.md): The grand-total metrics aggregated across all rows in an Apps ad-level report.
