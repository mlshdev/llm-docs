> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/alignment/init(horizontal:vertical:)](https://developer.apple.com/documentation/swiftui/alignment/init(horizontal:vertical:))

# init(horizontal:vertical:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a custom alignment value with the specified horizontal and vertical alignment guides.

## Declaration

```swift
init(horizontal: HorizontalAlignment, vertical: VerticalAlignment)
```

## Parameters

- `horizontal`: The alignment on the horizontal axis.
- `vertical`: The alignment on the vertical axis.

<a id="discussion"></a>

## Discussion

SwiftUI provides a variety of built-in alignments that combine built-in [HorizontalAlignment](../horizontalalignment.md) and [VerticalAlignment](../verticalalignment.md) guides. Use this initializer to create a custom alignment that makes use of a custom horizontal or vertical guide, or both.

For example, you can combine a custom vertical guide called `firstThird` with the built-in [center](../horizontalalignment/center.md) guide, and use it to configure a [ZStack](../zstack.md):

```swift
ZStack(alignment: Alignment(horizontal: .center, vertical: .firstThird)) {
    // ...
}
```

For more information about creating custom guides, including the code that creates the custom `firstThird` alignment in the example above, see [AlignmentID](../alignmentid.md).

## See Also

### Creating a custom alignment

- [horizontal](horizontal.md): The alignment on the horizontal axis.
- [vertical](vertical.md): The alignment on the vertical axis.
