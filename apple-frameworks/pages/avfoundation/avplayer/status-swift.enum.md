> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/status-swift.enum](https://developer.apple.com/documentation/avfoundation/avplayer/status-swift.enum)

# AVPlayer.Status (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Status values that indicate whether a player can successfully play media.

## Declaration

```swift
enum Status
```

## Topics

### Status values

- [AVPlayer.Status.unknown](status-swift.enum/unknown.md): A value that indicates a player hasn’t attempted to load media for playback.
- [AVPlayer.Status.readyToPlay](status-swift.enum/readytoplay.md): A value that indicates the player is ready to media.
- [AVPlayer.Status.failed](status-swift.enum/failed.md): A value that indicates the player can no longer play media due to an error.

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

### Determining player readiness

- [status](status-swift.property.md): A value that indicates the readiness of a player object for playback.
- [error](error.md): An error that caused a failure.

# AVPlayerStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Status values that indicate whether a player can successfully play media.

## Declaration

```objectivec
enum AVPlayerStatus : NSInteger;
```

## Topics

### Status values

- [AVPlayerStatusUnknown](status-swift.enum/unknown.md): A value that indicates a player hasn’t attempted to load media for playback.
- [AVPlayerStatusReadyToPlay](status-swift.enum/readytoplay.md): A value that indicates the player is ready to media.
- [AVPlayerStatusFailed](status-swift.enum/failed.md): A value that indicates the player can no longer play media due to an error.

## See Also

### Determining player readiness

- [status](status-swift.property.md): A value that indicates the readiness of a player object for playback.
- [error](error.md): An error that caused a failure.
