> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouch/phase-swift.struct/ended](https://developer.apple.com/documentation/appkit/nstouch/phase-swift.struct/ended)

# ended (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

A finger was lifted from the screen. Or, an active touch transitioned to a resting touch and resting touches are not wanted by the view hierarchy.

## Declaration

```swift
static var ended: NSTouch.Phase { get }
```

## See Also

### Constants

- [began](began.md): A finger touched the device. Or, a resting touch transitioned to an active touch and resting touches are not wanted by the view hierarchy.
- [moved](moved.md): A finger moved on the device.
- [stationary](stationary.md): A finger is touching the device, but hasn’t moved since the previous event.
- [cancelled](cancelled.md): The system cancelled tracking for the touch, as when (for example) the window associated with the touch resigns key or is deactivated.
- [touching](touching.md): Matches the [began](began.md), [moved](moved.md), or [stationary](stationary.md) phases of a touch.
- [any](any.md): Matches any phase of a touch.

# NSTouchPhaseEnded (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

A finger was lifted from the screen. Or, an active touch transitioned to a resting touch and resting touches are not wanted by the view hierarchy.

## Declaration

```objectivec
NSTouchPhaseEnded
```

## See Also

### Constants

- [NSTouchPhaseBegan](began.md): A finger touched the device. Or, a resting touch transitioned to an active touch and resting touches are not wanted by the view hierarchy.
- [NSTouchPhaseMoved](moved.md): A finger moved on the device.
- [NSTouchPhaseStationary](stationary.md): A finger is touching the device, but hasn’t moved since the previous event.
- [NSTouchPhaseCancelled](cancelled.md): The system cancelled tracking for the touch, as when (for example) the window associated with the touch resigns key or is deactivated.
- [NSTouchPhaseTouching](touching.md): Matches the [NSTouchPhaseBegan](began.md), [NSTouchPhaseMoved](moved.md), or [NSTouchPhaseStationary](stationary.md) phases of a touch.
- [NSTouchPhaseAny](any.md): Matches any phase of a touch.
