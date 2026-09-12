> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/negativekeywordupdatebulkrequest](https://developer.apple.com/documentation/apple-ads-platform-api/negativekeywordupdatebulkrequest)

# NegativeKeywordUpdateBulkRequest

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A bulk request to update multiple negative keywords.

## Declaration

```
object NegativeKeywordUpdateBulkRequest
```

## Properties

- `allowPartialSuccess` — `boolean`: If `true`, allows some operations in the batch to succeed. Other operations can still fail without blocking the successful ones.
- `items` — `[NegativeKeywordUpdateBulkRequestItem]`: Array of bulk item objects to update. Each item has the shape `{ correlationId: int64, data: BulkNegativeKeywordUpdate }`. The `id` field is required in `BulkNegativeKeywordUpdate`.

<a id="Discussion"></a>

## Discussion

The `NegativeKeywordUpdateBulkRequest` object allows updating multiple negative keywords in a single API call.

<a id="Example"></a>

### Example

```json
{
  "allowPartialSuccess": true,
  "items": [
    {
      "correlationId": 123456789,
      "data": {
        "id": 987654321,
        "status": "PAUSED"
      }
    },
    {
      "correlationId": 223456789,
      "data": {
        "id": 555666777,
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
- [KeywordCreateBulkRequest](keywordcreatebulkrequest.md): A bulk request to create multiple Keyword objects.
- [KeywordCreateBulkResponse](keywordcreatebulkresponse.md): The response from a bulk Keyword creation request, containing results for each item.
- [KeywordUpdateBulkRequest](keywordupdatebulkrequest.md): A bulk request to update multiple Keyword objects.
- [KeywordUpdateBulkResponse](keywordupdatebulkresponse.md): The response from a bulk Keyword update request, containing results for each item.
- [NegativeKeywordCreateBulkRequest](negativekeywordcreatebulkrequest.md): A bulk request to create multiple negative keywords.
- [NegativeKeywordCreateBulkResponse](negativekeywordcreatebulkresponse.md): The response from a bulk negative keyword creation request, containing results for each item.
- [NegativeKeywordUpdateBulkResponse](negativekeywordupdatebulkresponse.md): The response from a bulk negative keyword update request, containing results for each item.
- [BulkKeywordCreate](bulkkeywordcreate.md): The `data` payload for a single keyword-create item within a bulk create request.
- [BulkKeywordUpdate](bulkkeywordupdate.md): The payload for a single keyword-update.
