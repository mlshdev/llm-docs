> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/reportingcampaignmin](https://developer.apple.com/documentation/apple-ads-platform-api/reportingcampaignmin)

# ReportingCampaignMin

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Minimal campaign information included in nested report objects.

## Declaration

```
object ReportingCampaignMin
```

<a id="Discussion"></a>

## Discussion

The `ReportingCampaignMin` object is a lightweight campaign summary embedded in report row objects. It provides enough context to identify the parent campaign without duplicating the full [Campaign](campaign.md) structure. Currently this object carries no additional fields beyond what is available on the parent row.

## See Also

- [TimeRange](timerange.md): Date range, time zone, and granularity settings for reporting requests.
- [Filter](filter.md): Filter condition for reporting requests.
- [Sorting](sorting.md): Sort condition for reporting requests.
- [RequestPagination](requestpagination.md): Pagination settings specific to reporting requests.
- [ReportingMoney](reportingmoney.md): A monetary value wrapper used in reporting contexts, capturing bid amounts and budgets at report time.
- [ReportingBidStrategy](reportingbidstrategy.md): Bid strategy configuration as reported in report rows.
- [ReportingAdGroupMin](reportingadgroupmin.md): Minimal ad group information included in nested report objects.
- [ReportingCreativeSpec](reportingcreativespec.md): Creative specification embedded in report rows.
- [ReportingDestination](reportingdestination.md): Creative destination embedded in report rows.
- [ReportingKeyword](reportingkeyword.md): Keyword metadata in a report row.
- [ReportingSearchTerm](reportingsearchterm.md): Search term metadata in a report row.
- [ActionMetrics](actionmetrics.md): Action count metrics breakdown by attribution type.
- [CostMetrics](costmetrics.md): Cost metrics breakdown by attribution type.
- [RateMetrics](ratemetrics.md): Rate metrics breakdown by attribution type.
- [ReportingAdChannelType](reportingadchanneltype.md): The ad channel that served a report row’s metrics.
