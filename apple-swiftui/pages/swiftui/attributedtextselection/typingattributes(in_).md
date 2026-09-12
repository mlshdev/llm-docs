> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/attributedtextselection/typingattributes(in:)](https://developer.apple.com/documentation/swiftui/attributedtextselection/typingattributes(in:))

# typingAttributes(in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the typing attributes for a corresponding text.

## Declaration

```swift
func typingAttributes(in text: AttributedString) -> AttributeContainer
```

<a id="discussion"></a>

## Discussion

The typing attributes are the attributes that will be applied to any new characters typed out by the user.

> **Note**

> The returned container may contain values for attributes that specify [runBoundaries](https://developer.apple.com/documentation/foundation/attributedstringkey/runboundaries) and thus might not actually get applied to new content.
