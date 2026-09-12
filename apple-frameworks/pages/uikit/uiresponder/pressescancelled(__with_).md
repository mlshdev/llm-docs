> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/pressescancelled(_:with:)](https://developer.apple.com/documentation/uikit/uiresponder/pressescancelled(_:with:))

# pressesCancelled(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells this object when a system event (such as a low-memory warning) cancels a press event.

## Declaration

```swift
func pressesCancelled(_ presses: Set<UIPress>, with event: UIPressesEvent?)
```

## Parameters

- `presses`: A set of [UIPress](../uipress.md) instances that represent the presses associated with the event. The phase of each press is set to [UIPress.Phase.cancelled](../uipress/phase-swift.enum/cancelled.md).
- `event`: The event to which the presses belong.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when it receives a system interruption requiring cancellation of the press sequence. An interruption is anything that causes the application to become inactive or causes the view handling the press events to be removed from its window. Your implementation of this method should clean up any state associated with handling the press sequence. Failure to handle cancellation is likely to lead to incorrect behavior or crashes.

The default implementation of this method forwards the message up the responder chain. When creating your own subclasses, call `super` to forward any events that you don’t handle yourself.

## See Also

### Responding to press events

- [pressesBegan(\_:with:)](pressesbegan%28__with_%29.md): Tells this object when a physical button is first pressed.
- [pressesChanged(\_:with:)](presseschanged%28__with_%29.md): Tells this object when a value associated with a press has changed.
- [pressesEnded(\_:with:)](pressesended%28__with_%29.md): Tells the object when a button is released.

# pressesCancelled:withEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells this object when a system event (such as a low-memory warning) cancels a press event.

## Declaration

```objectivec
- (void) pressesCancelled:(NSSet<UIPress *> *) presses withEvent:(UIPressesEvent *) event;
```

## Parameters

- `presses`: A set of [UIPress](../uipress.md) instances that represent the presses associated with the event. The phase of each press is set to [UIPressPhaseCancelled](../uipress/phase-swift.enum/cancelled.md).
- `event`: The event to which the presses belong.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when it receives a system interruption requiring cancellation of the press sequence. An interruption is anything that causes the application to become inactive or causes the view handling the press events to be removed from its window. Your implementation of this method should clean up any state associated with handling the press sequence. Failure to handle cancellation is likely to lead to incorrect behavior or crashes.

The default implementation of this method forwards the message up the responder chain. When creating your own subclasses, call `super` to forward any events that you don’t handle yourself.

## See Also

### Responding to press events

- [pressesBegan:withEvent:](pressesbegan%28__with_%29.md): Tells this object when a physical button is first pressed.
- [pressesChanged:withEvent:](presseschanged%28__with_%29.md): Tells this object when a value associated with a press has changed.
- [pressesEnded:withEvent:](pressesended%28__with_%29.md): Tells the object when a button is released.
