> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundevent/seekhandlerreason](https://developer.apple.com/documentation/phase/phasesoundevent/seekhandlerreason)

# PHASESoundEvent.SeekHandlerReason (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates the status after a sound event changes its playback position.

## Declaration

```swift
enum SeekHandlerReason
```

<a id="overview"></a>

## Overview

When your app changes the playback position of a sound event by calling [seek(to:completion:)](seek%28to_completion_%29.md), the framework invokes the argument closure when the seek succeeds or fails. PHASE passes an instance of this enumeration to the closure to describe the results of the call.

## Topics

### Reasons

- [PHASESoundEvent.SeekHandlerReason.seekSuccessful](seekhandlerreason/seeksuccessful.md): Indicates the sound event successfully updated its playback position.
- [PHASESoundEvent.SeekHandlerReason.failureSeekAlreadyInProgress](seekhandlerreason/failureseekalreadyinprogress.md): Indicates the sound event is still updating its playback position.
- [PHASESoundEvent.SeekHandlerReason.failure](seekhandlerreason/failure.md): Indicates the sound event fails to update its playback position.

### Initializers

- [init(rawValue:)](seekhandlerreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Seeking a Time

- [seek(to:completion:)](seek%28to_completion_%29.md): Advances the sound event’s playback position to a specific time.

# PHASESoundEventSeekHandlerReason (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates the status after a sound event changes its playback position.

## Declaration

```objectivec
enum PHASESoundEventSeekHandlerReason : NSInteger;
```

<a id="overview"></a>

## Overview

When your app changes the playback position of a sound event by calling [seekToTime:completion:](seek%28to_completion_%29.md), the framework invokes the argument closure when the seek succeeds or fails. PHASE passes an instance of this enumeration to the closure to describe the results of the call.

## Topics

### Reasons

- [PHASESoundEventSeekHandlerReasonSeekSuccessful](seekhandlerreason/seeksuccessful.md): Indicates the sound event successfully updated its playback position.
- [PHASESoundEventSeekHandlerReasonFailureSeekAlreadyInProgress](seekhandlerreason/failureseekalreadyinprogress.md): Indicates the sound event is still updating its playback position.
- [PHASESoundEventSeekHandlerReasonFailure](seekhandlerreason/failure.md): Indicates the sound event fails to update its playback position.

## See Also

### Seeking a Time

- [seekToTime:completion:](seek%28to_completion_%29.md): Advances the sound event’s playback position to a specific time.
