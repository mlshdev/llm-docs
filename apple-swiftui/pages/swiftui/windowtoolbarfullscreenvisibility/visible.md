> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowtoolbarfullscreenvisibility/visible](https://developer.apple.com/documentation/swiftui/windowtoolbarfullscreenvisibility/visible)

# visible

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 15.0+

Prefer to show window toolbar when the window is in full screen mode.

## Declaration

```swift
static let visible: WindowToolbarFullScreenVisibility
```

<a id="discussion"></a>

## Discussion

This has no effect if the toolbar is completely hidden, i.e. setting the visibility to `hidden` for `windowToolbar` placements using [toolbarVisibility(\_:for:)](../view/toolbarvisibility%28__for_%29.md) will cause the toolbar to remain completely hidden, even in full screen.
