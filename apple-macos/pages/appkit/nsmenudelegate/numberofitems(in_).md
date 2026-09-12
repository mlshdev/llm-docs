> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenudelegate/numberofitems(in:)](https://developer.apple.com/documentation/appkit/nsmenudelegate/numberofitems(in:))

# numberOfItems(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when a menu is about to be displayed at the start of a tracking session so the delegate can specify the number of items in the menu.

## Declaration

```swift
@MainActor optional func numberOfItems(in menu: NSMenu) -> Int
```

## Parameters

- `menu`: The menu object about to be displayed.

<a id="return-value"></a>

## Return Value

The number of menu items in the menu.

<a id="Discussion"></a>

## Discussion

If you return a positive value, the menu is resized by either removing or adding items. Newly created items are blank. After the menu is resized, your [menu(\_:update:at:shouldCancel:)](menu%28__update_at_shouldcancel_%29.md) method is called for each item. If you return a negative value, the number of items is left unchanged and [menu(\_:update:at:shouldCancel:)](menu%28__update_at_shouldcancel_%29.md) is not called. If you can populate the menu quickly, you can implement [menuNeedsUpdate(\_:)](menuneedsupdate%28__%29.md) instead of [numberOfItems(in:)](numberofitems%28in_%29.md) and [menu(\_:update:at:shouldCancel:)](menu%28__update_at_shouldcancel_%29.md).

## See Also

### Handling Tracking

- [menuNeedsUpdate(\_:)](menuneedsupdate%28__%29.md): Invoked when a menu is about to be displayed at the start of a tracking session.

# numberOfItemsInMenu: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when a menu is about to be displayed at the start of a tracking session so the delegate can specify the number of items in the menu.

## Declaration

```objectivec
- (NSInteger) numberOfItemsInMenu:(NSMenu *) menu;
```

## Parameters

- `menu`: The menu object about to be displayed.

<a id="return-value"></a>

## Return Value

The number of menu items in the menu.

<a id="Discussion"></a>

## Discussion

If you return a positive value, the menu is resized by either removing or adding items. Newly created items are blank. After the menu is resized, your [menu:updateItem:atIndex:shouldCancel:](menu%28__update_at_shouldcancel_%29.md) method is called for each item. If you return a negative value, the number of items is left unchanged and [menu:updateItem:atIndex:shouldCancel:](menu%28__update_at_shouldcancel_%29.md) is not called. If you can populate the menu quickly, you can implement [menuNeedsUpdate:](menuneedsupdate%28__%29.md) instead of [numberOfItemsInMenu:](numberofitems%28in_%29.md) and [menu:updateItem:atIndex:shouldCancel:](menu%28__update_at_shouldcancel_%29.md).

## See Also

### Handling Tracking

- [menuNeedsUpdate:](menuneedsupdate%28__%29.md): Invoked when a menu is about to be displayed at the start of a tracking session.
