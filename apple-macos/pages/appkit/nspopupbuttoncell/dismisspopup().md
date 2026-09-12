> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/dismisspopup()](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/dismisspopup())

# dismissPopUp() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Dismisses the pop-up button’s menu by ordering its window out.

## Declaration

```swift
func dismissPopUp()
```

<a id="Discussion"></a>

## Discussion

If the pop-up button was not displaying its menu, this method does nothing.

You normally do not call this method explicitly. It is called by the Application Kit automatically to dismiss the menu for the pop-up button.

## See Also

### Related Documentation

- [orderOut(\_:)](../nswindow/orderout%28__%29.md): Removes the window from the screen list, which hides the window.

### Handling events and action messages

- [attachPopUp(withFrame:in:)](attachpopup%28withframe_in_%29.md): Sets up the receiver to display a menu.
- [performClick(withFrame:in:)](performclick%28withframe_in_%29.md): Displays the receiver’s menu and track mouse events in it.

# dismissPopUp (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Dismisses the pop-up button’s menu by ordering its window out.

## Declaration

```objectivec
- (void) dismissPopUp;
```

<a id="Discussion"></a>

## Discussion

If the pop-up button was not displaying its menu, this method does nothing.

You normally do not call this method explicitly. It is called by the Application Kit automatically to dismiss the menu for the pop-up button.

## See Also

### Related Documentation

- [orderOut:](../nswindow/orderout%28__%29.md): Removes the window from the screen list, which hides the window.

### Handling events and action messages

- [attachPopUpWithFrame:inView:](attachpopup%28withframe_in_%29.md): Sets up the receiver to display a menu.
- [performClickWithFrame:inView:](performclick%28withframe_in_%29.md): Displays the receiver’s menu and track mouse events in it.
