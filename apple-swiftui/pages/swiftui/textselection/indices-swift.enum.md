> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textselection/indices-swift.enum](https://developer.apple.com/documentation/swiftui/textselection/indices-swift.enum)

# TextSelection.Indices

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The indices of the current selection.

## Declaration

```swift
enum Indices
```

## Topics

### Enumeration Cases

- [TextSelection.Indices.multiSelection(\_:)](indices-swift.enum/multiselection%28__%29.md): The range-set of the selections.
- [TextSelection.Indices.selection(\_:)](indices-swift.enum/selection%28__%29.md): The range of the single selection. This may also an represent insertion points if `range.lowerBound == range.upperBound`.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
