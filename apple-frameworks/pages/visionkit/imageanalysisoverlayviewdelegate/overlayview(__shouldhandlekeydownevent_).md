> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:shouldhandlekeydownevent:)](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:shouldhandlekeydownevent:))

# overlayView(\_:shouldHandleKeyDownEvent:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Returns a Boolean value that indicates whether the overlay view consumes the given key-down event.

## Declaration

```swift
@MainActor func overlayView(_ overlayView: ImageAnalysisOverlayView, shouldHandleKeyDownEvent event: NSEvent) -> Bool
```

## Parameters

- `overlayView`: The overlay view that receives the key-down event.
- `event`: The key-down event that occurs.

<a id="return-value"></a>

## Return Value

`true` if the overlay view handles the event; otherwise, `false`.

<a id="discussion"></a>

## Discussion

The default return value is `true`. Implement this callback if you don’t want the overlay view to consume the given event.

## Default Implementations

### ImageAnalysisOverlayViewDelegate Implementations

- [overlayView(\_:shouldHandleKeyDownEvent:)](overlayview%28__shouldhandlekeydownevent_%29-6hhnu.md): A default implementation that indicates the overlay view handles the given key-down event.

## See Also

### Responding to key and menu events

- [overlayView(\_:shouldShowMenuForEvent:atPoint:)](overlayview%28__shouldshowmenuforevent_atpoint_%29.md): Provides a Boolean value that indicates whether the overlay view shows a menu for the given event.
- [overlayView(\_:menu:willHighlight:)](overlayview%28__menu_willhighlight_%29.md): Notifies your app that the given menu item is highlighted.
- [overlayView(\_:willOpen:)](overlayview%28__willopen_%29.md): Notifies your app that a given menu is opening imminently.
- [overlayView(\_:didClose:)](overlayview%28__didclose_%29.md): Notifies your app that the given menu closed.
- [overlayView(\_:needsUpdate:)](overlayview%28__needsupdate_%29.md): Notifies your app that the given menu needs updating.
- [overlayView(\_:updatedMenuFor:for:at:)](overlayview%28__updatedmenufor_for_at_%29.md): Notifies your app before the framework presents a context menu.
