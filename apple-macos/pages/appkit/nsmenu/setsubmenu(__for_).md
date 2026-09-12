> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/setsubmenu(_:for:)](https://developer.apple.com/documentation/appkit/nsmenu/setsubmenu(_:for:))

# setSubmenu(\_:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Assigns a menu to be a submenu of the menu controlled by a given menu item.

## Declaration

```swift
func setSubmenu(_ menu: NSMenu?, for item: NSMenuItem)
```

## Parameters

- `menu`: A menu object that is to be a submenu of the menu.
- `item`: A menu item (that is, an object conforming to the NSMenuItem protocol) that controls `aMenu`. The method sets the action of `anItem` to  [submenuAction(\_:)](submenuaction%28__%29.md).

## See Also

### Managing Submenus

- [submenuAction(\_:)](submenuaction%28__%29.md): The action method assigned to menu items that open submenus.
- [supermenu](supermenu.md): The parent menu that contains the menu as a submenu.
- [isTornOff](istornoff.md): Deprecated. Indicates whether the menu is offscreen or attached to another menu (or if it’s the main menu).

# setSubmenu:forItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Assigns a menu to be a submenu of the menu controlled by a given menu item.

## Declaration

```objectivec
- (void) setSubmenu:(NSMenu *) menu forItem:(NSMenuItem *) item;
```

## Parameters

- `menu`: A menu object that is to be a submenu of the menu.
- `item`: A menu item (that is, an object conforming to the NSMenuItem protocol) that controls `aMenu`. The method sets the action of `anItem` to  [submenuAction:](submenuaction%28__%29.md).

## See Also

### Managing Submenus

- [submenuAction:](submenuaction%28__%29.md): The action method assigned to menu items that open submenus.
- [attachedMenu](attachedmenu.md): Deprecated. Returns the menu currently attached to the menu.
- [isAttached](isattached.md): Deprecated. Returns a Boolean value that indicates whether the menu is currently attached to another menu.
- [locationForSubmenu:](locationforsubmenu_.md): Deprecated. Returns the location in screen coordinates where the given submenu is displayed when opened as a submenu of the menu.
- [supermenu](supermenu.md): The parent menu that contains the menu as a submenu.
- [tornOff](istornoff.md): Deprecated. Indicates whether the menu is offscreen or attached to another menu (or if it’s the main menu).
