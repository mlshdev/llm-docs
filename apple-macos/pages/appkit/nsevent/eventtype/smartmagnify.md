> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/eventtype/smartmagnify](https://developer.apple.com/documentation/appkit/nsevent/eventtype/smartmagnify)

# NSEvent.EventType.smartMagnify (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.8+

The user performed a smart-zoom gesture.

## Declaration

```swift
case smartMagnify
```

<a id="Discussion"></a>

## Discussion

[NSEvent.EventType.smartMagnify](smartmagnify.md) represents the smart zoom gesture (that is, a two-finger double tap on trackpads), along with a corresponding [NSResponder](../../nsresponder.md) method. In response to this event, you should magnify the content appropriately for your app. For example, you might zoom in on a specific paragraph or image.

## See Also

### Getting Touch-Based Events

- [NSEvent.EventType.beginGesture](begingesture.md): Deprecated. An event marking the beginning of a gesture.
- [NSEvent.EventType.endGesture](endgesture.md): Deprecated. An event that marks the end of a gesture.
- [NSEvent.EventType.magnify](magnify.md): The user performed a pinch-open or pinch-close gesture.
- [NSEvent.EventType.swipe](swipe.md): The user performed a swipe gesture.
- [NSEvent.EventType.rotate](rotate.md): The user performed a rotate gesture.
- [NSEvent.EventType.gesture](gesture.md): The user performed a nonspecific type of gesture.
- [NSEvent.EventType.directTouch](directtouch.md): The user touched a portion of the touch bar.
- [NSEvent.EventType.tabletPoint](tabletpoint.md): The user touched a point on a tablet.
- [NSEvent.EventType.tabletProximity](tabletproximity.md): A pointing device is near, but not touching, the associated tablet.
- [NSEvent.EventType.pressure](pressure.md): An event that reports a change in pressure on a pressure-sensitive device.

# NSEventTypeSmartMagnify (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.8+

The user performed a smart-zoom gesture.

## Declaration

```objectivec
NSEventTypeSmartMagnify
```

<a id="Discussion"></a>

## Discussion

[NSEventTypeSmartMagnify](smartmagnify.md) represents the smart zoom gesture (that is, a two-finger double tap on trackpads), along with a corresponding [NSResponder](../../nsresponder.md) method. In response to this event, you should magnify the content appropriately for your app. For example, you might zoom in on a specific paragraph or image.

## See Also

### Getting Touch-Based Events

- [NSEventTypeBeginGesture](begingesture.md): Deprecated. An event marking the beginning of a gesture.
- [NSEventTypeEndGesture](endgesture.md): Deprecated. An event that marks the end of a gesture.
- [NSEventTypeMagnify](magnify.md): The user performed a pinch-open or pinch-close gesture.
- [NSEventTypeSwipe](swipe.md): The user performed a swipe gesture.
- [NSEventTypeRotate](rotate.md): The user performed a rotate gesture.
- [NSEventTypeGesture](gesture.md): The user performed a nonspecific type of gesture.
- [NSEventTypeDirectTouch](directtouch.md): The user touched a portion of the touch bar.
- [NSEventTypeTabletPoint](tabletpoint.md): The user touched a point on a tablet.
- [NSEventTypeTabletProximity](tabletproximity.md): A pointing device is near, but not touching, the associated tablet.
- [NSEventTypePressure](pressure.md): An event that reports a change in pressure on a pressure-sensitive device.
