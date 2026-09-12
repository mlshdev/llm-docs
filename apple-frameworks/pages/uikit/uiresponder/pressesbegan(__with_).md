> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/pressesbegan(_:with:)](https://developer.apple.com/documentation/uikit/uiresponder/pressesbegan(_:with:))

# pressesBegan(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells this object when a physical button is first pressed.

## Declaration

```swift
func pressesBegan(_ presses: Set<UIPress>, with event: UIPressesEvent?)
```

## Parameters

- `presses`: A set of [UIPress](../uipress.md) instances that represent the new presses that occurred. The phase of each press is set to [UIPress.Phase.began](../uipress/phase-swift.enum/began.md).
- `event`: The event to which the presses belong.

## Mentioned In

- [Handling key presses made on a physical keyboard](../handling-key-presses-made-on-a-physical-keyboard.md)

<a id="Discussion"></a>

## Discussion

UIKit calls this method when a new button is pressed by the user. Use this method to determine which button was pressed and to take any needed actions.

The default implementation of this method forwards the message up the responder chain. When creating your own subclasses, call `super` to forward any events that you don’t handle yourself.

## See Also

### Responding to press events

- [pressesChanged(\_:with:)](presseschanged%28__with_%29.md): Tells this object when a value associated with a press has changed.
- [pressesEnded(\_:with:)](pressesended%28__with_%29.md): Tells the object when a button is released.
- [pressesCancelled(\_:with:)](pressescancelled%28__with_%29.md): Tells this object when a system event (such as a low-memory warning) cancels a press event.

# pressesBegan:withEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells this object when a physical button is first pressed.

## Declaration

```objectivec
- (void) pressesBegan:(NSSet<UIPress *> *) presses withEvent:(UIPressesEvent *) event;
```

## Parameters

- `presses`: A set of [UIPress](../uipress.md) instances that represent the new presses that occurred. The phase of each press is set to [UIPressPhaseBegan](../uipress/phase-swift.enum/began.md).
- `event`: The event to which the presses belong.

## Mentioned In

- [Handling key presses made on a physical keyboard](../handling-key-presses-made-on-a-physical-keyboard.md)

<a id="Discussion"></a>

## Discussion

UIKit calls this method when a new button is pressed by the user. Use this method to determine which button was pressed and to take any needed actions.

The default implementation of this method forwards the message up the responder chain. When creating your own subclasses, call `super` to forward any events that you don’t handle yourself.

## See Also

### Responding to press events

- [pressesChanged:withEvent:](presseschanged%28__with_%29.md): Tells this object when a value associated with a press has changed.
- [pressesEnded:withEvent:](pressesended%28__with_%29.md): Tells the object when a button is released.
- [pressesCancelled:withEvent:](pressescancelled%28__with_%29.md): Tells this object when a system event (such as a low-memory warning) cancels a press event.
