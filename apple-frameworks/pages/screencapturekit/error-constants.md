> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/error-constants](https://developer.apple.com/documentation/screencapturekit/error-constants)

# Error Constants

**Framework:** ScreenCaptureKit  
**Kind:** API Collection

Error code constants for framework operations.

## Topics

### User cancellation

- [userStopped](scstreamerror/userstopped.md): An error message that indicates the user stopped the stream.

### Privacy and entitlements

- [userDeclined](scstreamerror/userdeclined.md): An error message that indicates the user didn’t grant Screen Recording permission to your app.
- [missingEntitlements](scstreamerror/missingentitlements.md): An error message that indicates missing entitlements in your app.

### Stream management

- [attemptToStartStreamState](scstreamerror/attempttostartstreamstate.md): An error message that indicates a stream is already running or doesn’t exist when trying to start a stream.
- [attemptToStopStreamState](scstreamerror/attempttostopstreamstate.md): An error message that indicates a stream is already stopped or doesn’t exist when trying to stop a stream.
- [attemptToUpdateFilterState](scstreamerror/attempttoupdatefilterstate.md): An error message that indicates a stream couldn’t update its content filter.
- [attemptToConfigState](scstreamerror/attempttoconfigstate.md): An error message that indicates a stream couldn’t update its configuration.
- [failedToStart](scstreamerror/failedtostart.md): An error message that indicates a stream failed to start.
- [failedToStartAudioCapture](scstreamerror/failedtostartaudiocapture.md): An error message that indicates an audio stream failed to start.
- [failedToStopAudioCapture](scstreamerror/failedtostopaudiocapture.md): An error message that indicates an audio stream failed to stop.
- [failedToStartMicrophoneCapture](scstreamerror/failedtostartmicrophonecapture.md): An error message that indicates microphone capture failed to start.
- [systemStoppedStream](scstreamerror/systemstoppedstream.md): An error message that indicates the system stopped the stream.
- [internalError](scstreamerror/internalerror.md): An error message that indicates a stream can’t start due to a failure in ScreenCaptureKit’s internals.
- [removingStream](scstreamerror/removingstream.md): An error message that indicates a stream wasn’t removed.

### Shareable content

- [noCaptureSource](scstreamerror/nocapturesource.md): An error message that indicates a stream doesn’t have a source to capture.
- [noDisplayList](scstreamerror/nodisplaylist.md): An error message that indicates a stream doesn’t have displays available.
- [noWindowList](scstreamerror/nowindowlist.md): An error message that indicates a stream doesn’t have windows available.
- [failedApplicationConnectionInvalid](scstreamerror/failedapplicationconnectioninvalid.md): An error message that indicates the stream lost its connection to an app.
- [failedApplicationConnectionInterrupted](scstreamerror/failedapplicationconnectioninterrupted.md): An error message that indicates there was an interruption in a connection to an app.
- [failedNoMatchingApplicationContext](scstreamerror/failednomatchingapplicationcontext.md): An error message that indicates there isn’t a matching app context for streaming.

### Invalid parameters

- [invalidParameter](scstreamerror/invalidparameter.md): An error message that indicates an operation failed because of an invalid parameter value.

## See Also

### Error inspection

- [SCStreamError.Code](scstreamerror/code.md): Codes for user cancellation events and errors that can occur in ScreenCaptureKit.
- [errorDomain](scstreamerror/errordomain.md)
