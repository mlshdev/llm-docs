> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/progressmanager/property/summary

# Summary

**Framework:** Foundation  
**Kind:** Associated Type  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The type used for aggregated summaries of this property.

## Declaration

```swift
associatedtype Summary : Equatable, Sendable
```

<a id="discussion"></a>

## Discussion

This associated type represents the type used when summarizing property values across multiple progress managers in a subtree. The currently allowed types are `Int`, `Double`, `[String?]`, `[URL?]` or `[UInt64]`.
