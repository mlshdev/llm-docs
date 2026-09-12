> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/popupcontextmenu(_:with:for:with:)](https://developer.apple.com/documentation/appkit/nsmenu/popupcontextmenu(_:with:for:with:))

# popUpContextMenu(\_:with:for:with:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Displays a contextual menu over a view for an event using a specified font.

## Declaration

```swift
class func popUpContextMenu(_ menu: NSMenu, with event: NSEvent, for view: NSView, with font: NSFont?)
```

## Parameters

- `menu`: The menu object to use for the contextual menu.
- `event`: An [NSEvent](../nsevent.md) object representing the event.
- `view`: The view object over which to display the contextual menu.
- `font`: An [NSFont](../nsfont.md) object representing the font for the contextual menu. If you pass in `nil` for the font, the method uses the default font for `menu`.

<a id="Discussion"></a>

## Discussion

Specifying a font using the font parameter is discouraged. Instead, set the menu’s font using the [font](font.md) property, then pass `nil` for the `font` parameter.

## See Also

### Displaying Context-Sensitive Help

- [popUpContextMenu(\_:with:for:)](popupcontextmenu%28__with_for_%29.md): Displays a contextual menu over a view for an event.
- [helpRequested(with:)](helprequested%28with_%29.md): Deprecated. Overridden by subclasses to implement specialized context-sensitive help behavior.
- [popUp(positioning:at:in:)](popup%28positioning_at_in_%29.md): Pops up the menu at the specified location.

# popUpContextMenu:withEvent:forView:withFont: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Displays a contextual menu over a view for an event using a specified font.

## Declaration

```objectivec
+ (void) popUpContextMenu:(NSMenu *) menu withEvent:(NSEvent *) event forView:(NSView *) view withFont:(NSFont *) font;
```

## Parameters

- `menu`: The menu object to use for the contextual menu.
- `event`: An [NSEvent](../nsevent.md) object representing the event.
- `view`: The view object over which to display the contextual menu.
- `font`: An [NSFont](../nsfont.md) object representing the font for the contextual menu. If you pass in `nil` for the font, the method uses the default font for `menu`.

<a id="Discussion"></a>

## Discussion

Specifying a font using the font parameter is discouraged. Instead, set the menu’s font using the [font](font.md) property, then pass `nil` for the `font` parameter.

## See Also

### Displaying Context-Sensitive Help

- [popUpContextMenu:withEvent:forView:](popupcontextmenu%28__with_for_%29.md): Displays a contextual menu over a view for an event.
- [helpRequested:](helprequested%28with_%29.md): Deprecated. Overridden by subclasses to implement specialized context-sensitive help behavior.
- [popUpMenuPositioningItem:atLocation:inView:](popup%28positioning_at_in_%29.md): Pops up the menu at the specified location.
