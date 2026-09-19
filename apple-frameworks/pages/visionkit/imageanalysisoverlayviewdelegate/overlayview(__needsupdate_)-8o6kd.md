> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:needsupdate:)-8o6kd

# overlayView(\_:needsUpdate:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

A default, blank implementation for when an overlay view menu needs updating.

## Declaration

```swift
@MainActor func overlayView(_ overlayView: ImageAnalysisOverlayView, needsUpdate menu: NSMenu)
```

## Parameters

- `overlayView`: The interaction object for the Live Text interface.
- `menu`: The menu that needs update.
