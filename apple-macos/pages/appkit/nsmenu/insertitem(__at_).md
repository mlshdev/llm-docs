> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/insertitem(_:at:)](https://developer.apple.com/documentation/appkit/nsmenu/insertitem(_:at:))

# insertItem(\_:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts a menu item into the menu at a specific location.

## Declaration

```swift
func insertItem(_ newItem: NSMenuItem, at index: Int)
```

## Parameters

- `newItem`: An object conforming to the `NSMenuItem` protocol that represents a menu item.
- `index`: An integer index identifying the location of the menu item in the menu.

<a id="Discussion"></a>

## Discussion

This method posts an [didAddItemNotification](didadditemnotification.md), allowing interested observers to update as appropriate. This method is a primitive method. All item-addition methods end up calling this method, so this is where you should implement custom behavior on adding new items to a menu in a custom subclass. If the menu item already exists in another menu, it is not inserted and the method raises an exception of type [internalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception).

## See Also

### Related Documentation

- [item(at:)](item%28at_%29.md): Returns the menu item at a specific location of the menu.

### Adding and Removing Menu Items

- [insertItem(withTitle:action:keyEquivalent:at:)](insertitem%28withtitle_action_keyequivalent_at_%29.md): Creates and adds a menu item at a specified location in the menu.
- [addItem(\_:)](additem%28__%29.md): Adds a menu item to the end of the menu.
- [addItem(withTitle:action:keyEquivalent:)](additem%28withtitle_action_keyequivalent_%29.md): Creates a new menu item and adds it to the end of the menu.
- [removeItem(\_:)](removeitem%28__%29.md): Removes a menu item from the menu.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the menu item at a specified location in the menu.
- [itemChanged(\_:)](itemchanged%28__%29.md): Invoked when a menu item is modified visually (for example, its title changes).
- [removeAllItems()](removeallitems%28%29.md): Removes all the menu items in the menu.

# insertItem:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts a menu item into the menu at a specific location.

## Declaration

```objectivec
- (void) insertItem:(NSMenuItem *) newItem atIndex:(NSInteger) index;
```

## Parameters

- `newItem`: An object conforming to the `NSMenuItem` protocol that represents a menu item.
- `index`: An integer index identifying the location of the menu item in the menu.

<a id="Discussion"></a>

## Discussion

This method posts an [NSMenuDidAddItemNotification](didadditemnotification.md), allowing interested observers to update as appropriate. This method is a primitive method. All item-addition methods end up calling this method, so this is where you should implement custom behavior on adding new items to a menu in a custom subclass. If the menu item already exists in another menu, it is not inserted and the method raises an exception of type [NSInternalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception).

## See Also

### Related Documentation

- [itemAtIndex:](item%28at_%29.md): Returns the menu item at a specific location of the menu.

### Adding and Removing Menu Items

- [insertItemWithTitle:action:keyEquivalent:atIndex:](insertitem%28withtitle_action_keyequivalent_at_%29.md): Creates and adds a menu item at a specified location in the menu.
- [addItem:](additem%28__%29.md): Adds a menu item to the end of the menu.
- [addItemWithTitle:action:keyEquivalent:](additem%28withtitle_action_keyequivalent_%29.md): Creates a new menu item and adds it to the end of the menu.
- [removeItem:](removeitem%28__%29.md): Removes a menu item from the menu.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the menu item at a specified location in the menu.
- [itemChanged:](itemchanged%28__%29.md): Invoked when a menu item is modified visually (for example, its title changes).
- [removeAllItems](removeallitems%28%29.md): Removes all the menu items in the menu.
