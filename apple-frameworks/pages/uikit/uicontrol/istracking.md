> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/istracking](https://developer.apple.com/documentation/uikit/uicontrol/istracking)

# isTracking (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the control is currently tracking touch events.

## Declaration

```swift
var isTracking: Bool { get }
```

<a id="Discussion"></a>

## Discussion

While tracking of a touch event is in progress, the control sets the value of this property to [true](https://developer.apple.com/documentation/swift/true). When tracking ends or is canceled for any reason, it sets this property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Tracking touches and redrawing controls

- [beginTracking(\_:with:)](begintracking%28__with_%29.md): Notifies the control when a touch event enters the control’s bounds.
- [continueTracking(\_:with:)](continuetracking%28__with_%29.md): Notifies the control when a touch event for the control updates.
- [endTracking(\_:with:)](endtracking%28__with_%29.md): Notifies the control when a touch event associated with the control ends.
- [cancelTracking(with:)](canceltracking%28with_%29.md): Notifies the control to cancel tracking related to the specified event.
- [isTouchInside](istouchinside.md): A Boolean value that indicates whether a tracked touch event is currently inside the control’s bounds.

# tracking (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the control is currently tracking touch events.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isTracking) BOOL tracking;
```

<a id="Discussion"></a>

## Discussion

While tracking of a touch event is in progress, the control sets the value of this property to [true](https://developer.apple.com/documentation/swift/true). When tracking ends or is canceled for any reason, it sets this property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Tracking touches and redrawing controls

- [beginTrackingWithTouch:withEvent:](begintracking%28__with_%29.md): Notifies the control when a touch event enters the control’s bounds.
- [continueTrackingWithTouch:withEvent:](continuetracking%28__with_%29.md): Notifies the control when a touch event for the control updates.
- [endTrackingWithTouch:withEvent:](endtracking%28__with_%29.md): Notifies the control when a touch event associated with the control ends.
- [cancelTrackingWithEvent:](canceltracking%28with_%29.md): Notifies the control to cancel tracking related to the specified event.
- [touchInside](istouchinside.md): A Boolean value that indicates whether a tracked touch event is currently inside the control’s bounds.
