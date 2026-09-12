> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/sendaction(_:to:)](https://developer.apple.com/documentation/appkit/nscontrol/sendaction(_:to:))

# sendAction(\_:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Causes the specified action to be sent to the target.

## Declaration

```swift
func sendAction(_ action: Selector?, to target: Any?) -> Bool
```

## Parameters

- `action`: The selector to invoke on the target. If the selector is `NULL`, no message is sent.
- `target`: The target object to receive the message. If the object is `nil`, the application searches the responder chain for an object capable of handling the message. For more information on dispatching actions, see the class description for [NSActionCell](../nsactioncell.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the message was successfully sent; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method uses the [sendAction(\_:to:from:)](../nsapplication/sendaction%28__to_from_%29.md) method of `NSApplication` to invoke the specified method on an object. The receiver is passed as the parameter to the action message. This method is invoked primarily by the  [trackMouse(with:in:of:untilMouseUp:)](../nscell/trackmouse%28with_in_of_untilmouseup_%29.md) method of `NSCell`.

## See Also

### Implementing the Target-Action Mechanism

- [action](action.md): The default action-message selector associated with the control.
- [target](target.md): The target object that receives action messages from the cell.
- [isContinuous](iscontinuous.md): A Boolean value indicating whether the receiver’s cell sends its action message continuously to its target during mouse tracking.
- [sendAction(on:)](sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.

# sendAction:to: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Causes the specified action to be sent to the target.

## Declaration

```objectivec
- (BOOL) sendAction:(SEL) action to:(id) target;
```

## Parameters

- `action`: The selector to invoke on the target. If the selector is `NULL`, no message is sent.
- `target`: The target object to receive the message. If the object is `nil`, the application searches the responder chain for an object capable of handling the message. For more information on dispatching actions, see the class description for [NSActionCell](../nsactioncell.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the message was successfully sent; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method uses the [sendAction:to:from:](../nsapplication/sendaction%28__to_from_%29.md) method of `NSApplication` to invoke the specified method on an object. The receiver is passed as the parameter to the action message. This method is invoked primarily by the  [trackMouse:inRect:ofView:untilMouseUp:](../nscell/trackmouse%28with_in_of_untilmouseup_%29.md) method of `NSCell`.

## See Also

### Implementing the Target-Action Mechanism

- [action](action.md): The default action-message selector associated with the control.
- [target](target.md): The target object that receives action messages from the cell.
- [continuous](iscontinuous.md): A Boolean value indicating whether the receiver’s cell sends its action message continuously to its target during mouse tracking.
- [sendActionOn:](sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.
