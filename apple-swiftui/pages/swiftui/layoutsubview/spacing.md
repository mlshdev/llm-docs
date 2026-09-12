> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layoutsubview/spacing](https://developer.apple.com/documentation/swiftui/layoutsubview/spacing)

# spacing

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The subviews’s preferred spacing values.

## Declaration

```swift
var spacing: ViewSpacing { get }
```

<a id="discussion"></a>

## Discussion

This [ViewSpacing](../viewspacing.md) instance indicates how much space a subview in a custom layout prefers to have between it and the next view. It contains preferences for all edges, and might take into account the type of both this and the adjacent view. If your [Layout](../layout.md) type places subviews based on spacing preferences, use this instance to compute a distance between this subview and the next. See [placeSubviews(in:proposal:subviews:cache:)](../layout/placesubviews%28in_proposal_subviews_cache_%29.md) for an example.

You can also merge this instance with instances from other subviews to construct a new instance that’s suitable for the subviews’ container. See [spacing(subviews:cache:)](../layout/spacing%28subviews_cache_%29.md).

## See Also

### Getting subview characteristics

- [dimensions(in:)](dimensions%28in_%29.md): Asks the subview for its dimensions and alignment guides.
- [sizeThatFits(\_:)](sizethatfits%28__%29.md): Asks the subview for its size.
- [priority](priority.md): The layout priority of the subview.
