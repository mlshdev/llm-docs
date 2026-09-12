> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/popupcontextmenu(_:with:for:)](https://developer.apple.com/documentation/appkit/nsmenu/popupcontextmenu(_:with:for:))

# popUpContextMenu(\_:with:for:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Displays a contextual menu over a view for an event.

## Declaration

```swift
class func popUpContextMenu(_ menu: NSMenu, with event: NSEvent, for view: NSView)
```

## Parameters

- `menu`: The menu object to use for the contextual menu.
- `event`: An [NSEvent](../nsevent.md) object representing the event.
- `view`: The view object over which to display the contextual menu.

## Mentioned In

- [Supporting Continuity Camera in Your Mac App](../supporting-continuity-camera-in-your-mac-app.md)
- [Supporting Writing Tools via the pasteboard](../supporting-writing-tools-via-the-pasteboard.md)

## See Also

### Displaying Context-Sensitive Help

- [popUpContextMenu(\_:with:for:with:)](popupcontextmenu%28__with_for_with_%29.md): Displays a contextual menu over a view for an event using a specified font.
- [helpRequested(with:)](helprequested%28with_%29.md): Deprecated. Overridden by subclasses to implement specialized context-sensitive help behavior.
- [popUp(positioning:at:in:)](popup%28positioning_at_in_%29.md): Pops up the menu at the specified location.

# popUpContextMenu:withEvent:forView: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Displays a contextual menu over a view for an event.

## Declaration

```objectivec
+ (void) popUpContextMenu:(NSMenu *) menu withEvent:(NSEvent *) event forView:(NSView *) view;
```

## Parameters

- `menu`: The menu object to use for the contextual menu.
- `event`: An [NSEvent](../nsevent.md) object representing the event.
- `view`: The view object over which to display the contextual menu.

## Mentioned In

- [Supporting Continuity Camera in Your Mac App](../supporting-continuity-camera-in-your-mac-app.md)
- [Supporting Writing Tools via the pasteboard](../supporting-writing-tools-via-the-pasteboard.md)

## See Also

### Displaying Context-Sensitive Help

- [popUpContextMenu:withEvent:forView:withFont:](popupcontextmenu%28__with_for_with_%29.md): Displays a contextual menu over a view for an event using a specified font.
- [helpRequested:](helprequested%28with_%29.md): Deprecated. Overridden by subclasses to implement specialized context-sensitive help behavior.
- [popUpMenuPositioningItem:atLocation:inView:](popup%28positioning_at_in_%29.md): Pops up the menu at the specified location.
