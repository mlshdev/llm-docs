> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiorecorder/record(attime:)](https://developer.apple.com/documentation/avfaudio/avaudiorecorder/record(attime:))

# record(atTime:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Records audio starting at a specific time.

## Declaration

```swift
func record(atTime time: TimeInterval) -> Bool
```

## Parameters

- `time`: The time at which to start recording, relative to [deviceCurrentTime](devicecurrenttime.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if recording starts successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can call this method on a single recorder, or use it to synchronize the recording of multiple players as shown below.

```swift
func startSynchronizedRecording() {
    // Create a time offset relative to the current device time.
    let timeOffset = recorderOne.deviceCurrentTime + 0.01
    
    // Synchronize the recording time of both recorders.
    recorderOne.record(atTime: timeOffset)
    recorderTwo.record(atTime: timeOffset)
}
```

Calling this method implicitly calls [prepareToRecord()](preparetorecord%28%29.md), which creates an audio file and prepares the system for recording.

## See Also

### Controlling recording

- [prepareToRecord()](preparetorecord%28%29.md): Creates an audio file and prepares the system for recording.
- [record()](record%28%29.md): Starts or resumes audio recording.
- [record(forDuration:)](record%28forduration_%29.md): Records audio for the indicated duration of time.
- [record(atTime:forDuration:)](record%28attime_forduration_%29.md): Records audio starting at a specific time for the indicated duration.
- [pause()](pause%28%29.md): Pauses an audio recording.
- [stop()](stop%28%29.md): Stops recording and closes the audio file.
- [isRecording](isrecording.md): A Boolean value that indicates whether the audio recorder is recording.
- [deleteRecording()](deleterecording%28%29.md): Deletes a recorded audio file.

# recordAtTime: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Records audio starting at a specific time.

## Declaration

```objectivec
- (BOOL) recordAtTime:(NSTimeInterval) time;
```

## Parameters

- `time`: The time at which to start recording, relative to [deviceCurrentTime](devicecurrenttime.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if recording starts successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can call this method on a single recorder, or use it to synchronize the recording of multiple players as shown below.

```swift
func startSynchronizedRecording() {
    // Create a time offset relative to the current device time.
    let timeOffset = recorderOne.deviceCurrentTime + 0.01
    
    // Synchronize the recording time of both recorders.
    recorderOne.record(atTime: timeOffset)
    recorderTwo.record(atTime: timeOffset)
}
```

Calling this method implicitly calls [prepareToRecord](preparetorecord%28%29.md), which creates an audio file and prepares the system for recording.

## See Also

### Controlling recording

- [prepareToRecord](preparetorecord%28%29.md): Creates an audio file and prepares the system for recording.
- [record](record%28%29.md): Starts or resumes audio recording.
- [recordForDuration:](record%28forduration_%29.md): Records audio for the indicated duration of time.
- [recordAtTime:forDuration:](record%28attime_forduration_%29.md): Records audio starting at a specific time for the indicated duration.
- [pause](pause%28%29.md): Pauses an audio recording.
- [stop](stop%28%29.md): Stops recording and closes the audio file.
- [recording](isrecording.md): A Boolean value that indicates whether the audio recorder is recording.
- [deleteRecording](deleterecording%28%29.md): Deletes a recorded audio file.
