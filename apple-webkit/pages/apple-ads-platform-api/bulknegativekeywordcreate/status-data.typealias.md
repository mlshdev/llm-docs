> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/bulknegativekeywordcreate/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/bulknegativekeywordcreate/status-data.typealias)

# BulkNegativeKeywordCreate.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The negative keyword’s status for a bulk negative-keyword create item.

## Declaration

```
string BulkNegativeKeywordCreate.Status
```

## Possible Values

- `ENABLED`: The negative keyword is active and will suppress ad delivery for matching search queries.
- `PAUSED`: The negative keyword is paused and will not suppress any search queries until re-enabled.

<a id="Discussion"></a>

## Discussion

Set this within each item’s `data` to determine whether the negative keyword begins suppressing matching search queries as soon as the bulk create request completes.

<a id="Example"></a>

### Example

```json
{
  "status": "ENABLED"
}
```
