> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/timerange](https://developer.apple.com/documentation/apple-ads-platform-api/timerange)

# TimeRange

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Date range, time zone, and granularity settings for reporting requests.

## Declaration

```
object TimeRange
```

## Properties

- `start` — `date`: The start date in YYYY-MM-DD format. The range is inclusive of this date.
- `end` — `date`: The end date in YYYY-MM-DD format. The range is inclusive of this date.
- `timeZone` — `string`: The time zone for the report date range. The default is ORTZ (org timezone). Both ORTZ and UTC are supported for all reports except search term-level, which only supports ORTZ.
  **Default:** `ORTZ`  
  **Allowed values:** `UTC`, `ORTZ`
- `granularity` — `string`: Time period breakdown for granularMetrics in the response. When specified, the response includes granularMetrics broken down by this period. Possible values: `HOURLY`, `DAILY`, `WEEKLY`, `MONTHLY`. HOURLY granularity is not supported for ad-level or search term-level reports.
  **Allowed values:** `MONTHLY`, `WEEKLY`, `DAILY`, `HOURLY`

<a id="Discussion"></a>

## Discussion

The `TimeRange` defines the date window, timezone, and optional time-series breakdown for a reporting request.

<a id="Example"></a>

### Example

```json
{
  "start": "2025-01-01",
  "end": "2025-01-10",
  "timeZone": "ORTZ",
  "granularity": "DAILY"
}
```

## See Also

- [Filter](filter.md): Filter condition for reporting requests.
- [Sorting](sorting.md): Sort condition for reporting requests.
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
