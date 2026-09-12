> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appsmetrics](https://developer.apple.com/documentation/apple-ads-platform-api/appsmetrics)

# AppsMetrics

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Metrics for apps promoted object type.

## Declaration

```
object AppsMetrics
```

## Properties

- `date` — `date`: Report date in YYYY-MM-DD format.
- `localSpend` — `Money`: Total spend in the reporting period. See [Money](money.md).
- `impressions` — `int64`: Total ad impressions.
- `taps` — `int64`: Total ad taps.
- `ttr` — `number`: Tap-through rate (taps divided by impressions).
- `cpt` — `Money`: Average cost per tap. See [Money](money.md).
- `cpm` — `Money`: Average cost per thousand impressions. See [Money](money.md).
- `tapInstalls` — `int64`: Number of installs attributed to taps.
- `tapInstallCPI` — `Money`: Average cost per tap-attributed install. See [Money](money.md).
- `totalNewDownloads` — `int64`: Total new downloads (first-time installs) across all attribution types.
- `totalRedownloads` — `int64`: Total redownloads (installs of an app the user previously had installed, verified by the App Store) across all attribution types.
- `viewInstalls` — `int64`: Number of installs attributed to view-through (impression-based) attribution.
- `totalInstalls` — `int64`: Total installs combining tap and view attribution.
- `tapNewDownloads` — `int64`: New downloads attributed to taps.
- `tapRedownloads` — `int64`: Redownloads attributed to taps.
- `viewNewDownloads` — `int64`: New downloads attributed to view-through impressions.
- `viewRedownloads` — `int64`: Redownloads attributed to view-through impressions.
- `totalAvgCPI` — `Money`: Average cost per install across all attribution types. See [Money](money.md).
- `totalInstallRate` — `number`: Total install rate (total installs divided by taps).
- `tapInstallRate` — `number`: Tap install rate (tap installs divided by taps).
- `tapPreOrdersPlaced` — `int64`: Pre-orders placed attributed to taps.
- `viewPreOrdersPlaced` — `int64`: Pre-orders placed attributed to view-through impressions.
- `totalPreOrdersPlaced` — `int64`: Total pre-orders placed across all attribution types.

<a id="Discussion"></a>

## Discussion

The `AppsMetrics` object is the base metrics for apps campaign reports. It contains all standard performance metrics available for app promotion campaigns, including spend, impressions, taps, installs (split by tap-through and view-through attribution), pre-orders, and derived rates.

All monetary fields reference [Money](money.md) objects in the account’s reporting currency.

<a id="Example"></a>

### Example

```json
{
  "date": "2025-01-10",
  "localSpend": {
    "amount": "482.50",
    "currency": "USD"
  },
  "impressions": 152300,
  "taps": 3210,
  "ttr": 0.021,
  "cpt": {
    "amount": "0.15",
    "currency": "USD"
  },
  "cpm": {
    "amount": "3.17",
    "currency": "USD"
  },
  "tapInstalls": 640,
  "tapInstallCPI": {
    "amount": "0.75",
    "currency": "USD"
  },
  "totalNewDownloads": 710,
  "totalRedownloads": 58,
  "viewInstalls": 128,
  "totalInstalls": 768,
  "tapNewDownloads": 592,
  "tapRedownloads": 48,
  "viewNewDownloads": 118,
  "viewRedownloads": 10,
  "totalAvgCPI": {
    "amount": "0.63",
    "currency": "USD"
  },
  "totalInstallRate": 0.2393,
  "tapInstallRate": 0.1994,
  "tapPreOrdersPlaced": 22,
  "viewPreOrdersPlaced": 4,
  "totalPreOrdersPlaced": 26
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
