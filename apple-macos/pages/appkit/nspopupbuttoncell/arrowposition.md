> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/arrowposition](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/arrowposition)

# arrowPosition (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The position of the arrow displayed on the button.

## Declaration

```swift
var arrowPosition: NSPopUpButton.ArrowPosition { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [NSPopUpButton.ArrowPosition.noArrow](../nspopupbutton/arrowposition/noarrow.md), the control displays no arrow. [NSPopUpButton.ArrowPosition.arrowAtCenter](../nspopupbutton/arrowposition/arrowatcenter.md) displays the arrow centered horizontally within the cell and  [NSPopUpButton.ArrowPosition.arrowAtBottom](../nspopupbutton/arrowposition/arrowatbottom.md) displays the arrow at the edge of the cell. This property is used with [preferredEdge](preferrededge.md) to determine the exact location and orientation of the arrow.

This property applies to only bezel style and borderless pop-up buttons.

## See Also

### Accessing menu attributes

- [menu](menu.md): The pop-up button’s associated menu.
- [pullsDown](pullsdown.md): A Boolean value that indicates the behavior of the button’s menu.
- [autoenablesItems](autoenablesitems.md): A Boolean value that indicates if the button automatically enables and disables its items every time a user event occurs.
- [preferredEdge](preferrededge.md): The edge of the cell from which the menu should pop out when screen conditions are restrictive.
- [usesItemFromMenu](usesitemfrommenu.md): A Boolean value that indicates if the control uses an item from the menu for its own title.
- [altersStateOfSelectedItem](altersstateofselecteditem.md): A Boolean value that indicates if the pop-up button links the state of the selected menu item to the current selection.

# arrowPosition (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The position of the arrow displayed on the button.

## Declaration

```objectivec
@property NSPopUpArrowPosition arrowPosition;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [NSPopUpNoArrow](../nspopupbutton/arrowposition/noarrow.md), the control displays no arrow. [NSPopUpArrowAtCenter](../nspopupbutton/arrowposition/arrowatcenter.md) displays the arrow centered horizontally within the cell and  [NSPopUpArrowAtBottom](../nspopupbutton/arrowposition/arrowatbottom.md) displays the arrow at the edge of the cell. This property is used with [preferredEdge](preferrededge.md) to determine the exact location and orientation of the arrow.

This property applies to only bezel style and borderless pop-up buttons.

## See Also

### Accessing menu attributes

- [menu](menu.md): The pop-up button’s associated menu.
- [pullsDown](pullsdown.md): A Boolean value that indicates the behavior of the button’s menu.
- [autoenablesItems](autoenablesitems.md): A Boolean value that indicates if the button automatically enables and disables its items every time a user event occurs.
- [preferredEdge](preferrededge.md): The edge of the cell from which the menu should pop out when screen conditions are restrictive.
- [usesItemFromMenu](usesitemfrommenu.md): A Boolean value that indicates if the control uses an item from the menu for its own title.
- [altersStateOfSelectedItem](altersstateofselecteditem.md): A Boolean value that indicates if the pop-up button links the state of the selected menu item to the current selection.
