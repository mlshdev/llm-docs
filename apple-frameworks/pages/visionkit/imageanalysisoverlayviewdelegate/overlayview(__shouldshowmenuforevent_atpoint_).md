> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:shouldshowmenuforevent:atpoint:)](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:shouldshowmenuforevent:atpoint:))

# overlayView(\_:shouldShowMenuForEvent:atPoint:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Provides a Boolean value that indicates whether the overlay view shows a menu for the given event.

## Declaration

```swift
@MainActor func overlayView(_ overlayView: ImageAnalysisOverlayView, shouldShowMenuForEvent event: NSEvent, atPoint point: CGPoint) -> Bool
```

## Parameters

- `overlayView`: The overlay view in which the menu appears.
- `event`: The event that occurs.
- `point`: The location of the event.

<a id="return-value"></a>

## Return Value

`true` if the menu appears in the overlay; otherwise, `false`.

<a id="discussion"></a>

## Discussion

Implement this method if you don’t want the overlay view to show a menu for a specific event at a location. The default return value is `true`.

## Default Implementations

### ImageAnalysisOverlayViewDelegate Implementations

- [overlayView(\_:shouldShowMenuForEvent:atPoint:)](overlayview%28__shouldshowmenuforevent_atpoint_%29-2irgq.md): A default implementation that indicates the overlay view shows its menu for the given event.

## See Also

### Responding to key and menu events

- [overlayView(\_:shouldHandleKeyDownEvent:)](overlayview%28__shouldhandlekeydownevent_%29.md): Returns a Boolean value that indicates whether the overlay view consumes the given key-down event.
- [overlayView(\_:menu:willHighlight:)](overlayview%28__menu_willhighlight_%29.md): Notifies your app that the given menu item is highlighted.
- [overlayView(\_:willOpen:)](overlayview%28__willopen_%29.md): Notifies your app that a given menu is opening imminently.
- [overlayView(\_:didClose:)](overlayview%28__didclose_%29.md): Notifies your app that the given menu closed.
- [overlayView(\_:needsUpdate:)](overlayview%28__needsupdate_%29.md): Notifies your app that the given menu needs updating.
- [overlayView(\_:updatedMenuFor:for:at:)](overlayview%28__updatedmenufor_for_at_%29.md): Notifies your app before the framework presents a context menu.
