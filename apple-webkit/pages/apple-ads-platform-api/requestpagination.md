> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/requestpagination](https://developer.apple.com/documentation/apple-ads-platform-api/requestpagination)

# RequestPagination

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Pagination settings specific to reporting requests.

## Declaration

```
object RequestPagination
```

## Properties

- `offset` — `integer`: The starting position (zero-based index) for the result set (for example, `0` for the first page, `50` for the second page when `pageSize` is `50`).
- `pageSize` — `integer`: The number of records to return per page. Maximum 5000, default 100.

<a id="Discussion"></a>

## Discussion

The `RequestPagination` controls which page of results is returned for a reporting request.

The `ResponsePagination` object on the report response returns the total number of available results. Use it to calculate how many additional pages exist and to determine the `offset` for subsequent requests when iterating through large result sets.

<a id="Example"></a>

### Example

```json
{
  "offset": 0,
  "pageSize": 50
}
```

## See Also

- [TimeRange](timerange.md): Date range, time zone, and granularity settings for reporting requests.
- [Filter](filter.md): Filter condition for reporting requests.
- [Sorting](sorting.md): Sort condition for reporting requests.
- [ReportingMoney](reportingmoney.md): A monetary value wrapper used in reporting contexts, capturing bid amounts and budgets at report time.
- [ReportingBidStrategy](reportingbidstrategy.md): Bid strategy configuration as reported in report rows.
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
