> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/touchesbegan(_:with:)](https://developer.apple.com/documentation/uikit/uigesturerecognizer/touchesbegan(_:with:))

# touchesBegan(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Sent to the gesture recognizer when one or more fingers touch down in the associated view.

## Declaration

```swift
func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent)
```

## Parameters

- `touches`: A set of [UITouch](../uitouch.md) instances in the event represented by `event` that represent the touches in the [UITouch.Phase.began](../uitouch/phase-swift.enum/began.md) phase.
- `event`: A [UIEvent](../uievent.md) object representing the event to which the touches belong.

<a id="Discussion"></a>

## Discussion

This method has the same exact signature as the corresponding one declared by [UIResponder](../uiresponder.md). Through this method a gesture recognizer receives touch objects (in their [UITouch.Phase.began](../uitouch/phase-swift.enum/began.md) phase) before the view attached to the gesture recognizer receives them. `UIGestureRecognizer` objects are not in the responder chain, yet observe touches hit-tested to their view and their view’s subviews. After observation, the delivery of touch objects to the attached view, or their disposition otherwise, is affected by the [cancelsTouchesInView](cancelstouchesinview.md), [delaysTouchesBegan](delaystouchesbegan.md), and [delaysTouchesEnded](delaystouchesended.md) properties.

If the gesture recognizer is interpreting a continuous gesture, it should set its state to [UIGestureRecognizer.State.began](state-swift.enum/began.md) upon receiving this message. If at any point in its handling of the touch objects the gesture recognizer determines that the multi-touch event sequence is not its gesture, it should set it state to [UIGestureRecognizer.State.cancelled](state-swift.enum/cancelled.md).

Multiple touches are disabled by default. In order to receive multiple touch events you must set the a [isMultipleTouchEnabled](../uiview/ismultipletouchenabled.md) property of the attached view instance to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Implementing subclasses

- [touchesMoved(\_:with:)](touchesmoved%28__with_%29.md): Sent to the gesture recognizer when one or more fingers move in the associated view.
- [touchesEnded(\_:with:)](touchesended%28__with_%29.md): Sent to the gesture recognizer when one or more fingers lift from the associated view.
- [touchesCancelled(\_:with:)](touchescancelled%28__with_%29.md): Sent to the gesture recognizer when a system event (such as an incoming phone call) cancels a touch event.
- [touchesEstimatedPropertiesUpdated(\_:)](touchesestimatedpropertiesupdated%28__%29.md): Sent to the gesture recognizer when the estimated properties for a touch have changed so that they are no longer estimated, or an update is no longer expected.
- [reset()](reset%28%29.md): Overridden to reset internal state when a gesture recognition attempt completes.
- [ignore(\_:for:)](ignore%28__for_%29-5f685.md): Tells the gesture recognizer to ignore a specific touch of the given event.
- [canBePrevented(by:)](canbeprevented%28by_%29.md): Overridden to indicate that the specified gesture recognizer can prevent the receiver from recognizing a gesture.
- [canPrevent(\_:)](canprevent%28__%29.md): Overridden to indicate that the receiver can prevent the specified gesture recognizer from recognizing its gesture.
- [shouldReceive(\_:)](shouldreceive%28__%29.md)
- [shouldRequireFailure(of:)](shouldrequirefailure%28of_%29.md): Overridden to indicate that the receiver requires the specified gesture recognizer to fail.
- [shouldBeRequiredToFail(by:)](shouldberequiredtofail%28by_%29.md): Overridden to indicate that the receiver should be required to fail by the specified gesture recognizer.
- [ignore(\_:for:)](ignore%28__for_%29-8qqor.md): Tells the gesture recognizer to ignore a specific press of the given event.
- [pressesBegan(\_:with:)](pressesbegan%28__with_%29.md): Sent to the receiver when a physical button is pressed in the associated view.
- [pressesChanged(\_:with:)](presseschanged%28__with_%29.md): Sent to the receiver when the [force](../uipress/force.md) of the press has changed in the associated view.
- [pressesEnded(\_:with:)](pressesended%28__with_%29.md): Sent to the receiver when a button is released from the associated view.

# touchesBegan:withEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Sent to the gesture recognizer when one or more fingers touch down in the associated view.

## Declaration

```objectivec
- (void) touchesBegan:(NSSet<UITouch *> *) touches withEvent:(UIEvent *) event;
```

## Parameters

- `touches`: A set of [UITouch](../uitouch.md) instances in the event represented by `event` that represent the touches in the [UITouchPhaseBegan](../uitouch/phase-swift.enum/began.md) phase.
- `event`: A [UIEvent](../uievent.md) object representing the event to which the touches belong.

<a id="Discussion"></a>

## Discussion

This method has the same exact signature as the corresponding one declared by [UIResponder](../uiresponder.md). Through this method a gesture recognizer receives touch objects (in their [UITouchPhaseBegan](../uitouch/phase-swift.enum/began.md) phase) before the view attached to the gesture recognizer receives them. `UIGestureRecognizer` objects are not in the responder chain, yet observe touches hit-tested to their view and their view’s subviews. After observation, the delivery of touch objects to the attached view, or their disposition otherwise, is affected by the [cancelsTouchesInView](cancelstouchesinview.md), [delaysTouchesBegan](delaystouchesbegan.md), and [delaysTouchesEnded](delaystouchesended.md) properties.

If the gesture recognizer is interpreting a continuous gesture, it should set its state to [UIGestureRecognizerStateBegan](state-swift.enum/began.md) upon receiving this message. If at any point in its handling of the touch objects the gesture recognizer determines that the multi-touch event sequence is not its gesture, it should set it state to [UIGestureRecognizerStateCancelled](state-swift.enum/cancelled.md).

Multiple touches are disabled by default. In order to receive multiple touch events you must set the a [multipleTouchEnabled](../uiview/ismultipletouchenabled.md) property of the attached view instance to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Implementing subclasses

- [touchesMoved:withEvent:](touchesmoved%28__with_%29.md): Sent to the gesture recognizer when one or more fingers move in the associated view.
- [touchesEnded:withEvent:](touchesended%28__with_%29.md): Sent to the gesture recognizer when one or more fingers lift from the associated view.
- [touchesCancelled:withEvent:](touchescancelled%28__with_%29.md): Sent to the gesture recognizer when a system event (such as an incoming phone call) cancels a touch event.
- [touchesEstimatedPropertiesUpdated:](touchesestimatedpropertiesupdated%28__%29.md): Sent to the gesture recognizer when the estimated properties for a touch have changed so that they are no longer estimated, or an update is no longer expected.
- [reset](reset%28%29.md): Overridden to reset internal state when a gesture recognition attempt completes.
- [ignoreTouch:forEvent:](ignore%28__for_%29-5f685.md): Tells the gesture recognizer to ignore a specific touch of the given event.
- [canBePreventedByGestureRecognizer:](canbeprevented%28by_%29.md): Overridden to indicate that the specified gesture recognizer can prevent the receiver from recognizing a gesture.
- [canPreventGestureRecognizer:](canprevent%28__%29.md): Overridden to indicate that the receiver can prevent the specified gesture recognizer from recognizing its gesture.
- [shouldReceiveEvent:](shouldreceive%28__%29.md)
- [shouldRequireFailureOfGestureRecognizer:](shouldrequirefailure%28of_%29.md): Overridden to indicate that the receiver requires the specified gesture recognizer to fail.
- [shouldBeRequiredToFailByGestureRecognizer:](shouldberequiredtofail%28by_%29.md): Overridden to indicate that the receiver should be required to fail by the specified gesture recognizer.
- [ignorePress:forEvent:](ignore%28__for_%29-8qqor.md): Tells the gesture recognizer to ignore a specific press of the given event.
- [pressesBegan:withEvent:](pressesbegan%28__with_%29.md): Sent to the receiver when a physical button is pressed in the associated view.
- [pressesChanged:withEvent:](presseschanged%28__with_%29.md): Sent to the receiver when the [force](../uipress/force.md) of the press has changed in the associated view.
- [pressesEnded:withEvent:](pressesended%28__with_%29.md): Sent to the receiver when a button is released from the associated view.
