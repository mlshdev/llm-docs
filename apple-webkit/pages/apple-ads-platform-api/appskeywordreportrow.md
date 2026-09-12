> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appskeywordreportrow](https://developer.apple.com/documentation/apple-ads-platform-api/appskeywordreportrow)

# AppsKeywordReportRow

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A single row in an apps keyword report, containing keyword metadata, performance metrics, and optional bid recommendation insights.

## Declaration

```
object AppsKeywordReportRow
```

## Properties

- `totalMetrics` — `AppsMetrics`: See [AppsMetrics](appsmetrics.md) for details.
- `granularMetrics` — `[AppsMetrics]`: Time-series metrics broken down by the requested granularity (for example, `DAILY`, `WEEKLY`). Present only when a `granularity` is specified in the request. When it isn’t, this field is absent and all data appears in `totalMetrics` instead.
- `metadata` — `ReportingKeyword`: See [ReportingKeyword](reportingkeyword.md) for details.
- `insights` — `KeywordInsights`: Optional keyword insights, including a `bidRecommendation` suggested bid amount for the keyword. See [KeywordInsights](keywordinsights.md) for details.

<a id="Discussion"></a>

## Discussion

The `metadata` field captures keyword identifiers and configuration at report time, and `totalMetrics` contains the aggregated performance figures across the full reporting period.

<a id="Example"></a>

### Example

```json
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
