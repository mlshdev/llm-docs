> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayingsession/automaticallypublishesnowplayinginfo](https://developer.apple.com/documentation/mediaplayer/mpnowplayingsession/automaticallypublishesnowplayinginfo)

# automaticallyPublishesNowPlayingInfo (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean that indicates whether Now Playing info automatically publishes.

## Declaration

```swift
var automaticallyPublishesNowPlayingInfo: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

You can set Now Playing information keys for automatic publishing on [nowPlayingInfo](../../avfoundation/avplayeritem/nowplayinginfo.md).

> **Important**

>  If you set `automaticallyPublishesNowPlayingInfo` to `true`, don’t use [nowPlayingInfoCenter](nowplayinginfocenter.md).

## See Also

### Configuring Now Playing information

- [nowPlayingInfoCenter](nowplayinginfocenter.md): The Now Playing information center associated with the session.

# automaticallyPublishesNowPlayingInfo (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean that indicates whether Now Playing info automatically publishes.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL automaticallyPublishesNowPlayingInfo;
```

<a id="Discussion"></a>

## Discussion

You can set Now Playing information keys for automatic publishing on [nowPlayingInfo](../../avfoundation/avplayeritem/nowplayinginfo.md).

> **Important**

>  If you set `automaticallyPublishesNowPlayingInfo` to `true`, don’t use [nowPlayingInfoCenter](nowplayinginfocenter.md).

## See Also

### Configuring Now Playing information

- [nowPlayingInfoCenter](nowplayinginfocenter.md): The Now Playing information center associated with the session.
