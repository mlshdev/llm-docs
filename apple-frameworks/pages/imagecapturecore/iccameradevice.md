> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevice](https://developer.apple.com/documentation/imagecapturecore/iccameradevice)

# ICCameraDevice (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

An object that represents a camera.

## Declaration

```swift
class ICCameraDevice
```

## Topics

### Reading Files

- [contents](iccameradevice/contents.md): All image, movie, and audio files stored on the camera, in an order that reflects the camera’s storage folder structure.
- [mediaFiles](iccameradevice/mediafiles.md): All image, movie and audio files stored on the camera, without regard to the camera’s storage folder structure.
- [contentCatalogPercentCompleted](iccameradevice/contentcatalogpercentcompleted.md): The percentage of the camera’s content that has been catalogued.
- [files(ofType:)](iccameradevice/files%28oftype_%29.md): Returns an array of files of the selected type on the camera.
- [requestReadData(from:atOffset:length:readDelegate:didReadDataSelector:contextInfo:)](iccameradevice/requestreaddata%28from_atoffset_length_readdelegate_didreaddataselector_contextinfo_%29.md): Asynchronously reads data of a specified length from a specified offset.

### Uploading Files

- [ICUploadOption](icuploadoption.md): An option for uploading a file to the camera.
- [requestUploadFile(\_:options:uploadDelegate:didUploadSelector:contextInfo:)](iccameradevice/requestuploadfile%28__options_uploaddelegate_diduploadselector_contextinfo_%29.md): Deprecated. Uploads a file to the camera.

### Downloading Files

- [ICDownloadOption](icdownloadoption.md): An option for downloading a file from the camera.
- [cancelDownload()](iccameradevice/canceldownload%28%29.md): Cancels a download from the camera.
- [requestDownloadFile(\_:options:downloadDelegate:didDownloadSelector:contextInfo:)](iccameradevice/requestdownloadfile%28__options_downloaddelegate_diddownloadselector_contextinfo_%29.md): Downloads a file from the camera.
- [ICCameraDeviceDownloadDelegate](iccameradevicedownloaddelegate.md): Methods for managing camera file downloads.

### Deleting Files

- [isLocked](iccameradevice/islocked.md): A Boolean value indicating whether the device is locked, preventing deletion of any asset.
- [ICDeleteResult](icdeleteresult.md): The result of a deletion request.
- [ICDeleteError](icdeleteerror.md): An error resulting from a deletion request.
- [requestDeleteFiles(\_:)](iccameradevice/requestdeletefiles%28__%29.md): Deletes files from the camera.
- [requestDeleteFiles(\_:deleteFailed:completion:)](iccameradevice/requestdeletefiles%28__deletefailed_completion_%29.md): Deletes files from the camera, with the ability to catch failures and execute a completion block.
- [cancelDelete()](iccameradevice/canceldelete%28%29.md): Cancels the current delete operation.

### Taking Pictures

- [tetheredCaptureEnabled](iccameradevice/tetheredcaptureenabled.md): A Boolean value indicating whether tethered capture is enabled on the camera.
- [ptpEventHandler](iccameradevice/ptpeventhandler.md): A closure for handling PTP event packets.
- [requestEnableTethering()](iccameradevice/requestenabletethering%28%29.md): Deprecated. Enables tethered capture if the camera has the capability to take pictures while connected.
- [requestTakePicture()](iccameradevice/requesttakepicture%28%29.md): Captures a new image using the camera.
- [requestSendPTPCommand(\_:outData:sendCommandDelegate:didSendCommand:contextInfo:)](iccameradevice/requestsendptpcommand%28__outdata_sendcommanddelegate_didsendcommand_contextinfo_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestSendPTPCommand(\_:outData:completion:)](iccameradevice/requestsendptpcommand%28__outdata_completion_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestDisableTethering()](iccameradevice/requestdisabletethering%28%29.md): Deprecated. Disables tethered capture on the camera.

### Inspecting the Battery Charge Level

- [batteryLevelAvailable](iccameradevice/batterylevelavailable.md): A Boolean value that indicates whether the battery charge level is available.
- [batteryLevel](iccameradevice/batterylevel.md): The battery charge level.

### Synchronizing the Clock

- [timeOffset](iccameradevice/timeoffset.md): The time offset, in seconds, between the camera’s clock and the computer’s clock.
- [requestSyncClock()](iccameradevice/requestsyncclock%28%29.md): Synchronizes the camera’s clock with the computer’s clock.

### Detecting Apple Devices

- [isAccessRestrictedAppleDevice](iccameradevice/isaccessrestrictedappledevice.md): A Boolean value indicating whether the device is an Apple device, passcode-locked, and connected to an untrusted host.
- [iCloudPhotosEnabled](iccameradevice/icloudphotosenabled.md): A Boolean value indicating whether the iCloud Photo Library is enabled on the device.

### Detecting Mass Storage Devices

- [mountPoint](iccameradevice/mountpoint.md): The file system mount point for a camera using the mass storage transport type.

### Removing a Device

- [isEjectable](iccameradevice/isejectable.md): A Boolean value indicating whether the device can be ‘soft’ removed or disconnected.

### Instance Properties

- [mediaPresentation](iccameradevice/mediapresentation.md)

## Relationships

### Inherits From

- [ICDevice](icdevice.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Cameras

- [ICCameraDeviceDelegate](iccameradevicedelegate.md): Methods for detecting cameras, getting metadata and thumbnails, handling access and capability changes, and performing other actions on connected cameras.
- [ICCameraItem](iccameraitem.md): An abstract class that represents a camera item.
- [ICCameraFile](iccamerafile.md): An object that represents a file on a camera.
- [ICCameraFolder](iccamerafolder.md): An object that represents a folder on a camera.

# ICCameraDevice (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

An object that represents a camera.

## Declaration

```objectivec
@interface ICCameraDevice : ICDevice
```

## Topics

### Reading Files

- [contents](iccameradevice/contents.md): All image, movie, and audio files stored on the camera, in an order that reflects the camera’s storage folder structure.
- [mediaFiles](iccameradevice/mediafiles.md): All image, movie and audio files stored on the camera, without regard to the camera’s storage folder structure.
- [contentCatalogPercentCompleted](iccameradevice/contentcatalogpercentcompleted.md): The percentage of the camera’s content that has been catalogued.
- [filesOfType:](iccameradevice/files%28oftype_%29.md): Returns an array of files of the selected type on the camera.
- [requestReadDataFromFile:atOffset:length:readDelegate:didReadDataSelector:contextInfo:](iccameradevice/requestreaddata%28from_atoffset_length_readdelegate_didreaddataselector_contextinfo_%29.md): Asynchronously reads data of a specified length from a specified offset.

### Uploading Files

- [ICUploadOption](icuploadoption.md): An option for uploading a file to the camera.
- [requestUploadFile:options:uploadDelegate:didUploadSelector:contextInfo:](iccameradevice/requestuploadfile%28__options_uploaddelegate_diduploadselector_contextinfo_%29.md): Deprecated. Uploads a file to the camera.

### Downloading Files

- [ICDownloadOption](icdownloadoption.md): An option for downloading a file from the camera.
- [cancelDownload](iccameradevice/canceldownload%28%29.md): Cancels a download from the camera.
- [requestDownloadFile:options:downloadDelegate:didDownloadSelector:contextInfo:](iccameradevice/requestdownloadfile%28__options_downloaddelegate_diddownloadselector_contextinfo_%29.md): Downloads a file from the camera.
- [ICCameraDeviceDownloadDelegate](iccameradevicedownloaddelegate.md): Methods for managing camera file downloads.

### Deleting Files

- [locked](iccameradevice/islocked.md): A Boolean value indicating whether the device is locked, preventing deletion of any asset.
- [ICDeleteResult](icdeleteresult.md): The result of a deletion request.
- [ICDeleteError](icdeleteerror.md): An error resulting from a deletion request.
- [requestDeleteFiles:](iccameradevice/requestdeletefiles%28__%29.md): Deletes files from the camera.
- [requestDeleteFiles:deleteFailed:completion:](iccameradevice/requestdeletefiles%28__deletefailed_completion_%29.md): Deletes files from the camera, with the ability to catch failures and execute a completion block.
- [cancelDelete](iccameradevice/canceldelete%28%29.md): Cancels the current delete operation.

### Taking Pictures

- [tetheredCaptureEnabled](iccameradevice/tetheredcaptureenabled.md): A Boolean value indicating whether tethered capture is enabled on the camera.
- [ptpEventHandler](iccameradevice/ptpeventhandler.md): A closure for handling PTP event packets.
- [requestEnableTethering](iccameradevice/requestenabletethering%28%29.md): Deprecated. Enables tethered capture if the camera has the capability to take pictures while connected.
- [requestTakePicture](iccameradevice/requesttakepicture%28%29.md): Captures a new image using the camera.
- [requestSendPTPCommand:outData:sendCommandDelegate:didSendCommandSelector:contextInfo:](iccameradevice/requestsendptpcommand%28__outdata_sendcommanddelegate_didsendcommand_contextinfo_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestSendPTPCommand:outData:completion:](iccameradevice/requestsendptpcommand%28__outdata_completion_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestDisableTethering](iccameradevice/requestdisabletethering%28%29.md): Deprecated. Disables tethered capture on the camera.

### Inspecting the Battery Charge Level

- [batteryLevelAvailable](iccameradevice/batterylevelavailable.md): A Boolean value that indicates whether the battery charge level is available.
- [batteryLevel](iccameradevice/batterylevel.md): The battery charge level.

### Synchronizing the Clock

- [timeOffset](iccameradevice/timeoffset.md): The time offset, in seconds, between the camera’s clock and the computer’s clock.
- [requestSyncClock](iccameradevice/requestsyncclock%28%29.md): Synchronizes the camera’s clock with the computer’s clock.

### Detecting Apple Devices

- [accessRestrictedAppleDevice](iccameradevice/isaccessrestrictedappledevice.md): A Boolean value indicating whether the device is an Apple device, passcode-locked, and connected to an untrusted host.
- [iCloudPhotosEnabled](iccameradevice/icloudphotosenabled.md): A Boolean value indicating whether the iCloud Photo Library is enabled on the device.

### Detecting Mass Storage Devices

- [mountPoint](iccameradevice/mountpoint.md): The file system mount point for a camera using the mass storage transport type.

### Removing a Device

- [ejectable](iccameradevice/isejectable.md): A Boolean value indicating whether the device can be ‘soft’ removed or disconnected.

### Instance Properties

- [mediaPresentation](iccameradevice/mediapresentation.md)

## Relationships

### Inherits From

- [ICDevice](icdevice.md)

## See Also

### Cameras

- [ICCameraDeviceDelegate](iccameradevicedelegate.md): Methods for detecting cameras, getting metadata and thumbnails, handling access and capability changes, and performing other actions on connected cameras.
- [ICCameraItem](iccameraitem.md): An abstract class that represents a camera item.
- [ICCameraFile](iccamerafile.md): An object that represents a file on a camera.
- [ICCameraFolder](iccamerafolder.md): An object that represents a folder on a camera.
