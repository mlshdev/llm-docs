> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/eventtypemask/smartmagnify](https://developer.apple.com/documentation/appkit/nsevent/eventtypemask/smartmagnify)

# smartMagnify (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.8+

A mask for smart-zoom gesture events.

## Declaration

```swift
static var smartMagnify: NSEvent.EventTypeMask { get }
```

<a id="Discussion"></a>

## Discussion

In response to this event, magnify the content appropriately for your app. For example, you might zoom in on a specific paragraph or image.

## See Also

### Getting Touch Events

- [beginGesture](begingesture.md): Deprecated. A mask for begin-gesture events.
- [endGesture](endgesture.md): Deprecated. A mask for end-gesture events.
- [magnify](magnify.md): A mask for magnify-gesture events.
- [swipe](swipe.md): A mask for swipe-gesture events.
- [rotate](rotate.md): A mask for rotate-gesture events.
- [gesture](gesture.md): A mask for generic gesture events.
- [directTouch](directtouch.md): A mask for touch events.
- [tabletPoint](tabletpoint.md): A mask for tablet-point events.
- [tabletProximity](tabletproximity.md): A mask for tablet-proximity events.
- [pressure](pressure.md): A mask for pressure-change events.

# NSEventMaskSmartMagnify (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.8+

A mask for smart-zoom gesture events.

## Declaration

```objectivec
NSEventMaskSmartMagnify
```

<a id="Discussion"></a>

## Discussion

In response to this event, magnify the content appropriately for your app. For example, you might zoom in on a specific paragraph or image.

## See Also

### Getting Touch Events

- [NSEventMaskBeginGesture](begingesture.md): Deprecated. A mask for begin-gesture events.
- [NSEventMaskEndGesture](endgesture.md): Deprecated. A mask for end-gesture events.
- [NSEventMaskMagnify](magnify.md): A mask for magnify-gesture events.
- [NSEventMaskSwipe](swipe.md): A mask for swipe-gesture events.
- [NSEventMaskRotate](rotate.md): A mask for rotate-gesture events.
- [NSEventMaskGesture](gesture.md): A mask for generic gesture events.
- [NSEventMaskDirectTouch](directtouch.md): A mask for touch events.
- [NSEventMaskTabletPoint](tabletpoint.md): A mask for tablet-point events.
- [NSEventMaskTabletProximity](tabletproximity.md): A mask for tablet-proximity events.
- [NSEventMaskPressure](pressure.md): A mask for pressure-change events.
