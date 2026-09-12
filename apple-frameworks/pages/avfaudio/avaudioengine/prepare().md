> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/prepare()](https://developer.apple.com/documentation/avfaudio/avaudioengine/prepare())

# prepare() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Prepares the audio engine for starting.

## Declaration

```swift
func prepare()
```

<a id="Discussion"></a>

## Discussion

This method preallocates many resources the audio engine requires to start. Use it to responsively start audio input or output.

## See Also

### Playing Audio

- [start()](start%28%29.md): Starts the audio engine.
- [isRunning](isrunning.md): A Boolean value that indicates whether the audio engine is running.
- [pause()](pause%28%29.md): Pauses the audio engine.
- [stop()](stop%28%29.md): Stops the audio engine and releases any previously prepared resources.
- [reset()](reset%28%29.md): Resets all audio nodes in the audio engine.
- [withMusicSequence(\_:)](withmusicsequence%28__%29.md): Provides scoped access to the AVAudioEngine’s MusicSequence

# prepare (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Prepares the audio engine for starting.

## Declaration

```objectivec
- (void) prepare;
```

<a id="Discussion"></a>

## Discussion

This method preallocates many resources the audio engine requires to start. Use it to responsively start audio input or output.

## See Also

### Playing Audio

- [startAndReturnError:](start%28%29.md): Starts the audio engine.
- [running](isrunning.md): A Boolean value that indicates whether the audio engine is running.
- [pause](pause%28%29.md): Pauses the audio engine.
- [stop](stop%28%29.md): Stops the audio engine and releases any previously prepared resources.
- [reset](reset%28%29.md): Resets all audio nodes in the audio engine.
