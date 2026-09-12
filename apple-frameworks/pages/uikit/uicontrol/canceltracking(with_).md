> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/canceltracking(with:)](https://developer.apple.com/documentation/uikit/uicontrol/canceltracking(with:))

# cancelTracking(with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the control to cancel tracking related to the specified event.

## Declaration

```swift
func cancelTracking(with event: UIEvent?)
```

## Parameters

- `event`: An event object related to touches that occurred in the control. This parameter might be `nil`, indicating that the cancelation was caused by something other than an event, such as the view being removed from the window.

<a id="Discussion"></a>

## Discussion

The control calls this method when a control-related touch event is canceled. The default implementation cancels any ongoing tracking and updates the control’s state information. Subclasses can override this method and use it to perform any actions relevant to the cancellation of the touch sequence. You should also use it to perform any cleanup associated with tracking the event.

If you override this method, you must call `super` at some point in your implementation.

## See Also

### Tracking touches and redrawing controls

- [beginTracking(\_:with:)](begintracking%28__with_%29.md): Notifies the control when a touch event enters the control’s bounds.
- [continueTracking(\_:with:)](continuetracking%28__with_%29.md): Notifies the control when a touch event for the control updates.
- [endTracking(\_:with:)](endtracking%28__with_%29.md): Notifies the control when a touch event associated with the control ends.
- [isTracking](istracking.md): A Boolean value that indicates whether the control is currently tracking touch events.
- [isTouchInside](istouchinside.md): A Boolean value that indicates whether a tracked touch event is currently inside the control’s bounds.

# cancelTrackingWithEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the control to cancel tracking related to the specified event.

## Declaration

```objectivec
- (void) cancelTrackingWithEvent:(UIEvent *) event;
```

## Parameters

- `event`: An event object related to touches that occurred in the control. This parameter might be `nil`, indicating that the cancelation was caused by something other than an event, such as the view being removed from the window.

<a id="Discussion"></a>

## Discussion

The control calls this method when a control-related touch event is canceled. The default implementation cancels any ongoing tracking and updates the control’s state information. Subclasses can override this method and use it to perform any actions relevant to the cancellation of the touch sequence. You should also use it to perform any cleanup associated with tracking the event.

If you override this method, you must call `super` at some point in your implementation.

## See Also

### Tracking touches and redrawing controls

- [beginTrackingWithTouch:withEvent:](begintracking%28__with_%29.md): Notifies the control when a touch event enters the control’s bounds.
- [continueTrackingWithTouch:withEvent:](continuetracking%28__with_%29.md): Notifies the control when a touch event for the control updates.
- [endTrackingWithTouch:withEvent:](endtracking%28__with_%29.md): Notifies the control when a touch event associated with the control ends.
- [tracking](istracking.md): A Boolean value that indicates whether the control is currently tracking touch events.
- [touchInside](istouchinside.md): A Boolean value that indicates whether a tracked touch event is currently inside the control’s bounds.
