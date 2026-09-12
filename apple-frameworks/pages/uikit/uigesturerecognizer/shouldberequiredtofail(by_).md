> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/shouldberequiredtofail(by:)](https://developer.apple.com/documentation/uikit/uigesturerecognizer/shouldberequiredtofail(by:))

# shouldBeRequiredToFail(by:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Overridden to indicate that the receiver should be required to fail by the specified gesture recognizer.

## Declaration

```swift
func shouldBeRequiredToFail(by otherGestureRecognizer: UIGestureRecognizer) -> Bool
```

## Parameters

- `otherGestureRecognizer`: An instance of a subclass of `UIGestureRecognizer`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to set up the failure requirement; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Overriding this method allows a subclass to define a class-wide failure requirement.

## See Also

### Implementing subclasses

- [touchesBegan(\_:with:)](touchesbegan%28__with_%29.md): Sent to the gesture recognizer when one or more fingers touch down in the associated view.
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
- [ignore(\_:for:)](ignore%28__for_%29-8qqor.md): Tells the gesture recognizer to ignore a specific press of the given event.
- [pressesBegan(\_:with:)](pressesbegan%28__with_%29.md): Sent to the receiver when a physical button is pressed in the associated view.
- [pressesChanged(\_:with:)](presseschanged%28__with_%29.md): Sent to the receiver when the [force](../uipress/force.md) of the press has changed in the associated view.
- [pressesEnded(\_:with:)](pressesended%28__with_%29.md): Sent to the receiver when a button is released from the associated view.

# shouldBeRequiredToFailByGestureRecognizer: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Overridden to indicate that the receiver should be required to fail by the specified gesture recognizer.

## Declaration

```objectivec
- (BOOL) shouldBeRequiredToFailByGestureRecognizer:(UIGestureRecognizer *) otherGestureRecognizer;
```

## Parameters

- `otherGestureRecognizer`: An instance of a subclass of `UIGestureRecognizer`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to set up the failure requirement; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Overriding this method allows a subclass to define a class-wide failure requirement.

## See Also

### Implementing subclasses

- [touchesBegan:withEvent:](touchesbegan%28__with_%29.md): Sent to the gesture recognizer when one or more fingers touch down in the associated view.
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
- [ignorePress:forEvent:](ignore%28__for_%29-8qqor.md): Tells the gesture recognizer to ignore a specific press of the given event.
- [pressesBegan:withEvent:](pressesbegan%28__with_%29.md): Sent to the receiver when a physical button is pressed in the associated view.
- [pressesChanged:withEvent:](presseschanged%28__with_%29.md): Sent to the receiver when the [force](../uipress/force.md) of the press has changed in the associated view.
- [pressesEnded:withEvent:](pressesended%28__with_%29.md): Sent to the receiver when a button is released from the associated view.
