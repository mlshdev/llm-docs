> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/pullsdown](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/pullsdown)

# pullsDown (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates the behavior of the button’s menu.

## Declaration

```swift
var pullsDown: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the menu behaves like a pull-down menu; when the value is [false](https://developer.apple.com/documentation/swift/false), it behaves like a pop-up menu. If you use this property to change the menu type from a pop-up menu to a pull-down menu, and the cell alters the state of its selected items, the state of the currently selected item is set to [NSOffState](../nsoffstate.md) before the menu type is changed.

## See Also

### Related Documentation

- [synchronizeTitleAndSelectedItem()](synchronizetitleandselecteditem%28%29.md): Synchronizes the pop-up button’s displayed item with the currently selected menu item.

### Accessing menu attributes

- [menu](menu.md): The pop-up button’s associated menu.
- [autoenablesItems](autoenablesitems.md): A Boolean value that indicates if the button automatically enables and disables its items every time a user event occurs.
- [preferredEdge](preferrededge.md): The edge of the cell from which the menu should pop out when screen conditions are restrictive.
- [usesItemFromMenu](usesitemfrommenu.md): A Boolean value that indicates if the control uses an item from the menu for its own title.
- [altersStateOfSelectedItem](altersstateofselecteditem.md): A Boolean value that indicates if the pop-up button links the state of the selected menu item to the current selection.
- [arrowPosition](arrowposition.md): The position of the arrow displayed on the button.

# pullsDown (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates the behavior of the button’s menu.

## Declaration

```objectivec
@property BOOL pullsDown;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the menu behaves like a pull-down menu; when the value is [false](https://developer.apple.com/documentation/swift/false), it behaves like a pop-up menu. If you use this property to change the menu type from a pop-up menu to a pull-down menu, and the cell alters the state of its selected items, the state of the currently selected item is set to [NSOffState](../nsoffstate.md) before the menu type is changed.

## See Also

### Related Documentation

- [synchronizeTitleAndSelectedItem](synchronizetitleandselecteditem%28%29.md): Synchronizes the pop-up button’s displayed item with the currently selected menu item.

### Accessing menu attributes

- [menu](menu.md): The pop-up button’s associated menu.
- [autoenablesItems](autoenablesitems.md): A Boolean value that indicates if the button automatically enables and disables its items every time a user event occurs.
- [preferredEdge](preferrededge.md): The edge of the cell from which the menu should pop out when screen conditions are restrictive.
- [usesItemFromMenu](usesitemfrommenu.md): A Boolean value that indicates if the control uses an item from the menu for its own title.
- [altersStateOfSelectedItem](altersstateofselecteditem.md): A Boolean value that indicates if the pop-up button links the state of the selected menu item to the current selection.
- [arrowPosition](arrowposition.md): The position of the arrow displayed on the button.
