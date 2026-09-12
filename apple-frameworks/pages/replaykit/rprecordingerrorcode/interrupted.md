> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rprecordingerrorcode/interrupted](https://developer.apple.com/documentation/replaykit/rprecordingerrorcode/interrupted)

# RPRecordingErrorCode.interrupted (Swift)

**Framework:** ReplayKit  
**Kind:** Case  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Recording interrupted by another app.

> Use ScreenCaptureKit instead

## Declaration

```swift
case interrupted
```

## See Also

### Errors

- [RPRecordingErrorCode.activePhoneCall](activephonecall.md): Deprecated. Unable to record due to an active phone call.
- [RPRecordingErrorCode.attemptToStartInRecordingState](attempttostartinrecordingstate.md): Deprecated. Attempted to start a recording that’s already in a recording state.
- [RPRecordingErrorCode.attemptToStopNonRecording](attempttostopnonrecording.md): Deprecated. Attempted to stop a recording that’s not in a recording state.
- [RPRecordingErrorCode.broadcastInvalidSession](broadcastinvalidsession.md): Deprecated. Attempted to start a broadcast without a prior session.
- [RPRecordingErrorCode.broadcastSetupFailed](broadcastsetupfailed.md): Deprecated. The broadcast set up failed.
- [RPRecordingErrorCode.carPlay](carplay.md): Deprecated. Failed to start recording because CarPlay is active.
- [RPRecordingErrorCode.codeSuccessful](codesuccessful.md): Deprecated. Successfully saved the recording to the Camera Roll.
- [RPRecordingErrorCode.contentResize](contentresize.md): Deprecated. Recording interrupted by multitasking and content resizing.
- [RPRecordingErrorCode.disabled](disabled.md): Deprecated. Recording disabled via parental controls.
- [RPRecordingErrorCode.entitlements](entitlements.md): Deprecated. Recording failed due to missing entitlements.
- [RPRecordingErrorCode.failed](failed.md): Deprecated. Recording error occurred.
- [RPRecordingErrorCode.failedApplicationConnectionInterrupted](failedapplicationconnectioninterrupted.md): Deprecated. The recording failed because the app’s connection was interrupted.
- [RPRecordingErrorCode.failedApplicationConnectionInvalid](failedapplicationconnectioninvalid.md): Deprecated. The recording failed because the app’s connection is invalid.
- [RPRecordingErrorCode.failedAssetWriterExportCanceled](failedassetwriterexportcanceled.md): Deprecated. The recording failed because the user canceled the export.
- [RPRecordingErrorCode.failedAssetWriterExportFailed](failedassetwriterexportfailed.md): Deprecated. The recording failed due to an error exporting the movie.

# RPRecordingErrorInterrupted (Objective-C)

**Framework:** ReplayKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Recording interrupted by another app.

## Declaration

```objectivec
RPRecordingErrorInterrupted
```

## See Also

### Errors

- [RPRecordingErrorActivePhoneCall](activephonecall.md): Deprecated. Unable to record due to an active phone call.
- [RPRecordingErrorAttemptToStartInRecordingState](attempttostartinrecordingstate.md): Deprecated. Attempted to start a recording that’s already in a recording state.
- [RPRecordingErrorAttemptToStopNonRecording](attempttostopnonrecording.md): Deprecated. Attempted to stop a recording that’s not in a recording state.
- [RPRecordingErrorBroadcastInvalidSession](broadcastinvalidsession.md): Deprecated. Attempted to start a broadcast without a prior session.
- [RPRecordingErrorBroadcastSetupFailed](broadcastsetupfailed.md): Deprecated. The broadcast set up failed.
- [RPRecordingErrorCarPlay](carplay.md): Deprecated. Failed to start recording because CarPlay is active.
- [RPRecordingErrorCodeSuccessful](codesuccessful.md): Deprecated. Successfully saved the recording to the Camera Roll.
- [RPRecordingErrorContentResize](contentresize.md): Deprecated. Recording interrupted by multitasking and content resizing.
- [RPRecordingErrorDisabled](disabled.md): Deprecated. Recording disabled via parental controls.
- [RPRecordingErrorEntitlements](entitlements.md): Deprecated. Recording failed due to missing entitlements.
- [RPRecordingErrorFailed](failed.md): Deprecated. Recording error occurred.
- [RPRecordingErrorFailedApplicationConnectionInterrupted](failedapplicationconnectioninterrupted.md): Deprecated. The recording failed because the app’s connection was interrupted.
- [RPRecordingErrorFailedApplicationConnectionInvalid](failedapplicationconnectioninvalid.md): Deprecated. The recording failed because the app’s connection is invalid.
- [RPRecordingErrorFailedAssetWriterExportCanceled](failedassetwriterexportcanceled.md): Deprecated. The recording failed because the user canceled the export.
- [RPRecordingErrorFailedAssetWriterExportFailed](failedassetwriterexportfailed.md): Deprecated. The recording failed due to an error exporting the movie.
