> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/event/touchdragexit](https://developer.apple.com/documentation/uikit/uicontrol/event/touchdragexit)

# touchDragExit (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

An event where a finger is dragged from within a control to outside its bounds.

## Declaration

```swift
static var touchDragExit: UIControl.Event { get }
```

## See Also

### Constants

- [touchDown](touchdown.md): A touch-down event in the control.
- [touchDownRepeat](touchdownrepeat.md): A repeated touch-down event in the control; for this event the value of the UITouch `tapCount` method is greater than one.
- [touchDragInside](touchdraginside.md): An event where a finger is dragged inside the bounds of the control.
- [touchDragOutside](touchdragoutside.md): An event where a finger is dragged just outside the bounds of the control.
- [touchDragEnter](touchdragenter.md): An event where a finger is dragged into the bounds of the control.
- [touchUpInside](touchupinside.md): A touch-up event in the control where the finger is inside the bounds of the control.
- [touchUpOutside](touchupoutside.md): A touch-up event in the control where the finger is outside the bounds of the control.
- [touchCancel](touchcancel.md): A system event canceling the current touches for the control.
- [valueChanged](valuechanged.md): A touch dragging or otherwise manipulating a control, causing it to emit a series of different values.
- [menuActionTriggered](menuactiontriggered.md): A menu action has triggered prior to the menu being presented.
- [primaryActionTriggered](primaryactiontriggered.md): A semantic action triggered by buttons.
- [editingDidBegin](editingdidbegin.md): A touch initiating an editing session in a text field by entering its bounds.
- [editingChanged](editingchanged.md): A touch making an editing change in a text field.
- [editingDidEnd](editingdidend.md): A touch ending an editing session in a text field by leaving its bounds.
- [editingDidEndOnExit](editingdidendonexit.md): A touch ending an editing session in a text field.

# UIControlEventTouchDragExit (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

An event where a finger is dragged from within a control to outside its bounds.

## Declaration

```objectivec
UIControlEventTouchDragExit
```

## See Also

### Constants

- [UIControlEventTouchDown](touchdown.md): A touch-down event in the control.
- [UIControlEventTouchDownRepeat](touchdownrepeat.md): A repeated touch-down event in the control; for this event the value of the UITouch `tapCount` method is greater than one.
- [UIControlEventTouchDragInside](touchdraginside.md): An event where a finger is dragged inside the bounds of the control.
- [UIControlEventTouchDragOutside](touchdragoutside.md): An event where a finger is dragged just outside the bounds of the control.
- [UIControlEventTouchDragEnter](touchdragenter.md): An event where a finger is dragged into the bounds of the control.
- [UIControlEventTouchUpInside](touchupinside.md): A touch-up event in the control where the finger is inside the bounds of the control.
- [UIControlEventTouchUpOutside](touchupoutside.md): A touch-up event in the control where the finger is outside the bounds of the control.
- [UIControlEventTouchCancel](touchcancel.md): A system event canceling the current touches for the control.
- [UIControlEventValueChanged](valuechanged.md): A touch dragging or otherwise manipulating a control, causing it to emit a series of different values.
- [UIControlEventMenuActionTriggered](menuactiontriggered.md): A menu action has triggered prior to the menu being presented.
- [UIControlEventPrimaryActionTriggered](primaryactiontriggered.md): A semantic action triggered by buttons.
- [UIControlEventEditingDidBegin](editingdidbegin.md): A touch initiating an editing session in a text field by entering its bounds.
- [UIControlEventEditingChanged](editingchanged.md): A touch making an editing change in a text field.
- [UIControlEventEditingDidEnd](editingdidend.md): A touch ending an editing session in a text field by leaving its bounds.
- [UIControlEventEditingDidEndOnExit](editingdidendonexit.md): A touch ending an editing session in a text field.
