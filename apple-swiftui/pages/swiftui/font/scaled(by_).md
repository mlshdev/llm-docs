> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/font/scaled(by:)](https://developer.apple.com/documentation/swiftui/font/scaled(by:))

# scaled(by:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Scales the point size of the font.

## Declaration

```swift
func scaled(by factor: CGFloat) -> Font
```

<a id="discussion"></a>

## Discussion

Calls to scale are multiplicative, based on the size of the resolved font. For example,

```swift
Font.body
    .scaled(by: 2)
    .bold()
    .scaled(by: 3)
```

results in a bold body font 6x its usual size.
