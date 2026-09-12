> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/phase-swift.struct/ended](https://developer.apple.com/documentation/appkit/nsevent/phase-swift.struct/ended)

# ended (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

The event phase ended.

## Declaration

```swift
static var ended: NSEvent.Phase { get }
```

## See Also

### Constants

- [began](began.md): An event phase has begun.
- [stationary](stationary.md): An event phase is in progress but hasn’t moved since the previous event.
- [changed](changed.md): An event phase has changed.
- [cancelled](cancelled.md): The system canceled the event phase.
- [mayBegin](maybegin.md): The system event phase may begin.

# NSEventPhaseEnded (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

The event phase ended.

## Declaration

```objectivec
NSEventPhaseEnded
```

## See Also

### Constants

- [NSEventPhaseNone](../../nseventphase/nseventphasenone.md): The event is not associated with a phase.
- [NSEventPhaseBegan](began.md): An event phase has begun.
- [NSEventPhaseStationary](stationary.md): An event phase is in progress but hasn’t moved since the previous event.
- [NSEventPhaseChanged](changed.md): An event phase has changed.
- [NSEventPhaseCancelled](cancelled.md): The system canceled the event phase.
- [NSEventPhaseMayBegin](maybegin.md): The system event phase may begin.
