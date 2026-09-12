> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/eventtype/directtouch](https://developer.apple.com/documentation/appkit/nsevent/eventtype/directtouch)

# NSEvent.EventType.directTouch (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.10+

The user touched a portion of the touch bar.

## Declaration

```swift
case directTouch
```

<a id="Discussion"></a>

## Discussion

Use events of this type to handle events occurring in an [NSTouchBar](../../nstouchbar.md) object.

## See Also

### Getting Touch-Based Events

- [NSEvent.EventType.beginGesture](begingesture.md): Deprecated. An event marking the beginning of a gesture.
- [NSEvent.EventType.endGesture](endgesture.md): Deprecated. An event that marks the end of a gesture.
- [NSEvent.EventType.magnify](magnify.md): The user performed a pinch-open or pinch-close gesture.
- [NSEvent.EventType.smartMagnify](smartmagnify.md): The user performed a smart-zoom gesture.
- [NSEvent.EventType.swipe](swipe.md): The user performed a swipe gesture.
- [NSEvent.EventType.rotate](rotate.md): The user performed a rotate gesture.
- [NSEvent.EventType.gesture](gesture.md): The user performed a nonspecific type of gesture.
- [NSEvent.EventType.tabletPoint](tabletpoint.md): The user touched a point on a tablet.
- [NSEvent.EventType.tabletProximity](tabletproximity.md): A pointing device is near, but not touching, the associated tablet.
- [NSEvent.EventType.pressure](pressure.md): An event that reports a change in pressure on a pressure-sensitive device.

# NSEventTypeDirectTouch (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.10+

The user touched a portion of the touch bar.

## Declaration

```objectivec
NSEventTypeDirectTouch
```

<a id="Discussion"></a>

## Discussion

Use events of this type to handle events occurring in an [NSTouchBar](../../nstouchbar.md) object.

## See Also

### Getting Touch-Based Events

- [NSEventTypeBeginGesture](begingesture.md): Deprecated. An event marking the beginning of a gesture.
- [NSEventTypeEndGesture](endgesture.md): Deprecated. An event that marks the end of a gesture.
- [NSEventTypeMagnify](magnify.md): The user performed a pinch-open or pinch-close gesture.
- [NSEventTypeSmartMagnify](smartmagnify.md): The user performed a smart-zoom gesture.
- [NSEventTypeSwipe](swipe.md): The user performed a swipe gesture.
- [NSEventTypeRotate](rotate.md): The user performed a rotate gesture.
- [NSEventTypeGesture](gesture.md): The user performed a nonspecific type of gesture.
- [NSEventTypeTabletPoint](tabletpoint.md): The user touched a point on a tablet.
- [NSEventTypeTabletProximity](tabletproximity.md): A pointing device is near, but not touching, the associated tablet.
- [NSEventTypePressure](pressure.md): An event that reports a change in pressure on a pressure-sensitive device.
