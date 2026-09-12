> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appsadgroupreportresponse](https://developer.apple.com/documentation/apple-ads-platform-api/appsadgroupreportresponse)

# AppsAdGroupReportResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The top-level response envelope for apps ad group reports.

## Declaration

```
object AppsAdGroupReportResponse
```

## Properties

- `result` — `AppsAdGroupResultContainer`: Wraps the array of report rows. If no rows match the request, `result` is returned as an empty object. See [AppsAdGroupResultContainer](appsadgroupresultcontainer.md) for details.
- `pagination` — `ResponsePagination`: Pagination metadata to support paging through large result sets. See [ResponsePagination](responsepagination.md) for details.
- `error` — `Error`: Populated with an `ErrorResponse` when the request fails or partially fails. See [ErrorResponse](errorresponse.md) for details.

<a id="Discussion"></a>

## Discussion

Check for the presence of `error` before processing `result` to handle failure cases cleanly.

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
            "amount": "412.75",
            "currency": "USD"
          },
          "impressions": 305000,
          "taps": 5100,
          "ttr": 0.0167,
          "totalInstalls": 640,
          "totalAvgCPI": {
            "amount": "0.64",
            "currency": "USD"
          }
        },
        "granularMetrics": [],
        "metadata": {
          "id": 555666777,
          "campaignId": 987654321,
          "adAccountId": 123456789,
          "name": "AwayFinder - Apps Ad Group",
          "status": "ENABLED",
          "deleted": false,
          "creationTime": "2025-01-10T08:00:00.000",
          "modificationTime": "2025-01-10T08:00:00.000"
        }
      }
    ],
    "summary": {
      "grandTotal": {
        "date": "2025-01-10",
        "localSpend": {
          "amount": "412.75",
          "currency": "USD"
        },
        "impressions": 305000,
        "taps": 5100,
        "ttr": 0.0167,
        "totalInstalls": 640,
        "totalAvgCPI": {
          "amount": "0.64",
          "currency": "USD"
        }
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

- [AppsReportingRequest](appsreportingrequest.md): Request body for apps reporting queries.
- [AppsReportingCampaign](appsreportingcampaign.md): Campaign metadata for apps report rows.
- [AppsReportingAdGroup](appsreportingadgroup.md): Ad group metadata for apps report rows.
- [AppsReportingAd](appsreportingad.md): Ad metadata for apps report rows.
- [AppsReportingCreative](appsreportingcreative.md): Creative metadata for apps ads.
- [AppsCampaignReportResponse](appscampaignreportresponse.md): The top-level response envelope for apps campaign-level reports.
- [AppsCampaignReportRow](appscampaignreportrow.md): A single row in an apps campaign report, containing campaign metadata, total metrics, and optional granular time-series metrics.
- [AppsCampaignReportSummary](appscampaignreportsummary.md): The grand-total metrics aggregated across all rows in an Apps campaign report.
- [AppsCampaignResultContainer](appscampaignresultcontainer.md): Wraps the array of Apps campaign report rows along with a grand-total summary.
- [AppsAdGroupReportRow](appsadgroupreportrow.md): A single row in an Apps ad group report, containing ad group metadata, total metrics, and optional granular time-series metrics.
- [AppsAdGroupReportSummary](appsadgroupreportsummary.md): The grand-total metrics aggregated across all rows in an Apps ad group report.
- [AppsAdGroupResultContainer](appsadgroupresultcontainer.md): Wraps the array of Apps ad group report rows along with a grand-total summary.
- [AppsAdReportResponse](appsadreportresponse.md): The top-level response envelope for apps ad-level reports.
- [AppsAdReportRow](appsadreportrow.md): A single row in an Apps ad-level report, containing ad metadata, total metrics, and optional granular time-series metrics.
- [AppsAdReportSummary](appsadreportsummary.md): The grand-total metrics aggregated across all rows in an Apps ad-level report.
