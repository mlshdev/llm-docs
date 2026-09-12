> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appsadreportresponse](https://developer.apple.com/documentation/apple-ads-platform-api/appsadreportresponse)

# AppsAdReportResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The top-level response envelope for apps ad-level reports.

## Declaration

```
object AppsAdReportResponse
```

## Properties

- `result` — `AppsAdResultContainer`: Wraps the array of ad report rows, each containing ad metadata and associated metrics. If no rows match the request, `result` is returned as an empty object. See [AppsAdResultContainer](appsadresultcontainer.md) for details.
- `pagination` — `ResponsePagination`: Allows paging through all matching ads. See [ResponsePagination](responsepagination.md) for details.
- `error` — `Error`: Populated with an `ErrorResponse` when the request fails. See [ErrorResponse](errorresponse.md) for details.

<a id="Discussion"></a>

## Discussion

Check for `error` before processing `result`. Note that ad-level reports don’t support `HOURLY` granularity.

<a id="Example"></a>

### Example

```json
{
  "result": {
    "rows": [
      {
        "metadata": {
          "id": 234567891,
          "name": "AwayFinder Default Ad",
          "adAccountId": 123456789,
          "campaignId": 444555666,
          "adGroupId": 555666777,
          "status": "ENABLED",
          "deleted": false
        },
        "totalMetrics": {
          "localSpend": {
            "amount": "150.00",
            "currency": "USD"
          },
          "impressions": 10000,
          "taps": 500,
          "ttr": 0.05,
          "cpt": {
            "amount": "0.30",
            "currency": "USD"
          },
          "tapInstalls": 120,
          "totalInstalls": 145
        },
        "granularMetrics": [
          {
            "date": "2025-01-01",
            "localSpend": {
              "amount": "4.80",
              "currency": "USD"
            },
            "impressions": 330,
            "taps": 16,
            "tapInstalls": 4
          }
        ]
      }
    ],
    "summary": {
      "grandTotal": {
        "localSpend": {
          "amount": "150.00",
          "currency": "USD"
        },
        "impressions": 10000,
        "taps": 500,
        "tapInstalls": 120
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
- [AppsAdReportRow](appsadreportrow.md): A single row in an Apps ad-level report, containing ad metadata, total metrics, and optional granular time-series metrics.
- [AppsAdReportSummary](appsadreportsummary.md): The grand-total metrics aggregated across all rows in an Apps ad-level report.
