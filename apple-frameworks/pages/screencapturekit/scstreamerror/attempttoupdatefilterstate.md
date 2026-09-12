> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamerror/attempttoupdatefilterstate](https://developer.apple.com/documentation/screencapturekit/scstreamerror/attempttoupdatefilterstate)

# attemptToUpdateFilterState

**Framework:** ScreenCaptureKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

An error message that indicates a stream couldn’t update its content filter.

## Declaration

```swift
static var attemptToUpdateFilterState: SCStreamError.Code { get }
```

## See Also

### Stream management

- [attemptToStartStreamState](attempttostartstreamstate.md): An error message that indicates a stream is already running or doesn’t exist when trying to start a stream.
- [attemptToStopStreamState](attempttostopstreamstate.md): An error message that indicates a stream is already stopped or doesn’t exist when trying to stop a stream.
- [attemptToConfigState](attempttoconfigstate.md): An error message that indicates a stream couldn’t update its configuration.
- [failedToStart](failedtostart.md): An error message that indicates a stream failed to start.
- [failedToStartAudioCapture](failedtostartaudiocapture.md): An error message that indicates an audio stream failed to start.
- [failedToStopAudioCapture](failedtostopaudiocapture.md): An error message that indicates an audio stream failed to stop.
- [failedToStartMicrophoneCapture](failedtostartmicrophonecapture.md): An error message that indicates microphone capture failed to start.
- [systemStoppedStream](systemstoppedstream.md): An error message that indicates the system stopped the stream.
- [internalError](internalerror.md): An error message that indicates a stream can’t start due to a failure in ScreenCaptureKit’s internals.
- [removingStream](removingstream.md): An error message that indicates a stream wasn’t removed.
