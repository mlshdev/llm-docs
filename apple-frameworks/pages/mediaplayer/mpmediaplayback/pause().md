> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaplayback/pause()](https://developer.apple.com/documentation/mediaplayer/mpmediaplayback/pause())

# pause() (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Pauses playback of the current item.

## Declaration

```swift
func pause()
```

<a id="Discussion"></a>

## Discussion

If the current item isn’t playing, this method has no effect. To resume playback of the current item from the pause point, call the [play()](play%28%29.md) method.

## See Also

### Starting and stopping playback

- [play()](play%28%29.md): Initiates playback of the current item.
- [stop()](stop%28%29.md): Ends playback of the current item.
- [prepareToPlay()](preparetoplay%28%29.md): Prepares a media player for playback.
- [isPreparedToPlay](ispreparedtoplay.md): A Boolean value indicating whether a media player is ready to play.

# pause (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Pauses playback of the current item.

## Declaration

```objectivec
- (void) pause;
```

<a id="Discussion"></a>

## Discussion

If the current item isn’t playing, this method has no effect. To resume playback of the current item from the pause point, call the [play](play%28%29.md) method.

## See Also

### Starting and stopping playback

- [play](play%28%29.md): Initiates playback of the current item.
- [stop](stop%28%29.md): Ends playback of the current item.
- [prepareToPlay](preparetoplay%28%29.md): Prepares a media player for playback.
- [isPreparedToPlay](ispreparedtoplay.md): A Boolean value indicating whether a media player is ready to play.
