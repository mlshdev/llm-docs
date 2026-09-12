> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiorecorder/record(attime:forduration:)](https://developer.apple.com/documentation/avfaudio/avaudiorecorder/record(attime:forduration:))

# record(atTime:forDuration:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Records audio starting at a specific time for the indicated duration.

## Declaration

```swift
func record(atTime time: TimeInterval, forDuration duration: TimeInterval) -> Bool
```

## Parameters

- `time`: The time at which to start recording, relative to [deviceCurrentTime](devicecurrenttime.md).
- `duration`: The duration of time to record, in seconds.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if recording was successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The recorder automatically stops recording when it reaches the indicated duration. You may also use it to synchronize recording of multiple recorders as shown below.

```swift
func startSynchronizedRecording() {
    // Create a start time relative to the current device time.
    let time = recorderOne.deviceCurrentTime + 0.01
    let duration: TimeInterval = 10.0
    
    // Synchronize recording of both recorders.
    recorderOne.record(atTime: time, forDuration: duration)
    recorderTwo.record(atTime: time, forDuration: duration)
}
```

Calling this method implicitly calls [prepareToRecord()](preparetorecord%28%29.md), which creates an audio file and prepares the system for recording.

## See Also

### Controlling recording

- [prepareToRecord()](preparetorecord%28%29.md): Creates an audio file and prepares the system for recording.
- [record()](record%28%29.md): Starts or resumes audio recording.
- [record(atTime:)](record%28attime_%29.md): Records audio starting at a specific time.
- [record(forDuration:)](record%28forduration_%29.md): Records audio for the indicated duration of time.
- [pause()](pause%28%29.md): Pauses an audio recording.
- [stop()](stop%28%29.md): Stops recording and closes the audio file.
- [isRecording](isrecording.md): A Boolean value that indicates whether the audio recorder is recording.
- [deleteRecording()](deleterecording%28%29.md): Deletes a recorded audio file.

# recordAtTime:forDuration: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Records audio starting at a specific time for the indicated duration.

## Declaration

```objectivec
- (BOOL) recordAtTime:(NSTimeInterval) time forDuration:(NSTimeInterval) duration;
```

## Parameters

- `time`: The time at which to start recording, relative to [deviceCurrentTime](devicecurrenttime.md).
- `duration`: The duration of time to record, in seconds.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if recording was successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The recorder automatically stops recording when it reaches the indicated duration. You may also use it to synchronize recording of multiple recorders as shown below.

```swift
func startSynchronizedRecording() {
    // Create a start time relative to the current device time.
    let time = recorderOne.deviceCurrentTime + 0.01
    let duration: TimeInterval = 10.0
    
    // Synchronize recording of both recorders.
    recorderOne.record(atTime: time, forDuration: duration)
    recorderTwo.record(atTime: time, forDuration: duration)
}
```

Calling this method implicitly calls [prepareToRecord](preparetorecord%28%29.md), which creates an audio file and prepares the system for recording.

## See Also

### Controlling recording

- [prepareToRecord](preparetorecord%28%29.md): Creates an audio file and prepares the system for recording.
- [record](record%28%29.md): Starts or resumes audio recording.
- [recordAtTime:](record%28attime_%29.md): Records audio starting at a specific time.
- [recordForDuration:](record%28forduration_%29.md): Records audio for the indicated duration of time.
- [pause](pause%28%29.md): Pauses an audio recording.
- [stop](stop%28%29.md): Stops recording and closes the audio file.
- [recording](isrecording.md): A Boolean value that indicates whether the audio recorder is recording.
- [deleteRecording](deleterecording%28%29.md): Deletes a recorded audio file.
