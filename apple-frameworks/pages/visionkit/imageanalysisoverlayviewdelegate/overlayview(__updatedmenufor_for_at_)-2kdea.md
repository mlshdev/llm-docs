> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:updatedmenufor:for:at:)-2kdea](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:updatedmenufor:for:at:)-2kdea)

# overlayView(\_:updatedMenuFor:for:at:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

A default implementation that returns the menu without any changes.

## Declaration

```swift
@MainActor func overlayView(_ overlayView: ImageAnalysisOverlayView, updatedMenuFor menu: NSMenu, for event: NSEvent, at point: CGPoint) -> NSMenu
```

## Parameters

- `overlayView`: The interaction object for the Live Text interface.
- `menu`: The menu to be presented.
- `event`: The event associated with this menu.
- `point`: The original location of the event for the menu.
