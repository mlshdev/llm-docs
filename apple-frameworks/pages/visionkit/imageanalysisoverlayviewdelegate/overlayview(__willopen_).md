> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:willopen:)](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:willopen:))

# overlayView(\_:willOpen:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Notifies your app that a given menu is opening imminently.

## Declaration

```swift
@MainActor func overlayView(_ overlayView: ImageAnalysisOverlayView, willOpen menu: NSMenu)
```

## Parameters

- `overlayView`: The associated overlay view for the menu.
- `menu`: The menu that will open.

## Default Implementations

### ImageAnalysisOverlayViewDelegate Implementations

- [overlayView(\_:willOpen:)](overlayview%28__willopen_%29-5t8cy.md): A default, blank implementation for when an overlay view menu opens.

## See Also

### Responding to key and menu events

- [overlayView(\_:shouldHandleKeyDownEvent:)](overlayview%28__shouldhandlekeydownevent_%29.md): Returns a Boolean value that indicates whether the overlay view consumes the given key-down event.
- [overlayView(\_:shouldShowMenuForEvent:atPoint:)](overlayview%28__shouldshowmenuforevent_atpoint_%29.md): Provides a Boolean value that indicates whether the overlay view shows a menu for the given event.
- [overlayView(\_:menu:willHighlight:)](overlayview%28__menu_willhighlight_%29.md): Notifies your app that the given menu item is highlighted.
- [overlayView(\_:didClose:)](overlayview%28__didclose_%29.md): Notifies your app that the given menu closed.
- [overlayView(\_:needsUpdate:)](overlayview%28__needsupdate_%29.md): Notifies your app that the given menu needs updating.
- [overlayView(\_:updatedMenuFor:for:at:)](overlayview%28__updatedmenufor_for_at_%29.md): Notifies your app before the framework presents a context menu.
