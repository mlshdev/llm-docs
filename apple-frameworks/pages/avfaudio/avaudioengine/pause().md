> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/pause()](https://developer.apple.com/documentation/avfaudio/avaudioengine/pause())

# pause() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Pauses the audio engine.

## Declaration

```swift
func pause()
```

<a id="Discussion"></a>

## Discussion

This method stops the audio engine and the audio hardware, but doesn’t deallocate the resources for the [prepare()](prepare%28%29.md) method. When your app doesn’t need to play audio, consider pausing or stopping the engine to minimize power consumption.

You resume the audio engine by invoking [start()](start%28%29.md).

## See Also

### Playing Audio

- [prepare()](prepare%28%29.md): Prepares the audio engine for starting.
- [start()](start%28%29.md): Starts the audio engine.
- [isRunning](isrunning.md): A Boolean value that indicates whether the audio engine is running.
- [stop()](stop%28%29.md): Stops the audio engine and releases any previously prepared resources.
- [reset()](reset%28%29.md): Resets all audio nodes in the audio engine.
- [withMusicSequence(\_:)](withmusicsequence%28__%29.md): Provides scoped access to the AVAudioEngine’s MusicSequence

# pause (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Pauses the audio engine.

## Declaration

```objectivec
- (void) pause;
```

<a id="Discussion"></a>

## Discussion

This method stops the audio engine and the audio hardware, but doesn’t deallocate the resources for the [prepare](prepare%28%29.md) method. When your app doesn’t need to play audio, consider pausing or stopping the engine to minimize power consumption.

You resume the audio engine by invoking [startAndReturnError:](start%28%29.md).

## See Also

### Playing Audio

- [prepare](prepare%28%29.md): Prepares the audio engine for starting.
- [startAndReturnError:](start%28%29.md): Starts the audio engine.
- [running](isrunning.md): A Boolean value that indicates whether the audio engine is running.
- [stop](stop%28%29.md): Stops the audio engine and releases any previously prepared resources.
- [reset](reset%28%29.md): Resets all audio nodes in the audio engine.
