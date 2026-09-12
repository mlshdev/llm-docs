> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/eventtype/endgesture](https://developer.apple.com/documentation/appkit/nsevent/eventtype/endgesture)

# NSEvent.EventType.endGesture (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.5+ (deprecated in 27.0)

An event that marks the end of a gesture.

> NSEventTypeEndGesture is no longer delivered. Use the phase property on NSEvent or NSGestureRecognizer instead.

## Declaration

```swift
case endGesture
```

<a id="Discussion"></a>

## Discussion

Note that apps that link against macOS 10.11 and later no longer receive this event type. If you need to access the phases of a specific gesture, you can implement the responder for that gesture and examine its [phase](../phase-swift.property.md) property instead.

## See Also

### Getting Touch-Based Events

- [NSEvent.EventType.beginGesture](begingesture.md): Deprecated. An event marking the beginning of a gesture.
- [NSEvent.EventType.magnify](magnify.md): The user performed a pinch-open or pinch-close gesture.
- [NSEvent.EventType.smartMagnify](smartmagnify.md): The user performed a smart-zoom gesture.
- [NSEvent.EventType.swipe](swipe.md): The user performed a swipe gesture.
- [NSEvent.EventType.rotate](rotate.md): The user performed a rotate gesture.
- [NSEvent.EventType.gesture](gesture.md): The user performed a nonspecific type of gesture.
- [NSEvent.EventType.directTouch](directtouch.md): The user touched a portion of the touch bar.
- [NSEvent.EventType.tabletPoint](tabletpoint.md): The user touched a point on a tablet.
- [NSEvent.EventType.tabletProximity](tabletproximity.md): A pointing device is near, but not touching, the associated tablet.
- [NSEvent.EventType.pressure](pressure.md): An event that reports a change in pressure on a pressure-sensitive device.

# NSEventTypeEndGesture (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.5+ (deprecated in 27.0)

An event that marks the end of a gesture.

> NSEventTypeEndGesture is no longer delivered. Use the phase property on NSEvent or NSGestureRecognizer instead.

## Declaration

```objectivec
NSEventTypeEndGesture
```

<a id="Discussion"></a>

## Discussion

Note that apps that link against macOS 10.11 and later no longer receive this event type. If you need to access the phases of a specific gesture, you can implement the responder for that gesture and examine its [phase](../phase-swift.property.md) property instead.

## See Also

### Getting Touch-Based Events

- [NSEventTypeBeginGesture](begingesture.md): Deprecated. An event marking the beginning of a gesture.
- [NSEventTypeMagnify](magnify.md): The user performed a pinch-open or pinch-close gesture.
- [NSEventTypeSmartMagnify](smartmagnify.md): The user performed a smart-zoom gesture.
- [NSEventTypeSwipe](swipe.md): The user performed a swipe gesture.
- [NSEventTypeRotate](rotate.md): The user performed a rotate gesture.
- [NSEventTypeGesture](gesture.md): The user performed a nonspecific type of gesture.
- [NSEventTypeDirectTouch](directtouch.md): The user touched a portion of the touch bar.
- [NSEventTypeTabletPoint](tabletpoint.md): The user touched a point on a tablet.
- [NSEventTypeTabletProximity](tabletproximity.md): A pointing device is near, but not touching, the associated tablet.
- [NSEventTypePressure](pressure.md): An event that reports a change in pressure on a pressure-sensitive device.
