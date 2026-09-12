> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/phase-swift.struct](https://developer.apple.com/documentation/appkit/nsevent/phase-swift.struct)

# NSEvent.Phase (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.7+

Constants that represent the possible phases during an event phase.

## Declaration

```swift
struct Phase
```

## Topics

### Constants

- [began](phase-swift.struct/began.md): An event phase has begun.
- [stationary](phase-swift.struct/stationary.md): An event phase is in progress but hasn’t moved since the previous event.
- [changed](phase-swift.struct/changed.md): An event phase has changed.
- [ended](phase-swift.struct/ended.md): The event phase ended.
- [cancelled](phase-swift.struct/cancelled.md): The system canceled the event phase.
- [mayBegin](phase-swift.struct/maybegin.md): The system event phase may begin.

### Initializers

- [init(rawValue:)](phase-swift.struct/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [NSEvent.EventTypeMask](eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.
- [NSEvent.ButtonMask](buttonmask-swift.struct.md): Constants you use to identify the activated tablet buttons in an event.
- [NSEvent.ModifierFlags](modifierflags-swift.struct.md): Flags that represent key states in an event object.
- [NSEvent.SwipeTrackingOptions](swipetrackingoptions.md): Constants that specify swipe-tracking options.
- [init(type:)](eventtypemask/init%28type_%29.md): Returns the event mask for the specified type.

# NSEventPhase (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

Constants that represent the possible phases during an event phase.

## Declaration

```objectivec
enum NSEventPhase : NSUInteger;
```

## Topics

### Constants

- [NSEventPhaseNone](../nseventphase/nseventphasenone.md): The event is not associated with a phase.
- [NSEventPhaseBegan](phase-swift.struct/began.md): An event phase has begun.
- [NSEventPhaseStationary](phase-swift.struct/stationary.md): An event phase is in progress but hasn’t moved since the previous event.
- [NSEventPhaseChanged](phase-swift.struct/changed.md): An event phase has changed.
- [NSEventPhaseEnded](phase-swift.struct/ended.md): The event phase ended.
- [NSEventPhaseCancelled](phase-swift.struct/cancelled.md): The system canceled the event phase.
- [NSEventPhaseMayBegin](phase-swift.struct/maybegin.md): The system event phase may begin.

## See Also

### Constants

- [NSEventMask](eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.
- [NSEventButtonMask](buttonmask-swift.struct.md): Constants you use to identify the activated tablet buttons in an event.
- [NSEventModifierFlags](modifierflags-swift.struct.md): Flags that represent key states in an event object.
- [NSEventSwipeTrackingOptions](swipetrackingoptions.md): Constants that specify swipe-tracking options.
- [NSEventMaskFromType](eventtypemask/init%28type_%29.md): Returns the event mask for the specified type.
