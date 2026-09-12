> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/eventtype/gesture](https://developer.apple.com/documentation/appkit/nsevent/eventtype/gesture)

# NSEvent.EventType.gesture (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.5+

The user performed a nonspecific type of gesture.

## Declaration

```swift
case gesture
```

<a id="Discussion"></a>

## Discussion

[NSEvent.EventType.gesture](gesture.md) represents a gesture that is not otherwise specified by a type such as [NSEvent.EventType.magnify](magnify.md), [NSEvent.EventType.swipe](swipe.md), [NSEvent.EventType.rotate](rotate.md), [NSEvent.EventType.beginGesture](begingesture.md), or [NSEvent.EventType.endGesture](endgesture.md)

## See Also

### Getting Touch-Based Events

- [NSEvent.EventType.beginGesture](begingesture.md): Deprecated. An event marking the beginning of a gesture.
- [NSEvent.EventType.endGesture](endgesture.md): Deprecated. An event that marks the end of a gesture.
- [NSEvent.EventType.magnify](magnify.md): The user performed a pinch-open or pinch-close gesture.
- [NSEvent.EventType.smartMagnify](smartmagnify.md): The user performed a smart-zoom gesture.
- [NSEvent.EventType.swipe](swipe.md): The user performed a swipe gesture.
- [NSEvent.EventType.rotate](rotate.md): The user performed a rotate gesture.
- [NSEvent.EventType.directTouch](directtouch.md): The user touched a portion of the touch bar.
- [NSEvent.EventType.tabletPoint](tabletpoint.md): The user touched a point on a tablet.
- [NSEvent.EventType.tabletProximity](tabletproximity.md): A pointing device is near, but not touching, the associated tablet.
- [NSEvent.EventType.pressure](pressure.md): An event that reports a change in pressure on a pressure-sensitive device.

# NSEventTypeGesture (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.5+

The user performed a nonspecific type of gesture.

## Declaration

```objectivec
NSEventTypeGesture
```

<a id="Discussion"></a>

## Discussion

[NSEventTypeGesture](gesture.md) represents a gesture that is not otherwise specified by a type such as [NSEventTypeMagnify](magnify.md), [NSEventTypeSwipe](swipe.md), [NSEventTypeRotate](rotate.md), [NSEventTypeBeginGesture](begingesture.md), or [NSEventTypeEndGesture](endgesture.md)

## See Also

### Getting Touch-Based Events

- [NSEventTypeBeginGesture](begingesture.md): Deprecated. An event marking the beginning of a gesture.
- [NSEventTypeEndGesture](endgesture.md): Deprecated. An event that marks the end of a gesture.
- [NSEventTypeMagnify](magnify.md): The user performed a pinch-open or pinch-close gesture.
- [NSEventTypeSmartMagnify](smartmagnify.md): The user performed a smart-zoom gesture.
- [NSEventTypeSwipe](swipe.md): The user performed a swipe gesture.
- [NSEventTypeRotate](rotate.md): The user performed a rotate gesture.
- [NSEventTypeDirectTouch](directtouch.md): The user touched a portion of the touch bar.
- [NSEventTypeTabletPoint](tabletpoint.md): The user touched a point on a tablet.
- [NSEventTypeTabletProximity](tabletproximity.md): A pointing device is near, but not touching, the associated tablet.
- [NSEventTypePressure](pressure.md): An event that reports a change in pressure on a pressure-sensitive device.
