> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/edgeinsets/inset(by:edges:)](https://developer.apple.com/documentation/swiftui/edgeinsets/inset(by:edges:))

# inset(by:edges:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns an inset that has been modified by the corner sizes in the specified edges. When two corner insets diverge in their values for the specified edge, the maximum inset value will be used. For example, when the top edge is specified, the top inset will be adjusted by the larger of the two heights from the top leading and trailing corner inset sizes.

## Declaration

```swift
func inset(by corners: RectangleCornerInsets, edges: Edge.Set = .all) -> EdgeInsets
```

## Parameters

- `corners`: The corner sizes to add to the insets.
- `edges`: The set of corner edges which should be added to the insets.
