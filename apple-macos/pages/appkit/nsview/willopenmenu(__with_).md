> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/willopenmenu(_:with:)](https://developer.apple.com/documentation/appkit/nsview/willopenmenu(_:with:))

# willOpenMenu(\_:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Called just before a contextual menu for a view is opened on screen.

## Declaration

```swift
func willOpenMenu(_ menu: NSMenu, with event: NSEvent)
```

## Parameters

- `menu`: The menu that will be opened.
- `event`: The event that caused the menu to open.

<a id="Discussion"></a>

## Discussion

This method is called just before a contextual menu for a view is opened on screen. It provides an opportunity to make any desired changes to the visual state of the view. For example, a table view might select a row in response to the contextual menu being displayed.

## See Also

### Managing Contextual Menus

- [menu(for:)](menu%28for_%29.md): Overridden by subclasses to return a context-sensitive pop-up menu for a given mouse-down event.
- [defaultMenu](defaultmenu.md): Overridden by subclasses to return the default pop-up menu for instances of the receiving class.
- [didCloseMenu(\_:with:)](didclosemenu%28__with_%29.md): Called after a contextual menu that was displayed from the receiving view has been closed.

# willOpenMenu:withEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Called just before a contextual menu for a view is opened on screen.

## Declaration

```objectivec
- (void) willOpenMenu:(NSMenu *) menu withEvent:(NSEvent *) event;
```

## Parameters

- `menu`: The menu that will be opened.
- `event`: The event that caused the menu to open.

<a id="Discussion"></a>

## Discussion

This method is called just before a contextual menu for a view is opened on screen. It provides an opportunity to make any desired changes to the visual state of the view. For example, a table view might select a row in response to the contextual menu being displayed.

## See Also

### Managing Contextual Menus

- [menuForEvent:](menu%28for_%29.md): Overridden by subclasses to return a context-sensitive pop-up menu for a given mouse-down event.
- [defaultMenu](defaultmenu.md): Overridden by subclasses to return the default pop-up menu for instances of the receiving class.
- [didCloseMenu:withEvent:](didclosemenu%28__with_%29.md): Called after a contextual menu that was displayed from the receiving view has been closed.
