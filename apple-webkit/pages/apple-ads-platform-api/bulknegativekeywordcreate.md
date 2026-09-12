> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/bulknegativekeywordcreate](https://developer.apple.com/documentation/apple-ads-platform-api/bulknegativekeywordcreate)

# BulkNegativeKeywordCreate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The `data` payload for a single negative-keyword-create item within a bulk create request.

## Declaration

```
object BulkNegativeKeywordCreate
```

## Properties

- `campaignId` — `int64`: The campaign in which the negative keyword is created. Nullable.
- `adGroupId` — `int64`: The ad group in which the negative keyword is created. Nullable.
- `text` — `string` (required): The negative keyword text. Minimum length of 1.
  **Minimum length:** `1`
- `matchType` — `BulkNegativeKeywordCreate.MatchType`: The negative keyword’s match type. See [KeywordMatchType](keywordmatchtype.md).
- `status` — `BulkNegativeKeywordCreate.Status`: The negative keyword’s status. See [NegativeKeywordStatus](negativekeywordstatus.md).

## Topics

### Type Aliases

- [BulkNegativeKeywordCreate.MatchType](bulknegativekeywordcreate/matchtype-data.typealias.md): The negative keyword’s match type for a bulk negative-keyword create item.
- [BulkNegativeKeywordCreate.Status](bulknegativekeywordcreate/status-data.typealias.md): The negative keyword’s status for a bulk negative-keyword create item.

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
