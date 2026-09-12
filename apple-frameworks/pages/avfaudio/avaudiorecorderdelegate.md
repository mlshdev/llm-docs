> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiorecorderdelegate](https://developer.apple.com/documentation/avfaudio/avaudiorecorderdelegate)

# AVAudioRecorderDelegate (Swift)

**Framework:** AVFAudio  
**Kind:** Protocol  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

A protocol that defines the methods to respond to audio recording events and encoding errors.

## Declaration

```swift
protocol AVAudioRecorderDelegate : NSObjectProtocol, Sendable
```

## Topics

### Responding to Recording Completion

- [audioRecorderDidFinishRecording(\_:successfully:)](avaudiorecorderdelegate/audiorecorderdidfinishrecording%28__successfully_%29.md): Tells the delegate when recording stops or finishes due to reaching its time limit.

### Responding to Audio Encoding Errors

- [audioRecorderEncodeErrorDidOccur(\_:error:)](avaudiorecorderdelegate/audiorecorderencodeerrordidoccur%28__error_%29.md): Tells the delegate that the audio recorder encountered an encoding error during recording.

### Responding to Audio Interruptions

- [audioRecorderBeginInterruption(\_:)](avaudiorecorderdelegate/audiorecorderbegininterruption%28__%29.md): Deprecated. Tells the delegate that the system interrupted the audio recording.
- [audioRecorderEndInterruption(\_:)](avaudiorecorderdelegate/audiorecorderendinterruption%28__%29.md): Deprecated. Tells the delegate that the audio session interruption ended.
- [audioRecorderEndInterruption(\_:withOptions:)](avaudiorecorderdelegate/audiorecorderendinterruption%28__withoptions_%29.md): Deprecated. Tells the delegate that the audio session interruption ended with options.
- [audioRecorderEndInterruption(\_:withFlags:)](avaudiorecorderdelegate/audiorecorderendinterruption%28__withflags_%29.md): Deprecated. Tells the delegate that the audio session interruption ended with flags.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to recorder events

- [delegate](avaudiorecorder/delegate.md): The delegate object for the audio recorder.

# AVAudioRecorderDelegate (Objective-C)

**Framework:** AVFAudio  
**Kind:** Protocol  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

A protocol that defines the methods to respond to audio recording events and encoding errors.

## Declaration

```objectivec
@protocol AVAudioRecorderDelegate <NSObject>
```

## Topics

### Responding to Recording Completion

- [audioRecorderDidFinishRecording:successfully:](avaudiorecorderdelegate/audiorecorderdidfinishrecording%28__successfully_%29.md): Tells the delegate when recording stops or finishes due to reaching its time limit.

### Responding to Audio Encoding Errors

- [audioRecorderEncodeErrorDidOccur:error:](avaudiorecorderdelegate/audiorecorderencodeerrordidoccur%28__error_%29.md): Tells the delegate that the audio recorder encountered an encoding error during recording.

### Responding to Audio Interruptions

- [audioRecorderBeginInterruption:](avaudiorecorderdelegate/audiorecorderbegininterruption%28__%29.md): Deprecated. Tells the delegate that the system interrupted the audio recording.
- [audioRecorderEndInterruption:](avaudiorecorderdelegate/audiorecorderendinterruption%28__%29.md): Deprecated. Tells the delegate that the audio session interruption ended.
- [audioRecorderEndInterruption:withOptions:](avaudiorecorderdelegate/audiorecorderendinterruption%28__withoptions_%29.md): Deprecated. Tells the delegate that the audio session interruption ended with options.
- [audioRecorderEndInterruption:withFlags:](avaudiorecorderdelegate/audiorecorderendinterruption%28__withflags_%29.md): Deprecated. Tells the delegate that the audio session interruption ended with flags.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to recorder events

- [delegate](avaudiorecorder/delegate.md): The delegate object for the audio recorder.
