> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiorecorderdelegate/audiorecorderencodeerrordidoccur(_:error:)

# audioRecorderEncodeErrorDidOccur(\_:error:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the audio recorder encountered an encoding error during recording.

## Declaration

```swift
optional func audioRecorderEncodeErrorDidOccur(_ recorder: AVAudioRecorder, error: (any Error)?)
```

## Parameters

- `recorder`: The audio recorder that encountered the encoding error.
- `error`: An object that provides the details of the encoding error.

# audioRecorderEncodeErrorDidOccur:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the audio recorder encountered an encoding error during recording.

## Declaration

```objectivec
- (void) audioRecorderEncodeErrorDidOccur:(AVAudioRecorder *) recorder error:(NSError *) error;
```

## Parameters

- `recorder`: The audio recorder that encountered the encoding error.
- `error`: An object that provides the details of the encoding error.
