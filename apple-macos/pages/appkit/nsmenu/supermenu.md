> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/supermenu](https://developer.apple.com/documentation/appkit/nsmenu/supermenu)

# supermenu (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The parent menu that contains the menu as a submenu.

## Declaration

```swift
unowned(unsafe) var supermenu: NSMenu? { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains a value of type `NSMenu` representing the the parent menu that contains the menu as a submenu. If the menu has no parent menu, then the value of this property is `nil`.

You should never invoke the setter method for this property directly. The setter method is called automatically when changes to the parent menu occur. You can, however, override the setter method for this property in order to take action when changes to the parent menu occur.

## See Also

### Managing Submenus

- [setSubmenu(\_:for:)](setsubmenu%28__for_%29.md): Assigns a menu to be a submenu of the menu controlled by a given menu item.
- [submenuAction(\_:)](submenuaction%28__%29.md): The action method assigned to menu items that open submenus.
- [isTornOff](istornoff.md): Deprecated. Indicates whether the menu is offscreen or attached to another menu (or if it’s the main menu).

# supermenu (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The parent menu that contains the menu as a submenu.

## Declaration

```objectivec
@property (assign, nullable) NSMenu * supermenu;
```

<a id="Discussion"></a>

## Discussion

This property contains a value of type `NSMenu` representing the the parent menu that contains the menu as a submenu. If the menu has no parent menu, then the value of this property is `nil`.

You should never invoke the setter method for this property directly. The setter method is called automatically when changes to the parent menu occur. You can, however, override the setter method for this property in order to take action when changes to the parent menu occur.

## See Also

### Managing Submenus

- [setSubmenu:forItem:](setsubmenu%28__for_%29.md): Assigns a menu to be a submenu of the menu controlled by a given menu item.
- [submenuAction:](submenuaction%28__%29.md): The action method assigned to menu items that open submenus.
- [attachedMenu](attachedmenu.md): Deprecated. Returns the menu currently attached to the menu.
- [isAttached](isattached.md): Deprecated. Returns a Boolean value that indicates whether the menu is currently attached to another menu.
- [locationForSubmenu:](locationforsubmenu_.md): Deprecated. Returns the location in screen coordinates where the given submenu is displayed when opened as a submenu of the menu.
- [tornOff](istornoff.md): Deprecated. Indicates whether the menu is offscreen or attached to another menu (or if it’s the main menu).
