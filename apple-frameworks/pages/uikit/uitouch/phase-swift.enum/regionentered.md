> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitouch/phase-swift.enum/regionentered](https://developer.apple.com/documentation/uikit/uitouch/phase-swift.enum/regionentered)

# UITouch.Phase.regionEntered (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · tvOS 13.4+ · visionOS 1.0+

A touch for a given event has entered a window on the screen.

## Declaration

```swift
case regionEntered
```

<a id="Discussion"></a>

## Discussion

The [UITouch.Phase.regionEntered](regionentered.md), [UITouch.Phase.regionMoved](regionmoved.md), and [UITouch.Phase.regionExited](regionexited.md) phases don’t always align with the [state](../../uigesturerecognizer/state-swift.property.md) property of a [UIHoverGestureRecognizer](../../uihovergesturerecognizer.md). States of the hover gesture recognizer only apply within the context of the gesture’s view, whereas the touch states apply within the window.

## See Also

### Constants

- [UITouch.Phase.began](began.md): A touch for a given event has pressed down on the screen.
- [UITouch.Phase.moved](moved.md): A touch for a given event has moved over the screen.
- [UITouch.Phase.stationary](stationary.md): A touch for a given event is pressed down on the screen, but hasn’t moved since the previous event.
- [UITouch.Phase.ended](ended.md): A touch for a given event has lifted from the screen.
- [UITouch.Phase.cancelled](cancelled.md): The system canceled tracking for a touch, for example, when the user moves the device against their face.
- [UITouch.Phase.regionMoved](regionmoved.md): A touch for the given event is within a window on the screen, but has not yet pressed down.
- [UITouch.Phase.regionExited](regionexited.md): A touch for a given event has left a window on the screen.

# UITouchPhaseRegionEntered (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · tvOS 13.4+ · visionOS 1.0+

A touch for a given event has entered a window on the screen.

## Declaration

```objectivec
UITouchPhaseRegionEntered
```

<a id="Discussion"></a>

## Discussion

The [UITouchPhaseRegionEntered](regionentered.md), [UITouchPhaseRegionMoved](regionmoved.md), and [UITouchPhaseRegionExited](regionexited.md) phases don’t always align with the [state](../../uigesturerecognizer/state-swift.property.md) property of a [UIHoverGestureRecognizer](../../uihovergesturerecognizer.md). States of the hover gesture recognizer only apply within the context of the gesture’s view, whereas the touch states apply within the window.

## See Also

### Constants

- [UITouchPhaseBegan](began.md): A touch for a given event has pressed down on the screen.
- [UITouchPhaseMoved](moved.md): A touch for a given event has moved over the screen.
- [UITouchPhaseStationary](stationary.md): A touch for a given event is pressed down on the screen, but hasn’t moved since the previous event.
- [UITouchPhaseEnded](ended.md): A touch for a given event has lifted from the screen.
- [UITouchPhaseCancelled](cancelled.md): The system canceled tracking for a touch, for example, when the user moves the device against their face.
- [UITouchPhaseRegionMoved](regionmoved.md): A touch for the given event is within a window on the screen, but has not yet pressed down.
- [UITouchPhaseRegionExited](regionexited.md): A touch for a given event has left a window on the screen.
