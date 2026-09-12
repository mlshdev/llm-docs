> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layoutsubview/sizethatfits(_:)](https://developer.apple.com/documentation/swiftui/layoutsubview/sizethatfits(_:))

# sizeThatFits(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Asks the subview for its size.

## Declaration

```swift
func sizeThatFits(_ proposal: ProposedViewSize) -> CGSize
```

## Parameters

- `proposal`: A proposed size for the subview. In SwiftUI, views choose their own size, but can take a size proposal from their parent view into account when doing so.

<a id="return-value"></a>

## Return Value

The size that the subview chooses for itself, given the proposal from its container view.

<a id="discussion"></a>

## Discussion

Use this method as a convenience to get the [width](../viewdimensions/width.md) and [height](../viewdimensions/height.md) properties of the [ViewDimensions](../viewdimensions.md) instance returned by the [dimensions(in:)](dimensions%28in_%29.md) method, reported as a [CGSize](https://developer.apple.com/documentation/corefoundation/cgsize) instance.

## See Also

### Getting subview characteristics

- [dimensions(in:)](dimensions%28in_%29.md): Asks the subview for its dimensions and alignment guides.
- [spacing](spacing.md): The subviews’s preferred spacing values.
- [priority](priority.md): The layout priority of the subview.
