> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiorecorder/record(forduration:)](https://developer.apple.com/documentation/avfaudio/avaudiorecorder/record(forduration:))

# record(forDuration:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Records audio for the indicated duration of time.

## Declaration

```swift
func record(forDuration duration: TimeInterval) -> Bool
```

## Parameters

- `duration`: The duration of time to record, in seconds.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The recorder stops recording when it reaches the indicated duration.

Calling this method implicitly calls [prepareToRecord()](preparetorecord%28%29.md), which creates an audio file and prepares the system for recording.

## See Also

### Controlling recording

- [prepareToRecord()](preparetorecord%28%29.md): Creates an audio file and prepares the system for recording.
- [record()](record%28%29.md): Starts or resumes audio recording.
- [record(atTime:)](record%28attime_%29.md): Records audio starting at a specific time.
- [record(atTime:forDuration:)](record%28attime_forduration_%29.md): Records audio starting at a specific time for the indicated duration.
- [pause()](pause%28%29.md): Pauses an audio recording.
- [stop()](stop%28%29.md): Stops recording and closes the audio file.
- [isRecording](isrecording.md): A Boolean value that indicates whether the audio recorder is recording.
- [deleteRecording()](deleterecording%28%29.md): Deletes a recorded audio file.

# recordForDuration: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Records audio for the indicated duration of time.

## Declaration

```objectivec
- (BOOL) recordForDuration:(NSTimeInterval) duration;
```

## Parameters

- `duration`: The duration of time to record, in seconds.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The recorder stops recording when it reaches the indicated duration.

Calling this method implicitly calls [prepareToRecord](preparetorecord%28%29.md), which creates an audio file and prepares the system for recording.

## See Also

### Controlling recording

- [prepareToRecord](preparetorecord%28%29.md): Creates an audio file and prepares the system for recording.
- [record](record%28%29.md): Starts or resumes audio recording.
- [recordAtTime:](record%28attime_%29.md): Records audio starting at a specific time.
- [recordAtTime:forDuration:](record%28attime_forduration_%29.md): Records audio starting at a specific time for the indicated duration.
- [pause](pause%28%29.md): Pauses an audio recording.
- [stop](stop%28%29.md): Stops recording and closes the audio file.
- [recording](isrecording.md): A Boolean value that indicates whether the audio recorder is recording.
- [deleteRecording](deleterecording%28%29.md): Deletes a recorded audio file.
