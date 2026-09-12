> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouch/phase-swift.struct/cancelled](https://developer.apple.com/documentation/appkit/nstouch/phase-swift.struct/cancelled)

# cancelled (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

The system cancelled tracking for the touch, as when (for example) the window associated with the touch resigns key or is deactivated.

## Declaration

```swift
static var cancelled: NSTouch.Phase { get }
```

## See Also

### Constants

- [began](began.md): A finger touched the device. Or, a resting touch transitioned to an active touch and resting touches are not wanted by the view hierarchy.
- [moved](moved.md): A finger moved on the device.
- [stationary](stationary.md): A finger is touching the device, but hasn’t moved since the previous event.
- [ended](ended.md): A finger was lifted from the screen. Or, an active touch transitioned to a resting touch and resting touches are not wanted by the view hierarchy.
- [touching](touching.md): Matches the [began](began.md), [moved](moved.md), or [stationary](stationary.md) phases of a touch.
- [any](any.md): Matches any phase of a touch.

# NSTouchPhaseCancelled (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

The system cancelled tracking for the touch, as when (for example) the window associated with the touch resigns key or is deactivated.

## Declaration

```objectivec
NSTouchPhaseCancelled
```

## See Also

### Constants

- [NSTouchPhaseBegan](began.md): A finger touched the device. Or, a resting touch transitioned to an active touch and resting touches are not wanted by the view hierarchy.
- [NSTouchPhaseMoved](moved.md): A finger moved on the device.
- [NSTouchPhaseStationary](stationary.md): A finger is touching the device, but hasn’t moved since the previous event.
- [NSTouchPhaseEnded](ended.md): A finger was lifted from the screen. Or, an active touch transitioned to a resting touch and resting touches are not wanted by the view hierarchy.
- [NSTouchPhaseTouching](touching.md): Matches the [NSTouchPhaseBegan](began.md), [NSTouchPhaseMoved](moved.md), or [NSTouchPhaseStationary](stationary.md) phases of a touch.
- [NSTouchPhaseAny](any.md): Matches any phase of a touch.
