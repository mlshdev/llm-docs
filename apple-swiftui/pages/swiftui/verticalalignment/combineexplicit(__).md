> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/verticalalignment/combineexplicit(_:)](https://developer.apple.com/documentation/swiftui/verticalalignment/combineexplicit(_:))

# combineExplicit(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Merges a sequence of explicit alignment values produced by this instance.

## Declaration

```swift
func combineExplicit<S>(_ values: S) -> CGFloat? where S : Sequence, S.Element == CGFloat?
```

<a id="discussion"></a>

## Discussion

For most alignment types, this method returns the mean of all non-`nil` values. However, some types use other rules. For example, [firstTextBaseline](firsttextbaseline.md) returns the minimum value, while [lastTextBaseline](lasttextbaseline.md) returns the maximum value.

## See Also

### Creating a custom alignment

- [init(\_:)](init%28__%29.md): Creates a custom vertical alignment of the specified type.
