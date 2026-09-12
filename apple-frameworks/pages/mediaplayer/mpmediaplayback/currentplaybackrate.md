> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaplayback/currentplaybackrate](https://developer.apple.com/documentation/mediaplayer/mpmediaplayback/currentplaybackrate)

# currentPlaybackRate (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The current playback rate for the player.

## Declaration

```swift
var currentPlaybackRate: Float { get set }
```

<a id="Discussion"></a>

## Discussion

This value represents a multiplier for the default playback rate of the current item. A value of `0.0` indicates that playback is stopped, while a value of `1.0` indicates that playback is occurring at normal speed. Positive values indicate forward playback while negative values indicate reverse playback.

Setting the value of this property changes the playback rate accordingly.

## See Also

### Accessing playback attributes

- [currentPlaybackTime](currentplaybacktime.md): The current position of the playhead.

# currentPlaybackRate (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The current playback rate for the player.

## Declaration

```objectivec
@property (nonatomic) float currentPlaybackRate;
```

<a id="Discussion"></a>

## Discussion

This value represents a multiplier for the default playback rate of the current item. A value of `0.0` indicates that playback is stopped, while a value of `1.0` indicates that playback is occurring at normal speed. Positive values indicate forward playback while negative values indicate reverse playback.

Setting the value of this property changes the playback rate accordingly.

## See Also

### Accessing playback attributes

- [currentPlaybackTime](currentplaybacktime.md): The current position of the playhead.
