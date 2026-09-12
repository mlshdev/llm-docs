> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/preferrededge](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/preferrededge)

# preferredEdge (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The edge of the cell from which the menu should pop out when screen conditions are restrictive.

## Declaration

```swift
var preferredEdge: NSRectEdge { get set }
```

<a id="Discussion"></a>

## Discussion

At display time, if attaching the menu to the preferred edge would cause part of the menu to be obscured, the pop-up button may use a different edge. If no preferred edge is set, the pop-up button uses the bottom edge by default, which is [NSMaxYEdge](https://developer.apple.com/documentation/foundation/nsrectedge/nsmaxyedge) for flipped views or [NSMinYEdge](https://developer.apple.com/documentation/foundation/nsrectedge/nsminyedge) for unflipped views. Additional values for this property include [NSMinXEdge](https://developer.apple.com/documentation/foundation/nsrectedge/nsminxedge) and [NSMaxXEdge](https://developer.apple.com/documentation/foundation/nsrectedge/nsmaxxedge).

The exact location of the arrow is determined by examining the value of this property and [arrowPosition](arrowposition.md).

- If the arrow position is [NSPopUpButton.ArrowPosition.arrowAtCenter](../nspopupbutton/arrowposition/arrowatcenter.md), the arrow stays in the center of the button and the value of this property determines which edge the arrow points to: `NSMinXEdge` points to the left, `NSMaxYEdge` points to the top, `NSMaxXEdge` points to the right, and `NSMinYEdge` points to the bottom.
- If the arrow position is [NSPopUpButton.ArrowPosition.arrowAtBottom](../nspopupbutton/arrowposition/arrowatbottom.md), the value of this property determines which edge at which the arrow is placed: `NSMinXEdge` places the arrow at the center of the left side, pointing to the left, `NSMinYEdge` places the arrow at bottom right corner, pointing up, `NSMaxXEdge` places the arrow at the center of the right side, pointing to the right, and `NSMaxYEdge` places the arrow at the bottom right corner, pointing down.

## See Also

### Accessing menu attributes

- [menu](menu.md): The pop-up button’s associated menu.
- [pullsDown](pullsdown.md): A Boolean value that indicates the behavior of the button’s menu.
- [autoenablesItems](autoenablesitems.md): A Boolean value that indicates if the button automatically enables and disables its items every time a user event occurs.
- [usesItemFromMenu](usesitemfrommenu.md): A Boolean value that indicates if the control uses an item from the menu for its own title.
- [altersStateOfSelectedItem](altersstateofselecteditem.md): A Boolean value that indicates if the pop-up button links the state of the selected menu item to the current selection.
- [arrowPosition](arrowposition.md): The position of the arrow displayed on the button.

# preferredEdge (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The edge of the cell from which the menu should pop out when screen conditions are restrictive.

## Declaration

```objectivec
@property NSRectEdge preferredEdge;
```

<a id="Discussion"></a>

## Discussion

At display time, if attaching the menu to the preferred edge would cause part of the menu to be obscured, the pop-up button may use a different edge. If no preferred edge is set, the pop-up button uses the bottom edge by default, which is [NSMaxYEdge](https://developer.apple.com/documentation/foundation/nsrectedge/nsmaxyedge) for flipped views or [NSMinYEdge](https://developer.apple.com/documentation/foundation/nsrectedge/nsminyedge) for unflipped views. Additional values for this property include [NSMinXEdge](https://developer.apple.com/documentation/foundation/nsrectedge/nsminxedge) and [NSMaxXEdge](https://developer.apple.com/documentation/foundation/nsrectedge/nsmaxxedge).

The exact location of the arrow is determined by examining the value of this property and [arrowPosition](arrowposition.md).

- If the arrow position is [NSPopUpArrowAtCenter](../nspopupbutton/arrowposition/arrowatcenter.md), the arrow stays in the center of the button and the value of this property determines which edge the arrow points to: `NSMinXEdge` points to the left, `NSMaxYEdge` points to the top, `NSMaxXEdge` points to the right, and `NSMinYEdge` points to the bottom.
- If the arrow position is [NSPopUpArrowAtBottom](../nspopupbutton/arrowposition/arrowatbottom.md), the value of this property determines which edge at which the arrow is placed: `NSMinXEdge` places the arrow at the center of the left side, pointing to the left, `NSMinYEdge` places the arrow at bottom right corner, pointing up, `NSMaxXEdge` places the arrow at the center of the right side, pointing to the right, and `NSMaxYEdge` places the arrow at the bottom right corner, pointing down.

## See Also

### Accessing menu attributes

- [menu](menu.md): The pop-up button’s associated menu.
- [pullsDown](pullsdown.md): A Boolean value that indicates the behavior of the button’s menu.
- [autoenablesItems](autoenablesitems.md): A Boolean value that indicates if the button automatically enables and disables its items every time a user event occurs.
- [usesItemFromMenu](usesitemfrommenu.md): A Boolean value that indicates if the control uses an item from the menu for its own title.
- [altersStateOfSelectedItem](altersstateofselecteditem.md): A Boolean value that indicates if the pop-up button links the state of the selected menu item to the current selection.
- [arrowPosition](arrowposition.md): The position of the arrow displayed on the button.
