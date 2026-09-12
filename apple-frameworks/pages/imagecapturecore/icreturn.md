> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icreturn](https://developer.apple.com/documentation/imagecapturecore/icreturn)

# ICReturn

**Framework:** ImageCaptureCore  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

## Declaration

```swift
struct ICReturn
```

## Topics

### Type Properties

- [communicationTimedOut](icreturn/communicationtimedout.md): Communication between different components of Image Capture timed out.
- [deleteFilesCanceled](icreturn/deletefilescanceled.md): A request to delete files was canceled.
- [deleteFilesFailed](icreturn/deletefilesfailed.md): A request to delete files failed.
- [deviceCommandGeneralFailure](icreturn/devicecommandgeneralfailure.md): The device has experienced a general failure.
- [deviceCouldNotPair](icreturn/devicecouldnotpair.md): A pairing request for an Apple Device failed.
- [deviceCouldNotUnpair](icreturn/devicecouldnotunpair.md): An unpairing request for an Apple Device failed.
- [deviceFailedToCloseSession](icreturn/devicefailedtoclosesession.md): Failed to close a session on a specified device.
- [deviceFailedToCompleteTransfer](icreturn/devicefailedtocompletetransfer.md): Failed to complete a data transaction.
- [deviceFailedToOpenSession](icreturn/devicefailedtoopensession.md): Failed to open a session on a specified device.
- [deviceFailedToSendData](icreturn/devicefailedtosenddata.md): Failed to send data.
- [deviceFailedToTakePicture](icreturn/devicefailedtotakepicture.md): Failed to take a tethered-capture picture on a camera device.
- [deviceIsBusyEnumerating](icreturn/deviceisbusyenumerating.md): The device is currently enumerating assets.
- [deviceIsPasscodeLocked](icreturn/deviceispasscodelocked.md): The device is locked with a passcode. Its contents cannot be seen unless it is unlocked.
- [deviceNeedsCredentials](icreturn/deviceneedscredentials.md): The device reports credentials are required to open the device.
- [deviceSoftwareInstallationCanceled](icreturn/devicesoftwareinstallationcanceled.md): Software installation for the device has been canceled.
- [deviceSoftwareInstallationCompleted](icreturn/devicesoftwareinstallationcompleted.md): Software installation for the device has completed successfully.
- [deviceSoftwareInstallationFailed](icreturn/devicesoftwareinstallationfailed.md): Software installation for the device failed.
- [deviceSoftwareIsBeingInstalled](icreturn/devicesoftwareisbeinginstalled.md): Failed to open session because software to communicate with the device is being installed.
- [deviceSoftwareNotAvailable](icreturn/devicesoftwarenotavailable.md): Software for the device is not available from Apple.
- [deviceSoftwareNotInstalled](icreturn/devicesoftwarenotinstalled.md): Failed to open session because software to communicate with the device is not installed.
- [downloadCanceled](icreturn/downloadcanceled.md): A download operation was canceled.
- [downloadFailed](icreturn/downloadfailed.md): A non-specific error occurred while downloading a file.
- [errorDomain](icreturn/errordomain.md)
- [exFATVolumeInvalid](icreturn/exfatvolumeinvalid.md): EXFAT volume is invalid, and cannot be enumerated.
- [failedToCompletePassThroughCommand](icreturn/failedtocompletepassthroughcommand.md): Failed to complete a pass-through (e.g., PTP pass-through) command.
- [failedToCompleteSendMessageRequest](icreturn/failedtocompletesendmessagerequest.md): A request to send a message to a device failed.
- [failedToDisabeTethering](icreturn/failedtodisabetethering.md): A request to send a message to a device failed.
- [failedToEnabeTethering](icreturn/failedtoenabetethering.md): Failed to enable tethered-capture on a camera device.
- [invalidParam](icreturn/invalidparam.md): An invalid parameter was found.
- [multiErrorDictionary](icreturn/multierrordictionary.md): Multierror
- [receivedUnsolicitedScannerErrorInfo](icreturn/receivedunsolicitedscannererrorinfo.md): An unsolicited error information was received from a scanner.
- [receivedUnsolicitedScannerStatusInfo](icreturn/receivedunsolicitedscannerstatusinfo.md): An unsolicited status information was received from a scanner.
- [scanOperationCanceled](icreturn/scanoperationcanceled.md): The scan operation is canceled.
- [scannerFailedToCompleteOverviewScan](icreturn/scannerfailedtocompleteoverviewscan.md): Overview scan operation failed to complete on the specified scanner.
- [scannerFailedToCompleteScan](icreturn/scannerfailedtocompletescan.md): Scan operation failed to complete on the specified scanner.
- [scannerFailedToSelectFunctionalUnit](icreturn/scannerfailedtoselectfunctionalunit.md): Failed to select a functional unit on the specified scanner.
- [scannerInUseByLocalUser](icreturn/scannerinusebylocaluser.md): Scanner is being used by a local user.
- [scannerInUseByRemoteUser](icreturn/scannerinusebyremoteuser.md): Scanner is being used by a remote user.
- [sessionNotOpened](icreturn/sessionnotopened.md): Session is not open.
- [success](icreturn/success.md): Operation successful.
- [uploadFailed](icreturn/uploadfailed.md): A non-specific error occurred while updownloading a file.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [ICLegacyReturn](iclegacyreturn.md)
- [ICReturnConnectionError](icreturnconnectionerror.md): A connection error returned from ImageCaptureCore.
- [ICReturnDownloadError](icreturndownloaderror.md): A download error returned from ImageCaptureCore.
- [ICReturnMetadataError](icreturnmetadataerror.md): A metadata error returned from ImageCaptureCore.
- [ICReturnObjectError](icreturnobjecterror.md): An object error returned from ImageCaptureCore.
- [ICReturnPTPDeviceError](icreturnptpdeviceerror.md): A PTP device error returned from ImageCaptureCore.
- [ICReturnThumbnailError](icreturnthumbnailerror.md): A thumbnail error returned from ImageCaptureCore.
