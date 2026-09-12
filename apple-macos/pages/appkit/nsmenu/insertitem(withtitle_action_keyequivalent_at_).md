> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/insertitem(withtitle:action:keyequivalent:at:)](https://developer.apple.com/documentation/appkit/nsmenu/insertitem(withtitle:action:keyequivalent:at:))

# insertItem(withTitle:action:keyEquivalent:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates and adds a menu item at a specified location in the menu.

## Declaration

```swift
func insertItem(withTitle string: String, action selector: Selector?, keyEquivalent charCode: String, at index: Int) -> NSMenuItem
```

## Parameters

- `string`: A string to be made the title of the menu item.
- `selector`: The action-message selector to assign to the menu item.
- `charCode`: A string identifying the key to use as a key equivalent for the menu item. If you do not want the menu item to have a key equivalent, `keyEquiv` should be an empty string (`@""`) and not `nil`.
- `index`: An integer index identifying the location of the menu item in the menu.

<a id="return-value"></a>

## Return Value

The new menu item (an object conforming to the NSMenuItem protocol) or `nil` if the item could not be created

## See Also

### Adding and Removing Menu Items

- [insertItem(\_:at:)](insertitem%28__at_%29.md): Inserts a menu item into the menu at a specific location.
- [addItem(\_:)](additem%28__%29.md): Adds a menu item to the end of the menu.
- [addItem(withTitle:action:keyEquivalent:)](additem%28withtitle_action_keyequivalent_%29.md): Creates a new menu item and adds it to the end of the menu.
- [removeItem(\_:)](removeitem%28__%29.md): Removes a menu item from the menu.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the menu item at a specified location in the menu.
- [itemChanged(\_:)](itemchanged%28__%29.md): Invoked when a menu item is modified visually (for example, its title changes).
- [removeAllItems()](removeallitems%28%29.md): Removes all the menu items in the menu.

# insertItemWithTitle:action:keyEquivalent:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates and adds a menu item at a specified location in the menu.

## Declaration

```objectivec
- (NSMenuItem *) insertItemWithTitle:(NSString *) string action:(SEL) selector keyEquivalent:(NSString *) charCode atIndex:(NSInteger) index;
```

## Parameters

- `string`: A string to be made the title of the menu item.
- `selector`: The action-message selector to assign to the menu item.
- `charCode`: A string identifying the key to use as a key equivalent for the menu item. If you do not want the menu item to have a key equivalent, `keyEquiv` should be an empty string (`@""`) and not `nil`.
- `index`: An integer index identifying the location of the menu item in the menu.

<a id="return-value"></a>

## Return Value

The new menu item (an object conforming to the NSMenuItem protocol) or `nil` if the item could not be created

## See Also

### Adding and Removing Menu Items

- [insertItem:atIndex:](insertitem%28__at_%29.md): Inserts a menu item into the menu at a specific location.
- [addItem:](additem%28__%29.md): Adds a menu item to the end of the menu.
- [addItemWithTitle:action:keyEquivalent:](additem%28withtitle_action_keyequivalent_%29.md): Creates a new menu item and adds it to the end of the menu.
- [removeItem:](removeitem%28__%29.md): Removes a menu item from the menu.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the menu item at a specified location in the menu.
- [itemChanged:](itemchanged%28__%29.md): Invoked when a menu item is modified visually (for example, its title changes).
- [removeAllItems](removeallitems%28%29.md): Removes all the menu items in the menu.
