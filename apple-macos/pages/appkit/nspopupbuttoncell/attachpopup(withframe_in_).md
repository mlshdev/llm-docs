> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/attachpopup(withframe:in:)](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/attachpopup(withframe:in:))

# attachPopUp(withFrame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets up the receiver to display a menu.

## Declaration

```swift
func attachPopUp(withFrame cellFrame: NSRect, in controlView: NSView)
```

## Parameters

- `cellFrame`: The cell’s rectangle, specified in points in the coordinate system of the view in the `controlView` parameter. The menu is attached to this rectangle.
- `controlView`: The view in which to display the pop-up button’s menu.

<a id="Discussion"></a>

## Discussion

This call sets up the popup button cell to display a menu, which occurs in [performClick(withFrame:in:)](performclick%28withframe_in_%29.md). This method sets the cell’s control view and then highlights and redraws the cell. It does not show the menu.

This method also posts an [willPopUpNotification](willpopupnotification.md). (The `NSPopUpButton` object sends a corresponding [willPopUpNotification](../nspopupbutton/willpopupnotification.md).)

You normally do not call this method explicitly. It is called by the Application Kit automatically when the menu for the pop-up button is to be displayed.

## See Also

### Handling events and action messages

- [dismissPopUp()](dismisspopup%28%29.md): Dismisses the pop-up button’s menu by ordering its window out.
- [performClick(withFrame:in:)](performclick%28withframe_in_%29.md): Displays the receiver’s menu and track mouse events in it.

# attachPopUpWithFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets up the receiver to display a menu.

## Declaration

```objectivec
- (void) attachPopUpWithFrame:(NSRect) cellFrame inView:(NSView *) controlView;
```

## Parameters

- `cellFrame`: The cell’s rectangle, specified in points in the coordinate system of the view in the `controlView` parameter. The menu is attached to this rectangle.
- `controlView`: The view in which to display the pop-up button’s menu.

<a id="Discussion"></a>

## Discussion

This call sets up the popup button cell to display a menu, which occurs in [performClickWithFrame:inView:](performclick%28withframe_in_%29.md). This method sets the cell’s control view and then highlights and redraws the cell. It does not show the menu.

This method also posts an [NSPopUpButtonCellWillPopUpNotification](willpopupnotification.md). (The `NSPopUpButton` object sends a corresponding [NSPopUpButtonWillPopUpNotification](../nspopupbutton/willpopupnotification.md).)

You normally do not call this method explicitly. It is called by the Application Kit automatically when the menu for the pop-up button is to be displayed.

## See Also

### Handling events and action messages

- [dismissPopUp](dismisspopup%28%29.md): Dismisses the pop-up button’s menu by ordering its window out.
- [performClickWithFrame:inView:](performclick%28withframe_in_%29.md): Displays the receiver’s menu and track mouse events in it.
