> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/searchtermpopularitytimerange](https://developer.apple.com/documentation/apple-ads-platform-api/searchtermpopularitytimerange)

# SearchTermPopularityTimeRange

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Time range for search term popularity queries.

## Declaration

```
object SearchTermPopularityTimeRange
```

## Properties

- `start` — `string` (required): The start date of the range, in `YYYY-MM-DD` format.
- `end` — `string` (required): The end date of the range, in `YYYY-MM-DD` format.
- `timeZone` — `string`: Timezone. Fixed to `UTC`. Not user-configurable. Default: `"UTC"`.
  **Allowed values:** `UTC`
- `granularity` — `string` (required): Aggregation period. `WEEKLY_SUN_SAT` uses fixed Sunday–Saturday weeks and is generated Mondays at 07:00 UTC for the preceding Sunday through Saturday week, with a rolling retention of 65 weeks. `MONTHLY` uses calendar months and is refreshed on the 5th of each month UTC for the prior calendar month, with a rolling retention of 15 months. Possible values: `WEEKLY_SUN_SAT`, `MONTHLY`.
  **Allowed values:** `WEEKLY_SUN_SAT`, `MONTHLY`

<a id="Discussion"></a>

## Discussion

The `SearchTermPopularityTimeRange` object specifies the date window and granularity for a search term popularity report. Date format and retention period differ by granularity.

> **Note**

> **Note:** For `MONTHLY` granularity, the response truncates the date field to `YYYY-MM`.

<a id="Example"></a>

### Example

```json
{
  "start": "2025-01-01",
  "end": "2025-03-31",
  "timeZone": "UTC",
  "granularity": "MONTHLY"
}
```

## See Also

- [ImpressionShareQueryRequest](impressionsharequeryrequest.md): Request body for the impression share query endpoint.
- [ImpressionShareQueryResponse](impressionsharequeryresponse.md): The impression share query endpoint returns this response wrapper.
- [ImpressionShareRow](impressionsharerow.md): A single impression share data row.
- [ImpressionShareTimeRange](impressionsharetimerange.md): Time range for impression share queries.
- [ImpressionShareOptions](impressionshareoptions.md): Report options for impression share queries.
- [SearchTermPopularityQueryRequest](searchtermpopularityqueryrequest.md): Request body for the search term popularity query endpoint.
- [SearchTermPopularityQueryResponse](searchtermpopularityqueryresponse.md): A response wrapper for search term popularity query results.
- [SearchTermPopularityRow](searchtermpopularityrow.md): A single search term popularity data row.
- [ImpressionShareResultContainer](impressionshareresultcontainer.md): Container holding the array of impression share rows a query returns.
- [SearchTermPopularityResultContainer](searchtermpopularityresultcontainer.md): Container holding the array of search term popularity rows a query returns.
- [KeywordInsights](keywordinsights.md): Insights for keyword reporting rows.
- [ReportingKeywordBidRecommendation](reportingkeywordbidrecommendation.md): Keyword bid recommendation details, including a suggested bid amount.
