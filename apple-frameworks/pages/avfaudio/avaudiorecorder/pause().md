> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiorecorder/pause()](https://developer.apple.com/documentation/avfaudio/avaudiorecorder/pause())

# pause() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Pauses an audio recording.

## Declaration

```swift
func pause()
```

<a id="Discussion"></a>

## Discussion

Call [record()](record%28%29.md) to resume recording.

## See Also

### Controlling recording

- [prepareToRecord()](preparetorecord%28%29.md): Creates an audio file and prepares the system for recording.
- [record()](record%28%29.md): Starts or resumes audio recording.
- [record(atTime:)](record%28attime_%29.md): Records audio starting at a specific time.
- [record(forDuration:)](record%28forduration_%29.md): Records audio for the indicated duration of time.
- [record(atTime:forDuration:)](record%28attime_forduration_%29.md): Records audio starting at a specific time for the indicated duration.
- [stop()](stop%28%29.md): Stops recording and closes the audio file.
- [isRecording](isrecording.md): A Boolean value that indicates whether the audio recorder is recording.
- [deleteRecording()](deleterecording%28%29.md): Deletes a recorded audio file.

# pause (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Pauses an audio recording.

## Declaration

```objectivec
- (void) pause;
```

<a id="Discussion"></a>

## Discussion

Call [record](record%28%29.md) to resume recording.

## See Also

### Controlling recording

- [prepareToRecord](preparetorecord%28%29.md): Creates an audio file and prepares the system for recording.
- [record](record%28%29.md): Starts or resumes audio recording.
- [recordAtTime:](record%28attime_%29.md): Records audio starting at a specific time.
- [recordForDuration:](record%28forduration_%29.md): Records audio for the indicated duration of time.
- [recordAtTime:forDuration:](record%28attime_forduration_%29.md): Records audio starting at a specific time for the indicated duration.
- [stop](stop%28%29.md): Stops recording and closes the audio file.
- [recording](isrecording.md): A Boolean value that indicates whether the audio recorder is recording.
- [deleteRecording](deleterecording%28%29.md): Deletes a recorded audio file.
