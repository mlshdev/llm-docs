> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rprecordingerrorcode](https://developer.apple.com/documentation/replaykit/rprecordingerrorcode)

# RPRecordingErrorCode (Swift)

**Framework:** ReplayKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The ReplayKit error domain codes.

> Use ScreenCaptureKit instead

## Declaration

```swift
enum RPRecordingErrorCode
```

## Topics

### Errors

- [RPRecordingErrorCode.activePhoneCall](rprecordingerrorcode/activephonecall.md): Deprecated. Unable to record due to an active phone call.
- [RPRecordingErrorCode.attemptToStartInRecordingState](rprecordingerrorcode/attempttostartinrecordingstate.md): Deprecated. Attempted to start a recording that’s already in a recording state.
- [RPRecordingErrorCode.attemptToStopNonRecording](rprecordingerrorcode/attempttostopnonrecording.md): Deprecated. Attempted to stop a recording that’s not in a recording state.
- [RPRecordingErrorCode.broadcastInvalidSession](rprecordingerrorcode/broadcastinvalidsession.md): Deprecated. Attempted to start a broadcast without a prior session.
- [RPRecordingErrorCode.broadcastSetupFailed](rprecordingerrorcode/broadcastsetupfailed.md): Deprecated. The broadcast set up failed.
- [RPRecordingErrorCode.carPlay](rprecordingerrorcode/carplay.md): Deprecated. Failed to start recording because CarPlay is active.
- [RPRecordingErrorCode.codeSuccessful](rprecordingerrorcode/codesuccessful.md): Deprecated. Successfully saved the recording to the Camera Roll.
- [RPRecordingErrorCode.contentResize](rprecordingerrorcode/contentresize.md): Deprecated. Recording interrupted by multitasking and content resizing.
- [RPRecordingErrorCode.disabled](rprecordingerrorcode/disabled.md): Deprecated. Recording disabled via parental controls.
- [RPRecordingErrorCode.entitlements](rprecordingerrorcode/entitlements.md): Deprecated. Recording failed due to missing entitlements.
- [RPRecordingErrorCode.failed](rprecordingerrorcode/failed.md): Deprecated. Recording error occurred.
- [RPRecordingErrorCode.failedApplicationConnectionInterrupted](rprecordingerrorcode/failedapplicationconnectioninterrupted.md): Deprecated. The recording failed because the app’s connection was interrupted.
- [RPRecordingErrorCode.failedApplicationConnectionInvalid](rprecordingerrorcode/failedapplicationconnectioninvalid.md): Deprecated. The recording failed because the app’s connection is invalid.
- [RPRecordingErrorCode.failedAssetWriterExportCanceled](rprecordingerrorcode/failedassetwriterexportcanceled.md): Deprecated. The recording failed because the user canceled the export.
- [RPRecordingErrorCode.failedAssetWriterExportFailed](rprecordingerrorcode/failedassetwriterexportfailed.md): Deprecated. The recording failed due to an error exporting the movie.
- [RPRecordingErrorCode.failedAssetWriterFailedToSave](rprecordingerrorcode/failedassetwriterfailedtosave.md): Deprecated. The recording failed due to an asset writer failure.
- [RPRecordingErrorCode.failedAssetWriterInWrongState](rprecordingerrorcode/failedassetwriterinwrongstate.md): Deprecated. The recording failed because the asset writer is in an invalid state.
- [RPRecordingErrorCode.failedIncorrectTimeStamps](rprecordingerrorcode/failedincorrecttimestamps.md): Deprecated. The recording failed due to malformed start and end time intervals.
- [RPRecordingErrorCode.failedMediaServicesFailure](rprecordingerrorcode/failedmediaservicesfailure.md): Deprecated. The recording failed due to a mediaservices daemon failure.
- [RPRecordingErrorCode.failedNoAssetWriter](rprecordingerrorcode/failednoassetwriter.md): Deprecated. The recording failed because there is no asset writer available.
- [RPRecordingErrorCode.failedNoMatchingApplicationContext](rprecordingerrorcode/failednomatchingapplicationcontext.md): Deprecated. The context identifier doesn’t match the app identifier.
- [RPRecordingErrorCode.failedToObtainURL](rprecordingerrorcode/failedtoobtainurl.md): Deprecated. The recording failed due to a failure to obtain the URL.
- [RPRecordingErrorCode.failedToProcessFirstSample](rprecordingerrorcode/failedtoprocessfirstsample.md): Deprecated. The recording failed because the asset writer failed to process the first media sample.
- [RPRecordingErrorCode.failedToRemoveFile](rprecordingerrorcode/failedtoremovefile.md): Deprecated. The recording failed because the temporary file wasn’t removed.
- [RPRecordingErrorCode.failedToStartCaptureStack](rprecordingerrorcode/failedtostartcapturestack.md): Deprecated. The system failed to configure the app for A/V recording.
- [RPRecordingErrorCode.failedToStart](rprecordingerrorcode/failedtostart.md): Deprecated. Recording failed to start.
- [RPRecordingErrorCode.failedToSave](rprecordingerrorcode/failedtosave.md): Deprecated. The recording failed to save.
- [RPRecordingErrorCode.filePermissions](rprecordingerrorcode/filepermissions.md): Deprecated. The recording failed due to a file permission error.
- [RPRecordingErrorCode.insufficientStorage](rprecordingerrorcode/insufficientstorage.md): Deprecated. Not enough storage available on the device.
- [RPRecordingErrorCode.interrupted](rprecordingerrorcode/interrupted.md): Deprecated. Recording interrupted by another app.
- [RPRecordingErrorCode.invalidParameter](rprecordingerrorcode/invalidparameter.md): Deprecated. The recording failed because of an invalid parameter.
- [RPRecordingErrorCode.photoFailure](rprecordingerrorcode/photofailure.md): Deprecated. Failed saving the video the Camera Roll.
- [RPRecordingErrorCode.recordingInvalidSession](rprecordingerrorcode/recordinginvalidsession.md): Deprecated. Attempted to start an invalid recording session.
- [RPRecordingErrorCode.systemDormancy](rprecordingerrorcode/systemdormancy.md): Deprecated. Recording forced to end by the user pressing the power button.
- [RPRecordingErrorCode.unknown](rprecordingerrorcode/unknown.md): Deprecated. Error cause unknown.
- [RPRecordingErrorCode.userDeclined](rprecordingerrorcode/userdeclined.md): Deprecated. User declined recording request.
- [RPRecordingErrorCode.videoMixingFailure](rprecordingerrorcode/videomixingfailure.md): Deprecated. The recording failed due to an A/V mixing failure.

### Enumeration Cases

- [RPRecordingErrorCode.exportClipToURLInProgress](rprecordingerrorcode/exportcliptourlinprogress.md): Deprecated.

### Initializers

- [init(rawValue:)](rprecordingerrorcode/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [RPRecordingErrorDomain](rprecordingerrordomain.md): Deprecated. The ReplayKit error domain.
- [SCStreamErrorDomain](scstreamerrordomain.md)

# RPRecordingErrorCode (Objective-C)

**Framework:** ReplayKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The ReplayKit error domain codes.

## Declaration

```objectivec
enum RPRecordingErrorCode : NSInteger;
```

## Topics

### Errors

- [RPRecordingErrorActivePhoneCall](rprecordingerrorcode/activephonecall.md): Deprecated. Unable to record due to an active phone call.
- [RPRecordingErrorAttemptToStartInRecordingState](rprecordingerrorcode/attempttostartinrecordingstate.md): Deprecated. Attempted to start a recording that’s already in a recording state.
- [RPRecordingErrorAttemptToStopNonRecording](rprecordingerrorcode/attempttostopnonrecording.md): Deprecated. Attempted to stop a recording that’s not in a recording state.
- [RPRecordingErrorBroadcastInvalidSession](rprecordingerrorcode/broadcastinvalidsession.md): Deprecated. Attempted to start a broadcast without a prior session.
- [RPRecordingErrorBroadcastSetupFailed](rprecordingerrorcode/broadcastsetupfailed.md): Deprecated. The broadcast set up failed.
- [RPRecordingErrorCarPlay](rprecordingerrorcode/carplay.md): Deprecated. Failed to start recording because CarPlay is active.
- [RPRecordingErrorCodeSuccessful](rprecordingerrorcode/codesuccessful.md): Deprecated. Successfully saved the recording to the Camera Roll.
- [RPRecordingErrorContentResize](rprecordingerrorcode/contentresize.md): Deprecated. Recording interrupted by multitasking and content resizing.
- [RPRecordingErrorDisabled](rprecordingerrorcode/disabled.md): Deprecated. Recording disabled via parental controls.
- [RPRecordingErrorEntitlements](rprecordingerrorcode/entitlements.md): Deprecated. Recording failed due to missing entitlements.
- [RPRecordingErrorFailed](rprecordingerrorcode/failed.md): Deprecated. Recording error occurred.
- [RPRecordingErrorFailedApplicationConnectionInterrupted](rprecordingerrorcode/failedapplicationconnectioninterrupted.md): Deprecated. The recording failed because the app’s connection was interrupted.
- [RPRecordingErrorFailedApplicationConnectionInvalid](rprecordingerrorcode/failedapplicationconnectioninvalid.md): Deprecated. The recording failed because the app’s connection is invalid.
- [RPRecordingErrorFailedAssetWriterExportCanceled](rprecordingerrorcode/failedassetwriterexportcanceled.md): Deprecated. The recording failed because the user canceled the export.
- [RPRecordingErrorFailedAssetWriterExportFailed](rprecordingerrorcode/failedassetwriterexportfailed.md): Deprecated. The recording failed due to an error exporting the movie.
- [RPRecordingErrorFailedAssetWriterFailedToSave](rprecordingerrorcode/failedassetwriterfailedtosave.md): Deprecated. The recording failed due to an asset writer failure.
- [RPRecordingErrorFailedAssetWriterInWrongState](rprecordingerrorcode/failedassetwriterinwrongstate.md): Deprecated. The recording failed because the asset writer is in an invalid state.
- [RPRecordingErrorFailedIncorrectTimeStamps](rprecordingerrorcode/failedincorrecttimestamps.md): Deprecated. The recording failed due to malformed start and end time intervals.
- [RPRecordingErrorFailedMediaServicesFailure](rprecordingerrorcode/failedmediaservicesfailure.md): Deprecated. The recording failed due to a mediaservices daemon failure.
- [RPRecordingErrorFailedNoAssetWriter](rprecordingerrorcode/failednoassetwriter.md): Deprecated. The recording failed because there is no asset writer available.
- [RPRecordingErrorFailedNoMatchingApplicationContext](rprecordingerrorcode/failednomatchingapplicationcontext.md): Deprecated. The context identifier doesn’t match the app identifier.
- [RPRecordingErrorFailedToObtainURL](rprecordingerrorcode/failedtoobtainurl.md): Deprecated. The recording failed due to a failure to obtain the URL.
- [RPRecordingErrorFailedToProcessFirstSample](rprecordingerrorcode/failedtoprocessfirstsample.md): Deprecated. The recording failed because the asset writer failed to process the first media sample.
- [RPRecordingErrorFailedToRemoveFile](rprecordingerrorcode/failedtoremovefile.md): Deprecated. The recording failed because the temporary file wasn’t removed.
- [RPRecordingErrorFailedToStartCaptureStack](rprecordingerrorcode/failedtostartcapturestack.md): Deprecated. The system failed to configure the app for A/V recording.
- [RPRecordingErrorFailedToStart](rprecordingerrorcode/failedtostart.md): Deprecated. Recording failed to start.
- [RPRecordingErrorFailedToSave](rprecordingerrorcode/failedtosave.md): Deprecated. The recording failed to save.
- [RPRecordingErrorFilePermissions](rprecordingerrorcode/filepermissions.md): Deprecated. The recording failed due to a file permission error.
- [RPRecordingErrorInsufficientStorage](rprecordingerrorcode/insufficientstorage.md): Deprecated. Not enough storage available on the device.
- [RPRecordingErrorInterrupted](rprecordingerrorcode/interrupted.md): Deprecated. Recording interrupted by another app.
- [RPRecordingErrorInvalidParameter](rprecordingerrorcode/invalidparameter.md): Deprecated. The recording failed because of an invalid parameter.
- [RPRecordingErrorPhotoFailure](rprecordingerrorcode/photofailure.md): Deprecated. Failed saving the video the Camera Roll.
- [RPRecordingErrorRecordingInvalidSession](rprecordingerrorcode/recordinginvalidsession.md): Deprecated. Attempted to start an invalid recording session.
- [RPRecordingErrorSystemDormancy](rprecordingerrorcode/systemdormancy.md): Deprecated. Recording forced to end by the user pressing the power button.
- [RPRecordingErrorUnknown](rprecordingerrorcode/unknown.md): Deprecated. Error cause unknown.
- [RPRecordingErrorUserDeclined](rprecordingerrorcode/userdeclined.md): Deprecated. User declined recording request.
- [RPRecordingErrorVideoMixingFailure](rprecordingerrorcode/videomixingfailure.md): Deprecated. The recording failed due to an A/V mixing failure.

### Enumeration Cases

- [RPRecordingErrorExportClipToURLInProgress](rprecordingerrorcode/exportcliptourlinprogress.md): Deprecated.

## See Also

### Errors

- [RPRecordingErrorDomain](rprecordingerrordomain.md): Deprecated. The ReplayKit error domain.
- [SCStreamErrorDomain](scstreamerrordomain.md)
