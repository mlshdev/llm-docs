> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/didclosemenu(_:with:)](https://developer.apple.com/documentation/appkit/nsview/didclosemenu(_:with:))

# didCloseMenu(\_:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Called after a contextual menu that was displayed from the receiving view has been closed.

## Declaration

```swift
func didCloseMenu(_ menu: NSMenu, with event: NSEvent?)
```

## Parameters

- `menu`: The menu that was closed.
- `event`: The event that caused the menu to close, if there was one. If an event did not cause the menu to close, this value is `nil`.

<a id="Discussion"></a>

## Discussion

This method is called only if the contextual menu had been opened and the view has previously received the [willOpenMenu(\_:with:)](willopenmenu%28__with_%29.md) method. When the view receives [didCloseMenu(\_:with:)](didclosemenu%28__with_%29.md), it should reset its visual state, if necessary. For example, if a table view selected a row in response to a contextual menu being displayed, this method could deselect the row.

## See Also

### Managing Contextual Menus

- [menu(for:)](menu%28for_%29.md): Overridden by subclasses to return a context-sensitive pop-up menu for a given mouse-down event.
- [defaultMenu](defaultmenu.md): Overridden by subclasses to return the default pop-up menu for instances of the receiving class.
- [willOpenMenu(\_:with:)](willopenmenu%28__with_%29.md): Called just before a contextual menu for a view is opened on screen.

# didCloseMenu:withEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Called after a contextual menu that was displayed from the receiving view has been closed.

## Declaration

```objectivec
- (void) didCloseMenu:(NSMenu *) menu withEvent:(NSEvent *) event;
```

## Parameters

- `menu`: The menu that was closed.
- `event`: The event that caused the menu to close, if there was one. If an event did not cause the menu to close, this value is `nil`.

<a id="Discussion"></a>

## Discussion

This method is called only if the contextual menu had been opened and the view has previously received the [willOpenMenu:withEvent:](willopenmenu%28__with_%29.md) method. When the view receives [didCloseMenu:withEvent:](didclosemenu%28__with_%29.md), it should reset its visual state, if necessary. For example, if a table view selected a row in response to a contextual menu being displayed, this method could deselect the row.

## See Also

### Managing Contextual Menus

- [menuForEvent:](menu%28for_%29.md): Overridden by subclasses to return a context-sensitive pop-up menu for a given mouse-down event.
- [defaultMenu](defaultmenu.md): Overridden by subclasses to return the default pop-up menu for instances of the receiving class.
- [willOpenMenu:withEvent:](willopenmenu%28__with_%29.md): Called just before a contextual menu for a view is opened on screen.
