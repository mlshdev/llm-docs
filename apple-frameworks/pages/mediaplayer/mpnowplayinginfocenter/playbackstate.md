> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaplayer/mpnowplayinginfocenter/playbackstate

# playbackState (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.12.2+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The current playback state of the app.

## Declaration

```swift
var playbackState: MPNowPlayingPlaybackState { get set }
```

<a id="Discussion"></a>

## Discussion

This property only applies to macOS. You must set this property every time the app begins or halts playback, otherwise remote control functionality may not work as expected.

## See Also

### Setting the playback state in macOS

- [MPNowPlayingPlaybackState](../mpnowplayingplaybackstate.md): The playback state of the app.

# playbackState (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The current playback state of the app.

## Declaration

```objectivec
@property (nonatomic) MPNowPlayingPlaybackState playbackState;
```

<a id="Discussion"></a>

## Discussion

This property only applies to macOS. You must set this property every time the app begins or halts playback, otherwise remote control functionality may not work as expected.

## See Also

### Setting the playback state in macOS

- [MPNowPlayingPlaybackState](../mpnowplayingplaybackstate.md): The playback state of the app.
