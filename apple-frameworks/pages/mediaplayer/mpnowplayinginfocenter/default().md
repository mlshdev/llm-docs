> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayinginfocenter/default()](https://developer.apple.com/documentation/mediaplayer/mpnowplayinginfocenter/default())

# default() (Swift)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the singleton Now Playing info center.

## Declaration

```swift
class func `default`() -> MPNowPlayingInfoCenter
```

<a id="return-value"></a>

## Return Value

The now playing info center singleton.

<a id="Discussion"></a>

## Discussion

The default now playing info center holds Now Playing information for the app that’s designated to receive remote control events. For information on how to configure your app to receive remote control events, see [Handling external player events notifications](../handling-external-player-events-notifications.md).

## See Also

### Working with the default Now Playing info center

- [nowPlayingInfo](nowplayinginfo.md): The current Now Playing information for the default Now Playing info center.
- [MPNowPlayingInfoMediaType](../mpnowplayinginfomediatype.md): The type of media currently playing.
- [supportedAnimatedArtworkKeys](supportedanimatedartworkkeys.md): Keys related to animated artwork that are supported by the current platform.

# defaultCenter (Objective-C)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the singleton Now Playing info center.

## Declaration

```objectivec
+ (MPNowPlayingInfoCenter *) defaultCenter;
```

<a id="return-value"></a>

## Return Value

The now playing info center singleton.

<a id="Discussion"></a>

## Discussion

The default now playing info center holds Now Playing information for the app that’s designated to receive remote control events. For information on how to configure your app to receive remote control events, see [Handling external player events notifications](../handling-external-player-events-notifications.md).

## See Also

### Working with the default Now Playing info center

- [nowPlayingInfo](nowplayinginfo.md): The current Now Playing information for the default Now Playing info center.
- [MPNowPlayingInfoMediaType](../mpnowplayinginfomediatype.md): The type of media currently playing.
- [supportedAnimatedArtworkKeys](supportedanimatedartworkkeys.md): Keys related to animated artwork that are supported by the current platform.
