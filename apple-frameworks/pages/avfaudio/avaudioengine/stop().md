> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/stop()](https://developer.apple.com/documentation/avfaudio/avaudioengine/stop())

# stop() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stops the audio engine and releases any previously prepared resources.

## Declaration

```swift
func stop()
```

<a id="Discussion"></a>

## Discussion

This method stops the audio engine and the audio hardware, and releases any allocated resources for the [prepare()](prepare%28%29.md) method. When your app doesn’t need to play audio, consider pausing or stopping the engine to minimize power consumption.

## See Also

### Playing Audio

- [prepare()](prepare%28%29.md): Prepares the audio engine for starting.
- [start()](start%28%29.md): Starts the audio engine.
- [isRunning](isrunning.md): A Boolean value that indicates whether the audio engine is running.
- [pause()](pause%28%29.md): Pauses the audio engine.
- [reset()](reset%28%29.md): Resets all audio nodes in the audio engine.
- [withMusicSequence(\_:)](withmusicsequence%28__%29.md): Provides scoped access to the AVAudioEngine’s MusicSequence

# stop (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stops the audio engine and releases any previously prepared resources.

## Declaration

```objectivec
- (void) stop;
```

<a id="Discussion"></a>

## Discussion

This method stops the audio engine and the audio hardware, and releases any allocated resources for the [prepare](prepare%28%29.md) method. When your app doesn’t need to play audio, consider pausing or stopping the engine to minimize power consumption.

## See Also

### Playing Audio

- [prepare](prepare%28%29.md): Prepares the audio engine for starting.
- [startAndReturnError:](start%28%29.md): Starts the audio engine.
- [running](isrunning.md): A Boolean value that indicates whether the audio engine is running.
- [pause](pause%28%29.md): Pauses the audio engine.
- [reset](reset%28%29.md): Resets all audio nodes in the audio engine.
