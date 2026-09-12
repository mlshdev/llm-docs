> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/basebulkrequest](https://developer.apple.com/documentation/apple-ads-platform-api/basebulkrequest)

# BaseBulkRequest

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Base type for all bulk operation requests.

## Declaration

```
object BaseBulkRequest
```

## Properties

- `allowPartialSuccess` — `boolean`: If `true`, the batch continues processing without rolling back successful operations even when individual items fail. Per-item error details appear in the response. If `false`, any failure rejects the entire batch.

<a id="Discussion"></a>

## Discussion

The `BaseBulkRequest` object is the common base type extended by all typed bulk request objects (`KeywordCreateBulkRequest`, `NegativeKeywordUpdateBulkRequest`, etc.) and by `BulkOperationRequest`. It carries the `allowPartialSuccess` flag that controls batch failure behavior.

<a id="Example"></a>

### Example

```json
{
  "allowPartialSuccess": true
}
```

## See Also

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
- [NegativeKeywordUpdateBulkRequest](negativekeywordupdatebulkrequest.md): A bulk request to update multiple negative keywords.
- [NegativeKeywordUpdateBulkResponse](negativekeywordupdatebulkresponse.md): The response from a bulk negative keyword update request, containing results for each item.
- [BulkKeywordCreate](bulkkeywordcreate.md): The `data` payload for a single keyword-create item within a bulk create request.
- [BulkKeywordUpdate](bulkkeywordupdate.md): The payload for a single keyword-update.
