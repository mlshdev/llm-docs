> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/reportingadgroupmin](https://developer.apple.com/documentation/apple-ads-platform-api/reportingadgroupmin)

# ReportingAdGroupMin

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Minimal ad group information included in nested report objects.

## Declaration

```
object ReportingAdGroupMin
```

## Properties

- `name` — `string`: The ad group name.
- `deleted` — `boolean`: `true` if the ad group has been deleted.

<a id="Discussion"></a>

## Discussion

The `ReportingAdGroupMin` object is a lightweight ad group summary embedded in report row objects (for example, within [ReportingKeyword](reportingkeyword.md)). It provides enough context to identify the parent ad group without duplicating the full [AdGroup](adgroup.md) structure.

<a id="Example"></a>

### Example

```json
{
  "name": "AwayFinder Search - Brand",
  "deleted": false
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
- [ReportingCreativeSpec](reportingcreativespec.md): Creative specification embedded in report rows.
- [ReportingDestination](reportingdestination.md): Creative destination embedded in report rows.
- [ReportingKeyword](reportingkeyword.md): Keyword metadata in a report row.
- [ReportingSearchTerm](reportingsearchterm.md): Search term metadata in a report row.
- [ActionMetrics](actionmetrics.md): Action count metrics breakdown by attribution type.
- [CostMetrics](costmetrics.md): Cost metrics breakdown by attribution type.
- [RateMetrics](ratemetrics.md): Rate metrics breakdown by attribution type.
- [ReportingAdChannelType](reportingadchanneltype.md): The ad channel that served a report row’s metrics.
