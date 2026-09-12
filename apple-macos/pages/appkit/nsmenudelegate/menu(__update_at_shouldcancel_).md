> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenudelegate/menu(_:update:at:shouldcancel:)](https://developer.apple.com/documentation/appkit/nsmenudelegate/menu(_:update:at:shouldcancel:))

# menu(\_:update:at:shouldCancel:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked to let the delegate update a menu item before it is displayed.

## Declaration

```swift
@MainActor optional func menu(_ menu: NSMenu, update item: NSMenuItem, at index: Int, shouldCancel: Bool) -> Bool
```

## Parameters

- `menu`: The menu object that owns `item`.
- `item`: The menu-item object that may be updated.
- `index`: The integer index of the menu item.
- `shouldCancel`: Set to [true](https://developer.apple.com/documentation/swift/true) if, due to some user action, the menu no longer needs to be displayed before all the menu items have been updated. You can ignore this flag, return [true](https://developer.apple.com/documentation/swift/true), and continue; or you can save your work (to save time the next time your delegate is called) and return [false](https://developer.apple.com/documentation/swift/false) to stop the updating.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to continue the process. If you return [false](https://developer.apple.com/documentation/swift/false), your [menu(\_:update:at:shouldCancel:)](menu%28__update_at_shouldcancel_%29.md) is not called again. In that case, it’s your responsibility to trim any extra items from the menu.

<a id="Discussion"></a>

## Discussion

If your [numberOfItems(in:)](numberofitems%28in_%29.md) delegate method returns a positive value, then your [menu(\_:update:at:shouldCancel:)](menu%28__update_at_shouldcancel_%29.md) method is called for each item in the menu. You can then update the menu title, image, and so forth for each menu item.

## See Also

### Updating Menu Layout

- [confinementRect(for:on:)](confinementrect%28for_on_%29.md): Invoked to allow the delegate to specify a display location for the menu.

# menu:updateItem:atIndex:shouldCancel: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked to let the delegate update a menu item before it is displayed.

## Declaration

```objectivec
- (BOOL) menu:(NSMenu *) menu updateItem:(NSMenuItem *) item atIndex:(NSInteger) index shouldCancel:(BOOL) shouldCancel;
```

## Parameters

- `menu`: The menu object that owns `item`.
- `item`: The menu-item object that may be updated.
- `index`: The integer index of the menu item.
- `shouldCancel`: Set to [true](https://developer.apple.com/documentation/swift/true) if, due to some user action, the menu no longer needs to be displayed before all the menu items have been updated. You can ignore this flag, return [true](https://developer.apple.com/documentation/swift/true), and continue; or you can save your work (to save time the next time your delegate is called) and return [false](https://developer.apple.com/documentation/swift/false) to stop the updating.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to continue the process. If you return [false](https://developer.apple.com/documentation/swift/false), your [menu:updateItem:atIndex:shouldCancel:](menu%28__update_at_shouldcancel_%29.md) is not called again. In that case, it’s your responsibility to trim any extra items from the menu.

<a id="Discussion"></a>

## Discussion

If your [numberOfItemsInMenu:](numberofitems%28in_%29.md) delegate method returns a positive value, then your [menu:updateItem:atIndex:shouldCancel:](menu%28__update_at_shouldcancel_%29.md) method is called for each item in the menu. You can then update the menu title, image, and so forth for each menu item.

## See Also

### Updating Menu Layout

- [confinementRectForMenu:onScreen:](confinementrect%28for_on_%29.md): Invoked to allow the delegate to specify a display location for the menu.
