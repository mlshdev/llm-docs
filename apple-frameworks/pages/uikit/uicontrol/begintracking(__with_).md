> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/begintracking(_:with:)](https://developer.apple.com/documentation/uikit/uicontrol/begintracking(_:with:))

# beginTracking(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the control when a touch event enters the control’s bounds.

## Declaration

```swift
func beginTracking(_ touch: UITouch, with event: UIEvent?) -> Bool
```

## Parameters

- `touch`: The object containing information about the touch event.
- `event`: The event object containing the touch event.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the control should continue tracking touch events or [false](https://developer.apple.com/documentation/swift/false) if it should stop. This value is used to update the [isTracking](istracking.md) property of the control.

<a id="Discussion"></a>

## Discussion

The default implementation of this method always returns [true](https://developer.apple.com/documentation/swift/true). Subclasses can override this method and use it to respond to events. Use the provided event information to detect which part of your control was hit and to set up any initial state information. If you want to continue tracking the touch event, return [true](https://developer.apple.com/documentation/swift/true). If you want to stop tracking the touch event, return [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Tracking touches and redrawing controls

- [continueTracking(\_:with:)](continuetracking%28__with_%29.md): Notifies the control when a touch event for the control updates.
- [endTracking(\_:with:)](endtracking%28__with_%29.md): Notifies the control when a touch event associated with the control ends.
- [cancelTracking(with:)](canceltracking%28with_%29.md): Notifies the control to cancel tracking related to the specified event.
- [isTracking](istracking.md): A Boolean value that indicates whether the control is currently tracking touch events.
- [isTouchInside](istouchinside.md): A Boolean value that indicates whether a tracked touch event is currently inside the control’s bounds.

# beginTrackingWithTouch:withEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the control when a touch event enters the control’s bounds.

## Declaration

```objectivec
- (BOOL) beginTrackingWithTouch:(UITouch *) touch withEvent:(UIEvent *) event;
```

## Parameters

- `touch`: The object containing information about the touch event.
- `event`: The event object containing the touch event.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the control should continue tracking touch events or [false](https://developer.apple.com/documentation/swift/false) if it should stop. This value is used to update the [tracking](istracking.md) property of the control.

<a id="Discussion"></a>

## Discussion

The default implementation of this method always returns [true](https://developer.apple.com/documentation/swift/true). Subclasses can override this method and use it to respond to events. Use the provided event information to detect which part of your control was hit and to set up any initial state information. If you want to continue tracking the touch event, return [true](https://developer.apple.com/documentation/swift/true). If you want to stop tracking the touch event, return [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Tracking touches and redrawing controls

- [continueTrackingWithTouch:withEvent:](continuetracking%28__with_%29.md): Notifies the control when a touch event for the control updates.
- [endTrackingWithTouch:withEvent:](endtracking%28__with_%29.md): Notifies the control when a touch event associated with the control ends.
- [cancelTrackingWithEvent:](canceltracking%28with_%29.md): Notifies the control to cancel tracking related to the specified event.
- [tracking](istracking.md): A Boolean value that indicates whether the control is currently tracking touch events.
- [touchInside](istouchinside.md): A Boolean value that indicates whether a tracked touch event is currently inside the control’s bounds.
