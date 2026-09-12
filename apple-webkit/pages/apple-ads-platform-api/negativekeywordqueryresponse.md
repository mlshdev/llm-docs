> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/negativekeywordqueryresponse](https://developer.apple.com/documentation/apple-ads-platform-api/negativekeywordqueryresponse)

# NegativeKeywordQueryResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The response object for a negative keyword query, containing matched results and pagination metadata.

## Declaration

```
object NegativeKeywordQueryResponse
```

## Properties

- `result` — `[NegativeKeyword]`: Array of matching `NegativeKeyword` objects. Read-only.
- `pagination` — `QueryPaginationResult`: Pagination metadata for the query result, supporting offset-based navigation through large result sets. See [QueryPaginationResult](querypaginationresult.md). Read-only.
- `error` — `Error`: Error details if the request failed. See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The `NegativeKeywordQueryResponse` object is returned by the negative keyword query endpoint and contains the filtered, sorted, and paginated set of `NegativeKeyword` objects matching the request.

To scope results to a specific campaign or ad group, filter by status, or retrieve by ID, use the `QueryRequest` body with `filters`, `sorting`, and `pagination`.

<a id="Example"></a>

### Example

```json
{
  "result": [
    {
      "id": 777888999,
      "adAccountId": 123456789,
      "campaignId": 444555666,
      "text": "free app",
      "matchType": "BROAD",
      "status": "ENABLED",
      "deleted": false,
      "creationTime": "2025-01-10T08:00:00.000",
      "modificationTime": "2025-01-10T08:00:00.000"
    },
    {
      "id": 777888997,
      "adAccountId": 123456789,
      "campaignId": 444555666,
      "text": "free trial",
      "matchType": "EXACT",
      "status": "ENABLED",
      "deleted": false,
      "creationTime": "2025-01-09T10:00:00.000",
      "modificationTime": "2025-01-09T10:00:00.000"
    }
  ],
  "pagination": {
    "totalCount": 2,
    "offset": 0,
    "pageSize": 20
  }
}
```

## See Also

- [NegativeKeyword](negativekeyword.md): A keyword exclusion that prevents ads from showing when a search query matches the excluded term.
- [NegativeKeywordCreate](negativekeywordcreate.md): The request body for creating a new negative keyword.
- [NegativeKeywordUpdate](negativekeywordupdate.md): The request body for updating an existing negative keyword.
- [NegativeKeywordResponse](negativekeywordresponse.md): The response object for a negative keyword operation.
