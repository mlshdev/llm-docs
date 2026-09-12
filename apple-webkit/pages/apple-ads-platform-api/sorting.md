> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/sorting](https://developer.apple.com/documentation/apple-ads-platform-api/sorting)

# Sorting

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Sort condition for reporting requests.

## Declaration

```
object Sorting
```

## Properties

- `field` — `string`: The name of the field to sort on (for example, localSpend, impressions).
- `order` — `string`: The sort direction for the specified field. Possible values: `ASC` (lowest to highest), `DESC` (highest to lowest).
  **Allowed values:** `ASC`, `DESC`

<a id="Discussion"></a>

## Discussion

The `Sorting` specifies a single sort condition for a reporting request.

Multiple `Sorting` objects can be included in the `sorting` array of a reporting request to apply multi-level sorting: results are sorted by the first entry first, then by subsequent entries for ties. When you omit `sorting`, the API sorts results by entity `id` in ascending order by default.

<a id="Example"></a>

### Example

```json
{
  "field": "localSpend",
  "order": "DESC"
}
```

## See Also

- [TimeRange](timerange.md): Date range, time zone, and granularity settings for reporting requests.
- [Filter](filter.md): Filter condition for reporting requests.
- [RequestPagination](requestpagination.md): Pagination settings specific to reporting requests.
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
