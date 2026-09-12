> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:updatedmenufor:for:at:)](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:updatedmenufor:for:at:))

# overlayView(\_:updatedMenuFor:for:at:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Notifies your app before the framework presents a context menu.

## Declaration

```swift
@MainActor func overlayView(_ overlayView: ImageAnalysisOverlayView, updatedMenuFor menu: NSMenu, for event: NSEvent, at point: CGPoint) -> NSMenu
```

## Parameters

- `overlayView`: The associated overlay view for the updated menu.
- `menu`: The menu that appears.
- `event`: The event associated with this menu.
- `point`: The original location of the event for the menu.

<a id="discussion"></a>

## Discussion

This callback enables your app to add custom context menu items or manage the framework-provided content menu items. For example, the following implementation changes the title of the framework-provided `copySubject` menu item from “Copy” to “Copy and remove background”.

```swift
func overlayView(_ overlayView: ImageAnalysisOverlayView, updateMenu menu: NSMenu, forEvent: NSEvent, atPoint point: CGPoint) -> NSMenu {

    let copySubjectItem = menu.item(withTag:ImageAnalysisOverlayView.MenuTag.copySubject)
    copySubjectItem.title = "Copy and remove background"

    return menu
}
```

The menu items don’t persist. However, your app can alter menu items and share them across different menus within the same menu session.

To add items to a menu, access  the recommended index for insertion by using the [recommendedAppItems](../imageanalysisoverlayview/menutag/recommendedappitems.md) menu tag, such as in the following code:

```swift
func overlayView(_ overlayView: ImageAnalysisOverlayView, updateMenu menu: NSMenu, forEvent: NSEvent, atPoint point: CGPoint) -> NSMenu {

    let item = NSMenuItem()
    let tag = ImageAnalysisOverlayView.MenuTag.recommendedAppItems
    let index = menu.indexOfItem(withTag:tag)
    menu.insertItem(item, at: index)

    return menu
}
```

> **Note**

> The framework is the delegate for the returned menu item. The framework continues to support [NSMenuDelegate](https://developer.apple.com/documentation/appkit/nsmenudelegate) callbacks for VisionKit-specific menu items.

## Default Implementations

### ImageAnalysisOverlayViewDelegate Implementations

- [overlayView(\_:updatedMenuFor:for:at:)](overlayview%28__updatedmenufor_for_at_%29-2kdea.md): A default implementation that returns the menu without any changes.

## See Also

### Responding to key and menu events

- [overlayView(\_:shouldHandleKeyDownEvent:)](overlayview%28__shouldhandlekeydownevent_%29.md): Returns a Boolean value that indicates whether the overlay view consumes the given key-down event.
- [overlayView(\_:shouldShowMenuForEvent:atPoint:)](overlayview%28__shouldshowmenuforevent_atpoint_%29.md): Provides a Boolean value that indicates whether the overlay view shows a menu for the given event.
- [overlayView(\_:menu:willHighlight:)](overlayview%28__menu_willhighlight_%29.md): Notifies your app that the given menu item is highlighted.
- [overlayView(\_:willOpen:)](overlayview%28__willopen_%29.md): Notifies your app that a given menu is opening imminently.
- [overlayView(\_:didClose:)](overlayview%28__didclose_%29.md): Notifies your app that the given menu closed.
- [overlayView(\_:needsUpdate:)](overlayview%28__needsupdate_%29.md): Notifies your app that the given menu needs updating.
