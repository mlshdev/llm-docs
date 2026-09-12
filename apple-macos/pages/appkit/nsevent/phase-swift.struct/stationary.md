> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/phase-swift.struct/stationary](https://developer.apple.com/documentation/appkit/nsevent/phase-swift.struct/stationary)

# stationary (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

An event phase is in progress but hasn’t moved since the previous event.

## Declaration

```swift
static var stationary: NSEvent.Phase { get }
```

## See Also

### Constants

- [began](began.md): An event phase has begun.
- [changed](changed.md): An event phase has changed.
- [ended](ended.md): The event phase ended.
- [cancelled](cancelled.md): The system canceled the event phase.
- [mayBegin](maybegin.md): The system event phase may begin.

# NSEventPhaseStationary (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

An event phase is in progress but hasn’t moved since the previous event.

## Declaration

```objectivec
NSEventPhaseStationary
```

## See Also

### Constants

- [NSEventPhaseNone](../../nseventphase/nseventphasenone.md): The event is not associated with a phase.
- [NSEventPhaseBegan](began.md): An event phase has begun.
- [NSEventPhaseChanged](changed.md): An event phase has changed.
- [NSEventPhaseEnded](ended.md): The event phase ended.
- [NSEventPhaseCancelled](cancelled.md): The system canceled the event phase.
- [NSEventPhaseMayBegin](maybegin.md): The system event phase may begin.
