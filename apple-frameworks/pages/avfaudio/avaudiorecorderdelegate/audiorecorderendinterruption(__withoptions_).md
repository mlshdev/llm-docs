> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiorecorderdelegate/audiorecorderendinterruption(_:withoptions:)](https://developer.apple.com/documentation/avfaudio/avaudiorecorderdelegate/audiorecorderendinterruption(_:withoptions:))

# audioRecorderEndInterruption(\_:withOptions:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 8.0) · iPadOS 6.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Tells the delegate that the audio session interruption ended with options.

> Observe audio session interruption notifications instead. See [Handling audio interruptions](../handling-audio-interruptions.md) for more information.

## Declaration

```swift
optional func audioRecorderEndInterruption(_ recorder: AVAudioRecorder, withOptions flags: Int)
```

## Parameters

- `recorder`: The interrupted audio recorder.
- `flags`: The options that indicate the state of the audio session.

## See Also

### Responding to Audio Interruptions

- [audioRecorderBeginInterruption(\_:)](audiorecorderbegininterruption%28__%29.md): Deprecated. Tells the delegate that the system interrupted the audio recording.
- [audioRecorderEndInterruption(\_:)](audiorecorderendinterruption%28__%29.md): Deprecated. Tells the delegate that the audio session interruption ended.
- [audioRecorderEndInterruption(\_:withFlags:)](audiorecorderendinterruption%28__withflags_%29.md): Deprecated. Tells the delegate that the audio session interruption ended with flags.

# audioRecorderEndInterruption:withOptions: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 8.0) · iPadOS 6.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 2.0)

Tells the delegate that the audio session interruption ended with options.

> Observe audio session interruption notifications instead. See [Handling audio interruptions](../handling-audio-interruptions.md) for more information.

## Declaration

```objectivec
- (void) audioRecorderEndInterruption:(AVAudioRecorder *) recorder withOptions:(NSUInteger) flags;
```

## Parameters

- `recorder`: The interrupted audio recorder.
- `flags`: The options that indicate the state of the audio session.

## See Also

### Responding to Audio Interruptions

- [audioRecorderBeginInterruption:](audiorecorderbegininterruption%28__%29.md): Deprecated. Tells the delegate that the system interrupted the audio recording.
- [audioRecorderEndInterruption:](audiorecorderendinterruption%28__%29.md): Deprecated. Tells the delegate that the audio session interruption ended.
- [audioRecorderEndInterruption:withFlags:](audiorecorderendinterruption%28__withflags_%29.md): Deprecated. Tells the delegate that the audio session interruption ended with flags.
