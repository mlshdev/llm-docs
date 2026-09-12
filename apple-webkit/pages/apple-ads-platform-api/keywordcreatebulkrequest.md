> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/keywordcreatebulkrequest](https://developer.apple.com/documentation/apple-ads-platform-api/keywordcreatebulkrequest)

# KeywordCreateBulkRequest

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A bulk request to create multiple Keyword objects.

## Declaration

```
object KeywordCreateBulkRequest
```

## Properties

- `allowPartialSuccess` — `boolean`: If `true`, allows some operations in the batch to succeed. Other operations can still fail without blocking the successful ones.
- `items` — `[KeywordCreateBulkRequestItem]`: Array of bulk item objects to create. Each item has the shape `{ correlationId: int64, data: BulkKeywordCreate }`.

<a id="Discussion"></a>

## Discussion

The `KeywordCreateBulkRequest` object allows creating multiple keywords in a single API call.

<a id="Example"></a>

### Example

```json
{
  "allowPartialSuccess": true,
  "items": [
    {
      "correlationId": 1,
      "data": {
        "adGroupId": 555666777,
        "text": "awayfinder",
        "matchType": "EXACT",
        "bid": {
          "amount": "2.50",
          "currency": "USD"
        },
        "status": "ENABLED"
      }
    },
    {
      "correlationId": 2,
      "data": {
        "adGroupId": 555666777,
        "text": "travel planner app",
        "matchType": "BROAD",
        "bid": {
          "amount": "1.75",
          "currency": "USD"
        },
        "status": "ENABLED"
      }
    }
  ]
}
```

## See Also

- [BaseBulkRequest](basebulkrequest.md): Base type for all bulk operation requests.
- [BulkOperationRequest](bulkoperationrequest.md): Container for a bulk operation request.
- [BulkItemResult](bulkitemresult.md): The base result envelope for a single item in a bulk operation response.
- [BulkItemResultKeyword](bulkitemresultkeyword.md): A bulk operation result item that includes the affected Keyword entity.
- [BulkItemResultNegativeKeyword](bulkitemresultnegativekeyword.md): A bulk operation result item that includes the affected NegativeKeyword entity.
- [BulkResponse](bulkresponse.md): The generic response envelope returned by all bulk operations.
- [KeywordCreateBulkResponse](keywordcreatebulkresponse.md): The response from a bulk Keyword creation request, containing results for each item.
- [KeywordUpdateBulkRequest](keywordupdatebulkrequest.md): A bulk request to update multiple Keyword objects.
- [KeywordUpdateBulkResponse](keywordupdatebulkresponse.md): The response from a bulk Keyword update request, containing results for each item.
- [NegativeKeywordCreateBulkRequest](negativekeywordcreatebulkrequest.md): A bulk request to create multiple negative keywords.
- [NegativeKeywordCreateBulkResponse](negativekeywordcreatebulkresponse.md): The response from a bulk negative keyword creation request, containing results for each item.
- [NegativeKeywordUpdateBulkRequest](negativekeywordupdatebulkrequest.md): A bulk request to update multiple negative keywords.
- [NegativeKeywordUpdateBulkResponse](negativekeywordupdatebulkresponse.md): The response from a bulk negative keyword update request, containing results for each item.
- [BulkKeywordCreate](bulkkeywordcreate.md): The `data` payload for a single keyword-create item within a bulk create request.
- [BulkKeywordUpdate](bulkkeywordupdate.md): The payload for a single keyword-update.
