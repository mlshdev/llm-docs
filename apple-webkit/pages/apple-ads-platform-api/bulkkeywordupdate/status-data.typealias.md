> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/bulkkeywordupdate/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/bulkkeywordupdate/status-data.typealias)

# BulkKeywordUpdate.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The updated keyword status for a bulk keyword update item.

## Declaration

```
string BulkKeywordUpdate.Status
```

## Possible Values

- `ENABLED`: Keyword is active and eligible to serve.
- `PAUSED`: Keyword is paused and will not serve.

<a id="Discussion"></a>

## Discussion

Include this field within an item’s `data` to enable or pause the keyword as part of the same bulk update request.

<a id="Example"></a>

### Example

```json
{
  "status": "PAUSED"
}
```
