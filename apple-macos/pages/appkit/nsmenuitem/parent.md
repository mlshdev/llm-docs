> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/parent](https://developer.apple.com/documentation/appkit/nsmenuitem/parent)

# parent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The menu item whose submenu contains the receiver.

## Declaration

```swift
unowned(unsafe) var parent: NSMenuItem? { get }
```

## See Also

### Managing submenus

- [submenu](submenu.md): The submenu of the menu item.
- [hasSubmenu](hassubmenu.md): A Boolean value that indicates whether the menu item has a submenu.

# parentItem (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The menu item whose submenu contains the receiver.

## Declaration

```objectivec
@property (assign, readonly, nullable) NSMenuItem * parentItem;
```

## See Also

### Managing submenus

- [submenu](submenu.md): The submenu of the menu item.
- [hasSubmenu](hassubmenu.md): A Boolean value that indicates whether the menu item has a submenu.
