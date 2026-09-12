> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/impressionsharetimerange](https://developer.apple.com/documentation/apple-ads-platform-api/impressionsharetimerange)

# ImpressionShareTimeRange

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Time range for impression share queries.

## Declaration

```
object ImpressionShareTimeRange
```

## Properties

- `start` — `date` (required): Start date in YYYY-MM-DD format. When `granularity` is `WEEKLY_SUN_SAT`, this date must be a Sunday.
- `end` — `date` (required): End date in YYYY-MM-DD format.
- `timeZone` — `string`: Timezone. Fixed to `UTC`. Not user-configurable. Default: `"UTC"`.
  **Allowed values:** `UTC`
- `granularity` — `string` (required): Aggregation period. `DAILY` aggregates per day, with a maximum window of 30 days (inclusive), and populates the `day` field (not the `week` field) in each row. `WEEKLY_SUN_SAT` aggregates per Sunday-to-Saturday week, with a maximum window of 4 weeks, and populates the `week` field (not the `day` field) with the Sunday start date. The `start` date must be a Sunday. Possible values: `DAILY`, `WEEKLY_SUN_SAT`.
  **Allowed values:** `DAILY`, `WEEKLY_SUN_SAT`

<a id="Discussion"></a>

## Discussion

The `ImpressionShareTimeRange` object specifies the date window and granularity for an impression share report.

<a id="Example"></a>

### Example

```json
{
  "start": "2025-01-01",
  "end": "2025-01-30",
  "timeZone": "UTC",
  "granularity": "DAILY"
}
```

## See Also

- [ImpressionShareQueryRequest](impressionsharequeryrequest.md): Request body for the impression share query endpoint.
- [ImpressionShareQueryResponse](impressionsharequeryresponse.md): The impression share query endpoint returns this response wrapper.
- [ImpressionShareRow](impressionsharerow.md): A single impression share data row.
- [ImpressionShareOptions](impressionshareoptions.md): Report options for impression share queries.
- [SearchTermPopularityQueryRequest](searchtermpopularityqueryrequest.md): Request body for the search term popularity query endpoint.
- [SearchTermPopularityQueryResponse](searchtermpopularityqueryresponse.md): A response wrapper for search term popularity query results.
- [SearchTermPopularityRow](searchtermpopularityrow.md): A single search term popularity data row.
- [SearchTermPopularityTimeRange](searchtermpopularitytimerange.md): Time range for search term popularity queries.
- [ImpressionShareResultContainer](impressionshareresultcontainer.md): Container holding the array of impression share rows a query returns.
- [SearchTermPopularityResultContainer](searchtermpopularityresultcontainer.md): Container holding the array of search term popularity rows a query returns.
- [KeywordInsights](keywordinsights.md): Insights for keyword reporting rows.
- [ReportingKeywordBidRecommendation](reportingkeywordbidrecommendation.md): Keyword bid recommendation details, including a suggested bid amount.
