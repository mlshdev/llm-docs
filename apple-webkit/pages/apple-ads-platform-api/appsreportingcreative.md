> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appsreportingcreative](https://developer.apple.com/documentation/apple-ads-platform-api/appsreportingcreative)

# AppsReportingCreative

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Creative metadata for apps ads.

## Declaration

```
object AppsReportingCreative
```

## Properties

- `id` — `int64`: The creative’s unique identifier.
- `creativeType` — `AppsReportingCreative.CreativeType`: Possible values: `CUSTOM_PRODUCT_PAGE`, `DEFAULT_PRODUCT_PAGE`.
- `systemStatus` — `AppsReportingCreative.SystemStatus`: Possible values: `VALID`, `INVALID`, `PENDING`.
- `creativeSpec` — `ReportingCreativeSpec`: See [ReportingCreativeSpec](reportingcreativespec.md) for details.
- `destination` — `ReportingDestination`: See [ReportingDestination](reportingdestination.md) for details.

<a id="Discussion"></a>

## Discussion

The `AppsReportingCreative` object is the creative metadata snapshot embedded within `AppsReportingAd` in apps ad report rows. The `creativeType` field identifies the creative format: `DEFAULT_PRODUCT_PAGE` and `CUSTOM_PRODUCT_PAGE` both use App Store product page assets.

The `systemStatus` field reflects the creative’s validity at report time: `INVALID` creatives can’t serve and won’t generate impressions. The `creativeSpec` provides a summary of the creative’s content configuration, and `destination` captures the click-through destination.

<a id="Example"></a>

### Example

```json
{
  "id": 555666777,
  "creativeType": "CUSTOM_PRODUCT_PAGE",
  "systemStatus": "VALID",
  "creativeSpec": {
    "language": "en-US"
  },
  "destination": {
    "parameters": {
      "productPageId": "555666777",
      "url": "https://apps.apple.com/us/app/awayfinder/id123456789"
    }
  }
}
```

## Topics

### Type Aliases

- [AppsReportingCreative.CreativeType](appsreportingcreative/creativetype-data.typealias.md): The visual format and placement context of the creative at report time.
- [AppsReportingCreative.SystemStatus](appsreportingcreative/systemstatus-data.typealias.md): System-evaluated validation state of the creative at report time.

## See Also

- [AppsReportingRequest](appsreportingrequest.md): Request body for apps reporting queries.
- [AppsReportingCampaign](appsreportingcampaign.md): Campaign metadata for apps report rows.
- [AppsReportingAdGroup](appsreportingadgroup.md): Ad group metadata for apps report rows.
- [AppsReportingAd](appsreportingad.md): Ad metadata for apps report rows.
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
