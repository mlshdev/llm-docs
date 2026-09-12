> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/additem(_:)](https://developer.apple.com/documentation/appkit/nsmenu/additem(_:))

# addItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds a menu item to the end of the menu.

## Declaration

```swift
func addItem(_ newItem: NSMenuItem)
```

## Parameters

- `newItem`: The menu item (an object conforming to the NSMenuItem protocol) to add to the menu.

<a id="Discussion"></a>

## Discussion

This method invokes [insertItem(\_:at:)](insertitem%28__at_%29.md). Thus, the menu does not accept the menu item if it already belongs to another menu. After adding the menu item, the menu updates itself.

## See Also

### Adding and Removing Menu Items

- [insertItem(\_:at:)](insertitem%28__at_%29.md): Inserts a menu item into the menu at a specific location.
- [insertItem(withTitle:action:keyEquivalent:at:)](insertitem%28withtitle_action_keyequivalent_at_%29.md): Creates and adds a menu item at a specified location in the menu.
- [addItem(withTitle:action:keyEquivalent:)](additem%28withtitle_action_keyequivalent_%29.md): Creates a new menu item and adds it to the end of the menu.
- [removeItem(\_:)](removeitem%28__%29.md): Removes a menu item from the menu.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the menu item at a specified location in the menu.
- [itemChanged(\_:)](itemchanged%28__%29.md): Invoked when a menu item is modified visually (for example, its title changes).
- [removeAllItems()](removeallitems%28%29.md): Removes all the menu items in the menu.

# addItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds a menu item to the end of the menu.

## Declaration

```objectivec
- (void) addItem:(NSMenuItem *) newItem;
```

## Parameters

- `newItem`: The menu item (an object conforming to the NSMenuItem protocol) to add to the menu.

<a id="Discussion"></a>

## Discussion

This method invokes [insertItem:atIndex:](insertitem%28__at_%29.md). Thus, the menu does not accept the menu item if it already belongs to another menu. After adding the menu item, the menu updates itself.

## See Also

### Adding and Removing Menu Items

- [insertItem:atIndex:](insertitem%28__at_%29.md): Inserts a menu item into the menu at a specific location.
- [insertItemWithTitle:action:keyEquivalent:atIndex:](insertitem%28withtitle_action_keyequivalent_at_%29.md): Creates and adds a menu item at a specified location in the menu.
- [addItemWithTitle:action:keyEquivalent:](additem%28withtitle_action_keyequivalent_%29.md): Creates a new menu item and adds it to the end of the menu.
- [removeItem:](removeitem%28__%29.md): Removes a menu item from the menu.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the menu item at a specified location in the menu.
- [itemChanged:](itemchanged%28__%29.md): Invoked when a menu item is modified visually (for example, its title changes).
- [removeAllItems](removeallitems%28%29.md): Removes all the menu items in the menu.
