> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayinginfocenter/nowplayinginfo](https://developer.apple.com/documentation/mediaplayer/mpnowplayinginfocenter/nowplayinginfo)

# nowPlayingInfo (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 5.0+

The current Now Playing information for the default Now Playing info center.

## Declaration

```swift
var nowPlayingInfo: [String : Any]? { get set }
```

## Mentioned In

- [Providing animated artwork for media items](../providing-animated-artwork-for-media-items.md)

<a id="Discussion"></a>

## Discussion

To clear the now playing info center dictionary, set it to `nil`.

## See Also

### Working with the default Now Playing info center

- [default()](default%28%29.md): Returns the singleton Now Playing info center.
- [MPNowPlayingInfoMediaType](../mpnowplayinginfomediatype.md): The type of media currently playing.
- [supportedAnimatedArtworkKeys](supportedanimatedartworkkeys.md): Keys related to animated artwork that are supported by the current platform.

# nowPlayingInfo (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 5.0+

The current Now Playing information for the default Now Playing info center.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDictionary<NSString *,id> * nowPlayingInfo;
```

## Mentioned In

- [Providing animated artwork for media items](../providing-animated-artwork-for-media-items.md)

<a id="Discussion"></a>

## Discussion

To clear the now playing info center dictionary, set it to `nil`.

## See Also

### Working with the default Now Playing info center

- [defaultCenter](default%28%29.md): Returns the singleton Now Playing info center.
- [MPNowPlayingInfoMediaType](../mpnowplayinginfomediatype.md): The type of media currently playing.
- [supportedAnimatedArtworkKeys](supportedanimatedartworkkeys.md): Keys related to animated artwork that are supported by the current platform.
