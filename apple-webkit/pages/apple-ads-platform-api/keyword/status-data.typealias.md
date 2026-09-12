> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/keyword/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/keyword/status-data.typealias)

# Keyword.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Advertiser-configurable serving state for this keyword.

## Declaration

```
string Keyword.Status
```

## Possible Values

- `ENABLED`: Keyword is active and eligible to serve.
- `PAUSED`: Keyword is paused and will not serve.

<a id="Discussion"></a>

## Discussion

This field controls auction eligibility directly, separate from the system-computed factors reflected in [Keyword.DisplayStatus](displaystatus-data.typealias.md).

<a id="Example"></a>

### Example

```json
{
  "status": "ENABLED"
}
```

See [KeywordStatus](../keywordstatus.md) for additional context.
