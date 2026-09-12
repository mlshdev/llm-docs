> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/bulkkeywordcreate/status-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/bulkkeywordcreate/status-data.typealias)

# BulkKeywordCreate.Status

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The keyword’s status for a bulk keyword create item.

## Declaration

```
string BulkKeywordCreate.Status
```

## Possible Values

- `ENABLED`: Keyword is active and eligible to serve.
- `PAUSED`: Keyword is paused and will not serve.

<a id="Discussion"></a>

## Discussion

Set this within each item’s `data` to determine whether the keyword begins serving as soon as the bulk create request completes.

<a id="Example"></a>

### Example

```json
{
  "status": "ENABLED"
}
```
