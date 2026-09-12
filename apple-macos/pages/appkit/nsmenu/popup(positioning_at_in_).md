> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/popup(positioning:at:in:)](https://developer.apple.com/documentation/appkit/nsmenu/popup(positioning:at:in:))

# popUp(positioning:at:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Pops up the menu at the specified location.

## Declaration

```swift
func popUp(positioning item: NSMenuItem?, at location: NSPoint, in view: NSView?) -> Bool
```

## Parameters

- `item`: The menu item to be positioned at the specified location in the view.
- `location`: The location in the `view` coordinate system to display the menu item.
- `view`: The view to display the menu item over.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if menu tracking ended because an item was selected, and [false](https://developer.apple.com/documentation/swift/false) if menu tracking was cancelled for any reason.

<a id="Discussion"></a>

## Discussion

Displays the menu as a pop-up menu. The top left corner of the specified item (if specified, `item` must be present in the menu) is positioned at the specified location in the specified view, interpreted in the view’s own coordinate system.

If `item` is `nil`, the menu is positioned such that the top left of the menu content frame is at the given location.

If `view` is `nil`, the location is interpreted in the screen coordinate system. This allows you to pop up a menu disconnected from any window.

## See Also

### Displaying Context-Sensitive Help

- [popUpContextMenu(\_:with:for:)](popupcontextmenu%28__with_for_%29.md): Displays a contextual menu over a view for an event.
- [popUpContextMenu(\_:with:for:with:)](popupcontextmenu%28__with_for_with_%29.md): Displays a contextual menu over a view for an event using a specified font.
- [helpRequested(with:)](helprequested%28with_%29.md): Deprecated. Overridden by subclasses to implement specialized context-sensitive help behavior.

# popUpMenuPositioningItem:atLocation:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Pops up the menu at the specified location.

## Declaration

```objectivec
- (BOOL) popUpMenuPositioningItem:(NSMenuItem *) item atLocation:(NSPoint) location inView:(NSView *) view;
```

## Parameters

- `item`: The menu item to be positioned at the specified location in the view.
- `location`: The location in the `view` coordinate system to display the menu item.
- `view`: The view to display the menu item over.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if menu tracking ended because an item was selected, and [false](https://developer.apple.com/documentation/swift/false) if menu tracking was cancelled for any reason.

<a id="Discussion"></a>

## Discussion

Displays the menu as a pop-up menu. The top left corner of the specified item (if specified, `item` must be present in the menu) is positioned at the specified location in the specified view, interpreted in the view’s own coordinate system.

If `item` is `nil`, the menu is positioned such that the top left of the menu content frame is at the given location.

If `view` is `nil`, the location is interpreted in the screen coordinate system. This allows you to pop up a menu disconnected from any window.

## See Also

### Displaying Context-Sensitive Help

- [popUpContextMenu:withEvent:forView:](popupcontextmenu%28__with_for_%29.md): Displays a contextual menu over a view for an event.
- [popUpContextMenu:withEvent:forView:withFont:](popupcontextmenu%28__with_for_with_%29.md): Displays a contextual menu over a view for an event using a specified font.
- [helpRequested:](helprequested%28with_%29.md): Deprecated. Overridden by subclasses to implement specialized context-sensitive help behavior.
