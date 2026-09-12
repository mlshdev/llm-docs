> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/start()](https://developer.apple.com/documentation/avfaudio/avaudioengine/start())

# start() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Starts the audio engine.

## Declaration

```swift
func start() throws
```

<a id="discussion"></a>

## Discussion

This method calls the [prepare()](prepare%28%29.md) method if you don’t call it after invoking [stop()](stop%28%29.md). It then starts the audio hardware through the [AVAudioInputNode](../avaudioinputnode.md) and [AVAudioOutputNode](../avaudiooutputnode.md) instances in the audio engine. This method throws an error when:

- There’s a problem in the structure of the graph, such as the input can’t route to an output or to a recording tap through converter nodes.
- An [AVAudioSession](../avaudiosession.md) error occurs.
- The driver fails to start the hardware.

## See Also

### Playing Audio

- [prepare()](prepare%28%29.md): Prepares the audio engine for starting.
- [isRunning](isrunning.md): A Boolean value that indicates whether the audio engine is running.
- [pause()](pause%28%29.md): Pauses the audio engine.
- [stop()](stop%28%29.md): Stops the audio engine and releases any previously prepared resources.
- [reset()](reset%28%29.md): Resets all audio nodes in the audio engine.
- [withMusicSequence(\_:)](withmusicsequence%28__%29.md): Provides scoped access to the AVAudioEngine’s MusicSequence

# startAndReturnError: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Starts the audio engine.

## Declaration

```objectivec
- (BOOL) startAndReturnError:(NSError **) outError;
```

## Parameters

- `outError`: Returns a reference to a description of the error.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the audio engine starts successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="discussion"></a>

## Discussion

This method calls the [prepare](prepare%28%29.md) method if you don’t call it after invoking [stop](stop%28%29.md). It then starts the audio hardware through the [AVAudioInputNode](../avaudioinputnode.md) and [AVAudioOutputNode](../avaudiooutputnode.md) instances in the audio engine. This method throws an error when:

- There’s a problem in the structure of the graph, such as the input can’t route to an output or to a recording tap through converter nodes.
- An [AVAudioSession](../avaudiosession.md) error occurs.
- The driver fails to start the hardware.

## See Also

### Playing Audio

- [prepare](prepare%28%29.md): Prepares the audio engine for starting.
- [running](isrunning.md): A Boolean value that indicates whether the audio engine is running.
- [pause](pause%28%29.md): Pauses the audio engine.
- [stop](stop%28%29.md): Stops the audio engine and releases any previously prepared resources.
- [reset](reset%28%29.md): Resets all audio nodes in the audio engine.
