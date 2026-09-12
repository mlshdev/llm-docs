> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/phase-swift.struct/maybegin](https://developer.apple.com/documentation/appkit/nsevent/phase-swift.struct/maybegin)

# mayBegin (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

The system event phase may begin.

## Declaration

```swift
static var mayBegin: NSEvent.Phase { get }
```

## See Also

### Constants

- [began](began.md): An event phase has begun.
- [stationary](stationary.md): An event phase is in progress but hasn’t moved since the previous event.
- [changed](changed.md): An event phase has changed.
- [ended](ended.md): The event phase ended.
- [cancelled](cancelled.md): The system canceled the event phase.

# NSEventPhaseMayBegin (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

The system event phase may begin.

## Declaration

```objectivec
NSEventPhaseMayBegin
```

## See Also

### Constants

- [NSEventPhaseNone](../../nseventphase/nseventphasenone.md): The event is not associated with a phase.
- [NSEventPhaseBegan](began.md): An event phase has begun.
- [NSEventPhaseStationary](stationary.md): An event phase is in progress but hasn’t moved since the previous event.
- [NSEventPhaseChanged](changed.md): An event phase has changed.
- [NSEventPhaseEnded](ended.md): The event phase ended.
- [NSEventPhaseCancelled](cancelled.md): The system canceled the event phase.
