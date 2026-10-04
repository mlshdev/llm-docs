> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple-ads-platform-api/reportingkeyword

# ReportingKeyword

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Keyword metadata in a report row.

## Declaration

```
object ReportingKeyword
```

## Properties

- `id` — `int64`: The keyword identifier.
- `campaignId` — `int64`: The identifier of the campaign that owns the keyword.
- `adAccountId` — `int64`: The identifier of the ad account that owns the keyword.
- `deleted` — `boolean`: `true` if the keyword has been deleted.
- `text` — `string`: The keyword text.
- `status` — `string`: The keyword’s status at the time captured in the report.
  **Allowed values:** `ENABLED`, `PAUSED`, `DELETED`
- `matchType` — `string`: The keyword’s match type.
  **Allowed values:** `BROAD`, `EXACT`
- `bid` — `Money`: See [Money](money.md) for details.
- `adGroupId` — `int64`: The identifier of the ad group that owns the keyword.
- `modificationTime` — `date-time`: The time the keyword was last modified.
- `creationTime` — `date-time`: The time the keyword was created.
- `displayStatus` — `string`: The computed display status of the keyword.
  **Allowed values:** `AD_GROUP_ON_HOLD`, `CAMPAIGN_ON_HOLD`, `DELETED`, `PAUSED`, `RUNNING`
- `adGroup` — `ReportingAdGroupMin`: See [ReportingAdGroupMin](reportingadgroupmin.md) for details.
- `countryOrRegion` — `string`: Country or region groupBy dimension value.
- `deviceClass` — `string`: Device class groupBy dimension value.
  **Allowed values:** `IPHONE`, `IPAD`

<a id="Discussion"></a>

## Discussion

The `ReportingKeyword` object is the keyword metadata embedded in keyword report rows and within search term rows (via the `keyword` field). It captures the keyword’s text, match type, bid amount, and status at report time, along with its organizational context (`campaignId`, `adGroupId`, `adAccountId`).

The `bid` field is the keyword-level bid amount in the account currency, and `adGroup` provides a lightweight summary of the parent ad group. The report populates the dimension fields (`countryOrRegion`, `deviceClass`) when you specify those dimensions in the report request.

<a id="Example"></a>

### Example

```json
{
  "id": 555666777,
  "campaignId": 123456789,
  "adAccountId": 987654321,
  "deleted": false,
  "text": "awayfinder travel app",
  "status": "ENABLED",
  "matchType": "BROAD",
  "bid": {
    "currency": "USD",
    "amount": "1.50"
  },
  "adGroupId": 234567891,
  "modificationTime": "2025-01-10T08:00:00.000",
  "creationTime": "2025-01-05T08:00:00.000",
  "displayStatus": "RUNNING",
  "adGroup": {
    "name": "AwayFinder Search - Broad",
    "deleted": false
  },
  "countryOrRegion": "US",
  "deviceClass": "IPHONE"
}
```

## See Also

- [TimeRange](timerange.md): Date range, time zone, and granularity settings for reporting requests.
- [Filter](filter.md): Filter condition for reporting requests.
- [Sorting](sorting.md): Sort condition for reporting requests.
- [RequestPagination](requestpagination.md): Pagination settings specific to reporting requests.
- [ReportingMoney](reportingmoney.md): A monetary value wrapper used in reporting contexts, capturing bid amounts and budgets at report time.
- [ReportingBidStrategy](reportingbidstrategy.md): Bid strategy configuration as reported in report rows.
- [ReportingCampaignMin](reportingcampaignmin.md): Minimal campaign information included in nested report objects.
- [ReportingAdGroupMin](reportingadgroupmin.md): Minimal ad group information included in nested report objects.
- [ReportingCreativeSpec](reportingcreativespec.md): Creative specification embedded in report rows.
- [ReportingDestination](reportingdestination.md): Creative destination embedded in report rows.
- [ReportingSearchTerm](reportingsearchterm.md): Search term metadata in a report row.
- [ActionMetrics](actionmetrics.md): Action count metrics breakdown by attribution type.
- [CostMetrics](costmetrics.md): Cost metrics breakdown by attribution type.
- [RateMetrics](ratemetrics.md): Rate metrics breakdown by attribution type.
- [ReportingAdChannelType](reportingadchanneltype.md): The ad channel that served a report row’s metrics.
