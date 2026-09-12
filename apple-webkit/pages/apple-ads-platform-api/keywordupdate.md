> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/keywordupdate](https://developer.apple.com/documentation/apple-ads-platform-api/keywordupdate)

# KeywordUpdate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The request body for updating an existing Keyword object.

## Declaration

```
object KeywordUpdate
```

## Properties

- `bid` — `Money`: Per-keyword bid override as a `Money` object. See [Money](money.md). Must be a valid `Money` value. `null` isn’t accepted and returns an error. Mutable.
- `status` — `KeywordUpdate.Status`: Whether this keyword is active and eligible to serve. Values: `ENABLED` or `PAUSED`. See [KeywordStatus](keywordstatus.md). Mutable.

<a id="Discussion"></a>

## Discussion

The `KeywordUpdate` object is the request payload for modifying an existing keyword. The request accepts only `bid` and `status` fields. You can’t include `text` or `matchType` in an update request. The schema doesn’t accept these fields.

<a id="Example"></a>

### Example

```json
{
  "bid": {
    "amount": "2.50",
    "currency": "USD"
  },
  "status": "ENABLED"
}
```

## Topics

### Type Aliases

- [KeywordUpdate.Status](keywordupdate/status-data.typealias.md): Whether this keyword should be active and eligible to serve after the update.

## See Also

- [Keyword](keyword.md): The targeting unit that connects a user’s search query to the ad group’s ads.
- [KeywordCreate](keywordcreate.md): The request body for creating a new Keyword object.
- [KeywordResponse](keywordresponse.md): The response object for a Keyword operation.
- [KeywordQueryResponse](keywordqueryresponse.md): The response object for a Keyword query, containing matched results and pagination metadata.
