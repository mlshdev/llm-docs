> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/negativekeywordcreate](https://developer.apple.com/documentation/apple-ads-platform-api/negativekeywordcreate)

# NegativeKeywordCreate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The request body for creating a new negative keyword.

## Declaration

```
object NegativeKeywordCreate
```

## Properties

- `campaignId` — `int64`: Scopes this negative keyword to a specific campaign. Required for campaign-level negatives when calling `POST /v1/negative-keywords` ([Create a Negative Keyword](post-negative-keywords.md)) directly. Must not be set for ad group-level negatives.
- `adGroupId` — `int64`: Scopes this negative keyword to a specific ad group. Required for ad group-level negatives when calling `POST /v1/negative-keywords` ([Create a Negative Keyword](post-negative-keywords.md)) directly. Don’t set `campaignId` when providing this field.
- `text` — `string` (required): The keyword text to exclude. Immutable after creation. To correct it, delete the existing record and create a new one.
  **Minimum length:** `1`
- `matchType` — `NegativeKeywordCreate.MatchType`: The match type for this negative keyword. See [KeywordMatchType](keywordmatchtype.md). Defaults to `BROAD` if omitted. Immutable after creation.
- `status` — `NegativeKeywordCreate.Status`: Whether this negative keyword is active. See [NegativeKeywordStatus](negativekeywordstatus.md). Defaults to `ENABLED` if omitted.

<a id="Discussion"></a>

## Discussion

The `NegativeKeywordCreate` object is the request payload for adding a negative keyword to a campaign or ad group.

<a id="Example"></a>

### Example

```json
{
  "campaignId": 123456789,
  "text": "AwayFinder competitor app",
  "matchType": "PHRASE",
  "status": "ENABLED"
}
```

## Topics

### Type Aliases

- [NegativeKeywordCreate.MatchType](negativekeywordcreate/matchtype-data.typealias.md): The matching behavior to use when creating this negative keyword.
- [NegativeKeywordCreate.Status](negativekeywordcreate/status-data.typealias.md): Whether this negative keyword is active at creation.

## See Also

- [NegativeKeyword](negativekeyword.md): A keyword exclusion that prevents ads from showing when a search query matches the excluded term.
- [NegativeKeywordUpdate](negativekeywordupdate.md): The request body for updating an existing negative keyword.
- [NegativeKeywordResponse](negativekeywordresponse.md): The response object for a negative keyword operation.
- [NegativeKeywordQueryResponse](negativekeywordqueryresponse.md): The response object for a negative keyword query, containing matched results and pagination metadata.
