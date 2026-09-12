> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/reset()](https://developer.apple.com/documentation/uikit/uigesturerecognizer/reset())

# reset() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Overridden to reset internal state when a gesture recognition attempt completes.

## Declaration

```swift
func reset()
```

## Mentioned In

- [About the Gesture Recognizer State Machine](../about-the-gesture-recognizer-state-machine.md)
- [Implementing a Continuous Gesture Recognizer](../implementing-a-continuous-gesture-recognizer.md)
- [Implementing a discrete gesture recognizer](../implementing-a-discrete-gesture-recognizer.md)

<a id="Discussion"></a>

## Discussion

The runtime calls this method after the gesture-recognizer state has been set to [UIGestureRecognizer.State.ended](state-swift.enum/ended.md), [recognized](state-swift.enum/recognized.md), [UIGestureRecognizer.State.cancelled](state-swift.enum/cancelled.md), or [UIGestureRecognizer.State.failed](state-swift.enum/failed.md)—in other words, any of the terminal states for a gesture recognition attempt. Subclasses should reset any internal state in preparation for a new attempt at gesture recognition. After this method is called, the gesture recognizer receives no further updates for touches that have begun but haven’t ended.

## See Also

### Related Documentation

- [state](state-swift.property.md): The current state of the gesture recognizer.

### Implementing subclasses

- [touchesBegan(\_:with:)](touchesbegan%28__with_%29.md): Sent to the gesture recognizer when one or more fingers touch down in the associated view.
- [touchesMoved(\_:with:)](touchesmoved%28__with_%29.md): Sent to the gesture recognizer when one or more fingers move in the associated view.
- [touchesEnded(\_:with:)](touchesended%28__with_%29.md): Sent to the gesture recognizer when one or more fingers lift from the associated view.
- [touchesCancelled(\_:with:)](touchescancelled%28__with_%29.md): Sent to the gesture recognizer when a system event (such as an incoming phone call) cancels a touch event.
- [touchesEstimatedPropertiesUpdated(\_:)](touchesestimatedpropertiesupdated%28__%29.md): Sent to the gesture recognizer when the estimated properties for a touch have changed so that they are no longer estimated, or an update is no longer expected.
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

# reset (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Overridden to reset internal state when a gesture recognition attempt completes.

## Declaration

```objectivec
- (void) reset;
```

## Mentioned In

- [About the Gesture Recognizer State Machine](../about-the-gesture-recognizer-state-machine.md)
- [Implementing a Continuous Gesture Recognizer](../implementing-a-continuous-gesture-recognizer.md)
- [Implementing a discrete gesture recognizer](../implementing-a-discrete-gesture-recognizer.md)

<a id="Discussion"></a>

## Discussion

The runtime calls this method after the gesture-recognizer state has been set to [UIGestureRecognizerStateEnded](state-swift.enum/ended.md), [UIGestureRecognizerStateRecognized](state-swift.enum/recognized.md), [UIGestureRecognizerStateCancelled](state-swift.enum/cancelled.md), or [UIGestureRecognizerStateFailed](state-swift.enum/failed.md)—in other words, any of the terminal states for a gesture recognition attempt. Subclasses should reset any internal state in preparation for a new attempt at gesture recognition. After this method is called, the gesture recognizer receives no further updates for touches that have begun but haven’t ended.

## See Also

### Related Documentation

- [state](state-swift.property.md): The current state of the gesture recognizer.

### Implementing subclasses

- [touchesBegan:withEvent:](touchesbegan%28__with_%29.md): Sent to the gesture recognizer when one or more fingers touch down in the associated view.
- [touchesMoved:withEvent:](touchesmoved%28__with_%29.md): Sent to the gesture recognizer when one or more fingers move in the associated view.
- [touchesEnded:withEvent:](touchesended%28__with_%29.md): Sent to the gesture recognizer when one or more fingers lift from the associated view.
- [touchesCancelled:withEvent:](touchescancelled%28__with_%29.md): Sent to the gesture recognizer when a system event (such as an incoming phone call) cancels a touch event.
- [touchesEstimatedPropertiesUpdated:](touchesestimatedpropertiesupdated%28__%29.md): Sent to the gesture recognizer when the estimated properties for a touch have changed so that they are no longer estimated, or an update is no longer expected.
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
