> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/touchescancelled(_:with:)](https://developer.apple.com/documentation/uikit/uiresponder/touchescancelled(_:with:))

# touchesCancelled(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the responder when a system event (such as a system alert) cancels a touch sequence.

## Declaration

```swift
func touchesCancelled(_ touches: Set<UITouch>, with event: UIEvent?)
```

## Parameters

- `touches`: A set of [UITouch](../uitouch.md) instances that represent the touches for the ending phase of the event represented by `event`. For touches in a view, this set contains only one touch by default. To receive multiple touches, you must set the view’s [isMultipleTouchEnabled](../uiview/ismultipletouchenabled.md) property to [true](https://developer.apple.com/documentation/swift/true).
- `event`: The event to which the touches belong.

## Mentioned In

- [Implementing a Multi-Touch app](../implementing-a-multi-touch-app.md)
- [About the Gesture Recognizer State Machine](../about-the-gesture-recognizer-state-machine.md)
- [Implementing a Continuous Gesture Recognizer](../implementing-a-continuous-gesture-recognizer.md)
- [Implementing a discrete gesture recognizer](../implementing-a-discrete-gesture-recognizer.md)
- [Implementing coalesced touch support in an app](../implementing-coalesced-touch-support-in-an-app.md)

<a id="Discussion"></a>

## Discussion

UIKit calls this method when it receives a system interruption requiring cancellation of the touch sequence. An interruption is anything that causes the application to become inactive or causes the view handling the touch events to be removed from its window. Your implementation of this method should clean up any state associated with handling the touch sequence. The default implementation of this method forwards the message up the responder chain. When creating your own subclasses, call `super` to forward any events that you don’t handle yourself, like in the following code.

**Swift**

```swift
super.touchesCancelled(touches, with: event)
```

**Objective-C**

```objc
[super touchesCancelled:touches withEvent:event];
```

If you override this method without calling `super` (a common use pattern), you must also override the other methods for handling touch events, if only as stub (empty) implementations.

## See Also

### Responding to touch events

- [touchesBegan(\_:with:)](touchesbegan%28__with_%29.md): Tells this object that one or more new touches occurred in a view or window.
- [touchesMoved(\_:with:)](touchesmoved%28__with_%29.md): Tells the responder when one or more touches associated with an event changed.
- [touchesEnded(\_:with:)](touchesended%28__with_%29.md): Tells the responder when one or more fingers are raised from a view or window.
- [touchesEstimatedPropertiesUpdated(\_:)](touchesestimatedpropertiesupdated%28__%29.md): Tells the responder that updated values were received for previously estimated properties or that an update is no longer expected.

# touchesCancelled:withEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the responder when a system event (such as a system alert) cancels a touch sequence.

## Declaration

```objectivec
- (void) touchesCancelled:(NSSet<UITouch *> *) touches withEvent:(UIEvent *) event;
```

## Parameters

- `touches`: A set of [UITouch](../uitouch.md) instances that represent the touches for the ending phase of the event represented by `event`. For touches in a view, this set contains only one touch by default. To receive multiple touches, you must set the view’s [multipleTouchEnabled](../uiview/ismultipletouchenabled.md) property to [true](https://developer.apple.com/documentation/swift/true).
- `event`: The event to which the touches belong.

## Mentioned In

- [Implementing a Multi-Touch app](../implementing-a-multi-touch-app.md)
- [About the Gesture Recognizer State Machine](../about-the-gesture-recognizer-state-machine.md)
- [Implementing a Continuous Gesture Recognizer](../implementing-a-continuous-gesture-recognizer.md)
- [Implementing a discrete gesture recognizer](../implementing-a-discrete-gesture-recognizer.md)
- [Implementing coalesced touch support in an app](../implementing-coalesced-touch-support-in-an-app.md)

<a id="Discussion"></a>

## Discussion

UIKit calls this method when it receives a system interruption requiring cancellation of the touch sequence. An interruption is anything that causes the application to become inactive or causes the view handling the touch events to be removed from its window. Your implementation of this method should clean up any state associated with handling the touch sequence. The default implementation of this method forwards the message up the responder chain. When creating your own subclasses, call `super` to forward any events that you don’t handle yourself, like in the following code.

**Swift**

```swift
super.touchesCancelled(touches, with: event)
```

**Objective-C**

```objc
[super touchesCancelled:touches withEvent:event];
```

If you override this method without calling `super` (a common use pattern), you must also override the other methods for handling touch events, if only as stub (empty) implementations.

## See Also

### Responding to touch events

- [touchesBegan:withEvent:](touchesbegan%28__with_%29.md): Tells this object that one or more new touches occurred in a view or window.
- [touchesMoved:withEvent:](touchesmoved%28__with_%29.md): Tells the responder when one or more touches associated with an event changed.
- [touchesEnded:withEvent:](touchesended%28__with_%29.md): Tells the responder when one or more fingers are raised from a view or window.
- [touchesEstimatedPropertiesUpdated:](touchesestimatedpropertiesupdated%28__%29.md): Tells the responder that updated values were received for previously estimated properties or that an update is no longer expected.
