> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowlayoutroot/sizethatfits(_:)](https://developer.apple.com/documentation/swiftui/windowlayoutroot/sizethatfits(_:))

# sizeThatFits(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 15.0+ · visionOS 2.0+

Asks the window’s content for its size.

## Declaration

```swift
func sizeThatFits(_ proposal: ProposedViewSize) -> CGSize
```

## Parameters

- `proposal`: A proposed size for the subview. In SwiftUI, views choose their own size, but can take a size proposal from their parent view into account when doing so.

<a id="return-value"></a>

## Return Value

The size that the content chooses for itself, given the proposal from its container view.
