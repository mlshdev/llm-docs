> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofileplayeritemstatus](https://developer.apple.com/documentation/watchkit/wkaudiofileplayeritemstatus)

# WKAudioFilePlayerItemStatus (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Constants that represent the status of a player item.

> Use the [AVFoundation](https://developer.apple.com/documentation/avfoundation) framework’s [AVPlayer](https://developer.apple.com/documentation/avfoundation/avplayer) and [AVQueuePlayer](https://developer.apple.com/documentation/avfoundation/avqueueplayer) classes instead.

## Declaration

```swift
enum WKAudioFilePlayerItemStatus
```

## Topics

### Statuses

- [WKAudioFilePlayerItemStatus.unknown](wkaudiofileplayeritemstatus/unknown.md): Deprecated. The item’s status is unknown.
- [WKAudioFilePlayerItemStatus.readyToPlay](wkaudiofileplayeritemstatus/readytoplay.md): Deprecated. The item is ready to play.
- [WKAudioFilePlayerItemStatus.failed](wkaudiofileplayeritemstatus/failed.md): Deprecated. The item can’t be played.

### Initializers

- [init(rawValue:)](wkaudiofileplayeritemstatus/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# WKAudioFilePlayerItemStatus (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

Constants that represent the status of a player item.

> Use the [AVFoundation](https://developer.apple.com/documentation/avfoundation) framework’s [AVPlayer](https://developer.apple.com/documentation/avfoundation/avplayer) and [AVQueuePlayer](https://developer.apple.com/documentation/avfoundation/avqueueplayer) classes instead.

## Declaration

```objectivec
enum WKAudioFilePlayerItemStatus : NSInteger;
```

## Topics

### Statuses

- [WKAudioFilePlayerItemStatusUnknown](wkaudiofileplayeritemstatus/unknown.md): Deprecated. The item’s status is unknown.
- [WKAudioFilePlayerItemStatusReadyToPlay](wkaudiofileplayeritemstatus/readytoplay.md): Deprecated. The item is ready to play.
- [WKAudioFilePlayerItemStatusFailed](wkaudiofileplayeritemstatus/failed.md): Deprecated. The item can’t be played.
