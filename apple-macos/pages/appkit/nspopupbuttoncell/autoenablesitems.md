> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/autoenablesitems](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/autoenablesitems)

# autoenablesItems (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the button automatically enables and disables its items every time a user event occurs.

## Declaration

```swift
var autoenablesItems: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the button automatically enables and disables items. The default value is [true](https://developer.apple.com/documentation/swift/true). For more information about enabling and disabling menu items, see NSMenuValidation.

## See Also

### Accessing menu attributes

- [menu](menu.md): The pop-up button’s associated menu.
- [pullsDown](pullsdown.md): A Boolean value that indicates the behavior of the button’s menu.
- [preferredEdge](preferrededge.md): The edge of the cell from which the menu should pop out when screen conditions are restrictive.
- [usesItemFromMenu](usesitemfrommenu.md): A Boolean value that indicates if the control uses an item from the menu for its own title.
- [altersStateOfSelectedItem](altersstateofselecteditem.md): A Boolean value that indicates if the pop-up button links the state of the selected menu item to the current selection.
- [arrowPosition](arrowposition.md): The position of the arrow displayed on the button.

# autoenablesItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the button automatically enables and disables its items every time a user event occurs.

## Declaration

```objectivec
@property BOOL autoenablesItems;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the button automatically enables and disables items. The default value is [true](https://developer.apple.com/documentation/swift/true). For more information about enabling and disabling menu items, see NSMenuValidation.

## See Also

### Accessing menu attributes

- [menu](menu.md): The pop-up button’s associated menu.
- [pullsDown](pullsdown.md): A Boolean value that indicates the behavior of the button’s menu.
- [preferredEdge](preferrededge.md): The edge of the cell from which the menu should pop out when screen conditions are restrictive.
- [usesItemFromMenu](usesitemfrommenu.md): A Boolean value that indicates if the control uses an item from the menu for its own title.
- [altersStateOfSelectedItem](altersstateofselecteditem.md): A Boolean value that indicates if the pop-up button links the state of the selected menu item to the current selection.
- [arrowPosition](arrowposition.md): The position of the arrow displayed on the button.
