> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaplayback/preparetoplay()](https://developer.apple.com/documentation/mediaplayer/mpmediaplayback/preparetoplay())

# prepareToPlay() (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Prepares a media player for playback.

## Declaration

```swift
func prepareToPlay()
```

<a id="Discussion"></a>

## Discussion

If a media player isn’t already prepared to play when you call the [play()](play%28%29.md) method, that method automatically calls this method. However, to minimize playback delay, call this method before you call [play()](play%28%29.md).

Calling this method may interrupt the media player’s audio session. For information on interruptions and how to respond to them, see [Audio Session Programming Guide](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007875).

## See Also

### Starting and stopping playback

- [play()](play%28%29.md): Initiates playback of the current item.
- [pause()](pause%28%29.md): Pauses playback of the current item.
- [stop()](stop%28%29.md): Ends playback of the current item.
- [isPreparedToPlay](ispreparedtoplay.md): A Boolean value indicating whether a media player is ready to play.

# prepareToPlay (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Prepares a media player for playback.

## Declaration

```objectivec
- (void) prepareToPlay;
```

<a id="Discussion"></a>

## Discussion

If a media player isn’t already prepared to play when you call the [play](play%28%29.md) method, that method automatically calls this method. However, to minimize playback delay, call this method before you call [play](play%28%29.md).

Calling this method may interrupt the media player’s audio session. For information on interruptions and how to respond to them, see [Audio Session Programming Guide](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007875).

## See Also

### Starting and stopping playback

- [play](play%28%29.md): Initiates playback of the current item.
- [pause](pause%28%29.md): Pauses playback of the current item.
- [stop](stop%28%29.md): Ends playback of the current item.
- [isPreparedToPlay](ispreparedtoplay.md): A Boolean value indicating whether a media player is ready to play.
