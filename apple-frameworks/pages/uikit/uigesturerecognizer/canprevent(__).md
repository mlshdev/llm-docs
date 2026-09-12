> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/canprevent(_:)](https://developer.apple.com/documentation/uikit/uigesturerecognizer/canprevent(_:))

# canPrevent(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Overridden to indicate that the receiver can prevent the specified gesture recognizer from recognizing its gesture.

## Declaration

```swift
func canPrevent(_ preventedGestureRecognizer: UIGestureRecognizer) -> Bool
```

## Parameters

- `preventedGestureRecognizer`: An instance of a subclass of `UIGestureRecognizer`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to indicate that the receiver can block `preventedGestureRecognizer` from recognizing its gesture, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Overriding these methods enables the same behavior as implementing the [UIGestureRecognizerDelegate](../uigesturerecognizerdelegate.md) methods [gestureRecognizerShouldBegin(\_:)](../uigesturerecognizerdelegate/gesturerecognizershouldbegin%28__%29.md) and [gestureRecognizer(\_:shouldReceive:)](../uigesturerecognizerdelegate/gesturerecognizer%28__shouldreceive_%29-16fuh.md). However, by overriding them, subclasses can define class-wide prevention rules. For example, a [UITapGestureRecognizer](../uitapgesturerecognizer.md) object never prevents another `UITapGestureRecognizer` object with a higher tap count.

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
- [shouldReceive(\_:)](shouldreceive%28__%29.md)
- [shouldRequireFailure(of:)](shouldrequirefailure%28of_%29.md): Overridden to indicate that the receiver requires the specified gesture recognizer to fail.
- [shouldBeRequiredToFail(by:)](shouldberequiredtofail%28by_%29.md): Overridden to indicate that the receiver should be required to fail by the specified gesture recognizer.
- [ignore(\_:for:)](ignore%28__for_%29-8qqor.md): Tells the gesture recognizer to ignore a specific press of the given event.
- [pressesBegan(\_:with:)](pressesbegan%28__with_%29.md): Sent to the receiver when a physical button is pressed in the associated view.
- [pressesChanged(\_:with:)](presseschanged%28__with_%29.md): Sent to the receiver when the [force](../uipress/force.md) of the press has changed in the associated view.
- [pressesEnded(\_:with:)](pressesended%28__with_%29.md): Sent to the receiver when a button is released from the associated view.

# canPreventGestureRecognizer: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Overridden to indicate that the receiver can prevent the specified gesture recognizer from recognizing its gesture.

## Declaration

```objectivec
- (BOOL) canPreventGestureRecognizer:(UIGestureRecognizer *) preventedGestureRecognizer;
```

## Parameters

- `preventedGestureRecognizer`: An instance of a subclass of `UIGestureRecognizer`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to indicate that the receiver can block `preventedGestureRecognizer` from recognizing its gesture, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Overriding these methods enables the same behavior as implementing the [UIGestureRecognizerDelegate](../uigesturerecognizerdelegate.md) methods [gestureRecognizerShouldBegin:](../uigesturerecognizerdelegate/gesturerecognizershouldbegin%28__%29.md) and [gestureRecognizer:shouldReceiveTouch:](../uigesturerecognizerdelegate/gesturerecognizer%28__shouldreceive_%29-16fuh.md). However, by overriding them, subclasses can define class-wide prevention rules. For example, a [UITapGestureRecognizer](../uitapgesturerecognizer.md) object never prevents another `UITapGestureRecognizer` object with a higher tap count.

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
- [shouldReceiveEvent:](shouldreceive%28__%29.md)
- [shouldRequireFailureOfGestureRecognizer:](shouldrequirefailure%28of_%29.md): Overridden to indicate that the receiver requires the specified gesture recognizer to fail.
- [shouldBeRequiredToFailByGestureRecognizer:](shouldberequiredtofail%28by_%29.md): Overridden to indicate that the receiver should be required to fail by the specified gesture recognizer.
- [ignorePress:forEvent:](ignore%28__for_%29-8qqor.md): Tells the gesture recognizer to ignore a specific press of the given event.
- [pressesBegan:withEvent:](pressesbegan%28__with_%29.md): Sent to the receiver when a physical button is pressed in the associated view.
- [pressesChanged:withEvent:](presseschanged%28__with_%29.md): Sent to the receiver when the [force](../uipress/force.md) of the press has changed in the associated view.
- [pressesEnded:withEvent:](pressesended%28__with_%29.md): Sent to the receiver when a button is released from the associated view.
