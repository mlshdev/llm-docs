> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appskeywordreportresponse](https://developer.apple.com/documentation/apple-ads-platform-api/appskeywordreportresponse)

# AppsKeywordReportResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The top-level response envelope for apps keyword-level reports.

## Declaration

```
object AppsKeywordReportResponse
```

## Properties

- `result` — `AppsKeywordResultContainer`: Contains the array of keyword report rows, each including keyword metadata, associated performance metrics, and an optional `insights.bidRecommendation`. If no rows match the request, `result` is returned as an empty object. See [AppsKeywordResultContainer](appskeywordresultcontainer.md) for details.
- `pagination` — `ResponsePagination`: Provides pagination state for navigating large result sets. See [ResponsePagination](responsepagination.md) for details.
- `error` — `Error`: See [ErrorResponse](errorresponse.md) for details.

<a id="Discussion"></a>

## Discussion

Keyword reports support `groupBy` dimensions such as `countryOrRegion` and `deviceClass`, which adds those dimension values to each row’s metadata.

<a id="Example"></a>

### Example

```json
{
  "result": {
    "rows": [
      {
        "metadata": {
          "id": 888999000,
          "text": "productivity app",
          "matchType": "BROAD",
          "adAccountId": 123456789,
          "campaignId": 444555666,
          "adGroupId": 555666777,
          "status": "ENABLED",
          "deleted": false
        },
        "totalMetrics": {
          "localSpend": {
            "amount": "75.00",
            "currency": "USD"
          },
          "impressions": 5000,
          "taps": 250,
          "ttr": 0.05,
          "cpt": {
            "amount": "0.30",
            "currency": "USD"
          },
          "tapInstalls": 60,
          "totalInstalls": 72
        },
        "granularMetrics": [
          {
            "date": "2025-01-01",
            "localSpend": {
              "amount": "2.40",
              "currency": "USD"
            },
            "impressions": 160,
            "taps": 8,
            "tapInstalls": 2
          }
        ],
        "insights": {
          "bidRecommendation": {
            "suggestedBidAmount": 1.25
          }
        }
      }
    ],
    "summary": {
      "grandTotal": {
        "localSpend": {
          "amount": "482.50",
          "currency": "USD"
        },
        "impressions": 152300,
        "taps": 3210,
        "ttr": 0.021,
        "totalInstalls": 768
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
