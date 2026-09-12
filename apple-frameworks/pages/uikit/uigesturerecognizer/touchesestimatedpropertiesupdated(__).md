> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/touchesestimatedpropertiesupdated(_:)](https://developer.apple.com/documentation/uikit/uigesturerecognizer/touchesestimatedpropertiesupdated(_:))

# touchesEstimatedPropertiesUpdated(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Sent to the gesture recognizer when the estimated properties for a touch have changed so that they are no longer estimated, or an update is no longer expected.

## Declaration

```swift
func touchesEstimatedPropertiesUpdated(_ touches: Set<UITouch>)
```

## Parameters

- `touches`: The array of [UITouch](../uitouch.md) objects containing updated properties.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses may override it and use it to process updates to touches.

UIKit calls this method to report updates to properties that were previously declared to be estimates through [touchesBegan(\_:with:)](touchesbegan%28__with_%29.md),  [touchesMoved(\_:with:)](touchesmoved%28__with_%29.md) or [touchesEnded(\_:with:)](../uiresponder/touchesended%28__with_%29.md), and where declared to expect updates by having at least one property set in [estimatedPropertiesExpectingUpdates](../uitouch/estimatedpropertiesexpectingupdates.md).

Use the [estimationUpdateIndex](../uitouch/estimationupdateindex.md) property to correlate the previous state of the touch with the updated state incoming in this method. The updated values are denoted by having a cleared state in the [estimatedPropertiesExpectingUpdates](../uitouch/estimatedpropertiesexpectingupdates.md) bit mask. Although most properties end up with a cleared [estimatedProperties](../uitouch/estimatedproperties.md) flag, a property can stay in the estimated state because of hardware considerations. This behavior allows the client to decide to replace the estimate with a more domain-specific estimate, based on the other touches it receives.

## See Also

### Implementing subclasses

- [touchesBegan(\_:with:)](touchesbegan%28__with_%29.md): Sent to the gesture recognizer when one or more fingers touch down in the associated view.
- [touchesMoved(\_:with:)](touchesmoved%28__with_%29.md): Sent to the gesture recognizer when one or more fingers move in the associated view.
- [touchesEnded(\_:with:)](touchesended%28__with_%29.md): Sent to the gesture recognizer when one or more fingers lift from the associated view.
- [touchesCancelled(\_:with:)](touchescancelled%28__with_%29.md): Sent to the gesture recognizer when a system event (such as an incoming phone call) cancels a touch event.
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

# touchesEstimatedPropertiesUpdated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent to the gesture recognizer when the estimated properties for a touch have changed so that they are no longer estimated, or an update is no longer expected.

## Declaration

```objectivec
- (void) touchesEstimatedPropertiesUpdated:(NSSet<UITouch *> *) touches;
```

## Parameters

- `touches`: The array of [UITouch](../uitouch.md) objects containing updated properties.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses may override it and use it to process updates to touches.

UIKit calls this method to report updates to properties that were previously declared to be estimates through [touchesBegan:withEvent:](touchesbegan%28__with_%29.md),  [touchesMoved:withEvent:](touchesmoved%28__with_%29.md) or [touchesEnded:withEvent:](../uiresponder/touchesended%28__with_%29.md), and where declared to expect updates by having at least one property set in [estimatedPropertiesExpectingUpdates](../uitouch/estimatedpropertiesexpectingupdates.md).

Use the [estimationUpdateIndex](../uitouch/estimationupdateindex.md) property to correlate the previous state of the touch with the updated state incoming in this method. The updated values are denoted by having a cleared state in the [estimatedPropertiesExpectingUpdates](../uitouch/estimatedpropertiesexpectingupdates.md) bit mask. Although most properties end up with a cleared [estimatedProperties](../uitouch/estimatedproperties.md) flag, a property can stay in the estimated state because of hardware considerations. This behavior allows the client to decide to replace the estimate with a more domain-specific estimate, based on the other touches it receives.

## See Also

### Implementing subclasses

- [touchesBegan:withEvent:](touchesbegan%28__with_%29.md): Sent to the gesture recognizer when one or more fingers touch down in the associated view.
- [touchesMoved:withEvent:](touchesmoved%28__with_%29.md): Sent to the gesture recognizer when one or more fingers move in the associated view.
- [touchesEnded:withEvent:](touchesended%28__with_%29.md): Sent to the gesture recognizer when one or more fingers lift from the associated view.
- [touchesCancelled:withEvent:](touchescancelled%28__with_%29.md): Sent to the gesture recognizer when a system event (such as an incoming phone call) cancels a touch event.
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
