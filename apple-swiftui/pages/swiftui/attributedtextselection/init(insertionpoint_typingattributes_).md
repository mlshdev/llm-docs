> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/attributedtextselection/init(insertionpoint:typingattributes:)](https://developer.apple.com/documentation/swiftui/attributedtextselection/init(insertionpoint:typingattributes:))

# init(insertionPoint:typingAttributes:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Initialize a selection to a single insertion point.

## Declaration

```swift
init(insertionPoint: AttributedString.Index, typingAttributes: AttributeContainer? = nil)
```

## Parameters

- `insertionPoint`: The index of the string where the charet should be positioned.
- `typingAttributes`: The attributes for the next character that is typed, or `nil` if they should be inferred from the attributes on the text.
