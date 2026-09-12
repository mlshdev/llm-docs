> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appsreportingad](https://developer.apple.com/documentation/apple-ads-platform-api/appsreportingad)

# AppsReportingAd

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Ad metadata for apps report rows.

## Declaration

```
object AppsReportingAd
```

## Properties

- `id` — `int64`: The ad’s unique identifier.
- `name` — `string`: The ad name as configured at report time.
- `deleted` — `boolean`: Whether the ad has been soft-deleted.
- `status` — `AppsReportingAd.Status`: Possible values: `ENABLED`, `PAUSED`.
- `systemStatus` — `AppsReportingAd.SystemStatus`: Possible values: `RUNNING`, `NOT_RUNNING`.
- `systemStatusReasons` — `[AdSystemStatusReason]`: System-applied reasons contributing to the current `systemStatus`.
- `systemStatusLimitingReasons` — `[string]`: Status-limiting reasons applied based on advertiser and system factors.
- `adAccountId` — `int64`: The ad account this ad belongs to.
- `campaignId` — `int64`: The campaign this ad belongs to.
- `adGroupId` — `int64`: The ad group this ad belongs to.
- `creationTime` — `date-time`: Timestamp when the ad was created (ISO 8601).
- `modificationTime` — `date-time`: Timestamp of the ad’s last modification (ISO 8601).
- `displayStatus` — `string`: System-computed, rolled-up delivery state combining ad, ad group, and campaign conditions.
- `creative` — `AppsReportingCreative`: See [AppsReportingCreative](appsreportingcreative.md) for details.
- `countryOrRegion` — `string`: Country or region groupBy dimension value, populated when `countryOrRegion` is specified in the request’s `groupBy`.
- `deviceClass` — `string`: Device class groupBy dimension value, populated when `deviceClass` is specified in the request’s `groupBy`.

<a id="Discussion"></a>

## Discussion

The `AppsReportingAd` object is the ad metadata embedded in apps ad report rows. It captures the configuration and status of the ad at report time, providing the full organizational context (`adAccountId`, `campaignId`, `adGroupId`) alongside the ad’s operational state (`status`, `systemStatus`, `displayStatus`).

The `creative` field embeds an `AppsReportingCreative` summary capturing the creative type and system status, without needing a separate lookup.

<a id="Example"></a>

### Example

```json
{
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
  "deviceClass": "IPHONE"
}
```

## Topics

### Type Aliases

- [AppsReportingAd.Status](appsreportingad/status-data.typealias.md): Advertiser-configurable serving state of the ad at report time.
- [AppsReportingAd.SystemStatus](appsreportingad/systemstatus-data.typealias.md): System-evaluated delivery state of the ad at report time.

## See Also

- [AppsReportingRequest](appsreportingrequest.md): Request body for apps reporting queries.
- [AppsReportingCampaign](appsreportingcampaign.md): Campaign metadata for apps report rows.
- [AppsReportingAdGroup](appsreportingadgroup.md): Ad group metadata for apps report rows.
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
- [AppsAdReportSummary](appsadreportsummary.md): The grand-total metrics aggregated across all rows in an Apps ad-level report.
