> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/currenttime](https://developer.apple.com/documentation/avfaudio/avaudioplayer/currenttime)

# currentTime (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The current playback time, in seconds, within the audio timeline.

## Declaration

```swift
var currentTime: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

If the sound is playing, this property value is the offset, in seconds, from the start of the sound. If the sound isn’t playing, this property indicates the offset from where playback starts upon calling the [play()](play%28%29.md) method.

Use this property to seek to a specific time in the audio data or to implement audio fast-forward and rewind functions.

## See Also

### Accessing player timing

- [duration](duration.md): The total duration, in seconds, of the player’s audio.

# currentTime (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The current playback time, in seconds, within the audio timeline.

## Declaration

```objectivec
@property NSTimeInterval currentTime;
```

<a id="Discussion"></a>

## Discussion

If the sound is playing, this property value is the offset, in seconds, from the start of the sound. If the sound isn’t playing, this property indicates the offset from where playback starts upon calling the [play](play%28%29.md) method.

Use this property to seek to a specific time in the audio data or to implement audio fast-forward and rewind functions.

## See Also

### Accessing player timing

- [duration](duration.md): The total duration, in seconds, of the player’s audio.
