> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/performclick(withframe:in:)](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/performclick(withframe:in:))

# performClick(withFrame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays the receiver’s menu and track mouse events in it.

## Declaration

```swift
func performClick(withFrame frame: NSRect, in controlView: NSView)
```

## Parameters

- `frame`: The cell’s rectangle, specified in points in the coordinate system of the view in the `controlView` parameter.
- `controlView`: The view in which to display the pop-up button’s menu.

<a id="Discussion"></a>

## Discussion

You normally do not call this method explicitly. It is called by the Application Kit automatically to handle events in the pop-up button.

## See Also

### Handling events and action messages

- [attachPopUp(withFrame:in:)](attachpopup%28withframe_in_%29.md): Sets up the receiver to display a menu.
- [dismissPopUp()](dismisspopup%28%29.md): Dismisses the pop-up button’s menu by ordering its window out.

# performClickWithFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays the receiver’s menu and track mouse events in it.

## Declaration

```objectivec
- (void) performClickWithFrame:(NSRect) frame inView:(NSView *) controlView;
```

## Parameters

- `frame`: The cell’s rectangle, specified in points in the coordinate system of the view in the `controlView` parameter.
- `controlView`: The view in which to display the pop-up button’s menu.

<a id="Discussion"></a>

## Discussion

You normally do not call this method explicitly. It is called by the Application Kit automatically to handle events in the pop-up button.

## See Also

### Handling events and action messages

- [attachPopUpWithFrame:inView:](attachpopup%28withframe_in_%29.md): Sets up the receiver to display a menu.
- [dismissPopUp](dismisspopup%28%29.md): Dismisses the pop-up button’s menu by ordering its window out.
