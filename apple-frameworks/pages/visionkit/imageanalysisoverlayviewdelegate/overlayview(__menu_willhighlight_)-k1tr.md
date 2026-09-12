> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:menu:willhighlight:)-k1tr](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:menu:willhighlight:)-k1tr)

# overlayView(\_:menu:willHighlight:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

A default, blank implementation for when an overlay view menu highlights.

## Declaration

```swift
@MainActor func overlayView(_ overlayView: ImageAnalysisOverlayView, menu: NSMenu, willHighlight menuItem: NSMenuItem?)
```

## Parameters

- `overlayView`: The interaction object for the Live Text interface.
- `menu`: The menu that contains the item to be highlighted.
- `menuItem`: The menu item to be highlighted, or nil if transitioning to no highlighted items.
