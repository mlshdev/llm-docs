> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouch/phase-swift.struct/touching](https://developer.apple.com/documentation/appkit/nstouch/phase-swift.struct/touching)

# touching (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Matches the [began](began.md), [moved](moved.md), or [stationary](stationary.md) phases of a touch.

## Declaration

```swift
static var touching: NSTouch.Phase { get }
```

## See Also

### Constants

- [began](began.md): A finger touched the device. Or, a resting touch transitioned to an active touch and resting touches are not wanted by the view hierarchy.
- [moved](moved.md): A finger moved on the device.
- [stationary](stationary.md): A finger is touching the device, but hasn’t moved since the previous event.
- [ended](ended.md): A finger was lifted from the screen. Or, an active touch transitioned to a resting touch and resting touches are not wanted by the view hierarchy.
- [cancelled](cancelled.md): The system cancelled tracking for the touch, as when (for example) the window associated with the touch resigns key or is deactivated.
- [any](any.md): Matches any phase of a touch.

# NSTouchPhaseTouching (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

Matches the [NSTouchPhaseBegan](began.md), [NSTouchPhaseMoved](moved.md), or [NSTouchPhaseStationary](stationary.md) phases of a touch.

## Declaration

```objectivec
NSTouchPhaseTouching
```

## See Also

### Constants

- [NSTouchPhaseBegan](began.md): A finger touched the device. Or, a resting touch transitioned to an active touch and resting touches are not wanted by the view hierarchy.
- [NSTouchPhaseMoved](moved.md): A finger moved on the device.
- [NSTouchPhaseStationary](stationary.md): A finger is touching the device, but hasn’t moved since the previous event.
- [NSTouchPhaseEnded](ended.md): A finger was lifted from the screen. Or, an active touch transitioned to a resting touch and resting touches are not wanted by the view hierarchy.
- [NSTouchPhaseCancelled](cancelled.md): The system cancelled tracking for the touch, as when (for example) the window associated with the touch resigns key or is deactivated.
- [NSTouchPhaseAny](any.md): Matches any phase of a touch.
