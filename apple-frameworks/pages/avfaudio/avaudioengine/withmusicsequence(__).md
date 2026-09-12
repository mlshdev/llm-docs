> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/withmusicsequence(_:)](https://developer.apple.com/documentation/avfaudio/avaudioengine/withmusicsequence(_:))

# withMusicSequence(\_:)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Provides scoped access to the AVAudioEngine’s MusicSequence

## Declaration

```swift
func withMusicSequence<R, E>(_ body: (borrowing MusicSequence?) throws(E) -> R) throws(E) -> R where E : Error
```

## Parameters

- `body`: A closure that receives a MusicSequence

<a id="return-value"></a>

## Return Value

The value returned by the closure

<a id="discussion"></a>

## Discussion

This method provides thread-safe, scoped access to the MusicSequence. The MusicSequence reference is only valid within the closure and must not be retained or accessed outside of it.

> **Throws**

> Rethrows any error thrown by the closure

## See Also

### Playing Audio

- [prepare()](prepare%28%29.md): Prepares the audio engine for starting.
- [start()](start%28%29.md): Starts the audio engine.
- [isRunning](isrunning.md): A Boolean value that indicates whether the audio engine is running.
- [pause()](pause%28%29.md): Pauses the audio engine.
- [stop()](stop%28%29.md): Stops the audio engine and releases any previously prepared resources.
- [reset()](reset%28%29.md): Resets all audio nodes in the audio engine.
