> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/keywordcreate/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/keywordcreate/status-data.typealias)

# KeywordCreate.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Whether this keyword is active and eligible to serve at creation.

## Declaration

```
string KeywordCreate.Status
```

## Possible Values

- `ENABLED`: Keyword is active and eligible to serve.
- `PAUSED`: Keyword is paused and will not serve.

<a id="Discussion"></a>

## Discussion

Include `status` in the create request to determine whether the new keyword begins competing in auctions immediately or starts paused.

<a id="Example"></a>

### Example

```json
{
  "status": "ENABLED"
}
```

See [KeywordStatus](../keywordstatus.md) for additional context.
