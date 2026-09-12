> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayinginfomediatype](https://developer.apple.com/documentation/mediaplayer/mpnowplayinginfomediatype)

# MPNowPlayingInfoMediaType (Swift)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 5.0+

The type of media currently playing.

## Declaration

```swift
enum MPNowPlayingInfoMediaType
```

## Topics

### Media types

- [MPNowPlayingInfoMediaType.none](mpnowplayinginfomediatype/none.md): There is no now playing media item.
- [MPNowPlayingInfoMediaType.audio](mpnowplayinginfomediatype/audio.md): The now playing media item is an audio item.
- [MPNowPlayingInfoMediaType.video](mpnowplayinginfomediatype/video.md): The now playing media item is a video item.

### Initializers

- [init(rawValue:)](mpnowplayinginfomediatype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with the default Now Playing info center

- [default()](mpnowplayinginfocenter/default%28%29.md): Returns the singleton Now Playing info center.
- [nowPlayingInfo](mpnowplayinginfocenter/nowplayinginfo.md): The current Now Playing information for the default Now Playing info center.
- [supportedAnimatedArtworkKeys](mpnowplayinginfocenter/supportedanimatedartworkkeys.md): Keys related to animated artwork that are supported by the current platform.

# MPNowPlayingInfoMediaType (Objective-C)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 5.0+

The type of media currently playing.

## Declaration

```objectivec
enum MPNowPlayingInfoMediaType : NSUInteger;
```

## Topics

### Media types

- [MPNowPlayingInfoMediaTypeNone](mpnowplayinginfomediatype/none.md): There is no now playing media item.
- [MPNowPlayingInfoMediaTypeAudio](mpnowplayinginfomediatype/audio.md): The now playing media item is an audio item.
- [MPNowPlayingInfoMediaTypeVideo](mpnowplayinginfomediatype/video.md): The now playing media item is a video item.

## See Also

### Working with the default Now Playing info center

- [defaultCenter](mpnowplayinginfocenter/default%28%29.md): Returns the singleton Now Playing info center.
- [nowPlayingInfo](mpnowplayinginfocenter/nowplayinginfo.md): The current Now Playing information for the default Now Playing info center.
- [supportedAnimatedArtworkKeys](mpnowplayinginfocenter/supportedanimatedartworkkeys.md): Keys related to animated artwork that are supported by the current platform.
