> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/touchescancelled(_:with:)](https://developer.apple.com/documentation/uikit/uigesturerecognizer/touchescancelled(_:with:))

# touchesCancelled(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Sent to the gesture recognizer when a system event (such as an incoming phone call) cancels a touch event.

## Declaration

```swift
func touchesCancelled(_ touches: Set<UITouch>, with event: UIEvent)
```

## Parameters

- `touches`: A set of [UITouch](../uitouch.md) instances in the event represented by `event` that represent the touches in the [UITouch.Phase.cancelled](../uitouch/phase-swift.enum/cancelled.md) phase.
- `event`: A [UIEvent](../uievent.md) object representing the event to which the touches belong.

<a id="Discussion"></a>

## Discussion

This method has the same exact signature as the corresponding one declared by [UIResponder](../uiresponder.md). Through this method a gesture recognizer receives touch objects (in their [UITouch.Phase.cancelled](../uitouch/phase-swift.enum/cancelled.md) phase) before the view attached to the gesture recognizer receives them. `UIGestureRecognizer` objects are not in the responder chain, yet observe touches hit-tested to their view and their view’s subviews. After observation, the delivery of touch objects to the attached view, or their disposition otherwise, is affected by the [cancelsTouchesInView](cancelstouchesinview.md), [delaysTouchesBegan](delaystouchesbegan.md), and [delaysTouchesEnded](delaystouchesended.md) properties.

Upon receiving this message, the gesture recognizer for a continuous gesture should set its state to [UIGestureRecognizer.State.cancelled](state-swift.enum/cancelled.md); a gesture recognizer for a discrete gesture should set its state to [UIGestureRecognizer.State.failed](state-swift.enum/failed.md).

## See Also

### Implementing subclasses

- [touchesBegan(\_:with:)](touchesbegan%28__with_%29.md): Sent to the gesture recognizer when one or more fingers touch down in the associated view.
- [touchesMoved(\_:with:)](touchesmoved%28__with_%29.md): Sent to the gesture recognizer when one or more fingers move in the associated view.
- [touchesEnded(\_:with:)](touchesended%28__with_%29.md): Sent to the gesture recognizer when one or more fingers lift from the associated view.
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

# touchesCancelled:withEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Sent to the gesture recognizer when a system event (such as an incoming phone call) cancels a touch event.

## Declaration

```objectivec
- (void) touchesCancelled:(NSSet<UITouch *> *) touches withEvent:(UIEvent *) event;
```

## Parameters

- `touches`: A set of [UITouch](../uitouch.md) instances in the event represented by `event` that represent the touches in the [UITouchPhaseCancelled](../uitouch/phase-swift.enum/cancelled.md) phase.
- `event`: A [UIEvent](../uievent.md) object representing the event to which the touches belong.

<a id="Discussion"></a>

## Discussion

This method has the same exact signature as the corresponding one declared by [UIResponder](../uiresponder.md). Through this method a gesture recognizer receives touch objects (in their [UITouchPhaseCancelled](../uitouch/phase-swift.enum/cancelled.md) phase) before the view attached to the gesture recognizer receives them. `UIGestureRecognizer` objects are not in the responder chain, yet observe touches hit-tested to their view and their view’s subviews. After observation, the delivery of touch objects to the attached view, or their disposition otherwise, is affected by the [cancelsTouchesInView](cancelstouchesinview.md), [delaysTouchesBegan](delaystouchesbegan.md), and [delaysTouchesEnded](delaystouchesended.md) properties.

Upon receiving this message, the gesture recognizer for a continuous gesture should set its state to [UIGestureRecognizerStateCancelled](state-swift.enum/cancelled.md); a gesture recognizer for a discrete gesture should set its state to [UIGestureRecognizerStateFailed](state-swift.enum/failed.md).

## See Also

### Implementing subclasses

- [touchesBegan:withEvent:](touchesbegan%28__with_%29.md): Sent to the gesture recognizer when one or more fingers touch down in the associated view.
- [touchesMoved:withEvent:](touchesmoved%28__with_%29.md): Sent to the gesture recognizer when one or more fingers move in the associated view.
- [touchesEnded:withEvent:](touchesended%28__with_%29.md): Sent to the gesture recognizer when one or more fingers lift from the associated view.
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
