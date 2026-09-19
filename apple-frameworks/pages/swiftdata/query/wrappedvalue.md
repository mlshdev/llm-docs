> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftdata/query/wrappedvalue

# wrappedValue

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The most recent fetched result from the Query.

## Declaration

```swift
@MainActor @preconcurrency var wrappedValue: Result { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> When an fetch error occurs, `wrappedValue` retains results from the last successful fetch. Its value will update once a new fetch succeeds.
