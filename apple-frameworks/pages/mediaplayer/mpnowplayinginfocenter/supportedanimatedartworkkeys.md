> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayinginfocenter/supportedanimatedartworkkeys](https://developer.apple.com/documentation/mediaplayer/mpnowplayinginfocenter/supportedanimatedartworkkeys)

# supportedAnimatedArtworkKeys (Swift)

**Framework:** Media Player  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Keys related to animated artwork that are supported by the current platform.

## Declaration

```swift
class var supportedAnimatedArtworkKeys: [String] { get }
```

## Mentioned In

- [Providing animated artwork for media items](../providing-animated-artwork-for-media-items.md)

<a id="discussion"></a>

## Discussion

If you specify an instance of animated artwork (an `MPMediaItemAnimatedArtwork`) to `nowPlayingInfo` using any key not in this collection it will be ignored.

## See Also

### Working with the default Now Playing info center

- [default()](default%28%29.md): Returns the singleton Now Playing info center.
- [nowPlayingInfo](nowplayinginfo.md): The current Now Playing information for the default Now Playing info center.
- [MPNowPlayingInfoMediaType](../mpnowplayinginfomediatype.md): The type of media currently playing.

# supportedAnimatedArtworkKeys (Objective-C)

**Framework:** Media Player  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Keys related to animated artwork that are supported by the current platform.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSArray<NSString *> * supportedAnimatedArtworkKeys;
```

## Mentioned In

- [Providing animated artwork for media items](../providing-animated-artwork-for-media-items.md)

<a id="discussion"></a>

## Discussion

If you specify an instance of animated artwork (an `MPMediaItemAnimatedArtwork`) to `nowPlayingInfo` using any key not in this collection it will be ignored.

## See Also

### Working with the default Now Playing info center

- [defaultCenter](default%28%29.md): Returns the singleton Now Playing info center.
- [nowPlayingInfo](nowplayinginfo.md): The current Now Playing information for the default Now Playing info center.
- [MPNowPlayingInfoMediaType](../mpnowplayinginfomediatype.md): The type of media currently playing.
