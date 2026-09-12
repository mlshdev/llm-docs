> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/negativekeywordupdate/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/negativekeywordupdate/status-data.typealias)

# NegativeKeywordUpdate.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Whether this negative keyword should be active after the update.

## Declaration

```
string NegativeKeywordUpdate.Status
```

## Possible Values

- `ENABLED`: The negative keyword is active and will suppress ad delivery for matching search queries.
- `PAUSED`: The negative keyword is paused and will not suppress any search queries until re-enabled.

<a id="Discussion"></a>

## Discussion

Set this to `PAUSED` to temporarily allow traffic from the excluded term without deleting the negative keyword.

<a id="Example"></a>

### Example

```json
{
  "status": "PAUSED"
}
```

See [NegativeKeywordStatus](../negativekeywordstatus.md) for additional context.
