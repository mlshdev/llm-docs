> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/keywordupdate/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/keywordupdate/status-data.typealias)

# KeywordUpdate.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Whether this keyword should be active and eligible to serve after the update.

## Declaration

```
string KeywordUpdate.Status
```

## Possible Values

- `ENABLED`: Keyword is active and eligible to serve.
- `PAUSED`: Keyword is paused and will not serve.

<a id="Discussion"></a>

## Discussion

Send `status: PAUSED` to stop an existing keyword from competing in auctions, or `ENABLED` to resume it.

<a id="Example"></a>

### Example

```json
{
  "status": "PAUSED"
}
```

See [KeywordStatus](../keywordstatus.md) for additional context.
