> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/negativekeywordcreatebulkrequestitem](https://developer.apple.com/documentation/apple-ads-platform-api/negativekeywordcreatebulkrequestitem)

# NegativeKeywordCreateBulkRequestItem

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A single item in a negative-keyword bulk-create request.

## Declaration

```
object NegativeKeywordCreateBulkRequestItem
```

## Properties

- `correlationId` — `int64`: Client-supplied identifier used to correlate this item with its result in the response.
- `data` — `BulkNegativeKeywordCreate`: The negative keyword fields to create. See [BulkNegativeKeywordCreate](bulknegativekeywordcreate.md).

<a id="Discussion"></a>

## Discussion

The `data` object accepts only the fields defined on [BulkNegativeKeywordCreate](bulknegativekeywordcreate.md), keeping each item’s payload identical in shape to a single-item create request.

<a id="Example"></a>

### Example

```json
{
  "correlationId": 123456789,
  "data": {
    "campaignId": 987654321,
    "adGroupId": 555666777,
    "text": "free AwayFinder",
    "matchType": "BROAD",
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
