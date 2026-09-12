> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/contentcachingrangesitemobject](https://developer.apple.com/documentation/devicemanagement/contentcachingrangesitemobject)

# ContentCachingRangesItemObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 27.0+

A range of IP addresses to cache.

## Declaration

```
object ContentCachingRangesItemObject
```

## Properties

- `first` — `string` (required): The first IP address in the range.
- `last` — `string` (required): The last IP address in the range.
- `type` — `string`: The IP address type.
  **Default:** `IPv4`  
  **Allowed values:** `IPv4`, `IPv6`
