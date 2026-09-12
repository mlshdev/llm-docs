> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/submenuaction(_:)](https://developer.apple.com/documentation/appkit/nsmenu/submenuaction(_:))

# submenuAction(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

The action method assigned to menu items that open submenus.

## Declaration

```swift
func submenuAction(_ sender: Any?)
```

<a id="Discussion"></a>

## Discussion

You may override this method to implement different behavior. Never invoke this method directly.

## See Also

### Managing Submenus

- [setSubmenu(\_:for:)](setsubmenu%28__for_%29.md): Assigns a menu to be a submenu of the menu controlled by a given menu item.
- [supermenu](supermenu.md): The parent menu that contains the menu as a submenu.
- [isTornOff](istornoff.md): Deprecated. Indicates whether the menu is offscreen or attached to another menu (or if it’s the main menu).

# submenuAction: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

The action method assigned to menu items that open submenus.

## Declaration

```objectivec
- (void) submenuAction:(id) sender;
```

<a id="Discussion"></a>

## Discussion

You may override this method to implement different behavior. Never invoke this method directly.

## See Also

### Managing Submenus

- [setSubmenu:forItem:](setsubmenu%28__for_%29.md): Assigns a menu to be a submenu of the menu controlled by a given menu item.
- [attachedMenu](attachedmenu.md): Deprecated. Returns the menu currently attached to the menu.
- [isAttached](isattached.md): Deprecated. Returns a Boolean value that indicates whether the menu is currently attached to another menu.
- [locationForSubmenu:](locationforsubmenu_.md): Deprecated. Returns the location in screen coordinates where the given submenu is displayed when opened as a submenu of the menu.
- [supermenu](supermenu.md): The parent menu that contains the menu as a submenu.
- [tornOff](istornoff.md): Deprecated. Indicates whether the menu is offscreen or attached to another menu (or if it’s the main menu).
