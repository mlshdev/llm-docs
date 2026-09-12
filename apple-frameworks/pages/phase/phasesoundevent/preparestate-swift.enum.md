> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundevent/preparestate-swift.enum](https://developer.apple.com/documentation/phase/phasesoundevent/preparestate-swift.enum)

# PHASESoundEvent.PrepareState (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates the state of sound-event preparation.

## Declaration

```swift
enum PrepareState
```

## Topics

### States

- [PHASESoundEvent.PrepareState.prepareInProgress](preparestate-swift.enum/prepareinprogress.md): Indicates that the sound event prepares for playback.
- [PHASESoundEvent.PrepareState.prepareNotStarted](preparestate-swift.enum/preparenotstarted.md): Indicates that the sound event awaits preparation.
- [PHASESoundEvent.PrepareState.prepared](preparestate-swift.enum/prepared.md): Indicates that the sound event preparation is complete.

### Initializers

- [init(rawValue:)](preparestate-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Preparing Playback

- [prepare(completion:)](prepare%28completion_%29.md): Enables a sound event to play and runs the argument code when the sound event plays back.
- [PHASESoundEvent.PrepareHandlerReason](preparehandlerreason.md): Indicates the results of sound-event preparation.
- [prepareState](preparestate-swift.property.md): The status of sound-event preparation.

# PHASESoundEventPrepareState (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates the state of sound-event preparation.

## Declaration

```objectivec
enum PHASESoundEventPrepareState : NSInteger;
```

## Topics

### States

- [PHASESoundEventPrepareStatePrepareInProgress](preparestate-swift.enum/prepareinprogress.md): Indicates that the sound event prepares for playback.
- [PHASESoundEventPrepareStatePrepareNotStarted](preparestate-swift.enum/preparenotstarted.md): Indicates that the sound event awaits preparation.
- [PHASESoundEventPrepareStatePrepared](preparestate-swift.enum/prepared.md): Indicates that the sound event preparation is complete.

## See Also

### Preparing Playback

- [prepareWithCompletion:](prepare%28completion_%29.md): Enables a sound event to play and runs the argument code when the sound event plays back.
- [PHASESoundEventPrepareHandlerReason](preparehandlerreason.md): Indicates the results of sound-event preparation.
- [prepareState](preparestate-swift.property.md): The status of sound-event preparation.
