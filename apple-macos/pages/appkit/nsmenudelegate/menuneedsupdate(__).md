> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenudelegate/menuneedsupdate(_:)](https://developer.apple.com/documentation/appkit/nsmenudelegate/menuneedsupdate(_:))

# menuNeedsUpdate(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when a menu is about to be displayed at the start of a tracking session.

## Declaration

```swift
@MainActor optional func menuNeedsUpdate(_ menu: NSMenu)
```

## Parameters

- `menu`: The menu object that is about to be displayed.

<a id="Discussion"></a>

## Discussion

Using this method, the delegate can change the menu by adding, removing, or modifying menu items. If populating the menu will take a long time, implement [numberOfItems(in:)](numberofitems%28in_%29.md) and [menu(\_:update:at:shouldCancel:)](menu%28__update_at_shouldcancel_%29.md) instead.

Menu item validation occurs after this method is called. If the menu is updated because the user pressed a command key, only the menu item with the matching command key is validated; if the menu is updated because the user opened it, then every menu item is validated.

## See Also

### Handling Tracking

- [numberOfItems(in:)](numberofitems%28in_%29.md): Invoked when a menu is about to be displayed at the start of a tracking session so the delegate can specify the number of items in the menu.

# menuNeedsUpdate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when a menu is about to be displayed at the start of a tracking session.

## Declaration

```objectivec
- (void) menuNeedsUpdate:(NSMenu *) menu;
```

## Parameters

- `menu`: The menu object that is about to be displayed.

<a id="Discussion"></a>

## Discussion

Using this method, the delegate can change the menu by adding, removing, or modifying menu items. If populating the menu will take a long time, implement [numberOfItemsInMenu:](numberofitems%28in_%29.md) and [menu:updateItem:atIndex:shouldCancel:](menu%28__update_at_shouldcancel_%29.md) instead.

Menu item validation occurs after this method is called. If the menu is updated because the user pressed a command key, only the menu item with the matching command key is validated; if the menu is updated because the user opened it, then every menu item is validated.

## See Also

### Handling Tracking

- [numberOfItemsInMenu:](numberofitems%28in_%29.md): Invoked when a menu is about to be displayed at the start of a tracking session so the delegate can specify the number of items in the menu.
