> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/keywordupdatebulkrequestitem](https://developer.apple.com/documentation/apple-ads-platform-api/keywordupdatebulkrequestitem)

# KeywordUpdateBulkRequestItem

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A single item in a keyword bulk-update request.

## Declaration

```
object KeywordUpdateBulkRequestItem
```

## Properties

- `correlationId` — `int64`: Client-supplied identifier used to correlate this item with its result in the response.
- `data` — `BulkKeywordUpdate` (required): The keyword fields to update. See [BulkKeywordUpdate](bulkkeywordupdate.md).

<a id="Discussion"></a>

## Discussion

The `data` object accepts only the fields defined on [BulkKeywordUpdate](bulkkeywordupdate.md), keeping each item’s payload identical in shape to a single-item update request.

<a id="Example"></a>

### Example

```json
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
- [NegativeKeywordUpdateBulkRequest](negativekeywordupdatebulkrequest.md): A bulk request to update multiple negative keywords.
- [NegativeKeywordUpdateBulkResponse](negativekeywordupdatebulkresponse.md): The response from a bulk negative keyword update request, containing results for each item.
- [BulkKeywordCreate](bulkkeywordcreate.md): The `data` payload for a single keyword-create item within a bulk create request.
