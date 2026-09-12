> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/defaultmenu](https://developer.apple.com/documentation/appkit/nsview/defaultmenu)

# defaultMenu (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Overridden by subclasses to return the default pop-up menu for instances of the receiving class.

## Declaration

```swift
class var defaultMenu: NSMenu? { get }
```

<a id="Discussion"></a>

## Discussion

The default implementation returns `nil`.

## See Also

### Related Documentation

- [menu](../nsresponder/menu.md): Returns the responder’s menu.

### Managing Contextual Menus

- [menu(for:)](menu%28for_%29.md): Overridden by subclasses to return a context-sensitive pop-up menu for a given mouse-down event.
- [willOpenMenu(\_:with:)](willopenmenu%28__with_%29.md): Called just before a contextual menu for a view is opened on screen.
- [didCloseMenu(\_:with:)](didclosemenu%28__with_%29.md): Called after a contextual menu that was displayed from the receiving view has been closed.

# defaultMenu (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Overridden by subclasses to return the default pop-up menu for instances of the receiving class.

## Declaration

```objectivec
@property (class, strong, readonly, nullable) NSMenu * defaultMenu;
```

<a id="Discussion"></a>

## Discussion

The default implementation returns `nil`.

## See Also

### Related Documentation

- [menu](../nsresponder/menu.md): Returns the responder’s menu.

### Managing Contextual Menus

- [menuForEvent:](menu%28for_%29.md): Overridden by subclasses to return a context-sensitive pop-up menu for a given mouse-down event.
- [willOpenMenu:withEvent:](willopenmenu%28__with_%29.md): Called just before a contextual menu for a view is opened on screen.
- [didCloseMenu:withEvent:](didclosemenu%28__with_%29.md): Called after a contextual menu that was displayed from the receiving view has been closed.
