> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/searchtermpopularityqueryrequest](https://developer.apple.com/documentation/apple-ads-platform-api/searchtermpopularityqueryrequest)

# SearchTermPopularityQueryRequest

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Request body for the search term popularity query endpoint.

## Declaration

```
object SearchTermPopularityQueryRequest
```

## Properties

- `filters` — `[Filter]`: Filter conditions to scope results to specific countries or genres. See [Filterable Fields](https://developer.apple.com/documentation/apple-ads-platform-api/query-app-search-term-popularity-data#Filterable-Fields) for `genre` values matching App Store genre names.
- `sorting` — `[Sorting]`: Sort criteria. Maximum two sort fields. Default genre ASC, `rankInGenre` ASC.
- `timeRange` — `SearchTermPopularityTimeRange` (required): timeRange is required and specifies the date window to query. Timezone is fixed to UTC. See [SearchTermPopularityTimeRange](searchtermpopularitytimerange.md) for granularity rules.
- `pagination` — `RequestPagination`: See [RequestPagination](requestpagination.md) for details. This endpoint caps `pageSize` at 5000.

<a id="Example"></a>

## Example

```json
{
  "fields": [
    "rankInGenre",
    "searchPopularityInGenre",
    "searchPopularity1to100",
    "searchPopularity1to5"
  ],
  "filters": [
    {
      "field": "countryOrRegion",
      "operator": "EQUALS",
      "value": "US"
    },
    {
      "field": "genre",
      "operator": "EQUALS",
      "value": "PRODUCTIVITY_UTILITIES"
    }
  ],
  "sorting": [
    {
      "field": "rankInGenre",
      "order": "ASC"
    }
  ],
  "timeRange": {
    "start": "2025-01-05",
    "end": "2025-01-11",
    "granularity": "WEEKLY_SUN_SAT"
  },
  "pagination": {
    "offset": 0,
    "pageSize": 20
  }
}
```

## See Also

- [ImpressionShareQueryRequest](impressionsharequeryrequest.md): Request body for the impression share query endpoint.
- [ImpressionShareQueryResponse](impressionsharequeryresponse.md): The impression share query endpoint returns this response wrapper.
- [ImpressionShareRow](impressionsharerow.md): A single impression share data row.
- [ImpressionShareTimeRange](impressionsharetimerange.md): Time range for impression share queries.
- [ImpressionShareOptions](impressionshareoptions.md): Report options for impression share queries.
- [SearchTermPopularityQueryResponse](searchtermpopularityqueryresponse.md): A response wrapper for search term popularity query results.
- [SearchTermPopularityRow](searchtermpopularityrow.md): A single search term popularity data row.
- [SearchTermPopularityTimeRange](searchtermpopularitytimerange.md): Time range for search term popularity queries.
- [ImpressionShareResultContainer](impressionshareresultcontainer.md): Container holding the array of impression share rows a query returns.
- [SearchTermPopularityResultContainer](searchtermpopularityresultcontainer.md): Container holding the array of search term popularity rows a query returns.
- [KeywordInsights](keywordinsights.md): Insights for keyword reporting rows.
- [ReportingKeywordBidRecommendation](reportingkeywordbidrecommendation.md): Keyword bid recommendation details, including a suggested bid amount.
