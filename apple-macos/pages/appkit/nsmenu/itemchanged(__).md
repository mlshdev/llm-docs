> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/itemchanged(_:)](https://developer.apple.com/documentation/appkit/nsmenu/itemchanged(_:))

# itemChanged(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when a menu item is modified visually (for example, its title changes).

## Declaration

```swift
func itemChanged(_ item: NSMenuItem)
```

## Parameters

- `item`: The menu item that has visually changed.

<a id="Discussion"></a>

## Discussion

This method is not called for changes involving the menu item’s action, target, represented object, or tag. Posts an [didChangeItemNotification](didchangeitemnotification.md).

## See Also

### Adding and Removing Menu Items

- [insertItem(\_:at:)](insertitem%28__at_%29.md): Inserts a menu item into the menu at a specific location.
- [insertItem(withTitle:action:keyEquivalent:at:)](insertitem%28withtitle_action_keyequivalent_at_%29.md): Creates and adds a menu item at a specified location in the menu.
- [addItem(\_:)](additem%28__%29.md): Adds a menu item to the end of the menu.
- [addItem(withTitle:action:keyEquivalent:)](additem%28withtitle_action_keyequivalent_%29.md): Creates a new menu item and adds it to the end of the menu.
- [removeItem(\_:)](removeitem%28__%29.md): Removes a menu item from the menu.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the menu item at a specified location in the menu.
- [removeAllItems()](removeallitems%28%29.md): Removes all the menu items in the menu.

# itemChanged: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when a menu item is modified visually (for example, its title changes).

## Declaration

```objectivec
- (void) itemChanged:(NSMenuItem *) item;
```

## Parameters

- `item`: The menu item that has visually changed.

<a id="Discussion"></a>

## Discussion

This method is not called for changes involving the menu item’s action, target, represented object, or tag. Posts an [NSMenuDidChangeItemNotification](didchangeitemnotification.md).

## See Also

### Adding and Removing Menu Items

- [insertItem:atIndex:](insertitem%28__at_%29.md): Inserts a menu item into the menu at a specific location.
- [insertItemWithTitle:action:keyEquivalent:atIndex:](insertitem%28withtitle_action_keyequivalent_at_%29.md): Creates and adds a menu item at a specified location in the menu.
- [addItem:](additem%28__%29.md): Adds a menu item to the end of the menu.
- [addItemWithTitle:action:keyEquivalent:](additem%28withtitle_action_keyequivalent_%29.md): Creates a new menu item and adds it to the end of the menu.
- [removeItem:](removeitem%28__%29.md): Removes a menu item from the menu.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the menu item at a specified location in the menu.
- [removeAllItems](removeallitems%28%29.md): Removes all the menu items in the menu.
