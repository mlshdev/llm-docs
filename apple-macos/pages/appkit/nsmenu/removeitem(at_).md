> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/removeitem(at:)](https://developer.apple.com/documentation/appkit/nsmenu/removeitem(at:))

# removeItem(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the menu item at a specified location in the menu.

## Declaration

```swift
func removeItem(at index: Int)
```

## Parameters

- `index`: An integer index identifying the menu item.

<a id="Discussion"></a>

## Discussion

After it removes the menu item, this method posts an [didRemoveItemNotification](didremoveitemnotification.md).

## See Also

### Adding and Removing Menu Items

- [insertItem(\_:at:)](insertitem%28__at_%29.md): Inserts a menu item into the menu at a specific location.
- [insertItem(withTitle:action:keyEquivalent:at:)](insertitem%28withtitle_action_keyequivalent_at_%29.md): Creates and adds a menu item at a specified location in the menu.
- [addItem(\_:)](additem%28__%29.md): Adds a menu item to the end of the menu.
- [addItem(withTitle:action:keyEquivalent:)](additem%28withtitle_action_keyequivalent_%29.md): Creates a new menu item and adds it to the end of the menu.
- [removeItem(\_:)](removeitem%28__%29.md): Removes a menu item from the menu.
- [itemChanged(\_:)](itemchanged%28__%29.md): Invoked when a menu item is modified visually (for example, its title changes).
- [removeAllItems()](removeallitems%28%29.md): Removes all the menu items in the menu.

# removeItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the menu item at a specified location in the menu.

## Declaration

```objectivec
- (void) removeItemAtIndex:(NSInteger) index;
```

## Parameters

- `index`: An integer index identifying the menu item.

<a id="Discussion"></a>

## Discussion

After it removes the menu item, this method posts an [NSMenuDidRemoveItemNotification](didremoveitemnotification.md).

## See Also

### Adding and Removing Menu Items

- [insertItem:atIndex:](insertitem%28__at_%29.md): Inserts a menu item into the menu at a specific location.
- [insertItemWithTitle:action:keyEquivalent:atIndex:](insertitem%28withtitle_action_keyequivalent_at_%29.md): Creates and adds a menu item at a specified location in the menu.
- [addItem:](additem%28__%29.md): Adds a menu item to the end of the menu.
- [addItemWithTitle:action:keyEquivalent:](additem%28withtitle_action_keyequivalent_%29.md): Creates a new menu item and adds it to the end of the menu.
- [removeItem:](removeitem%28__%29.md): Removes a menu item from the menu.
- [itemChanged:](itemchanged%28__%29.md): Invoked when a menu item is modified visually (for example, its title changes).
- [removeAllItems](removeallitems%28%29.md): Removes all the menu items in the menu.
