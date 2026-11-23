> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingmode/default

# default (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The default appearance and layout for the Now Playing interface.

## Declaration

```swift
class var `default`: CPNowPlayingMode { get }
```

<a id="discussion"></a>

## Discussion

This mode shows the currently playing audio track, either on its own or as part of a playlist. With this layout, you specify artist, album, and track information for the current content. You can also add buttons for playlist-related behaviors such as shuffle and repeat modes.

If you change the mode of the Now Playing interface, return the interface to the default mode after the sporting event ends.

## See Also

### Creating a playing mode

- [init(coder:)](init%28coder_%29.md)

# defaultNowPlayingMode (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The default appearance and layout for the Now Playing interface.

## Declaration

```objectivec
@property (class, nonatomic, readonly) CPNowPlayingMode * defaultNowPlayingMode;
```

<a id="discussion"></a>

## Discussion

This mode shows the currently playing audio track, either on its own or as part of a playlist. With this layout, you specify artist, album, and track information for the current content. You can also add buttons for playlist-related behaviors such as shuffle and repeat modes.

If you change the mode of the Now Playing interface, return the interface to the default mode after the sporting event ends.
