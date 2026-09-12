> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/submenu](https://developer.apple.com/documentation/appkit/nsmenuitem/submenu)

# submenu (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The submenu of the menu item.

## Declaration

```swift
var submenu: NSMenu? { get set }
```

<a id="Discussion"></a>

## Discussion

The default implementation of the `NSMenuItem` class raises an exception if `aSubmenu` already has a supermenu.

## See Also

### Managing submenus

- [hasSubmenu](hassubmenu.md): A Boolean value that indicates whether the menu item has a submenu.
- [parent](parent.md): The menu item whose submenu contains the receiver.

# submenu (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The submenu of the menu item.

## Declaration

```objectivec
@property (strong, nullable) NSMenu * submenu;
```

<a id="Discussion"></a>

## Discussion

The default implementation of the `NSMenuItem` class raises an exception if `aSubmenu` already has a supermenu.

## See Also

### Managing submenus

- [hasSubmenu](hassubmenu.md): A Boolean value that indicates whether the menu item has a submenu.
- [parentItem](parent.md): The menu item whose submenu contains the receiver.
