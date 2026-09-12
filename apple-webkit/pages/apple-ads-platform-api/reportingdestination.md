> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/reportingdestination](https://developer.apple.com/documentation/apple-ads-platform-api/reportingdestination)

# ReportingDestination

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Creative destination embedded in report rows.

## Declaration

```
object ReportingDestination
```

## Properties

- `parameters` — `ReportingDestination.Parameters`: Destination parameters as a key-value map. Content varies by creative and destination type.

<a id="Discussion"></a>

## Discussion

The `ReportingDestination` captures the destination parameters of a creative as recorded at report time.

<a id="Example"></a>

### Example

```json
{
  "parameters": {
    "productPageId": "555666777",
    "url": "https://apps.apple.com/us/app/awayfinder/id123456789"
  }
}
```

## Topics

### Dictionaries

- [ReportingDestination.Parameters](reportingdestination/parameters-data.dictionary.md): Destination-specific parameters for the creative’s post-tap experience, as recorded at report time.

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
- [ReportingKeyword](reportingkeyword.md): Keyword metadata in a report row.
- [ReportingSearchTerm](reportingsearchterm.md): Search term metadata in a report row.
- [ActionMetrics](actionmetrics.md): Action count metrics breakdown by attribution type.
- [CostMetrics](costmetrics.md): Cost metrics breakdown by attribution type.
- [RateMetrics](ratemetrics.md): Rate metrics breakdown by attribution type.
- [ReportingAdChannelType](reportingadchanneltype.md): The ad channel that served a report row’s metrics.
