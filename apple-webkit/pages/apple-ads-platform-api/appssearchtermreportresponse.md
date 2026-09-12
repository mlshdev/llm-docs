> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appssearchtermreportresponse](https://developer.apple.com/documentation/apple-ads-platform-api/appssearchtermreportresponse)

# AppsSearchTermReportResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The top-level response envelope for apps search term reports.

## Declaration

```
object AppsSearchTermReportResponse
```

## Properties

- `result` — `AppsSearchTermResultContainer`: Contains the array of search term rows, each capturing the actual user query text and associated performance metrics. If no rows match the request, `result` is returned as an empty object. See [AppsSearchTermResultContainer](appssearchtermresultcontainer.md) for details.
- `pagination` — `ResponsePagination`: See [ResponsePagination](responsepagination.md) for details.
- `error` — `Error`: See [ErrorResponse](errorresponse.md) for details.

<a id="Discussion"></a>

## Discussion

Search term reports require the ORTZ timezone. UTC isn’t supported. Each row links back to the matched keyword via a nested `keyword` object (see [ReportingKeyword](reportingkeyword.md)), enabling you to map observed search behavior to specific bids.

<a id="Example"></a>

### Example

```json
{
  "result": {
    "rows": [
      {
        "metadata": {
          "campaignId": 444555666,
          "adAccountId": 123456789,
          "searchTermText": "awayfinder travel app",
          "searchTermSource": "SEARCH",
          "keyword": {
            "id": 987654321,
            "campaignId": 444555666,
            "adAccountId": 123456789,
            "deleted": false,
            "text": "travel app",
            "status": "ENABLED",
            "matchType": "BROAD",
            "bid": {
              "amount": "0.85",
              "currency": "USD"
            },
            "adGroupId": 555666777,
            "modificationTime": "2025-01-05T08:00:00.000",
            "creationTime": "2024-11-01T08:00:00.000",
            "displayStatus": "RUNNING",
            "adGroup": {
              "name": "AwayFinder - Broad Match",
              "deleted": false
            },
            "countryOrRegion": "US",
            "deviceClass": "IPHONE"
          },
          "adGroupId": 555666777,
          "adGroup": {
            "name": "AwayFinder - Broad Match",
            "deleted": false
          },
          "countryOrRegion": "US",
          "deviceClass": "IPHONE"
        },
        "totalMetrics": {
          "date": "2025-01-10",
          "localSpend": {
            "amount": "142.30",
            "currency": "USD"
          },
          "impressions": 48200,
          "taps": 910,
          "ttr": 0.0189,
          "cpt": {
            "amount": "0.16",
            "currency": "USD"
          },
          "cpm": {
            "amount": "2.95",
            "currency": "USD"
          },
          "tapInstalls": 182,
          "tapInstallCPI": {
            "amount": "0.78",
            "currency": "USD"
          },
          "totalNewDownloads": 201,
          "totalRedownloads": 16,
          "viewInstalls": 34,
          "totalInstalls": 216,
          "tapNewDownloads": 168,
          "tapRedownloads": 14,
          "viewNewDownloads": 30,
          "viewRedownloads": 4,
          "totalAvgCPI": {
            "amount": "0.66",
            "currency": "USD"
          },
          "totalInstallRate": 0.2374,
          "tapInstallRate": 0.2,
          "tapPreOrdersPlaced": 6,
          "viewPreOrdersPlaced": 1,
          "totalPreOrdersPlaced": 7
        },
        "granularMetrics": []
      }
    ],
    "summary": {
      "grandTotal": {
        "date": "2025-01-10",
        "localSpend": {
          "amount": "142.30",
          "currency": "USD"
        },
        "impressions": 48200,
        "taps": 910,
        "ttr": 0.0189,
        "cpt": {
          "amount": "0.16",
          "currency": "USD"
        },
        "cpm": {
          "amount": "2.95",
          "currency": "USD"
        },
        "tapInstalls": 182,
        "tapInstallCPI": {
          "amount": "0.78",
          "currency": "USD"
        },
        "totalNewDownloads": 201,
        "totalRedownloads": 16,
        "viewInstalls": 34,
        "totalInstalls": 216,
        "tapNewDownloads": 168,
        "tapRedownloads": 14,
        "viewNewDownloads": 30,
        "viewRedownloads": 4,
        "totalAvgCPI": {
          "amount": "0.66",
          "currency": "USD"
        },
        "totalInstallRate": 0.2374,
        "tapInstallRate": 0.2,
        "tapPreOrdersPlaced": 6,
        "viewPreOrdersPlaced": 1,
        "totalPreOrdersPlaced": 7
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
- [AppsAdGroupReportResponse](appsadgroupreportresponse.md): The top-level response envelope for apps ad group reports.
- [AppsAdGroupReportRow](appsadgroupreportrow.md): A single row in an Apps ad group report, containing ad group metadata, total metrics, and optional granular time-series metrics.
- [AppsAdGroupReportSummary](appsadgroupreportsummary.md): The grand-total metrics aggregated across all rows in an Apps ad group report.
- [AppsAdGroupResultContainer](appsadgroupresultcontainer.md): Wraps the array of Apps ad group report rows along with a grand-total summary.
- [AppsAdReportResponse](appsadreportresponse.md): The top-level response envelope for apps ad-level reports.
- [AppsAdReportRow](appsadreportrow.md): A single row in an Apps ad-level report, containing ad metadata, total metrics, and optional granular time-series metrics.
