> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/metricmanager/loghandle(category:)

# logHandle(category:)

**Framework:** MetricKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Returns an `OSLog` handle for creating custom signpost metrics that MetricKit aggregates.

## Declaration

```swift
static func logHandle(category: String) -> OSLog
```

## Mentioned In

- [Monitoring app performance with MetricKit](../monitoring-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

The method signature and return type are identical; only the type name changes.

```swift
let log = MetricManager.logHandle(category: "rendering")
```
