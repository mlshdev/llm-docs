> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appsreportingcampaign](https://developer.apple.com/documentation/apple-ads-platform-api/appsreportingcampaign)

# AppsReportingCampaign

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Campaign metadata for apps report rows.

## Declaration

```
object AppsReportingCampaign
```

## Properties

- `id` — `int64`: The campaign’s unique identifier.
- `promotedObject` — `PromotedObject`: See [PromotedObject](promotedobject.md) for details.
- `promotedObjectType` — `string`: Always `APPSTORE_APP` for Apple Ads campaigns.
- `promotedObjectId` — `string`: The Adam ID of the promoted App Store app.
- `name` — `string`: The campaign name as configured at report time.
- `status` — `AppsReportingCampaign.Status`: Possible values: `ENABLED`, `PAUSED`.
- `deleted` — `boolean`: Whether the campaign has been soft-deleted.
- `displayStatus` — `string`: System-computed, rolled-up delivery state combining `status` and `systemStatus` into a single label. See [CampaignDisplayStatus](campaigndisplaystatus.md).
- `modificationTime` — `date-time`: Timestamp of the campaign’s last modification (ISO 8601).
- `creationTime` — `date-time`: Timestamp when the campaign was created (ISO 8601).
- `adAccountId` — `int64`: The ad account this campaign belongs to.
- `systemStatus` — `AppsReportingCampaign.SystemStatus`: Possible values: `RUNNING`, `NOT_RUNNING`.
- `systemStatusReasons` — `[CampaignSystemStatusReason]`: System-applied reasons contributing to the current `systemStatus`. See [CampaignSystemStatusReason](campaignsystemstatusreason.md) for possible values.
- `billingEvent` — `AppsReportingCampaign.BillingEvent`: Possible values: `TAPS`, `IMPRESSIONS`.
- `systemStatusLimitingReasons` — `[string]`: System-applied reasons limiting delivery below maximum potential. See [CampaignSystemLimitedStatusReason](campaignsystemlimitedstatusreason.md) for possible values.
- `targeting` — `AppsTargetingProjection`: The `targeting` field contains an `AppsTargetingProjection` snapshot of the campaign’s supply placement and App Store countries or regions targeted at the time of the report. See [AppsTargetingProjection](appstargetingprojection.md) for details.
- `dailyBudget` — `ReportingMoney`: See [ReportingMoney](reportingmoney.md) for details.
- `startTime` — `date-time`: Campaign start time.
- `endTime` — `date-time`: Campaign end time.
- `lifetimeBudget` — `ReportingMoney`: Lifetime budget for the campaign. See [ReportingMoney](reportingmoney.md) for details.
- `bidStrategy` — `ReportingBidStrategy`: See [ReportingBidStrategy](reportingbidstrategy.md) for details.
- `adChannelType` — `AppsReportingCampaign.AdChannelType`: The advertising channel type for this campaign. Possible values: `SEARCH`, `DISPLAY`.
- `countryOrRegion` — `string`: Country or region groupBy dimension value.
- `deviceClass` — `string`: Device class groupBy dimension value.
- `gender` — `string`: Gender groupBy dimension value.
- `ageRange` — `string`: Age range groupBy dimension value.
- `locality` — `string`: Locality groupBy dimension value.
- `countryCode` — `string`: Country code groupBy dimension value.
- `adminArea` — `string`: Administrative area groupBy dimension value.

<a id="Discussion"></a>

## Discussion

The `AppsReportingCampaign` object is the campaign metadata embedded in apps campaign report rows. It captures the campaign’s identity, operational status, budget, bid strategy, and targeting projection at report time.

The `groupBy` dimensions specified in the report request determine the values of the dimension fields (`countryOrRegion`, `deviceClass`, `gender`, `ageRange`, etc.).

<a id="Example"></a>

### Example

```json
{
  "id": 555666777,
  "promotedObject": {
    "name": "AwayFinder"
  },
  "promotedObjectType": "APPSTORE_APP",
  "promotedObjectId": "123456789",
  "name": "AwayFinder - Search Results",
  "status": "ENABLED",
  "deleted": false,
  "displayStatus": "RUNNING",
  "modificationTime": "2025-01-10T08:00:00.000",
  "creationTime": "2024-11-01T08:00:00.000",
  "adAccountId": 987654321,
  "systemStatus": "RUNNING",
  "systemStatusReasons": [],
  "billingEvent": "TAPS",
  "systemStatusLimitingReasons": [],
  "targeting": {
    "supplyPlacement": {
      "include": ["APPSTORE_SEARCH_RESULTS"]
    },
    "lifetimeStorefronts": {
      "include": ["US"]
    },
    "countryOrRegion": {
      "include": ["US"]
    }
  },
  "dailyBudget": {
    "value": {
      "amount": "100.00",
      "currency": "USD"
    }
  },
  "startTime": "2024-11-01T08:00:00.000",
  "endTime": "2025-12-31T08:00:00.000",
  "lifetimeBudget": {
    "value": {
      "amount": "5000.00",
      "currency": "USD"
    }
  },
  "bidStrategy": {
    "bidStrategyType": "MANUAL_CPT",
    "bid": {
      "amount": "1.50",
      "currency": "USD"
    }
  },
  "adChannelType": "SEARCH",
  "countryOrRegion": "US",
  "deviceClass": "IPHONE",
  "gender": "F",
  "ageRange": "25-34",
  "locality": "San Francisco",
  "countryCode": "US",
  "adminArea": "CA"
}
```

## Topics

### Type Aliases

- [AppsReportingCampaign.AdChannelType](appsreportingcampaign/adchanneltype-data.typealias.md): The advertising channel type of the campaign at report time.
- [AppsReportingCampaign.BillingEvent](appsreportingcampaign/billingevent-data.typealias.md): The billing event of the campaign at report time.
- [AppsReportingCampaign.Status](appsreportingcampaign/status-data.typealias.md): Advertiser-configurable run state of the campaign at report time.
- [AppsReportingCampaign.SystemStatus](appsreportingcampaign/systemstatus-data.typealias.md): System-evaluated delivery state of the campaign at report time.

## See Also

- [AppsReportingRequest](appsreportingrequest.md): Request body for apps reporting queries.
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
- [AppsAdReportSummary](appsadreportsummary.md): The grand-total metrics aggregated across all rows in an Apps ad-level report.
