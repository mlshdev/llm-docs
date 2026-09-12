> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundevent/preparehandlerreason](https://developer.apple.com/documentation/phase/phasesoundevent/preparehandlerreason)

# PHASESoundEvent.PrepareHandlerReason (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates the results of sound-event preparation.

## Declaration

```swift
enum PrepareHandlerReason
```

<a id="overview"></a>

## Overview

The sound event [prepare(completion:)](prepare%28completion_%29.md) function passes an instance of this class to its argument completion closure to communicate the results of the call.

## Topics

### Reasons

- [PHASESoundEvent.PrepareHandlerReason.prepared](preparehandlerreason/prepared.md): Indicates the completion of sound-event preparation.
- [PHASESoundEvent.PrepareHandlerReason.terminated](preparehandlerreason/terminated.md): Indicates sound-event preparation stops abruptly.
- [PHASESoundEvent.PrepareHandlerReason.failure](preparehandlerreason/failure.md): Indicates an error occurs during sound-event preparation.

### Initializers

- [init(rawValue:)](preparehandlerreason/init%28rawvalue_%29.md)

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
- [prepareState](preparestate-swift.property.md): The status of sound-event preparation.
- [PHASESoundEvent.PrepareState](preparestate-swift.enum.md): Indicates the state of sound-event preparation.

# PHASESoundEventPrepareHandlerReason (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates the results of sound-event preparation.

## Declaration

```objectivec
enum PHASESoundEventPrepareHandlerReason : NSInteger;
```

<a id="overview"></a>

## Overview

The sound event [prepareWithCompletion:](prepare%28completion_%29.md) function passes an instance of this class to its argument completion closure to communicate the results of the call.

## Topics

### Reasons

- [PHASESoundEventPrepareHandlerReasonPrepared](preparehandlerreason/prepared.md): Indicates the completion of sound-event preparation.
- [PHASESoundEventPrepareHandlerReasonTerminated](preparehandlerreason/terminated.md): Indicates sound-event preparation stops abruptly.
- [PHASESoundEventPrepareHandlerReasonFailure](preparehandlerreason/failure.md): Indicates an error occurs during sound-event preparation.

## See Also

### Preparing Playback

- [prepareWithCompletion:](prepare%28completion_%29.md): Enables a sound event to play and runs the argument code when the sound event plays back.
- [prepareState](preparestate-swift.property.md): The status of sound-event preparation.
- [PHASESoundEventPrepareState](preparestate-swift.enum.md): Indicates the state of sound-event preparation.
