> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/status-swift.enum](https://developer.apple.com/documentation/avfoundation/avplayeritem/status-swift.enum)

# AVPlayerItem.Status (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The statuses for a player item.

## Declaration

```swift
enum Status
```

## Topics

### Player item statuses

- [AVPlayerItem.Status.unknown](status-swift.enum/unknown.md): The item’s status is unknown.
- [AVPlayerItem.Status.readyToPlay](status-swift.enum/readytoplay.md): The item is ready to play.
- [AVPlayerItem.Status.failed](status-swift.enum/failed.md): The item no longer plays due to an error.

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

### Determining readiness

- [status](status-swift.property.md): The status of the player item.
- [error](error.md): The error that caused the player item to fail.

# AVPlayerItemStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The statuses for a player item.

## Declaration

```objectivec
enum AVPlayerItemStatus : NSInteger;
```

## Topics

### Player item statuses

- [AVPlayerItemStatusUnknown](status-swift.enum/unknown.md): The item’s status is unknown.
- [AVPlayerItemStatusReadyToPlay](status-swift.enum/readytoplay.md): The item is ready to play.
- [AVPlayerItemStatusFailed](status-swift.enum/failed.md): The item no longer plays due to an error.

## See Also

### Determining readiness

- [status](status-swift.property.md): The status of the player item.
- [error](error.md): The error that caused the player item to fail.
