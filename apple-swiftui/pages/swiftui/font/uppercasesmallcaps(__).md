> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/font/uppercasesmallcaps(_:)](https://developer.apple.com/documentation/swiftui/font/uppercasesmallcaps(_:))

# uppercaseSmallCaps(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adjusts the font to enable/disable uppercase small capitals.

## Declaration

```swift
func uppercaseSmallCaps(_ isActive: Bool) -> Font
```

<a id="discussion"></a>

## Discussion

This feature controls turning capital characters into small capitals. It is generally used for words which would otherwise be set in all caps, such as acronyms, but which are desired in small-cap form to avoid disrupting the flow of text.
