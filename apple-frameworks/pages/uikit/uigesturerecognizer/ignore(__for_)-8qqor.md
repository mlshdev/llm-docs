> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/ignore(_:for:)-8qqor](https://developer.apple.com/documentation/uikit/uigesturerecognizer/ignore(_:for:)-8qqor)

# ignore(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the gesture recognizer to ignore a specific press of the given event.

## Declaration

```swift
@MainActor func ignore(_ button: UIPress, for event: UIPressesEvent)
```

## Parameters

- `button`: A [UIButton](../uibutton.md) object that is part of the current button press event and associated with `event`.
- `event`: A [UIEvent](../uievent.md) object that includes a reference to `touch`.

<a id="Discussion"></a>

## Discussion

If a button press isn’t part of this gesture you may pass it to this method, causing it to be ignored. `UIGestureRecognizer` does not cancel ignored presses on the associated view even if [cancelsTouchesInView](cancelstouchesinview.md) is [true](https://developer.apple.com/documentation/swift/true). This method is intended to be called, not overridden.

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
- [shouldBeRequiredToFail(by:)](shouldberequiredtofail%28by_%29.md): Overridden to indicate that the receiver should be required to fail by the specified gesture recognizer.
- [pressesBegan(\_:with:)](pressesbegan%28__with_%29.md): Sent to the receiver when a physical button is pressed in the associated view.
- [pressesChanged(\_:with:)](presseschanged%28__with_%29.md): Sent to the receiver when the [force](../uipress/force.md) of the press has changed in the associated view.
- [pressesEnded(\_:with:)](pressesended%28__with_%29.md): Sent to the receiver when a button is released from the associated view.

# ignorePress:forEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the gesture recognizer to ignore a specific press of the given event.

## Declaration

```objectivec
- (void) ignorePress:(UIPress *) button forEvent:(UIPressesEvent *) event;
```

## Parameters

- `button`: A [UIButton](../uibutton.md) object that is part of the current button press event and associated with `event`.
- `event`: A [UIEvent](../uievent.md) object that includes a reference to `touch`.

<a id="Discussion"></a>

## Discussion

If a button press isn’t part of this gesture you may pass it to this method, causing it to be ignored. `UIGestureRecognizer` does not cancel ignored presses on the associated view even if [cancelsTouchesInView](cancelstouchesinview.md) is [true](https://developer.apple.com/documentation/swift/true). This method is intended to be called, not overridden.

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
- [shouldBeRequiredToFailByGestureRecognizer:](shouldberequiredtofail%28by_%29.md): Overridden to indicate that the receiver should be required to fail by the specified gesture recognizer.
- [pressesBegan:withEvent:](pressesbegan%28__with_%29.md): Sent to the receiver when a physical button is pressed in the associated view.
- [pressesChanged:withEvent:](presseschanged%28__with_%29.md): Sent to the receiver when the [force](../uipress/force.md) of the press has changed in the associated view.
- [pressesEnded:withEvent:](pressesended%28__with_%29.md): Sent to the receiver when a button is released from the associated view.
