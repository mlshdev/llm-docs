> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/attachedmenu](https://developer.apple.com/documentation/appkit/nsmenu/attachedmenu)

# attachedMenu

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.2)

Returns the menu currently attached to the menu.

## Declaration

```objectivec
- (NSMenu *) attachedMenu;
```

<a id="return-value"></a>

## Return Value

The menu currently attached to the menu or `nil` if there’s no such object.

## See Also

### Managing Submenus

- [setSubmenu:forItem:](setsubmenu%28__for_%29.md): Assigns a menu to be a submenu of the menu controlled by a given menu item.
- [submenuAction:](submenuaction%28__%29.md): The action method assigned to menu items that open submenus.
- [isAttached](isattached.md): Deprecated. Returns a Boolean value that indicates whether the menu is currently attached to another menu.
- [locationForSubmenu:](locationforsubmenu_.md): Deprecated. Returns the location in screen coordinates where the given submenu is displayed when opened as a submenu of the menu.
- [supermenu](supermenu.md): The parent menu that contains the menu as a submenu.
- [tornOff](istornoff.md): Deprecated. Indicates whether the menu is offscreen or attached to another menu (or if it’s the main menu).
