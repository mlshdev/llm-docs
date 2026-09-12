> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundevent/starthandlerreason](https://developer.apple.com/documentation/phase/phasesoundevent/starthandlerreason)

# PHASESoundEvent.StartHandlerReason (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates the status after starting a sound event.

## Declaration

```swift
enum StartHandlerReason
```

<a id="overview"></a>

## Overview

When your app starts a sound event by calling [start(completion:)](start%28completion_%29.md), the framework invokes the argument closure when starting succeeds or fails. PHASE passes an instance of this enumeration to the closure to describe the results of the call.

## Topics

### Reasons

- [PHASESoundEvent.StartHandlerReason.finishedPlaying](starthandlerreason/finishedplaying.md): Indicates the framework successfully started the sound event.
- [PHASESoundEvent.StartHandlerReason.terminated](starthandlerreason/terminated.md): Indicates the framework terminated the sound event abruptly.
- [PHASESoundEvent.StartHandlerReason.failure](starthandlerreason/failure.md): Indicates an error occurred while starting the sound event.

### Initializers

- [init(rawValue:)](starthandlerreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Starting Playback

- [start(completion:)](start%28completion_%29.md): Invokes the sound event and runs the specified code on completion.

# PHASESoundEventStartHandlerReason (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates the status after starting a sound event.

## Declaration

```objectivec
enum PHASESoundEventStartHandlerReason : NSInteger;
```

<a id="overview"></a>

## Overview

When your app starts a sound event by calling [startWithCompletion:](start%28completion_%29.md), the framework invokes the argument closure when starting succeeds or fails. PHASE passes an instance of this enumeration to the closure to describe the results of the call.

## Topics

### Reasons

- [PHASESoundEventStartHandlerReasonFinishedPlaying](starthandlerreason/finishedplaying.md): Indicates the framework successfully started the sound event.
- [PHASESoundEventStartHandlerReasonTerminated](starthandlerreason/terminated.md): Indicates the framework terminated the sound event abruptly.
- [PHASESoundEventStartHandlerReasonFailure](starthandlerreason/failure.md): Indicates an error occurred while starting the sound event.

## See Also

### Starting Playback

- [startWithCompletion:](start%28completion_%29.md): Invokes the sound event and runs the specified code on completion.
