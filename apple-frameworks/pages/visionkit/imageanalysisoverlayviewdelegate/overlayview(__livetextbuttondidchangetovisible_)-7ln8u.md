> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:livetextbuttondidchangetovisible:)-7ln8u

# overlayView(\_:liveTextButtonDidChangeToVisible:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

A default, blank implementation for when the Live Text button appears or disappears.

## Declaration

```swift
@MainActor func overlayView(_ overlayView: ImageAnalysisOverlayView, liveTextButtonDidChangeToVisible visible: Bool)
```

## Parameters

- `overlayView`: The interaction object for the Live Text interface.
- `visible`: `true` if the Live Text button appears; otherwise, `false`.
