> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/keywordupdatebulkrequest](https://developer.apple.com/documentation/apple-ads-platform-api/keywordupdatebulkrequest)

# KeywordUpdateBulkRequest

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A bulk request to update multiple Keyword objects.

## Declaration

```
object KeywordUpdateBulkRequest
```

## Properties

- `allowPartialSuccess` — `boolean`: If `true`, allows some operations in the batch to succeed. Other operations can still fail without blocking the successful ones.
- `items` — `[KeywordUpdateBulkRequestItem]`: Array of bulk item objects to update. Each item has the shape `{ correlationId: int64, data: BulkKeywordUpdate }`. The `id` field is required in `BulkKeywordUpdate`.

<a id="Discussion"></a>

## Discussion

The `KeywordUpdateBulkRequest` object allows updating multiple keywords in a single API call.

<a id="Example"></a>

### Example

```json
{
  "allowPartialSuccess": true,
  "items": [
    {
      "correlationId": 123456789,
      "data": {
        "id": 555666777,
        "bid": {
          "amount": "2.50",
          "currency": "USD"
        },
        "status": "ENABLED"
      }
    },
    {
      "correlationId": 987654321,
      "data": {
        "id": 111222333,
        "bid": {
          "amount": "1.75",
          "currency": "USD"
        },
        "status": "PAUSED"
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
- [KeywordCreateBulkRequest](keywordcreatebulkrequest.md): A bulk request to create multiple Keyword objects.
- [KeywordCreateBulkResponse](keywordcreatebulkresponse.md): The response from a bulk Keyword creation request, containing results for each item.
- [KeywordUpdateBulkResponse](keywordupdatebulkresponse.md): The response from a bulk Keyword update request, containing results for each item.
- [NegativeKeywordCreateBulkRequest](negativekeywordcreatebulkrequest.md): A bulk request to create multiple negative keywords.
- [NegativeKeywordCreateBulkResponse](negativekeywordcreatebulkresponse.md): The response from a bulk negative keyword creation request, containing results for each item.
- [NegativeKeywordUpdateBulkRequest](negativekeywordupdatebulkrequest.md): A bulk request to update multiple negative keywords.
- [NegativeKeywordUpdateBulkResponse](negativekeywordupdatebulkresponse.md): The response from a bulk negative keyword update request, containing results for each item.
- [BulkKeywordCreate](bulkkeywordcreate.md): The `data` payload for a single keyword-create item within a bulk create request.
- [BulkKeywordUpdate](bulkkeywordupdate.md): The payload for a single keyword-update.
