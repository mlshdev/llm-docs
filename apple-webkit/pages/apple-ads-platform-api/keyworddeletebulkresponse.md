> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple-ads-platform-api/keyworddeletebulkresponse

# KeywordDeleteBulkResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+ · apple-ads-platform-api 1.0+

The response from a bulk Keyword deletion request.

## Declaration

```
object KeywordDeleteBulkResponse
```

## Properties

- `result` — `[BulkItemResult]`: Per-item deletion results, one entry per request item. See [BulkItemResult](bulkitemresult.md). Read-only.
- `error` — `Error`: See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

`KeywordDeleteBulkResponse` is the response envelope returned by the bulk keyword deletion endpoint. It doesn’t return the deleted `Keyword`, only whether each item succeeded. The response populates `error` only when the system rejects the overall request before processing any items.

<a id="Example"></a>

### Example

```json
{
  "result": [
    {
      "correlationId": 0,
      "operation": "DELETE",
      "success": true
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
- [KeywordDeleteBulkRequest](keyworddeletebulkrequest.md): A bulk request to delete multiple Keyword objects by their identifiers.
- [KeywordUpdateBulkRequest](keywordupdatebulkrequest.md): A bulk request to update multiple Keyword objects.
- [KeywordUpdateBulkResponse](keywordupdatebulkresponse.md): The response from a bulk Keyword update request, containing results for each item.
- [NegativeKeywordCreateBulkRequest](negativekeywordcreatebulkrequest.md): A bulk request to create multiple negative keywords.
- [NegativeKeywordCreateBulkResponse](negativekeywordcreatebulkresponse.md): The response from a bulk negative keyword creation request, containing results for each item.
- [NegativeKeywordDeleteBulkRequest](negativekeyworddeletebulkrequest.md): A bulk request to delete multiple negative keywords by their identifiers.
- [NegativeKeywordDeleteBulkResponse](negativekeyworddeletebulkresponse.md): The response from a bulk negative keyword deletion request.
