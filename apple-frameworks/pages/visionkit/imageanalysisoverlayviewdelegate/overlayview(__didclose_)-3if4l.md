> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:didclose:)-3if4l

# overlayView(\_:didClose:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

A default, blank implementation for when an overlay view menu closes.

## Declaration

```swift
@MainActor func overlayView(_ overlayView: ImageAnalysisOverlayView, didClose menu: NSMenu)
```

## Parameters

- `overlayView`: The interaction object for the Live Text interface.
- `menu`: The menu that did close.
