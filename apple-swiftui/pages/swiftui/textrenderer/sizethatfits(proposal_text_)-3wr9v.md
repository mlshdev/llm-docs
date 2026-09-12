> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textrenderer/sizethatfits(proposal:text:)-3wr9v](https://developer.apple.com/documentation/swiftui/textrenderer/sizethatfits(proposal:text:)-3wr9v)

# sizeThatFits(proposal:text:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the size of the text in `proposal`. The provided `text` proxy value may be used to query the sizing behavior of the underlying text layout.

## Declaration

```swift
@export(implementation) func sizeThatFits(proposal: ProposedViewSize, text: TextProxy) -> CGSize
```

<a id="discussion"></a>

## Discussion

The default implementation of this function returns `text.size(proposal)`.
