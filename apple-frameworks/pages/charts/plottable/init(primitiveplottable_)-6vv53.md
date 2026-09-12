> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/plottable/init(primitiveplottable:)-6vv53](https://developer.apple.com/documentation/charts/plottable/init(primitiveplottable:)-6vv53)

# init(primitivePlottable:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates the plottable value for the underlying type, if any, that corresponds to the primitive plottable value.

## Declaration

```swift
nonisolated init?(primitivePlottable: Self.PrimitivePlottable)
```

<a id="discussion"></a>

## Discussion

This initializer fails if there is no corresponding plottable value.
