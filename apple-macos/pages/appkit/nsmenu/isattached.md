> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/isattached](https://developer.apple.com/documentation/appkit/nsmenu/isattached)

# isAttached

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.2)

Returns a Boolean value that indicates whether the menu is currently attached to another menu.

## Declaration

```objectivec
- (BOOL) isAttached;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the menu is currently attached to another menu, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Submenus

- [setSubmenu:forItem:](setsubmenu%28__for_%29.md): Assigns a menu to be a submenu of the menu controlled by a given menu item.
- [submenuAction:](submenuaction%28__%29.md): The action method assigned to menu items that open submenus.
- [attachedMenu](attachedmenu.md): Deprecated. Returns the menu currently attached to the menu.
- [locationForSubmenu:](locationforsubmenu_.md): Deprecated. Returns the location in screen coordinates where the given submenu is displayed when opened as a submenu of the menu.
- [supermenu](supermenu.md): The parent menu that contains the menu as a submenu.
- [tornOff](istornoff.md): Deprecated. Indicates whether the menu is offscreen or attached to another menu (or if it’s the main menu).
