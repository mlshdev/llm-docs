> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/impressionshareoptions](https://developer.apple.com/documentation/apple-ads-platform-api/impressionshareoptions)

# ImpressionShareOptions

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Report options for impression share queries.

## Declaration

```
object ImpressionShareOptions
```

## Properties

- `impressionShareReportType` — `string`: The ad position scope for impression share metrics. `FIRST_SLOT` (default): Impression share and metrics for the top ad position only. `ALL_SLOTS`: Impression share and metrics aggregated across all ad positions. Default: `"FIRST_SLOT"`.
  **Default:** `FIRST_SLOT`  
  **Allowed values:** `FIRST_SLOT`, `ALL_SLOTS`

<a id="Discussion"></a>

## Discussion

The `ImpressionShareOptions` object controls how a query aggregates impression share data. Set `impressionShareReportType` in the `options` field of an [ImpressionShareQueryRequest](impressionsharequeryrequest.md) to choose between first-slot-only or all-slots data.

<a id="Example"></a>

### Example

```json
{
  "impressionShareReportType": "ALL_SLOTS"
}
```

## See Also

- [ImpressionShareQueryRequest](impressionsharequeryrequest.md): Request body for the impression share query endpoint.
- [ImpressionShareQueryResponse](impressionsharequeryresponse.md): The impression share query endpoint returns this response wrapper.
- [ImpressionShareRow](impressionsharerow.md): A single impression share data row.
- [ImpressionShareTimeRange](impressionsharetimerange.md): Time range for impression share queries.
- [SearchTermPopularityQueryRequest](searchtermpopularityqueryrequest.md): Request body for the search term popularity query endpoint.
- [SearchTermPopularityQueryResponse](searchtermpopularityqueryresponse.md): A response wrapper for search term popularity query results.
- [SearchTermPopularityRow](searchtermpopularityrow.md): A single search term popularity data row.
- [SearchTermPopularityTimeRange](searchtermpopularitytimerange.md): Time range for search term popularity queries.
- [ImpressionShareResultContainer](impressionshareresultcontainer.md): Container holding the array of impression share rows a query returns.
- [SearchTermPopularityResultContainer](searchtermpopularityresultcontainer.md): Container holding the array of search term popularity rows a query returns.
- [KeywordInsights](keywordinsights.md): Insights for keyword reporting rows.
- [ReportingKeywordBidRecommendation](reportingkeywordbidrecommendation.md): Keyword bid recommendation details, including a suggested bid amount.
