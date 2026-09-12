> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/contentcachingservice/ranges](https://developer.apple.com/documentation/devicemanagement/contentcachingservice/ranges)

# ContentCachingService.Ranges

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.13.4+ (deprecated in 27.0)

A range of IP addresses to cache.

> Use the declarative management `com.apple.configuration.content-cache.settings` configuration.

## Declaration

```
object ContentCachingService.Ranges
```

## Properties

- `first` — `string` (required): The first IP address in the range.

  Deprecated: macOS 27+
- `last` — `string` (required): The last IP address in the range.

  Deprecated: macOS 27+
- `type` — `string`: The IP address type.

  Deprecated: macOS 27+  
  **Default:** `IPv4`  
  **Allowed values:** `IPv4`, `IPv6`
