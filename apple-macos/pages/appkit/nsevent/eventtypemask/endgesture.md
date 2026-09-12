> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/eventtypemask/endgesture](https://developer.apple.com/documentation/appkit/nsevent/eventtypemask/endgesture)

# endGesture (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+ (deprecated in 27.0)

A mask for end-gesture events.

> NSEventMaskEndGesture is no longer delivered. Use the phase property on NSEvent or NSGestureRecognizer instead.

## Declaration

```swift
static var endGesture: NSEvent.EventTypeMask { get }
```

## See Also

### Getting Touch Events

- [beginGesture](begingesture.md): Deprecated. A mask for begin-gesture events.
- [magnify](magnify.md): A mask for magnify-gesture events.
- [smartMagnify](smartmagnify.md): A mask for smart-zoom gesture events.
- [swipe](swipe.md): A mask for swipe-gesture events.
- [rotate](rotate.md): A mask for rotate-gesture events.
- [gesture](gesture.md): A mask for generic gesture events.
- [directTouch](directtouch.md): A mask for touch events.
- [tabletPoint](tabletpoint.md): A mask for tablet-point events.
- [tabletProximity](tabletproximity.md): A mask for tablet-proximity events.
- [pressure](pressure.md): A mask for pressure-change events.

# NSEventMaskEndGesture (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.5+ (deprecated in 27.0)

A mask for end-gesture events.

> NSEventMaskEndGesture is no longer delivered. Use the phase property on NSEvent or NSGestureRecognizer instead.

## Declaration

```objectivec
NSEventMaskEndGesture
```

## See Also

### Getting Touch Events

- [NSEventMaskBeginGesture](begingesture.md): Deprecated. A mask for begin-gesture events.
- [NSEventMaskMagnify](magnify.md): A mask for magnify-gesture events.
- [NSEventMaskSmartMagnify](smartmagnify.md): A mask for smart-zoom gesture events.
- [NSEventMaskSwipe](swipe.md): A mask for swipe-gesture events.
- [NSEventMaskRotate](rotate.md): A mask for rotate-gesture events.
- [NSEventMaskGesture](gesture.md): A mask for generic gesture events.
- [NSEventMaskDirectTouch](directtouch.md): A mask for touch events.
- [NSEventMaskTabletPoint](tabletpoint.md): A mask for tablet-point events.
- [NSEventMaskTabletProximity](tabletproximity.md): A mask for tablet-proximity events.
- [NSEventMaskPressure](pressure.md): A mask for pressure-change events.
