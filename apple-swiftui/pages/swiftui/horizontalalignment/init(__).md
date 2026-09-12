> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/horizontalalignment/init(_:)](https://developer.apple.com/documentation/swiftui/horizontalalignment/init(_:))

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a custom horizontal alignment of the specified type.

## Declaration

```swift
init(_ id: any AlignmentID.Type)
```

## Parameters

- `id`: The type of an identifier that uniquely identifies a horizontal alignment.

<a id="discussion"></a>

## Discussion

Use this initializer to create a custom horizontal alignment. Define an [AlignmentID](../alignmentid.md) type, and then use that type to create a new static property on [HorizontalAlignment](../horizontalalignment.md):

```swift
private struct OneQuarterAlignment: AlignmentID {
    static func defaultValue(in context: ViewDimensions) -> CGFloat {
        context.width / 4
    }
}

extension HorizontalAlignment {
    static let oneQuarter = HorizontalAlignment(OneQuarterAlignment.self)
}
```

Every horizontal alignment instance that you create needs a unique identifier. For more information, see [AlignmentID](../alignmentid.md).

## See Also

### Creating a custom alignment

- [combineExplicit(\_:)](combineexplicit%28__%29.md): Merges a sequence of explicit alignment values produced by this instance.
