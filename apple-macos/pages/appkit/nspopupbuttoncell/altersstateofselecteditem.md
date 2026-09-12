> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/altersstateofselecteditem](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/altersstateofselecteditem)

# altersStateOfSelectedItem (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the pop-up button links the state of the selected menu item to the current selection.

## Declaration

```swift
var altersStateOfSelectedItem: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true) (which is the default value), the state of the selected item is set to [NSOnState](../nsonstate.md). When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the items in the menu are left alone. When you change the value of this property, the state of the currently selected item is updated appropriately.

Note that this property affects only pop-up buttons (it is ignored for pull-down menus).

## See Also

### Related Documentation

- [selectItem(at:)](selectitem%28at_%29.md): Selects the item in the menu at the specified index.
- [select(\_:)](select%28__%29.md): Selects the specified menu item.
- [selectedItem](selecteditem.md): The menu item last selected by the user.
- [selectItem(withTitle:)](selectitem%28withtitle_%29.md): Selects the item with the specified title.

### Accessing menu attributes

- [menu](menu.md): The pop-up button’s associated menu.
- [pullsDown](pullsdown.md): A Boolean value that indicates the behavior of the button’s menu.
- [autoenablesItems](autoenablesitems.md): A Boolean value that indicates if the button automatically enables and disables its items every time a user event occurs.
- [preferredEdge](preferrededge.md): The edge of the cell from which the menu should pop out when screen conditions are restrictive.
- [usesItemFromMenu](usesitemfrommenu.md): A Boolean value that indicates if the control uses an item from the menu for its own title.
- [arrowPosition](arrowposition.md): The position of the arrow displayed on the button.

# altersStateOfSelectedItem (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the pop-up button links the state of the selected menu item to the current selection.

## Declaration

```objectivec
@property BOOL altersStateOfSelectedItem;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true) (which is the default value), the state of the selected item is set to [NSOnState](../nsonstate.md). When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the items in the menu are left alone. When you change the value of this property, the state of the currently selected item is updated appropriately.

Note that this property affects only pop-up buttons (it is ignored for pull-down menus).

## See Also

### Related Documentation

- [selectItemAtIndex:](selectitem%28at_%29.md): Selects the item in the menu at the specified index.
- [selectItem:](select%28__%29.md): Selects the specified menu item.
- [selectedItem](selecteditem.md): The menu item last selected by the user.
- [selectItemWithTitle:](selectitem%28withtitle_%29.md): Selects the item with the specified title.

### Accessing menu attributes

- [menu](menu.md): The pop-up button’s associated menu.
- [pullsDown](pullsdown.md): A Boolean value that indicates the behavior of the button’s menu.
- [autoenablesItems](autoenablesitems.md): A Boolean value that indicates if the button automatically enables and disables its items every time a user event occurs.
- [preferredEdge](preferrededge.md): The edge of the cell from which the menu should pop out when screen conditions are restrictive.
- [usesItemFromMenu](usesitemfrommenu.md): A Boolean value that indicates if the control uses an item from the menu for its own title.
- [arrowPosition](arrowposition.md): The position of the arrow displayed on the button.
