> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/negativekeywordcreate/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/negativekeywordcreate/status-data.typealias)

# NegativeKeywordCreate.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Whether this negative keyword is active at creation.

## Declaration

```
string NegativeKeywordCreate.Status
```

## Possible Values

- `ENABLED`: The negative keyword is active and will suppress ad delivery for matching search queries.
- `PAUSED`: The negative keyword is paused and will not suppress any search queries until re-enabled.

<a id="Discussion"></a>

## Discussion

Include `status` in the create request to determine whether the negative keyword begins suppressing matching search queries immediately or starts paused.

<a id="Example"></a>

### Example

```json
{
  "status": "ENABLED"
}
```

See [NegativeKeywordStatus](../negativekeywordstatus.md) for additional context.
