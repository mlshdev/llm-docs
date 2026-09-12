> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/averror-swift.struct/code](https://developer.apple.com/documentation/avfoundation/averror-swift.struct/code)

# AVError.Code (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An enumeration that defines the errors that framework operations can generate.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [AVError.Code.airPlayControllerRequiresInternet](code/airplaycontrollerrequiresinternet.md): The AirPlay controller requires an internet connection to function.
- [AVError.Code.airPlayReceiverRequiresInternet](code/airplayreceiverrequiresinternet.md): The AirPlay receiver requires an internet connection to function.
- [AVError.Code.airPlayReceiverTemporarilyUnavailable](code/airplayreceivertemporarilyunavailable.md): An AirPlay receiver is temporarily unavailable.
- [AVError.Code.applicationIsNotAuthorized](code/applicationisnotauthorized.md): The app isn’t authorized to play media.
- [AVError.Code.applicationIsNotAuthorizedToUseDevice](code/applicationisnotauthorizedtousedevice.md): The user denied this app permission to capture media.
- [AVError.Code.autoWhiteBalanceNotLocked](code/autowhitebalancenotlocked.md)
- [AVError.Code.compositionTrackSegmentsNotContiguous](code/compositiontracksegmentsnotcontiguous.md): The composition can’t add the source media because it contains gaps.
- [AVError.Code.contentIsNotAuthorized](code/contentisnotauthorized.md): The user isn’t authorized to play the media.
- [AVError.Code.contentIsProtected](code/contentisprotected.md): The app isn’t authorized to open the media.
- [AVError.Code.contentIsUnavailable](code/contentisunavailable.md): The captured content is unavailable.
- [AVError.Code.contentKeyRequestCancelled](code/contentkeyrequestcancelled.md): The app canceled a request to retrieve a content key.
- [AVError.Code.contentNotUpdated](code/contentnotupdated.md): The system couldn’t update the captured content.
- [AVError.Code.createContentKeyRequestFailed](code/createcontentkeyrequestfailed.md): The app couldn’t create a content key request.
- [AVError.Code.decodeFailed](code/decodefailed.md): The system failed to decode the media.
- [AVError.Code.decoderNotFound](code/decodernotfound.md): The system can’t find a suitable decoder for the media.
- [AVError.Code.decoderTemporarilyUnavailable](code/decodertemporarilyunavailable.md): A suitable decoder for the media is temporarily available.
- [AVError.Code.deviceAlreadyUsedByAnotherSession](code/devicealreadyusedbyanothersession.md): Your app can’t access the device because another session is currently using it.
- [AVError.Code.deviceInUseByAnotherApplication](code/deviceinusebyanotherapplication.md): Your app can’t access the device because another app is currently using it.
- [AVError.Code.deviceIsNotAvailableInBackground](code/deviceisnotavailableinbackground.md): Deprecated. You attempted to start a capture session in the background, which isn’t allowed in iOS.
- [AVError.Code.deviceLockedForConfigurationByAnotherProcess](code/devicelockedforconfigurationbyanotherprocess.md): Your app can’t change device settings because another process currently controls the device.
- [AVError.Code.deviceNotConnected](code/devicenotconnected.md): You app can’t access the device because it isn’t connected.
- [AVError.Code.deviceWasDisconnected](code/devicewasdisconnected.md): A previously connected device is no longer accessible.
- [AVError.Code.diskFull](code/diskfull.md): Recording stopped because the disk is full.
- [AVError.Code.displayWasDisabled](code/displaywasdisabled.md): Screen capture failed because the display was inactive.
- [AVError.Code.encodeFailed](code/encodefailed.md): The system couldn’t encode the media data.
- [AVError.Code.encoderNotFound](code/encodernotfound.md): The requested encoder isn’t found.
- [AVError.Code.encoderTemporarilyUnavailable](code/encodertemporarilyunavailable.md): An appropriate encoder isn’t currently available.
- [AVError.Code.exportFailed](code/exportfailed.md): The requested export operation failed.
- [AVError.Code.externalPlaybackNotSupportedForAsset](code/externalplaybacknotsupportedforasset.md): The current asset doesn’t support playback.
- [AVError.Code.failedToLoadMediaData](code/failedtoloadmediadata.md): The system can’t load the requested media data.
- [AVError.Code.failedToLoadSampleData](code/failedtoloadsampledata.md): The system can’t load the requested sample data.
- [AVError.Code.failedToParse](code/failedtoparse.md): The system can’t parse the media.
- [AVError.Code.fileAlreadyExists](code/filealreadyexists.md): A file with the same name exists at the location and you can’t overwrite it.
- [AVError.Code.fileFailedToParse](code/filefailedtoparse.md): The file is corrupt or in an unrecognized format.
- [AVError.Code.fileFormatNotRecognized](code/fileformatnotrecognized.md): The system can’t open the file because it’s in an unrecognized format.
- [AVError.Code.fileTypeDoesNotSupportSampleReferences](code/filetypedoesnotsupportsamplereferences.md): The file type doesn’t support sample references.
- [AVError.Code.followExternalSyncDeviceTimedOut](code/followexternalsyncdevicetimedout.md)
- [AVError.Code.formatUnsupported](code/formatunsupported.md): The current asset format isn’t supported.
- [AVError.Code.incompatibleAsset](code/incompatibleasset.md): You can’t display the media because the device isn’t capable of playing the content.
- [AVError.Code.incorrectlyConfigured](code/incorrectlyconfigured.md): The system is incorrectly configured for the requested operation.
- [AVError.Code.invalidCompositionTrackSegmentDuration](code/invalidcompositiontracksegmentduration.md): You can’t add the source media because its duration in the destination is invalid.
- [AVError.Code.invalidCompositionTrackSegmentSourceDuration](code/invalidcompositiontracksegmentsourceduration.md): You can’t add the source media because it has no duration.
- [AVError.Code.invalidCompositionTrackSegmentSourceStartTime](code/invalidcompositiontracksegmentsourcestarttime.md): You can’t add the source media because its start time in the destination is invalid.
- [AVError.Code.invalidOutputURLPathExtension](code/invalidoutputurlpathextension.md): The path extension of the output URL is invalid.
- [AVError.Code.invalidSampleCursor](code/invalidsamplecursor.md): An invalid sample cursor produced an error.
- [AVError.Code.invalidSourceMedia](code/invalidsourcemedia.md): The system couldn’t read the source media.
- [AVError.Code.invalidVideoComposition](code/invalidvideocomposition.md): You attempted to present an unsupported video composition.
- [AVError.Code.malformedDepth](code/malformeddepth.md): The depth data isn’t properly structured.
- [AVError.Code.maximumDurationReached](code/maximumdurationreached.md): The recording stopped because it reached the file’s maximum duration.
- [AVError.Code.maximumFileSizeReached](code/maximumfilesizereached.md): The recording stopped because it reached the file’s maximum size.
- [AVError.Code.maximumNumberOfSamplesForFileFormatReached](code/maximumnumberofsamplesforfileformatreached.md): The recording stopped because it reached the file’s maximum number of samples.
- [AVError.Code.maximumStillImageCaptureRequestsExceeded](code/maximumstillimagecapturerequestsexceeded.md): Your app can’t take a photo because there are too many unfinished photo capture requests.
- [AVError.Code.mediaChanged](code/mediachanged.md): Recording stopped because the format of the source media changed.
- [AVError.Code.mediaDiscontinuity](code/mediadiscontinuity.md): Recording stopped because there was an interruption in the input media.
- [AVError.Code.mediaExtensionConflict](code/mediaextensionconflict.md)
- [AVError.Code.mediaExtensionDisabled](code/mediaextensiondisabled.md)
- [AVError.Code.mediaServicesWereReset](code/mediaserviceswerereset.md): The system couldn’t perform the operation because media services were unavailable.
- [AVError.Code.noCompatibleAlternatesForExternalDisplay](code/nocompatiblealternatesforexternaldisplay.md): The system found no compatible external displays.
- [AVError.Code.noDataCaptured](code/nodatacaptured.md): The recording failed because the system received no data.
- [AVError.Code.noImageAtTime](code/noimageattime.md): No image is available in the media at the indicated time.
- [AVError.Code.noLongerPlayable](code/nolongerplayable.md): The asset is no longer playable.
- [AVError.Code.noSmartFramingsEnabled](code/nosmartframingsenabled.md)
- [AVError.Code.noSourceTrack](code/nosourcetrack.md): The asset doesn’t contain a source track.
- [AVError.Code.operationCancelled](code/operationcancelled.md): The asset handled a request to cancel loading a property value asynchronously.
- [AVError.Code.operationInterrupted](code/operationinterrupted.md): An interruption occurred while performing a reading or writing operation.
- [AVError.Code.operationNotAllowed](code/operationnotallowed.md): The requested operation isn’t allowed.
- [AVError.Code.operationNotSupportedForAsset](code/operationnotsupportedforasset.md): Your app attempted to perform an unsupported operation with the asset.
- [AVError.Code.operationNotSupportedForPreset](code/operationnotsupportedforpreset.md): Your app attempted to perform an unsupported operation for the current preset.
- [AVError.Code.outOfMemory](code/outofmemory.md): The operation couldn’t finish because there isn’t enough memory available to process the media.
- [AVError.Code.recordingAlreadyInProgress](code/recordingalreadyinprogress.md): Your app attempted to start recording a movie file while an existing recording is underway.
- [AVError.Code.referenceForbiddenByReferencePolicy](code/referenceforbiddenbyreferencepolicy.md): The current reference restrictions prevent the system from loading referenced media.
- [AVError.Code.rosettaNotInstalled](code/rosettanotinstalled.md): The system doesn’t have Rosetta installed and can’t perform the requested operation.
- [AVError.Code.sandboxExtensionDenied](code/sandboxextensiondenied.md): The system denied issuing the sandbox extension.
- [AVError.Code.screenCaptureFailed](code/screencapturefailed.md): An unexpected problem occurred that prevented screen capture.
- [AVError.Code.segmentStartedWithNonSyncSample](code/segmentstartedwithnonsyncsample.md): The operation attempted to write a new MPEG-4 segment that didn’t start with a sync sample.
- [AVError.Code.serverIncorrectlyConfigured](code/serverincorrectlyconfigured.md): The configuration of the HTTP server that streams the media resource isn’t correct.
- [AVError.Code.sessionConfigurationChanged](code/sessionconfigurationchanged.md): Recording stopped because the configuration of media sources and destinations changed.
- [AVError.Code.sessionHardwareCostOverage](code/sessionhardwarecostoverage.md): Your app requested too many camera hardware resources.
- [AVError.Code.sessionNotRunning](code/sessionnotrunning.md): The recording couldn’t start because the session isn’t running.
- [AVError.Code.sessionWasInterrupted](code/sessionwasinterrupted.md): The recording stopped because the system interrupted the audio session.
- [AVError.Code.toneMappingFailed](code/tonemappingfailed.md): The requested tone mapping failed.
- [AVError.Code.torchLevelUnavailable](code/torchlevelunavailable.md): The specified torch level is valid but currently unavailable, possibly due to overheating.
- [AVError.Code.undecodableMediaData](code/undecodablemediadata.md): The system couldn’t decode the media data.
- [AVError.Code.unknown](code/unknown.md): An unknown error occurred.
- [AVError.Code.unsupportedDeviceActiveFormat](code/unsupporteddeviceactiveformat.md): The capture session doesn’t support the camera device’s active format.
- [AVError.Code.unsupportedOutputSettings](code/unsupportedoutputsettings.md): Your app requested unsupported output settings.
- [AVError.Code.videoCompositorFailed](code/videocompositorfailed.md): The compositor couldn’t composite video frames.

### Enumeration Cases

- [AVError.Code.externalSyncDeviceFrequencyHigherThanSpecified](code/externalsyncdevicefrequencyhigherthanspecified.md)
- [AVError.Code.externalSyncDeviceFrequencyLowerThanSpecified](code/externalsyncdevicefrequencylowerthanspecified.md)
- [AVError.Code.followExternalSyncFailed](code/followexternalsyncfailed.md)
- [AVError.Code.notEnoughSpaceForProVideoStorageReplenishment](code/notenoughspaceforprovideostoragereplenishment.md)

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AVError (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An enumeration that defines the errors that framework operations can generate.

## Declaration

```objectivec
enum AVError : NSInteger;
```

## Topics

### Error codes

- [AVErrorAirPlayControllerRequiresInternet](code/airplaycontrollerrequiresinternet.md): The AirPlay controller requires an internet connection to function.
- [AVErrorAirPlayReceiverRequiresInternet](code/airplayreceiverrequiresinternet.md): The AirPlay receiver requires an internet connection to function.
- [AVErrorAirPlayReceiverTemporarilyUnavailable](code/airplayreceivertemporarilyunavailable.md): An AirPlay receiver is temporarily unavailable.
- [AVErrorApplicationIsNotAuthorized](code/applicationisnotauthorized.md): The app isn’t authorized to play media.
- [AVErrorApplicationIsNotAuthorizedToUseDevice](code/applicationisnotauthorizedtousedevice.md): The user denied this app permission to capture media.
- [AVErrorAutoWhiteBalanceNotLocked](code/autowhitebalancenotlocked.md)
- [AVErrorContentKeyInvalid](../averror-c.enum/averrorcontentkeyinvalid.md)
- [AVErrorContentKeyRequestPlaybackDestinationDoesNotSupportDeviceIdentifierRandomization](../averror-c.enum/averrorcontentkeyrequestplaybackdestinationdoesnotsupportdeviceidentifierrandomization.md)
- [AVErrorCompositionTrackSegmentsNotContiguous](code/compositiontracksegmentsnotcontiguous.md): The composition can’t add the source media because it contains gaps.
- [AVErrorContentIsNotAuthorized](code/contentisnotauthorized.md): The user isn’t authorized to play the media.
- [AVErrorContentIsProtected](code/contentisprotected.md): The app isn’t authorized to open the media.
- [AVErrorContentIsUnavailable](code/contentisunavailable.md): The captured content is unavailable.
- [AVErrorContentKeyRequestCancelled](code/contentkeyrequestcancelled.md): The app canceled a request to retrieve a content key.
- [AVErrorContentNotUpdated](code/contentnotupdated.md): The system couldn’t update the captured content.
- [AVErrorCreateContentKeyRequestFailed](code/createcontentkeyrequestfailed.md): The app couldn’t create a content key request.
- [AVErrorDecodeFailed](code/decodefailed.md): The system failed to decode the media.
- [AVErrorDecoderNotFound](code/decodernotfound.md): The system can’t find a suitable decoder for the media.
- [AVErrorDecoderTemporarilyUnavailable](code/decodertemporarilyunavailable.md): A suitable decoder for the media is temporarily available.
- [AVErrorDeviceAlreadyUsedByAnotherSession](code/devicealreadyusedbyanothersession.md): Your app can’t access the device because another session is currently using it.
- [AVErrorDeviceInUseByAnotherApplication](code/deviceinusebyanotherapplication.md): Your app can’t access the device because another app is currently using it.
- [AVErrorDeviceIsNotAvailableInBackground](code/deviceisnotavailableinbackground.md): Deprecated. You attempted to start a capture session in the background, which isn’t allowed in iOS.
- [AVErrorDeviceLockedForConfigurationByAnotherProcess](code/devicelockedforconfigurationbyanotherprocess.md): Your app can’t change device settings because another process currently controls the device.
- [AVErrorDeviceNotConnected](code/devicenotconnected.md): You app can’t access the device because it isn’t connected.
- [AVErrorDeviceWasDisconnected](code/devicewasdisconnected.md): A previously connected device is no longer accessible.
- [AVErrorDiskFull](code/diskfull.md): Recording stopped because the disk is full.
- [AVErrorDisplayWasDisabled](code/displaywasdisabled.md): Screen capture failed because the display was inactive.
- [AVErrorEncodeFailed](code/encodefailed.md): The system couldn’t encode the media data.
- [AVErrorEncoderNotFound](code/encodernotfound.md): The requested encoder isn’t found.
- [AVErrorEncoderTemporarilyUnavailable](code/encodertemporarilyunavailable.md): An appropriate encoder isn’t currently available.
- [AVErrorExportFailed](code/exportfailed.md): The requested export operation failed.
- [AVErrorExternalPlaybackNotSupportedForAsset](code/externalplaybacknotsupportedforasset.md): The current asset doesn’t support playback.
- [AVErrorFailedToLoadMediaData](code/failedtoloadmediadata.md): The system can’t load the requested media data.
- [AVErrorFailedToLoadSampleData](code/failedtoloadsampledata.md): The system can’t load the requested sample data.
- [AVErrorFailedToParse](code/failedtoparse.md): The system can’t parse the media.
- [AVErrorFileAlreadyExists](code/filealreadyexists.md): A file with the same name exists at the location and you can’t overwrite it.
- [AVErrorFileFailedToParse](code/filefailedtoparse.md): The file is corrupt or in an unrecognized format.
- [AVErrorFileFormatNotRecognized](code/fileformatnotrecognized.md): The system can’t open the file because it’s in an unrecognized format.
- [AVErrorFileTypeDoesNotSupportSampleReferences](code/filetypedoesnotsupportsamplereferences.md): The file type doesn’t support sample references.
- [AVErrorFollowExternalSyncDeviceTimedOut](code/followexternalsyncdevicetimedout.md)
- [AVErrorFormatUnsupported](code/formatunsupported.md): The current asset format isn’t supported.
- [AVErrorIncompatibleAsset](code/incompatibleasset.md): You can’t display the media because the device isn’t capable of playing the content.
- [AVErrorIncorrectlyConfigured](code/incorrectlyconfigured.md): The system is incorrectly configured for the requested operation.
- [AVErrorInvalidCompositionTrackSegmentDuration](code/invalidcompositiontracksegmentduration.md): You can’t add the source media because its duration in the destination is invalid.
- [AVErrorInvalidCompositionTrackSegmentSourceDuration](code/invalidcompositiontracksegmentsourceduration.md): You can’t add the source media because it has no duration.
- [AVErrorInvalidCompositionTrackSegmentSourceStartTime](code/invalidcompositiontracksegmentsourcestarttime.md): You can’t add the source media because its start time in the destination is invalid.
- [AVErrorInvalidOutputURLPathExtension](code/invalidoutputurlpathextension.md): The path extension of the output URL is invalid.
- [AVErrorInvalidSampleCursor](code/invalidsamplecursor.md): An invalid sample cursor produced an error.
- [AVErrorInvalidSourceMedia](code/invalidsourcemedia.md): The system couldn’t read the source media.
- [AVErrorInvalidVideoComposition](code/invalidvideocomposition.md): You attempted to present an unsupported video composition.
- [AVErrorMalformedDepth](code/malformeddepth.md): The depth data isn’t properly structured.
- [AVErrorMaximumDurationReached](code/maximumdurationreached.md): The recording stopped because it reached the file’s maximum duration.
- [AVErrorMaximumFileSizeReached](code/maximumfilesizereached.md): The recording stopped because it reached the file’s maximum size.
- [AVErrorMaximumNumberOfSamplesForFileFormatReached](code/maximumnumberofsamplesforfileformatreached.md): The recording stopped because it reached the file’s maximum number of samples.
- [AVErrorMaximumStillImageCaptureRequestsExceeded](code/maximumstillimagecapturerequestsexceeded.md): Your app can’t take a photo because there are too many unfinished photo capture requests.
- [AVErrorMediaChanged](code/mediachanged.md): Recording stopped because the format of the source media changed.
- [AVErrorMediaDiscontinuity](code/mediadiscontinuity.md): Recording stopped because there was an interruption in the input media.
- [AVErrorMediaExtensionConflict](code/mediaextensionconflict.md)
- [AVErrorMediaExtensionDisabled](code/mediaextensiondisabled.md)
- [AVErrorMediaServicesWereReset](code/mediaserviceswerereset.md): The system couldn’t perform the operation because media services were unavailable.
- [AVErrorNoCompatibleAlternatesForExternalDisplay](code/nocompatiblealternatesforexternaldisplay.md): The system found no compatible external displays.
- [AVErrorNoDataCaptured](code/nodatacaptured.md): The recording failed because the system received no data.
- [AVErrorNoImageAtTime](code/noimageattime.md): No image is available in the media at the indicated time.
- [AVErrorNoLongerPlayable](code/nolongerplayable.md): The asset is no longer playable.
- [AVErrorNoSmartFramingsEnabled](code/nosmartframingsenabled.md)
- [AVErrorNoSourceTrack](code/nosourcetrack.md): The asset doesn’t contain a source track.
- [AVErrorOperationCancelled](code/operationcancelled.md): The asset handled a request to cancel loading a property value asynchronously.
- [AVErrorOperationInterrupted](code/operationinterrupted.md): An interruption occurred while performing a reading or writing operation.
- [AVErrorOperationNotAllowed](code/operationnotallowed.md): The requested operation isn’t allowed.
- [AVErrorOperationNotSupportedForAsset](code/operationnotsupportedforasset.md): Your app attempted to perform an unsupported operation with the asset.
- [AVErrorOperationNotSupportedForPreset](code/operationnotsupportedforpreset.md): Your app attempted to perform an unsupported operation for the current preset.
- [AVErrorOutOfMemory](code/outofmemory.md): The operation couldn’t finish because there isn’t enough memory available to process the media.
- [AVErrorRecordingAlreadyInProgress](code/recordingalreadyinprogress.md): Your app attempted to start recording a movie file while an existing recording is underway.
- [AVErrorReferenceForbiddenByReferencePolicy](code/referenceforbiddenbyreferencepolicy.md): The current reference restrictions prevent the system from loading referenced media.
- [AVErrorRosettaNotInstalled](code/rosettanotinstalled.md): The system doesn’t have Rosetta installed and can’t perform the requested operation.
- [AVErrorSandboxExtensionDenied](code/sandboxextensiondenied.md): The system denied issuing the sandbox extension.
- [AVErrorScreenCaptureFailed](code/screencapturefailed.md): An unexpected problem occurred that prevented screen capture.
- [AVErrorSegmentStartedWithNonSyncSample](code/segmentstartedwithnonsyncsample.md): The operation attempted to write a new MPEG-4 segment that didn’t start with a sync sample.
- [AVErrorServerIncorrectlyConfigured](code/serverincorrectlyconfigured.md): The configuration of the HTTP server that streams the media resource isn’t correct.
- [AVErrorSessionConfigurationChanged](code/sessionconfigurationchanged.md): Recording stopped because the configuration of media sources and destinations changed.
- [AVErrorSessionHardwareCostOverage](code/sessionhardwarecostoverage.md): Your app requested too many camera hardware resources.
- [AVErrorSessionNotRunning](code/sessionnotrunning.md): The recording couldn’t start because the session isn’t running.
- [AVErrorSessionWasInterrupted](code/sessionwasinterrupted.md): The recording stopped because the system interrupted the audio session.
- [AVErrorToneMappingFailed](code/tonemappingfailed.md): The requested tone mapping failed.
- [AVErrorTorchLevelUnavailable](code/torchlevelunavailable.md): The specified torch level is valid but currently unavailable, possibly due to overheating.
- [AVErrorUndecodableMediaData](code/undecodablemediadata.md): The system couldn’t decode the media data.
- [AVErrorUnknown](code/unknown.md): An unknown error occurred.
- [AVErrorUnsupportedDeviceActiveFormat](code/unsupporteddeviceactiveformat.md): The capture session doesn’t support the camera device’s active format.
- [AVErrorUnsupportedOutputSettings](code/unsupportedoutputsettings.md): Your app requested unsupported output settings.
- [AVErrorVideoCompositorFailed](code/videocompositorfailed.md): The compositor couldn’t composite video frames.

### Enumeration Cases

- [AVErrorExternalSyncDeviceFrequencyHigherThanSpecified](code/externalsyncdevicefrequencyhigherthanspecified.md)
- [AVErrorExternalSyncDeviceFrequencyLowerThanSpecified](code/externalsyncdevicefrequencylowerthanspecified.md)
- [AVErrorFollowExternalSyncFailed](code/followexternalsyncfailed.md)
- [AVErrorNotEnoughSpaceForProVideoStorageReplenishment](code/notenoughspaceforprovideostoragereplenishment.md)

## See Also

### Errors

- [AVFoundationErrorDomain](../avfoundationerrordomain.md): The error domain of AVFoundation errors.
