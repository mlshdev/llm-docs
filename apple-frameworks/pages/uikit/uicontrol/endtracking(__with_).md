> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/endtracking(_:with:)](https://developer.apple.com/documentation/uikit/uicontrol/endtracking(_:with:))

# endTracking(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the control when a touch event associated with the control ends.

## Declaration

```swift
func endTracking(_ touch: UITouch?, with event: UIEvent?)
```

## Parameters

- `touch`: The touch object containing the final touch information.
- `event`: The event object containing the touch event.

<a id="Discussion"></a>

## Discussion

This method is called at the end of a sequence of touch events inside the control’s bounds. Subclasses can override this method and use it to perform any actions relevant to the completion of the touch sequence. You should also use it to perform any cleanup associated with tracking the event.

If you override this method, you must call `super` at some point in your implementation. The default implementation updates the [isTracking](istracking.md) property of the control.

## See Also

### Tracking touches and redrawing controls

- [beginTracking(\_:with:)](begintracking%28__with_%29.md): Notifies the control when a touch event enters the control’s bounds.
- [continueTracking(\_:with:)](continuetracking%28__with_%29.md): Notifies the control when a touch event for the control updates.
- [cancelTracking(with:)](canceltracking%28with_%29.md): Notifies the control to cancel tracking related to the specified event.
- [isTracking](istracking.md): A Boolean value that indicates whether the control is currently tracking touch events.
- [isTouchInside](istouchinside.md): A Boolean value that indicates whether a tracked touch event is currently inside the control’s bounds.

# endTrackingWithTouch:withEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the control when a touch event associated with the control ends.

## Declaration

```objectivec
- (void) endTrackingWithTouch:(UITouch *) touch withEvent:(UIEvent *) event;
```

## Parameters

- `touch`: The touch object containing the final touch information.
- `event`: The event object containing the touch event.

<a id="Discussion"></a>

## Discussion

This method is called at the end of a sequence of touch events inside the control’s bounds. Subclasses can override this method and use it to perform any actions relevant to the completion of the touch sequence. You should also use it to perform any cleanup associated with tracking the event.

If you override this method, you must call `super` at some point in your implementation. The default implementation updates the [tracking](istracking.md) property of the control.

## See Also

### Tracking touches and redrawing controls

- [beginTrackingWithTouch:withEvent:](begintracking%28__with_%29.md): Notifies the control when a touch event enters the control’s bounds.
- [continueTrackingWithTouch:withEvent:](continuetracking%28__with_%29.md): Notifies the control when a touch event for the control updates.
- [cancelTrackingWithEvent:](canceltracking%28with_%29.md): Notifies the control to cancel tracking related to the specified event.
- [tracking](istracking.md): A Boolean value that indicates whether the control is currently tracking touch events.
- [touchInside](istouchinside.md): A Boolean value that indicates whether a tracked touch event is currently inside the control’s bounds.
