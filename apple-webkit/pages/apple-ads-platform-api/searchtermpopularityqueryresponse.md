> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/searchtermpopularityqueryresponse](https://developer.apple.com/documentation/apple-ads-platform-api/searchtermpopularityqueryresponse)

# SearchTermPopularityQueryResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A response wrapper for search term popularity query results.

## Declaration

```
object SearchTermPopularityQueryResponse
```

## Properties

- `result` — `SearchTermPopularityResultContainer`: Container object holding the matching rows. Contains a `rows` array of [SearchTermPopularityRow](searchtermpopularityrow.md) objects. See [SearchTermPopularityResultContainer](searchtermpopularityresultcontainer.md). Read-only.
- `pagination` — `ResponsePagination`: Pagination metadata for the current result page, including `offset`, and `pageSize`. Read-only.
- `error` — `Error`: See [Error](error.md) for details. Read-only.

<a id="Discussion"></a>

## Discussion

Each row in `result.rows` always includes the following dimension fields:

| Field | Description |
| --- | --- |
| `countryOrRegion` | The App Store country or region for the search volume data |
| `genre` | The App Store genre category |
| `searchTerm` | The search term text |
| `week` or `month` | The date field corresponding to the selected granularity |

Rows include the following dimension fields only when requested via the request’s `fields` array.

| Field | Description |
| --- | --- |
| `rankInGenre` | The search term’s rank by volume within the genre of the given App Store country or region. |
| `searchPopularityInGenre` | Relative popularity score within the genre (1–100) of the given App Store country or region. |
| `searchPopularity1to100` | Popularity score on a 1–100 scale across all genres within the country or region with `100` = most popular overall |
| `searchPopularity1to5` | Relative popularity on a 1–5 scale across all genres of the given App Store country or region. |

See [SearchTermPopularityRow](searchtermpopularityrow.md) for field descriptions.

<a id="Example"></a>

### Example

```json
{
  "result": {
    "rows": [
      {
        "week": "2025-01-05",
        "countryOrRegion": "US",
        "genre": "PRODUCTIVITY_UTILITIES",
        "searchTerm": "task manager",
        "rankInGenre": 1,
        "searchPopularityInGenre": 95,
        "searchPopularity1to100": 88,
        "searchPopularity1to5": 5
      }
    ]
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
- [SearchTermPopularityQueryRequest](searchtermpopularityqueryrequest.md): Request body for the search term popularity query endpoint.
- [SearchTermPopularityRow](searchtermpopularityrow.md): A single search term popularity data row.
- [SearchTermPopularityTimeRange](searchtermpopularitytimerange.md): Time range for search term popularity queries.
- [ImpressionShareResultContainer](impressionshareresultcontainer.md): Container holding the array of impression share rows a query returns.
- [SearchTermPopularityResultContainer](searchtermpopularityresultcontainer.md): Container holding the array of search term popularity rows a query returns.
- [KeywordInsights](keywordinsights.md): Insights for keyword reporting rows.
- [ReportingKeywordBidRecommendation](reportingkeywordbidrecommendation.md): Keyword bid recommendation details, including a suggested bid amount.
