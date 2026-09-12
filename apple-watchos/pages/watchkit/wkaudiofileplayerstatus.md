> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofileplayerstatus](https://developer.apple.com/documentation/watchkit/wkaudiofileplayerstatus)

# WKAudioFilePlayerStatus (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Constants that represent the status of the player.

> Use the [AVFoundation](https://developer.apple.com/documentation/avfoundation) framework’s [AVPlayer](https://developer.apple.com/documentation/avfoundation/avplayer) and [AVQueuePlayer](https://developer.apple.com/documentation/avfoundation/avqueueplayer) classes instead.

## Declaration

```swift
enum WKAudioFilePlayerStatus
```

## Topics

### Constants

- [WKAudioFilePlayerStatus.unknown](wkaudiofileplayerstatus/unknown.md): Deprecated. The status of the item is unknown because the player has not yet loaded the audio file for playback.
- [WKAudioFilePlayerStatus.readyToPlay](wkaudiofileplayerstatus/readytoplay.md): Deprecated. The player is ready to play its item.
- [WKAudioFilePlayerStatus.failed](wkaudiofileplayerstatus/failed.md): Deprecated. The player can no longer play the audio because of an error. Use the [error](wkaudiofileplayer/error.md) property to get information about the error that occurred.

### Initializers

- [init(rawValue:)](wkaudiofileplayerstatus/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# WKAudioFilePlayerStatus (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Constants that represent the status of the player.

> Use the [AVFoundation](https://developer.apple.com/documentation/avfoundation) framework’s [AVPlayer](https://developer.apple.com/documentation/avfoundation/avplayer) and [AVQueuePlayer](https://developer.apple.com/documentation/avfoundation/avqueueplayer) classes instead.

## Declaration

```objectivec
enum WKAudioFilePlayerStatus : NSInteger;
```

## Topics

### Constants

- [WKAudioFilePlayerStatusUnknown](wkaudiofileplayerstatus/unknown.md): Deprecated. The status of the item is unknown because the player has not yet loaded the audio file for playback.
- [WKAudioFilePlayerStatusReadyToPlay](wkaudiofileplayerstatus/readytoplay.md): Deprecated. The player is ready to play its item.
- [WKAudioFilePlayerStatusFailed](wkaudiofileplayerstatus/failed.md): Deprecated. The player can no longer play the audio because of an error. Use the [error](wkaudiofileplayer/error.md) property to get information about the error that occurred.
