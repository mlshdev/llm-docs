> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamerror/code](https://developer.apple.com/documentation/screencapturekit/scstreamerror/code)

# SCStreamError.Code (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Codes for user cancellation events and errors that can occur in ScreenCaptureKit.

## Declaration

```swift
enum Code
```

## Topics

### User cancellation

- [SCStreamError.Code.userStopped](code/userstopped.md): An error message that indicates the user stopped the stream.

### Privacy and entitlements

- [SCStreamError.Code.userDeclined](code/userdeclined.md): An error message that indicates the user didn’t grant Screen Recording permission to your app.
- [SCStreamError.Code.missingEntitlements](code/missingentitlements.md): An error message that indicates missing entitlements in your app.

### Stream management

- [SCStreamError.Code.attemptToStartStreamState](code/attempttostartstreamstate.md): An error message that indicates a stream is already running or doesn’t exist when trying to start a stream.
- [SCStreamError.Code.attemptToStopStreamState](code/attempttostopstreamstate.md): An error message that indicates a stream is already stopped or doesn’t exist when trying to stop a stream.
- [SCStreamError.Code.attemptToUpdateFilterState](code/attempttoupdatefilterstate.md): An error message that indicates a stream couldn’t update its content filter.
- [SCStreamError.Code.attemptToConfigState](code/attempttoconfigstate.md): An error message that indicates a stream couldn’t update its configuration.
- [SCStreamError.Code.failedToStart](code/failedtostart.md): An error message that indicates a stream failed to start.
- [SCStreamError.Code.removingStream](code/removingstream.md): An error message that indicates a stream wasn’t removed.
- [SCStreamError.Code.failedToStartAudioCapture](code/failedtostartaudiocapture.md): An error message that indicates an audio stream failed to start.
- [SCStreamError.Code.failedToStopAudioCapture](code/failedtostopaudiocapture.md): An error message that indicates an audio stream failed to stop.
- [SCStreamError.Code.failedToStartMicrophoneCapture](code/failedtostartmicrophonecapture.md): An error message that indicates microphone capture failed to start.
- [SCStreamError.Code.systemStoppedStream](code/systemstoppedstream.md): An error message that indicates the system stopped the stream.
- [SCStreamError.Code.internalError](code/internalerror.md): An error message that indicates a stream can’t start due to a failure in ScreenCaptureKit’s internals.

### Shareable content

- [SCStreamError.Code.noCaptureSource](code/nocapturesource.md): An error message that indicates a stream doesn’t have a source to capture.
- [SCStreamError.Code.noDisplayList](code/nodisplaylist.md): An error message that indicates a stream doesn’t have displays available.
- [SCStreamError.Code.noWindowList](code/nowindowlist.md): An error message that indicates a stream doesn’t have windows available.
- [SCStreamError.Code.failedApplicationConnectionInvalid](code/failedapplicationconnectioninvalid.md): An error message that indicates the stream lost its connection to an app.
- [SCStreamError.Code.failedApplicationConnectionInterrupted](code/failedapplicationconnectioninterrupted.md): An error message that indicates there was an interruption in a connection to an app.
- [SCStreamError.Code.failedNoMatchingApplicationContext](code/failednomatchingapplicationcontext.md): An error message that indicates there isn’t a matching app context for streaming.

### Invalid parameters

- [SCStreamError.Code.invalidParameter](code/invalidparameter.md): An error message that indicates an operation failed because of an invalid parameter value.

### Creating an error

- [init(rawValue:)](code/init%28rawvalue_%29.md)

### Enumeration Cases

- [SCStreamError.Code.insufficientStorage](code/insufficientstorage.md)
- [SCStreamError.Code.missingBackgroundMode](code/missingbackgroundmode.md)
- [SCStreamError.Code.notSupported](code/notsupported.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SCStreamErrorCode (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Codes for user cancellation events and errors that can occur in ScreenCaptureKit.

## Declaration

```objectivec
enum SCStreamErrorCode : NSInteger;
```

## Topics

### User cancellation

- [SCStreamErrorUserStopped](code/userstopped.md): An error message that indicates the user stopped the stream.

### Privacy and entitlements

- [SCStreamErrorUserDeclined](code/userdeclined.md): An error message that indicates the user didn’t grant Screen Recording permission to your app.
- [SCStreamErrorMissingEntitlements](code/missingentitlements.md): An error message that indicates missing entitlements in your app.

### Stream management

- [SCStreamErrorAttemptToStartStreamState](code/attempttostartstreamstate.md): An error message that indicates a stream is already running or doesn’t exist when trying to start a stream.
- [SCStreamErrorAttemptToStopStreamState](code/attempttostopstreamstate.md): An error message that indicates a stream is already stopped or doesn’t exist when trying to stop a stream.
- [SCStreamErrorAttemptToUpdateFilterState](code/attempttoupdatefilterstate.md): An error message that indicates a stream couldn’t update its content filter.
- [SCStreamErrorAttemptToConfigState](code/attempttoconfigstate.md): An error message that indicates a stream couldn’t update its configuration.
- [SCStreamErrorFailedToStart](code/failedtostart.md): An error message that indicates a stream failed to start.
- [SCStreamErrorRemovingStream](code/removingstream.md): An error message that indicates a stream wasn’t removed.
- [SCStreamErrorFailedToStartAudioCapture](code/failedtostartaudiocapture.md): An error message that indicates an audio stream failed to start.
- [SCStreamErrorFailedToStopAudioCapture](code/failedtostopaudiocapture.md): An error message that indicates an audio stream failed to stop.
- [SCStreamErrorFailedToStartMicrophoneCapture](code/failedtostartmicrophonecapture.md): An error message that indicates microphone capture failed to start.
- [SCStreamErrorSystemStoppedStream](code/systemstoppedstream.md): An error message that indicates the system stopped the stream.
- [SCStreamErrorInternalError](code/internalerror.md): An error message that indicates a stream can’t start due to a failure in ScreenCaptureKit’s internals.

### Shareable content

- [SCStreamErrorNoCaptureSource](code/nocapturesource.md): An error message that indicates a stream doesn’t have a source to capture.
- [SCStreamErrorNoDisplayList](code/nodisplaylist.md): An error message that indicates a stream doesn’t have displays available.
- [SCStreamErrorNoWindowList](code/nowindowlist.md): An error message that indicates a stream doesn’t have windows available.
- [SCStreamErrorFailedApplicationConnectionInvalid](code/failedapplicationconnectioninvalid.md): An error message that indicates the stream lost its connection to an app.
- [SCStreamErrorFailedApplicationConnectionInterrupted](code/failedapplicationconnectioninterrupted.md): An error message that indicates there was an interruption in a connection to an app.
- [SCStreamErrorFailedNoMatchingApplicationContext](code/failednomatchingapplicationcontext.md): An error message that indicates there isn’t a matching app context for streaming.

### Invalid parameters

- [SCStreamErrorInvalidParameter](code/invalidparameter.md): An error message that indicates an operation failed because of an invalid parameter value.

### Enumeration Cases

- [SCStreamErrorInsufficientStorage](code/insufficientstorage.md)
- [SCStreamErrorMissingBackgroundMode](code/missingbackgroundmode.md)
- [SCStreamErrorNotSupported](code/notsupported.md)

## See Also

### Stream errors (Objective-C)

- [SCStreamErrorDomain](../scstreamerrordomain.md): A string representation of the error domain.
