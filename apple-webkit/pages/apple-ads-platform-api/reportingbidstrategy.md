> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/reportingbidstrategy](https://developer.apple.com/documentation/apple-ads-platform-api/reportingbidstrategy)

# ReportingBidStrategy

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Bid strategy configuration as reported in report rows.

## Declaration

```
object ReportingBidStrategy
```

## Properties

- `bidStrategyType` — `ReportingBidStrategy.BidStrategyType`: The bid strategy applied. Possible values: `MANUAL_CPT`, `MAX_CONVERSIONS`, `MANUAL_CPM`, `MAX_ENGAGEMENTS`. Note: `MAX_CONVERSIONS` ad groups no longer use the deprecated `cpaCap` field. You configure conversion targeting via the `bidStrategy` object.
- `bid` — `Money`: The bid amount for manual bid strategies. `null` for automated strategies. See [Money](money.md).

<a id="Discussion"></a>

## Discussion

The `ReportingBidStrategy` captures the bid strategy type and optional bid amount for a campaign or ad group at report time. It’s embedded in reporting objects where the bid configuration is needed for analysis alongside performance data.

<a id="Example"></a>

### Example

```json
{
  "bidStrategyType": "MANUAL_CPT",
  "bid": {
    "amount": "2.50",
    "currency": "USD"
  }
}
```

## Topics

### Type Aliases

- [ReportingBidStrategy.BidStrategyType](reportingbidstrategy/bidstrategytype-data.typealias.md): Auction participation approach applied to the campaign or ad group at report time.

## See Also

- [TimeRange](timerange.md): Date range, time zone, and granularity settings for reporting requests.
- [Filter](filter.md): Filter condition for reporting requests.
- [Sorting](sorting.md): Sort condition for reporting requests.
- [RequestPagination](requestpagination.md): Pagination settings specific to reporting requests.
- [ReportingMoney](reportingmoney.md): A monetary value wrapper used in reporting contexts, capturing bid amounts and budgets at report time.
- [ReportingCampaignMin](reportingcampaignmin.md): Minimal campaign information included in nested report objects.
- [ReportingAdGroupMin](reportingadgroupmin.md): Minimal ad group information included in nested report objects.
- [ReportingCreativeSpec](reportingcreativespec.md): Creative specification embedded in report rows.
- [ReportingDestination](reportingdestination.md): Creative destination embedded in report rows.
- [ReportingKeyword](reportingkeyword.md): Keyword metadata in a report row.
- [ReportingSearchTerm](reportingsearchterm.md): Search term metadata in a report row.
- [ActionMetrics](actionmetrics.md): Action count metrics breakdown by attribution type.
- [CostMetrics](costmetrics.md): Cost metrics breakdown by attribution type.
- [RateMetrics](ratemetrics.md): Rate metrics breakdown by attribution type.
- [ReportingAdChannelType](reportingadchanneltype.md): The ad channel that served a report row’s metrics.
