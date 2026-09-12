> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/presseschanged(_:with:)](https://developer.apple.com/documentation/uikit/uiresponder/presseschanged(_:with:))

# pressesChanged(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells this object when a value associated with a press has changed.

## Declaration

```swift
func pressesChanged(_ presses: Set<UIPress>, with event: UIPressesEvent?)
```

## Parameters

- `presses`: A set of [UIPress](../uipress.md) instances containing changed values.
- `event`: The event to which the presses belong.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when an analog value associated with a button or thumbstick changes. For example, it calls this method when the analog force value of a push button changes. Use this method to take any needed actions in response to the change.

The default implementation of this method forwards the message up the responder chain. When creating your own subclasses, call `super` to forward any events that you don’t handle yourself.

## See Also

### Responding to press events

- [pressesBegan(\_:with:)](pressesbegan%28__with_%29.md): Tells this object when a physical button is first pressed.
- [pressesEnded(\_:with:)](pressesended%28__with_%29.md): Tells the object when a button is released.
- [pressesCancelled(\_:with:)](pressescancelled%28__with_%29.md): Tells this object when a system event (such as a low-memory warning) cancels a press event.

# pressesChanged:withEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells this object when a value associated with a press has changed.

## Declaration

```objectivec
- (void) pressesChanged:(NSSet<UIPress *> *) presses withEvent:(UIPressesEvent *) event;
```

## Parameters

- `presses`: A set of [UIPress](../uipress.md) instances containing changed values.
- `event`: The event to which the presses belong.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when an analog value associated with a button or thumbstick changes. For example, it calls this method when the analog force value of a push button changes. Use this method to take any needed actions in response to the change.

The default implementation of this method forwards the message up the responder chain. When creating your own subclasses, call `super` to forward any events that you don’t handle yourself.

## See Also

### Responding to press events

- [pressesBegan:withEvent:](pressesbegan%28__with_%29.md): Tells this object when a physical button is first pressed.
- [pressesEnded:withEvent:](pressesended%28__with_%29.md): Tells the object when a button is released.
- [pressesCancelled:withEvent:](pressescancelled%28__with_%29.md): Tells this object when a system event (such as a low-memory warning) cancels a press event.
