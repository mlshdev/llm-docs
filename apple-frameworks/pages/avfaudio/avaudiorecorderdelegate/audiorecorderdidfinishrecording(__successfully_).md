> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiorecorderdelegate/audiorecorderdidfinishrecording(_:successfully:)

# audioRecorderDidFinishRecording(\_:successfully:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate when recording stops or finishes due to reaching its time limit.

## Declaration

```swift
optional func audioRecorderDidFinishRecording(_ recorder: AVAudioRecorder, successfully flag: Bool)
```

## Parameters

- `recorder`: The audio recorder that finished recording.
- `flag`: A Boolean value that indicates whether the recording stopped successfully.

<a id="Discussion"></a>

## Discussion

The system doesn’t call this method if the recorder stops due to an interruption.

# audioRecorderDidFinishRecording:successfully: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate when recording stops or finishes due to reaching its time limit.

## Declaration

```objectivec
- (void) audioRecorderDidFinishRecording:(AVAudioRecorder *) recorder successfully:(BOOL) flag;
```

## Parameters

- `recorder`: The audio recorder that finished recording.
- `flag`: A Boolean value that indicates whether the recording stopped successfully.

<a id="Discussion"></a>

## Discussion

The system doesn’t call this method if the recorder stops due to an interruption.
