> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/phase-swift.struct/began](https://developer.apple.com/documentation/appkit/nsevent/phase-swift.struct/began)

# began (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

An event phase has begun.

## Declaration

```swift
static var began: NSEvent.Phase { get }
```

## See Also

### Constants

- [stationary](stationary.md): An event phase is in progress but hasn’t moved since the previous event.
- [changed](changed.md): An event phase has changed.
- [ended](ended.md): The event phase ended.
- [cancelled](cancelled.md): The system canceled the event phase.
- [mayBegin](maybegin.md): The system event phase may begin.

# NSEventPhaseBegan (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

An event phase has begun.

## Declaration

```objectivec
NSEventPhaseBegan
```

## See Also

### Constants

- [NSEventPhaseNone](../../nseventphase/nseventphasenone.md): The event is not associated with a phase.
- [NSEventPhaseStationary](stationary.md): An event phase is in progress but hasn’t moved since the previous event.
- [NSEventPhaseChanged](changed.md): An event phase has changed.
- [NSEventPhaseEnded](ended.md): The event phase ended.
- [NSEventPhaseCancelled](cancelled.md): The system canceled the event phase.
- [NSEventPhaseMayBegin](maybegin.md): The system event phase may begin.
