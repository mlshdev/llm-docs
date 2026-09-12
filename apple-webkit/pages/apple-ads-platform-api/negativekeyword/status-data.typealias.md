> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/negativekeyword/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/negativekeyword/status-data.typealias)

# NegativeKeyword.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Advertiser-configurable active state for this negative keyword.

## Declaration

```
string NegativeKeyword.Status
```

## Possible Values

- `ENABLED`: The negative keyword is active and will suppress ad delivery for matching search queries.
- `PAUSED`: The negative keyword is paused and will not suppress any search queries until re-enabled.

<a id="Discussion"></a>

## Discussion

This field controls suppression directly; pausing it lets matching search queries resume triggering ads again.

<a id="Example"></a>

### Example

```json
{
  "status": "ENABLED"
}
```

See [NegativeKeywordStatus](../negativekeywordstatus.md) for additional context.
