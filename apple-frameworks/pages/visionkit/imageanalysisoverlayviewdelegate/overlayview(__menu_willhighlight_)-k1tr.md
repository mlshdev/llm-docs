> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:menu:willhighlight:)-k1tr

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
