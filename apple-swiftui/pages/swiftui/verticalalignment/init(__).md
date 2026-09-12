> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/verticalalignment/init(_:)](https://developer.apple.com/documentation/swiftui/verticalalignment/init(_:))

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a custom vertical alignment of the specified type.

## Declaration

```swift
init(_ id: any AlignmentID.Type)
```

## Parameters

- `id`: The type of an identifier that uniquely identifies a vertical alignment.

<a id="discussion"></a>

## Discussion

Use this initializer to create a custom vertical alignment. Define an [AlignmentID](../alignmentid.md) type, and then use that type to create a new static property on [VerticalAlignment](../verticalalignment.md):

```swift
private struct FirstThirdAlignment: AlignmentID {
    static func defaultValue(in context: ViewDimensions) -> CGFloat {
        context.height / 3
    }
}

extension VerticalAlignment {
    static let firstThird = VerticalAlignment(FirstThirdAlignment.self)
}
```

Every vertical alignment instance that you create needs a unique identifier. For more information, see [AlignmentID](../alignmentid.md).

## See Also

### Creating a custom alignment

- [combineExplicit(\_:)](combineexplicit%28__%29.md): Merges a sequence of explicit alignment values produced by this instance.
