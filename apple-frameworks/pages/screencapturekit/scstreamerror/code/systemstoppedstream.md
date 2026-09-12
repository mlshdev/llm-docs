> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamerror/code/systemstoppedstream](https://developer.apple.com/documentation/screencapturekit/scstreamerror/code/systemstoppedstream)

# SCStreamError.Code.systemStoppedStream (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 15.0+ · tvOS 27.0+ · visionOS 27.0+

An error message that indicates the system stopped the stream.

## Declaration

```swift
case systemStoppedStream
```

## See Also

### Stream management

- [SCStreamError.Code.attemptToStartStreamState](attempttostartstreamstate.md): An error message that indicates a stream is already running or doesn’t exist when trying to start a stream.
- [SCStreamError.Code.attemptToStopStreamState](attempttostopstreamstate.md): An error message that indicates a stream is already stopped or doesn’t exist when trying to stop a stream.
- [SCStreamError.Code.attemptToUpdateFilterState](attempttoupdatefilterstate.md): An error message that indicates a stream couldn’t update its content filter.
- [SCStreamError.Code.attemptToConfigState](attempttoconfigstate.md): An error message that indicates a stream couldn’t update its configuration.
- [SCStreamError.Code.failedToStart](failedtostart.md): An error message that indicates a stream failed to start.
- [SCStreamError.Code.removingStream](removingstream.md): An error message that indicates a stream wasn’t removed.
- [SCStreamError.Code.failedToStartAudioCapture](failedtostartaudiocapture.md): An error message that indicates an audio stream failed to start.
- [SCStreamError.Code.failedToStopAudioCapture](failedtostopaudiocapture.md): An error message that indicates an audio stream failed to stop.
- [SCStreamError.Code.failedToStartMicrophoneCapture](failedtostartmicrophonecapture.md): An error message that indicates microphone capture failed to start.
- [SCStreamError.Code.internalError](internalerror.md): An error message that indicates a stream can’t start due to a failure in ScreenCaptureKit’s internals.

# SCStreamErrorSystemStoppedStream (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 15.0+ · tvOS 27.0+ · visionOS 27.0+

An error message that indicates the system stopped the stream.

## Declaration

```objectivec
SCStreamErrorSystemStoppedStream
```

## See Also

### Stream management

- [SCStreamErrorAttemptToStartStreamState](attempttostartstreamstate.md): An error message that indicates a stream is already running or doesn’t exist when trying to start a stream.
- [SCStreamErrorAttemptToStopStreamState](attempttostopstreamstate.md): An error message that indicates a stream is already stopped or doesn’t exist when trying to stop a stream.
- [SCStreamErrorAttemptToUpdateFilterState](attempttoupdatefilterstate.md): An error message that indicates a stream couldn’t update its content filter.
- [SCStreamErrorAttemptToConfigState](attempttoconfigstate.md): An error message that indicates a stream couldn’t update its configuration.
- [SCStreamErrorFailedToStart](failedtostart.md): An error message that indicates a stream failed to start.
- [SCStreamErrorRemovingStream](removingstream.md): An error message that indicates a stream wasn’t removed.
- [SCStreamErrorFailedToStartAudioCapture](failedtostartaudiocapture.md): An error message that indicates an audio stream failed to start.
- [SCStreamErrorFailedToStopAudioCapture](failedtostopaudiocapture.md): An error message that indicates an audio stream failed to stop.
- [SCStreamErrorFailedToStartMicrophoneCapture](failedtostartmicrophonecapture.md): An error message that indicates microphone capture failed to start.
- [SCStreamErrorInternalError](internalerror.md): An error message that indicates a stream can’t start due to a failure in ScreenCaptureKit’s internals.
