> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/continuetracking(_:with:)](https://developer.apple.com/documentation/uikit/uicontrol/continuetracking(_:with:))

# continueTracking(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the control when a touch event for the control updates.

## Declaration

```swift
func continueTracking(_ touch: UITouch, with event: UIEvent?) -> Bool
```

## Parameters

- `touch`: The touch object containing updated information.
- `event`: The event object containing the touch event.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the control should continue tracking touch events or [false](https://developer.apple.com/documentation/swift/false) if it should stop. This value is used to update the [isTracking](istracking.md) property of the control.

<a id="Discussion"></a>

## Discussion

This method is called repeatedly while a touch event is being tracked inside the control’s bounds. The default implementation of this method always returns [true](https://developer.apple.com/documentation/swift/true). Subclasses can override this method and use it to update their state based on changes to the touch event. If you want to continue tracking the touch event, return [true](https://developer.apple.com/documentation/swift/true). If you want to stop tracking the touch event, return [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Tracking touches and redrawing controls

- [beginTracking(\_:with:)](begintracking%28__with_%29.md): Notifies the control when a touch event enters the control’s bounds.
- [endTracking(\_:with:)](endtracking%28__with_%29.md): Notifies the control when a touch event associated with the control ends.
- [cancelTracking(with:)](canceltracking%28with_%29.md): Notifies the control to cancel tracking related to the specified event.
- [isTracking](istracking.md): A Boolean value that indicates whether the control is currently tracking touch events.
- [isTouchInside](istouchinside.md): A Boolean value that indicates whether a tracked touch event is currently inside the control’s bounds.

# continueTrackingWithTouch:withEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the control when a touch event for the control updates.

## Declaration

```objectivec
- (BOOL) continueTrackingWithTouch:(UITouch *) touch withEvent:(UIEvent *) event;
```

## Parameters

- `touch`: The touch object containing updated information.
- `event`: The event object containing the touch event.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the control should continue tracking touch events or [false](https://developer.apple.com/documentation/swift/false) if it should stop. This value is used to update the [tracking](istracking.md) property of the control.

<a id="Discussion"></a>

## Discussion

This method is called repeatedly while a touch event is being tracked inside the control’s bounds. The default implementation of this method always returns [true](https://developer.apple.com/documentation/swift/true). Subclasses can override this method and use it to update their state based on changes to the touch event. If you want to continue tracking the touch event, return [true](https://developer.apple.com/documentation/swift/true). If you want to stop tracking the touch event, return [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Tracking touches and redrawing controls

- [beginTrackingWithTouch:withEvent:](begintracking%28__with_%29.md): Notifies the control when a touch event enters the control’s bounds.
- [endTrackingWithTouch:withEvent:](endtracking%28__with_%29.md): Notifies the control when a touch event associated with the control ends.
- [cancelTrackingWithEvent:](canceltracking%28with_%29.md): Notifies the control to cancel tracking related to the specified event.
- [tracking](istracking.md): A Boolean value that indicates whether the control is currently tracking touch events.
- [touchInside](istouchinside.md): A Boolean value that indicates whether a tracked touch event is currently inside the control’s bounds.
