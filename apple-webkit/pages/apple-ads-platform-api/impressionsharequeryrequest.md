> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/impressionsharequeryrequest](https://developer.apple.com/documentation/apple-ads-platform-api/impressionsharequeryrequest)

# ImpressionShareQueryRequest

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Request body for the impression share query endpoint.

## Declaration

```
object ImpressionShareQueryRequest
```

## Properties

- `filters` — `[Filter]` (required): Filter conditions. A filter on `promotedObjectId` is required. Omitting it will result in a 400 error.
- `sorting` — `[Sorting]`: Sort criteria. Maximum 2 sort fields.
- `timeRange` — `ImpressionShareTimeRange` (required): Specifies the date window to query. Timezone is fixed to UTC. See [ImpressionShareTimeRange](impressionsharetimerange.md) for details.
- `pagination` — `RequestPagination`: Pagination controls. Default `pageSize` is `100`. Maximum `pageSize` is `10000`. See [RequestPagination](requestpagination.md) for details.
- `options` — `ImpressionShareOptions`: Allows additional configuration of the impression share calculation. See [ImpressionShareOptions](impressionshareoptions.md) for details.

<a id="Example"></a>

## Example

```json
{
  "fields": [],
  "filters": [
    {
      "field": "promotedObjectId",
      "operator": "EQUALS",
      "value": "123456789"
    },
    {
      "field": "countryOrRegion",
      "operator": "EQUALS",
      "value": "US"
    }
  ],
  "sorting": [
    {
      "field": "highImpressionShare",
      "order": "DESC"
    }
  ],
  "timeRange": {
    "start": "2025-01-01",
    "end": "2025-01-07",
    "timeZone": "UTC",
    "granularity": "DAILY"
  },
  "pagination": {
    "offset": 0,
    "pageSize": 20
  },
  "options": {
    "impressionShareReportType": "FIRST_SLOT"
  }
}
```

## See Also

- [ImpressionShareQueryResponse](impressionsharequeryresponse.md): The impression share query endpoint returns this response wrapper.
- [ImpressionShareRow](impressionsharerow.md): A single impression share data row.
- [ImpressionShareTimeRange](impressionsharetimerange.md): Time range for impression share queries.
- [ImpressionShareOptions](impressionshareoptions.md): Report options for impression share queries.
- [SearchTermPopularityQueryRequest](searchtermpopularityqueryrequest.md): Request body for the search term popularity query endpoint.
- [SearchTermPopularityQueryResponse](searchtermpopularityqueryresponse.md): A response wrapper for search term popularity query results.
- [SearchTermPopularityRow](searchtermpopularityrow.md): A single search term popularity data row.
- [SearchTermPopularityTimeRange](searchtermpopularitytimerange.md): Time range for search term popularity queries.
- [ImpressionShareResultContainer](impressionshareresultcontainer.md): Container holding the array of impression share rows a query returns.
- [SearchTermPopularityResultContainer](searchtermpopularityresultcontainer.md): Container holding the array of search term popularity rows a query returns.
- [KeywordInsights](keywordinsights.md): Insights for keyword reporting rows.
- [ReportingKeywordBidRecommendation](reportingkeywordbidrecommendation.md): Keyword bid recommendation details, including a suggested bid amount.
