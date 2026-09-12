> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaplayback/stop()](https://developer.apple.com/documentation/mediaplayer/mpmediaplayback/stop())

# stop() (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Ends playback of the current item.

## Declaration

```swift
func stop()
```

<a id="Discussion"></a>

## Discussion

This method stops playback of the current item and clears the playback queue. You must provide a new playback queue before playing new media items.

## See Also

### Starting and stopping playback

- [play()](play%28%29.md): Initiates playback of the current item.
- [pause()](pause%28%29.md): Pauses playback of the current item.
- [prepareToPlay()](preparetoplay%28%29.md): Prepares a media player for playback.
- [isPreparedToPlay](ispreparedtoplay.md): A Boolean value indicating whether a media player is ready to play.

# stop (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Ends playback of the current item.

## Declaration

```objectivec
- (void) stop;
```

<a id="Discussion"></a>

## Discussion

This method stops playback of the current item and clears the playback queue. You must provide a new playback queue before playing new media items.

## See Also

### Starting and stopping playback

- [play](play%28%29.md): Initiates playback of the current item.
- [pause](pause%28%29.md): Pauses playback of the current item.
- [prepareToPlay](preparetoplay%28%29.md): Prepares a media player for playback.
- [isPreparedToPlay](ispreparedtoplay.md): A Boolean value indicating whether a media player is ready to play.
