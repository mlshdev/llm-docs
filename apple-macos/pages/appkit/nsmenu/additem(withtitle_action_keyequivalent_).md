> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/additem(withtitle:action:keyequivalent:)](https://developer.apple.com/documentation/appkit/nsmenu/additem(withtitle:action:keyequivalent:))

# addItem(withTitle:action:keyEquivalent:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new menu item and adds it to the end of the menu.

## Declaration

```swift
func addItem(withTitle string: String, action selector: Selector?, keyEquivalent charCode: String) -> NSMenuItem
```

## Parameters

- `string`: A string to be made the title of the menu item.
- `selector`: The action-message selector to assign to the menu item.
- `charCode`: A string identifying the key to use as a key equivalent for the menu item. If you do not want the menu item to have a key equivalent, `keyEquiv` should be an empty string (`@""`) and not `nil`.

<a id="return-value"></a>

## Return Value

The created menu item (an object conforming to the NSMenuItem protocol) or `nil` if the object couldn’t be created.

## See Also

### Adding and Removing Menu Items

- [insertItem(\_:at:)](insertitem%28__at_%29.md): Inserts a menu item into the menu at a specific location.
- [insertItem(withTitle:action:keyEquivalent:at:)](insertitem%28withtitle_action_keyequivalent_at_%29.md): Creates and adds a menu item at a specified location in the menu.
- [addItem(\_:)](additem%28__%29.md): Adds a menu item to the end of the menu.
- [removeItem(\_:)](removeitem%28__%29.md): Removes a menu item from the menu.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the menu item at a specified location in the menu.
- [itemChanged(\_:)](itemchanged%28__%29.md): Invoked when a menu item is modified visually (for example, its title changes).
- [removeAllItems()](removeallitems%28%29.md): Removes all the menu items in the menu.

# addItemWithTitle:action:keyEquivalent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new menu item and adds it to the end of the menu.

## Declaration

```objectivec
- (NSMenuItem *) addItemWithTitle:(NSString *) string action:(SEL) selector keyEquivalent:(NSString *) charCode;
```

## Parameters

- `string`: A string to be made the title of the menu item.
- `selector`: The action-message selector to assign to the menu item.
- `charCode`: A string identifying the key to use as a key equivalent for the menu item. If you do not want the menu item to have a key equivalent, `keyEquiv` should be an empty string (`@""`) and not `nil`.

<a id="return-value"></a>

## Return Value

The created menu item (an object conforming to the NSMenuItem protocol) or `nil` if the object couldn’t be created.

## See Also

### Adding and Removing Menu Items

- [insertItem:atIndex:](insertitem%28__at_%29.md): Inserts a menu item into the menu at a specific location.
- [insertItemWithTitle:action:keyEquivalent:atIndex:](insertitem%28withtitle_action_keyequivalent_at_%29.md): Creates and adds a menu item at a specified location in the menu.
- [addItem:](additem%28__%29.md): Adds a menu item to the end of the menu.
- [removeItem:](removeitem%28__%29.md): Removes a menu item from the menu.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the menu item at a specified location in the menu.
- [itemChanged:](itemchanged%28__%29.md): Invoked when a menu item is modified visually (for example, its title changes).
- [removeAllItems](removeallitems%28%29.md): Removes all the menu items in the menu.
