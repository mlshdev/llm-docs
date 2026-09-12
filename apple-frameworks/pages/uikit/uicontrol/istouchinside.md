> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/istouchinside](https://developer.apple.com/documentation/uikit/uicontrol/istouchinside)

# isTouchInside (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether a tracked touch event is currently inside the control’s bounds.

## Declaration

```swift
var isTouchInside: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the location of the most recent touch event is inside the control’s bounds or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

While tracking of a touch event is ongoing, the control updates the value of this property to indicate whether the most recent touch is still inside the control’s bounds. The control uses this information to trigger specific events. For example, touch events entering or exiting a control trigger appropriate drag events.

## See Also

### Tracking touches and redrawing controls

- [beginTracking(\_:with:)](begintracking%28__with_%29.md): Notifies the control when a touch event enters the control’s bounds.
- [continueTracking(\_:with:)](continuetracking%28__with_%29.md): Notifies the control when a touch event for the control updates.
- [endTracking(\_:with:)](endtracking%28__with_%29.md): Notifies the control when a touch event associated with the control ends.
- [cancelTracking(with:)](canceltracking%28with_%29.md): Notifies the control to cancel tracking related to the specified event.
- [isTracking](istracking.md): A Boolean value that indicates whether the control is currently tracking touch events.

# touchInside (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether a tracked touch event is currently inside the control’s bounds.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isTouchInside) BOOL touchInside;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the location of the most recent touch event is inside the control’s bounds or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

While tracking of a touch event is ongoing, the control updates the value of this property to indicate whether the most recent touch is still inside the control’s bounds. The control uses this information to trigger specific events. For example, touch events entering or exiting a control trigger appropriate drag events.

## See Also

### Tracking touches and redrawing controls

- [beginTrackingWithTouch:withEvent:](begintracking%28__with_%29.md): Notifies the control when a touch event enters the control’s bounds.
- [continueTrackingWithTouch:withEvent:](continuetracking%28__with_%29.md): Notifies the control when a touch event for the control updates.
- [endTrackingWithTouch:withEvent:](endtracking%28__with_%29.md): Notifies the control when a touch event associated with the control ends.
- [cancelTrackingWithEvent:](canceltracking%28with_%29.md): Notifies the control to cancel tracking related to the specified event.
- [tracking](istracking.md): A Boolean value that indicates whether the control is currently tracking touch events.
