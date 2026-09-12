> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/negativekeywordupdate](https://developer.apple.com/documentation/apple-ads-platform-api/negativekeywordupdate)

# NegativeKeywordUpdate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The request body for updating an existing negative keyword.

## Declaration

```
object NegativeKeywordUpdate
```

## Properties

- `status` — `NegativeKeywordUpdate.Status`: Whether this negative keyword is active. See [NegativeKeywordStatus](negativekeywordstatus.md). Mutable.

<a id="Discussion"></a>

## Discussion

The `NegativeKeywordUpdate` object is the request payload for modifying an existing negative keyword. An update request can include only `status`. The schema rejects `text` and `matchType`. Set `status` to `PAUSED` to temporarily allow traffic from the excluded term, or `ENABLED` to re-activate the exclusion.

<a id="Example"></a>

### Example

```json
{
  "status": "PAUSED"
}
```

## Topics

### Type Aliases

- [NegativeKeywordUpdate.Status](negativekeywordupdate/status-data.typealias.md): Whether this negative keyword should be active after the update.

## See Also

- [NegativeKeyword](negativekeyword.md): A keyword exclusion that prevents ads from showing when a search query matches the excluded term.
- [NegativeKeywordCreate](negativekeywordcreate.md): The request body for creating a new negative keyword.
- [NegativeKeywordResponse](negativekeywordresponse.md): The response object for a negative keyword operation.
- [NegativeKeywordQueryResponse](negativekeywordqueryresponse.md): The response object for a negative keyword query, containing matched results and pagination metadata.
