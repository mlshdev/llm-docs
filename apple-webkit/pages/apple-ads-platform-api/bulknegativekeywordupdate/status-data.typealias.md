> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/bulknegativekeywordupdate/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/bulknegativekeywordupdate/status-data.typealias)

# BulkNegativeKeywordUpdate.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The updated negative keyword status for a bulk negative-keyword update item.

## Declaration

```
string BulkNegativeKeywordUpdate.Status
```

## Possible Values

- `ENABLED`: The negative keyword is active and will suppress ad delivery for matching search queries.
- `PAUSED`: The negative keyword is paused and will not suppress any search queries until re-enabled.

<a id="Discussion"></a>

## Discussion

Include this field within an item’s `data` to re-enable or pause the negative keyword’s suppression as part of the same bulk update request.

<a id="Example"></a>

### Example

```json
{
  "status": "PAUSED"
}
```
