> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textselection/isinsertion](https://developer.apple.com/documentation/swiftui/textselection/isinsertion)

# isInsertion

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Return `true` if the selection is an insertion point.

## Declaration

```swift
var isInsertion: Bool { get }
```

<a id="discussion"></a>

## Discussion

An insertion point effectively represents a range that contains no characters, indicating a location in the string. This location refers to the point in the text where new characters will be inserted. In other words, it represents cases when the start and end index are equal.
