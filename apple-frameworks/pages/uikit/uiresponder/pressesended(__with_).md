> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/pressesended(_:with:)](https://developer.apple.com/documentation/uikit/uiresponder/pressesended(_:with:))

# pressesEnded(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the object when a button is released.

## Declaration

```swift
func pressesEnded(_ presses: Set<UIPress>, with event: UIPressesEvent?)
```

## Parameters

- `presses`: A set of [UIPress](../uipress.md) instances that represent the buttons that the user is no longer pressing. The phase of each press is set to [UIPress.Phase.ended](../uipress/phase-swift.enum/ended.md).
- `event`: The event to which the presses belong.

## Mentioned In

- [Handling key presses made on a physical keyboard](../handling-key-presses-made-on-a-physical-keyboard.md)

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the user stops pressing one or more buttons. Use this method to take any needed actions in response to the end of the press.The default implementation of this method forwards the message up the responder chain. When creating your own subclasses, call `super` to forward any events that you don’t handle yourself.

## See Also

### Responding to press events

- [pressesBegan(\_:with:)](pressesbegan%28__with_%29.md): Tells this object when a physical button is first pressed.
- [pressesChanged(\_:with:)](presseschanged%28__with_%29.md): Tells this object when a value associated with a press has changed.
- [pressesCancelled(\_:with:)](pressescancelled%28__with_%29.md): Tells this object when a system event (such as a low-memory warning) cancels a press event.

# pressesEnded:withEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the object when a button is released.

## Declaration

```objectivec
- (void) pressesEnded:(NSSet<UIPress *> *) presses withEvent:(UIPressesEvent *) event;
```

## Parameters

- `presses`: A set of [UIPress](../uipress.md) instances that represent the buttons that the user is no longer pressing. The phase of each press is set to [UIPressPhaseEnded](../uipress/phase-swift.enum/ended.md).
- `event`: The event to which the presses belong.

## Mentioned In

- [Handling key presses made on a physical keyboard](../handling-key-presses-made-on-a-physical-keyboard.md)

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the user stops pressing one or more buttons. Use this method to take any needed actions in response to the end of the press.The default implementation of this method forwards the message up the responder chain. When creating your own subclasses, call `super` to forward any events that you don’t handle yourself.

## See Also

### Responding to press events

- [pressesBegan:withEvent:](pressesbegan%28__with_%29.md): Tells this object when a physical button is first pressed.
- [pressesChanged:withEvent:](presseschanged%28__with_%29.md): Tells this object when a value associated with a press has changed.
- [pressesCancelled:withEvent:](pressescancelled%28__with_%29.md): Tells this object when a system event (such as a low-memory warning) cancels a press event.
