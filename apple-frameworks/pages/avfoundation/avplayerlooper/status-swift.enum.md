> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerlooper/status-swift.enum](https://developer.apple.com/documentation/avfoundation/avplayerlooper/status-swift.enum)

# AVPlayerLooper.Status (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Status constants that indicate whether a looper can successfully perform looping playback.

## Declaration

```swift
enum Status
```

## Topics

### Status values

- [AVPlayerLooper.Status.unknown](status-swift.enum/unknown.md): The status isn’t known.
- [AVPlayerLooper.Status.ready](status-swift.enum/ready.md): The looper is ready to perform looping playback.
- [AVPlayerLooper.Status.failed](status-swift.enum/failed.md): The looper isn’t able to perform looping playback due to an error.
- [AVPlayerLooper.Status.cancelled](status-swift.enum/cancelled.md): The app canceled looping on the player.

### Initializers

- [init(rawValue:)](status-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing looping state

- [loopCount](loopcount.md): The number of times the object played the media.
- [status](status-swift.property.md): A status that indicates the object’s ability to loop playback.

# AVPlayerLooperStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Status constants that indicate whether a looper can successfully perform looping playback.

## Declaration

```objectivec
enum AVPlayerLooperStatus : NSInteger;
```

## Topics

### Status values

- [AVPlayerLooperStatusUnknown](status-swift.enum/unknown.md): The status isn’t known.
- [AVPlayerLooperStatusReady](status-swift.enum/ready.md): The looper is ready to perform looping playback.
- [AVPlayerLooperStatusFailed](status-swift.enum/failed.md): The looper isn’t able to perform looping playback due to an error.
- [AVPlayerLooperStatusCancelled](status-swift.enum/cancelled.md): The app canceled looping on the player.

## See Also

### Observing looping state

- [loopCount](loopcount.md): The number of times the object played the media.
- [status](status-swift.property.md): A status that indicates the object’s ability to loop playback.
