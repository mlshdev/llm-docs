> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/usesitemfrommenu](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/usesitemfrommenu)

# usesItemFromMenu (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the control uses an item from the menu for its own title.

## Declaration

```swift
var usesItemFromMenu: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), a pull-down menu uses the title of the first menu item, and a pop-up menu uses the title of the currently selected menu (if no menu item is selected, the pop-up button displays no item and is drawn empty). When the value is [false](https://developer.apple.com/documentation/swift/false), the menu item set with [menuItem](../nsmenuitemcell/menuitem.md) (`NSMenuItem`) is always displayed. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing menu attributes

- [menu](menu.md): The pop-up button’s associated menu.
- [pullsDown](pullsdown.md): A Boolean value that indicates the behavior of the button’s menu.
- [autoenablesItems](autoenablesitems.md): A Boolean value that indicates if the button automatically enables and disables its items every time a user event occurs.
- [preferredEdge](preferrededge.md): The edge of the cell from which the menu should pop out when screen conditions are restrictive.
- [altersStateOfSelectedItem](altersstateofselecteditem.md): A Boolean value that indicates if the pop-up button links the state of the selected menu item to the current selection.
- [arrowPosition](arrowposition.md): The position of the arrow displayed on the button.

# usesItemFromMenu (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the control uses an item from the menu for its own title.

## Declaration

```objectivec
@property BOOL usesItemFromMenu;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), a pull-down menu uses the title of the first menu item, and a pop-up menu uses the title of the currently selected menu (if no menu item is selected, the pop-up button displays no item and is drawn empty). When the value is [false](https://developer.apple.com/documentation/swift/false), the menu item set with [menuItem](../nsmenuitemcell/menuitem.md) (`NSMenuItem`) is always displayed. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing menu attributes

- [menu](menu.md): The pop-up button’s associated menu.
- [pullsDown](pullsdown.md): A Boolean value that indicates the behavior of the button’s menu.
- [autoenablesItems](autoenablesitems.md): A Boolean value that indicates if the button automatically enables and disables its items every time a user event occurs.
- [preferredEdge](preferrededge.md): The edge of the cell from which the menu should pop out when screen conditions are restrictive.
- [altersStateOfSelectedItem](altersstateofselecteditem.md): A Boolean value that indicates if the pop-up button links the state of the selected menu item to the current selection.
- [arrowPosition](arrowposition.md): The position of the arrow displayed on the button.
