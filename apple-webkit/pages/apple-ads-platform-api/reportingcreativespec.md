> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/reportingcreativespec](https://developer.apple.com/documentation/apple-ads-platform-api/reportingcreativespec)

# ReportingCreativeSpec

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Creative specification embedded in report rows.

## Declaration

```
object ReportingCreativeSpec
```

## Properties

- `language` — `string`: The BCP 47 language tag of the creative (for example, `en-US`, `fr-FR`).

<a id="Discussion"></a>

## Discussion

The `ReportingCreativeSpec` captures the locale language of a creative as recorded at report time. It’s embedded in ad and creative reporting objects where language-level segmentation is required.

<a id="Example"></a>

### Example

```json
{
  "language": "en-US"
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
- [ReportingDestination](reportingdestination.md): Creative destination embedded in report rows.
- [ReportingKeyword](reportingkeyword.md): Keyword metadata in a report row.
- [ReportingSearchTerm](reportingsearchterm.md): Search term metadata in a report row.
- [ActionMetrics](actionmetrics.md): Action count metrics breakdown by attribution type.
- [CostMetrics](costmetrics.md): Cost metrics breakdown by attribution type.
- [RateMetrics](ratemetrics.md): Rate metrics breakdown by attribution type.
- [ReportingAdChannelType](reportingadchanneltype.md): The ad channel that served a report row’s metrics.
