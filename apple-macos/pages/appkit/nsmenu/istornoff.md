> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/istornoff](https://developer.apple.com/documentation/appkit/nsmenu/istornoff)

# isTornOff (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Indicates whether the menu is offscreen or attached to another menu (or if it’s the main menu).

## Declaration

```swift
var isTornOff: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property has a value of [false](https://developer.apple.com/documentation/swift/false) if the menu is offscreen, is attached to another menu, or is the main menu. Otherwise, this property has a value of [true](https://developer.apple.com/documentation/swift/true).

<a id="Special-Considerations"></a>

### Special Considerations

This property has no effect in macOS 10.6 and later.

## See Also

### Managing Submenus

- [setSubmenu(\_:for:)](setsubmenu%28__for_%29.md): Assigns a menu to be a submenu of the menu controlled by a given menu item.
- [submenuAction(\_:)](submenuaction%28__%29.md): The action method assigned to menu items that open submenus.
- [supermenu](supermenu.md): The parent menu that contains the menu as a submenu.

# tornOff (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Indicates whether the menu is offscreen or attached to another menu (or if it’s the main menu).

## Declaration

```objectivec
@property (readonly, getter=isTornOff) BOOL tornOff;
```

<a id="Discussion"></a>

## Discussion

This property has a value of [false](https://developer.apple.com/documentation/swift/false) if the menu is offscreen, is attached to another menu, or is the main menu. Otherwise, this property has a value of [true](https://developer.apple.com/documentation/swift/true).

<a id="Special-Considerations"></a>

### Special Considerations

This property has no effect in macOS 10.6 and later.

## See Also

### Managing Submenus

- [setSubmenu:forItem:](setsubmenu%28__for_%29.md): Assigns a menu to be a submenu of the menu controlled by a given menu item.
- [submenuAction:](submenuaction%28__%29.md): The action method assigned to menu items that open submenus.
- [attachedMenu](attachedmenu.md): Deprecated. Returns the menu currently attached to the menu.
- [isAttached](isattached.md): Deprecated. Returns a Boolean value that indicates whether the menu is currently attached to another menu.
- [locationForSubmenu:](locationforsubmenu_.md): Deprecated. Returns the location in screen coordinates where the given submenu is displayed when opened as a submenu of the menu.
- [supermenu](supermenu.md): The parent menu that contains the menu as a submenu.
