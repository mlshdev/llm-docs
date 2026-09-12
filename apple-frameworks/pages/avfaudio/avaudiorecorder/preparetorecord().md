> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiorecorder/preparetorecord()](https://developer.apple.com/documentation/avfaudio/avaudiorecorder/preparetorecord())

# prepareToRecord() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an audio file and prepares the system for recording.

## Declaration

```swift
func prepareToRecord() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Calling this method creates an audio file at the URL you used to create the recorder. If a file already exists at that location, this method overwrites it.

Call this method to start recording as quickly as possible upon calling [record()](record%28%29.md).

## See Also

### Controlling recording

- [record()](record%28%29.md): Starts or resumes audio recording.
- [record(atTime:)](record%28attime_%29.md): Records audio starting at a specific time.
- [record(forDuration:)](record%28forduration_%29.md): Records audio for the indicated duration of time.
- [record(atTime:forDuration:)](record%28attime_forduration_%29.md): Records audio starting at a specific time for the indicated duration.
- [pause()](pause%28%29.md): Pauses an audio recording.
- [stop()](stop%28%29.md): Stops recording and closes the audio file.
- [isRecording](isrecording.md): A Boolean value that indicates whether the audio recorder is recording.
- [deleteRecording()](deleterecording%28%29.md): Deletes a recorded audio file.

# prepareToRecord (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an audio file and prepares the system for recording.

## Declaration

```objectivec
- (BOOL) prepareToRecord;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Calling this method creates an audio file at the URL you used to create the recorder. If a file already exists at that location, this method overwrites it.

Call this method to start recording as quickly as possible upon calling [record](record%28%29.md).

## See Also

### Controlling recording

- [record](record%28%29.md): Starts or resumes audio recording.
- [recordAtTime:](record%28attime_%29.md): Records audio starting at a specific time.
- [recordForDuration:](record%28forduration_%29.md): Records audio for the indicated duration of time.
- [recordAtTime:forDuration:](record%28attime_forduration_%29.md): Records audio starting at a specific time for the indicated duration.
- [pause](pause%28%29.md): Pauses an audio recording.
- [stop](stop%28%29.md): Stops recording and closes the audio file.
- [recording](isrecording.md): A Boolean value that indicates whether the audio recorder is recording.
- [deleteRecording](deleterecording%28%29.md): Deletes a recorded audio file.
