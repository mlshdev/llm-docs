> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/windowtoolbarfullscreenvisibility/onhover

# onHover

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 15.0+

Hide the window toolbar in full screen mode by default. It will reveal itself when the mouse moves into the area occupied by the menu bar.

## Declaration

```swift
static let onHover: WindowToolbarFullScreenVisibility
```

<a id="discussion"></a>

## Discussion

This has no effect if the toolbar is completely hidden, i.e. setting the visibility to `hidden` for `windowToolbar` placements using [toolbarVisibility(\_:for:)](../view/toolbarvisibility%28__for_%29.md) will cause the toolbar to remain completely hidden, even in full screen.
