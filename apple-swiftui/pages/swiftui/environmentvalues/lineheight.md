> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/lineheight](https://developer.apple.com/documentation/swiftui/environmentvalues/lineheight)

# lineHeight

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The default line height for text influenced by this environment.

## Declaration

```swift
var lineHeight: AttributedString.LineHeight? { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `nil`. In that case, SwiftUI automatically chooses an appropriate line height setting for each context.
