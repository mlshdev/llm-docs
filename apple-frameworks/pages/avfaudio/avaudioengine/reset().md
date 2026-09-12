> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/reset()](https://developer.apple.com/documentation/avfaudio/avaudioengine/reset())

# reset() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Resets all audio nodes in the audio engine.

## Declaration

```swift
func reset()
```

<a id="Discussion"></a>

## Discussion

This methods resets all audio nodes in the audio engine. For example, use it to silence reverb and delay tails.

## See Also

### Playing Audio

- [prepare()](prepare%28%29.md): Prepares the audio engine for starting.
- [start()](start%28%29.md): Starts the audio engine.
- [isRunning](isrunning.md): A Boolean value that indicates whether the audio engine is running.
- [pause()](pause%28%29.md): Pauses the audio engine.
- [stop()](stop%28%29.md): Stops the audio engine and releases any previously prepared resources.
- [withMusicSequence(\_:)](withmusicsequence%28__%29.md): Provides scoped access to the AVAudioEngine’s MusicSequence

# reset (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Resets all audio nodes in the audio engine.

## Declaration

```objectivec
- (void) reset;
```

<a id="Discussion"></a>

## Discussion

This methods resets all audio nodes in the audio engine. For example, use it to silence reverb and delay tails.

## See Also

### Playing Audio

- [prepare](prepare%28%29.md): Prepares the audio engine for starting.
- [startAndReturnError:](start%28%29.md): Starts the audio engine.
- [running](isrunning.md): A Boolean value that indicates whether the audio engine is running.
- [pause](pause%28%29.md): Pauses the audio engine.
- [stop](stop%28%29.md): Stops the audio engine and releases any previously prepared resources.
