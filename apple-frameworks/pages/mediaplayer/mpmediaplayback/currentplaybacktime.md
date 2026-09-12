> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaplayback/currentplaybacktime](https://developer.apple.com/documentation/mediaplayer/mpmediaplayback/currentplaybacktime)

# currentPlaybackTime (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The current position of the playhead.

## Declaration

```swift
var currentPlaybackTime: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

For video-on-demand or progressively downloaded content, this value measures seconds from the beginning of the current item. Changing the value of this property moves the playhead to the new location. For content streamed live from a server, this value represents the time from the beginning of the playlist when it was first loaded. The system returns `NaN` if the [CMTime](../../coremedia/cmtime.md) is invalid or indefinite.

## See Also

### Accessing playback attributes

- [currentPlaybackRate](currentplaybackrate.md): The current playback rate for the player.

# currentPlaybackTime (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The current position of the playhead.

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval currentPlaybackTime;
```

<a id="Discussion"></a>

## Discussion

For video-on-demand or progressively downloaded content, this value measures seconds from the beginning of the current item. Changing the value of this property moves the playhead to the new location. For content streamed live from a server, this value represents the time from the beginning of the playlist when it was first loaded. The system returns `NaN` if the [CMTime](../../coremedia/cmtime.md) is invalid or indefinite.

## See Also

### Accessing playback attributes

- [currentPlaybackRate](currentplaybackrate.md): The current playback rate for the player.
