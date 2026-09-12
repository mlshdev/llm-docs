> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/touchesmoved(_:with:)](https://developer.apple.com/documentation/uikit/uiresponder/touchesmoved(_:with:))

# touchesMoved(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the responder when one or more touches associated with an event changed.

## Declaration

```swift
func touchesMoved(_ touches: Set<UITouch>, with event: UIEvent?)
```

## Parameters

- `touches`: A set of [UITouch](../uitouch.md) instances that represent the touches whose values changed. These touches all belong to the specified `event`. For touches in a view, this set contains only one touch by default. To receive multiple touches, you must set the view’s [isMultipleTouchEnabled](../uiview/ismultipletouchenabled.md) property to [true](https://developer.apple.com/documentation/swift/true).
- `event`: The event to which the touches belong.

## Mentioned In

- [Implementing a Multi-Touch app](../implementing-a-multi-touch-app.md)
- [Implementing a Continuous Gesture Recognizer](../implementing-a-continuous-gesture-recognizer.md)
- [Implementing a discrete gesture recognizer](../implementing-a-discrete-gesture-recognizer.md)

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the location or force of a touch changes. Many UIKit classes override this method and use it to handle the corresponding touch events. The default implementation of this method forwards the message up the responder chain. When creating your own subclasses, call `super` to forward any events that you don’t handle yourself, like in the following code.

**Swift**

```swift
super.touchesMoved(touches, with: event)
```

**Objective-C**

```objc
[super touchesMoved:touches withEvent:event];
```

If you override this method without calling `super` (a common use pattern), you must also override the other methods for handling touch events, even if your implementations do nothing.

> **Note**

>  In iOS 17, Messages allows you to interactively resize iMessage apps with a vertical pan gesture. Messages handles any conflicts between resize gestures and your custom gestures. If your app uses manual touch handling, override those methods in your app’s [UIView](../uiview.md). You can either change your manual touch handling code to use a gesture recognizer instead, or your [UIView](../uiview.md) can override [gestureRecognizerShouldBegin(\_:)](../uigesturerecognizerdelegate/gesturerecognizershouldbegin%28__%29.md) and return NO when your iMessage app doesn’t own the gesture.

## See Also

### Responding to touch events

- [touchesBegan(\_:with:)](touchesbegan%28__with_%29.md): Tells this object that one or more new touches occurred in a view or window.
- [touchesEnded(\_:with:)](touchesended%28__with_%29.md): Tells the responder when one or more fingers are raised from a view or window.
- [touchesCancelled(\_:with:)](touchescancelled%28__with_%29.md): Tells the responder when a system event (such as a system alert) cancels a touch sequence.
- [touchesEstimatedPropertiesUpdated(\_:)](touchesestimatedpropertiesupdated%28__%29.md): Tells the responder that updated values were received for previously estimated properties or that an update is no longer expected.

# touchesMoved:withEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the responder when one or more touches associated with an event changed.

## Declaration

```objectivec
- (void) touchesMoved:(NSSet<UITouch *> *) touches withEvent:(UIEvent *) event;
```

## Parameters

- `touches`: A set of [UITouch](../uitouch.md) instances that represent the touches whose values changed. These touches all belong to the specified `event`. For touches in a view, this set contains only one touch by default. To receive multiple touches, you must set the view’s [multipleTouchEnabled](../uiview/ismultipletouchenabled.md) property to [true](https://developer.apple.com/documentation/swift/true).
- `event`: The event to which the touches belong.

## Mentioned In

- [Implementing a Multi-Touch app](../implementing-a-multi-touch-app.md)
- [Implementing a Continuous Gesture Recognizer](../implementing-a-continuous-gesture-recognizer.md)
- [Implementing a discrete gesture recognizer](../implementing-a-discrete-gesture-recognizer.md)

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the location or force of a touch changes. Many UIKit classes override this method and use it to handle the corresponding touch events. The default implementation of this method forwards the message up the responder chain. When creating your own subclasses, call `super` to forward any events that you don’t handle yourself, like in the following code.

**Swift**

```swift
super.touchesMoved(touches, with: event)
```

**Objective-C**

```objc
[super touchesMoved:touches withEvent:event];
```

If you override this method without calling `super` (a common use pattern), you must also override the other methods for handling touch events, even if your implementations do nothing.

> **Note**

>  In iOS 17, Messages allows you to interactively resize iMessage apps with a vertical pan gesture. Messages handles any conflicts between resize gestures and your custom gestures. If your app uses manual touch handling, override those methods in your app’s [UIView](../uiview.md). You can either change your manual touch handling code to use a gesture recognizer instead, or your [UIView](../uiview.md) can override [gestureRecognizerShouldBegin:](../uigesturerecognizerdelegate/gesturerecognizershouldbegin%28__%29.md) and return NO when your iMessage app doesn’t own the gesture.

## See Also

### Responding to touch events

- [touchesBegan:withEvent:](touchesbegan%28__with_%29.md): Tells this object that one or more new touches occurred in a view or window.
- [touchesEnded:withEvent:](touchesended%28__with_%29.md): Tells the responder when one or more fingers are raised from a view or window.
- [touchesCancelled:withEvent:](touchescancelled%28__with_%29.md): Tells the responder when a system event (such as a system alert) cancels a touch sequence.
- [touchesEstimatedPropertiesUpdated:](touchesestimatedpropertiesupdated%28__%29.md): Tells the responder that updated values were received for previously estimated properties or that an update is no longer expected.
