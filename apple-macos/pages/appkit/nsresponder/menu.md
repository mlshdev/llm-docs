> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/menu](https://developer.apple.com/documentation/appkit/nsresponder/menu)

# menu (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the responder’s menu.

## Declaration

```swift
var menu: NSMenu? { get set }
```

<a id="Discussion"></a>

## Discussion

For `NSApplication` this menu is the same as the menu returned by its [mainMenu](../nsapplication/mainmenu.md) property.

## See Also

### Related Documentation

- [defaultMenu](../nsview/defaultmenu.md): Overridden by subclasses to return the default pop-up menu for instances of the receiving class.
- [menu(for:)](../nsview/menu%28for_%29.md): Overridden by subclasses to return a context-sensitive pop-up menu for a given mouse-down event.

# menu (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the responder’s menu.

## Declaration

```objectivec
@property (strong, nullable) NSMenu * menu;
```

<a id="Discussion"></a>

## Discussion

For `NSApplication` this menu is the same as the menu returned by its [mainMenu](../nsapplication/mainmenu.md) property.

## See Also

### Related Documentation

- [defaultMenu](../nsview/defaultmenu.md): Overridden by subclasses to return the default pop-up menu for instances of the receiving class.
- [menuForEvent:](../nsview/menu%28for_%29.md): Overridden by subclasses to return a context-sensitive pop-up menu for a given mouse-down event.
