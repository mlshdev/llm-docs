> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/alignmentid/defaultvalue(in:)](https://developer.apple.com/documentation/swiftui/alignmentid/defaultvalue(in:))

# defaultValue(in:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Calculates a default value for the corresponding guide in the specified context.

## Declaration

```swift
static func defaultValue(in context: ViewDimensions) -> CGFloat
```

## Parameters

- `context`: The context of the view that you apply the alignment guide to. The context gives you the view’s dimensions, as well as the values of other alignment guides that apply to the view, including both built-in and custom guides. You can use any of these values, if helpful, to calculate the value for your custom guide.

<a id="return-value"></a>

## Return Value

The offset of the guide from the origin in the view’s coordinate space.

<a id="discussion"></a>

## Discussion

Implement this method when you create a type that conforms to the [AlignmentID](../alignmentid.md) protocol. Use the method to calculate the default offset of the corresponding alignment guide. SwiftUI interprets the value that you return as an offset in the coordinate space of the view that’s being laid out. For example, you can use the context to return a value that’s one-third of the height of the view:

```swift
private struct FirstThirdAlignment: AlignmentID {
    static func defaultValue(in context: ViewDimensions) -> CGFloat {
        context.height / 3
    }
}
```

You can override the default value that this method returns for a particular guide by adding the [alignmentGuide(\_:computeValue:)](../view/alignmentguide%28__computevalue_%29.md) view modifier to a particular view.
