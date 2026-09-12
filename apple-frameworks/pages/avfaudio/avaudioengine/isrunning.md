> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/isrunning](https://developer.apple.com/documentation/avfaudio/avaudioengine/isrunning)

# isRunning (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the audio engine is running.

## Declaration

```swift
var isRunning: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value is [true](https://developer.apple.com/documentation/swift/true) if the audio engine is in a running state; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Playing Audio

- [prepare()](prepare%28%29.md): Prepares the audio engine for starting.
- [start()](start%28%29.md): Starts the audio engine.
- [pause()](pause%28%29.md): Pauses the audio engine.
- [stop()](stop%28%29.md): Stops the audio engine and releases any previously prepared resources.
- [reset()](reset%28%29.md): Resets all audio nodes in the audio engine.
- [withMusicSequence(\_:)](withmusicsequence%28__%29.md): Provides scoped access to the AVAudioEngine’s MusicSequence

# running (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the audio engine is running.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isRunning) BOOL running;
```

<a id="Discussion"></a>

## Discussion

The value is [true](https://developer.apple.com/documentation/swift/true) if the audio engine is in a running state; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Playing Audio

- [prepare](prepare%28%29.md): Prepares the audio engine for starting.
- [startAndReturnError:](start%28%29.md): Starts the audio engine.
- [pause](pause%28%29.md): Pauses the audio engine.
- [stop](stop%28%29.md): Stops the audio engine and releases any previously prepared resources.
- [reset](reset%28%29.md): Resets all audio nodes in the audio engine.
