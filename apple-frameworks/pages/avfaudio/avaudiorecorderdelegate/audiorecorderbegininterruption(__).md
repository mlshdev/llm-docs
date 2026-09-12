> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiorecorderdelegate/audiorecorderbegininterruption(_:)](https://developer.apple.com/documentation/avfaudio/avaudiorecorderdelegate/audiorecorderbegininterruption(_:))

# audioRecorderBeginInterruption(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 2.2+ (deprecated in 8.0) · iPadOS 2.2+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Tells the delegate that the system interrupted the audio recording.

> Observe audio session interruption notifications instead. See [Handling audio interruptions](../handling-audio-interruptions.md) for more information.

## Declaration

```swift
optional func audioRecorderBeginInterruption(_ recorder: AVAudioRecorder)
```

## Parameters

- `recorder`: The interrupted audio recorder.

## See Also

### Responding to Audio Interruptions

- [audioRecorderEndInterruption(\_:)](audiorecorderendinterruption%28__%29.md): Deprecated. Tells the delegate that the audio session interruption ended.
- [audioRecorderEndInterruption(\_:withOptions:)](audiorecorderendinterruption%28__withoptions_%29.md): Deprecated. Tells the delegate that the audio session interruption ended with options.
- [audioRecorderEndInterruption(\_:withFlags:)](audiorecorderendinterruption%28__withflags_%29.md): Deprecated. Tells the delegate that the audio session interruption ended with flags.

# audioRecorderBeginInterruption: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 2.0)

Tells the delegate that the system interrupted the audio recording.

> Observe audio session interruption notifications instead. See [Handling audio interruptions](../handling-audio-interruptions.md) for more information.

## Declaration

```objectivec
- (void) audioRecorderBeginInterruption:(AVAudioRecorder *) recorder;
```

## Parameters

- `recorder`: The interrupted audio recorder.

## See Also

### Responding to Audio Interruptions

- [audioRecorderEndInterruption:](audiorecorderendinterruption%28__%29.md): Deprecated. Tells the delegate that the audio session interruption ended.
- [audioRecorderEndInterruption:withOptions:](audiorecorderendinterruption%28__withoptions_%29.md): Deprecated. Tells the delegate that the audio session interruption ended with options.
- [audioRecorderEndInterruption:withFlags:](audiorecorderendinterruption%28__withflags_%29.md): Deprecated. Tells the delegate that the audio session interruption ended with flags.
