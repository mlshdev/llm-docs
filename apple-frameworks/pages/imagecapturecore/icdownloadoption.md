> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdownloadoption](https://developer.apple.com/documentation/imagecapturecore/icdownloadoption)

# ICDownloadOption (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

An option for downloading a file from the camera.

## Declaration

```swift
struct ICDownloadOption
```

## Topics

### Download Options

- [downloadsDirectoryURL](icdownloadoption/downloadsdirectoryurl.md): A writable directory where the downloaded files should be saved.
- [saveAsFilename](icdownloadoption/saveasfilename.md): The name to be used for the downloaded file.
- [savedFilename](icdownloadoption/savedfilename.md): The actual name of the saved file.
- [savedAncillaryFiles](icdownloadoption/savedancillaryfiles.md): An array of files associated with the file being downloaded.
- [overwrite](icdownloadoption/overwrite.md): A Boolean value indicating whether the downloaded file should overwrite an existing file with the same name and extension.
- [deleteAfterSuccessfulDownload](icdownloadoption/deleteaftersuccessfuldownload.md): A Boolean value indicating whether to delete the file from the device after a successful download.
- [sidecarFiles](icdownloadoption/sidecarfiles.md): A Boolean value indicating whether to download all sidecar files along with the media file.

### Initializers

- [init(rawValue:)](icdownloadoption/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Downloading Files

- [cancelDownload()](iccameradevice/canceldownload%28%29.md): Cancels a download from the camera.
- [requestDownloadFile(\_:options:downloadDelegate:didDownloadSelector:contextInfo:)](iccameradevice/requestdownloadfile%28__options_downloaddelegate_diddownloadselector_contextinfo_%29.md): Downloads a file from the camera.
- [ICCameraDeviceDownloadDelegate](iccameradevicedownloaddelegate.md): Methods for managing camera file downloads.

# ICDownloadOption (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

An option for downloading a file from the camera.

## Declaration

```objectivec
typedef NSString * ICDownloadOption;
```

## Topics

### Download Options

- [ICDownloadsDirectoryURL](icdownloadoption/downloadsdirectoryurl.md): A writable directory where the downloaded files should be saved.
- [ICSaveAsFilename](icdownloadoption/saveasfilename.md): The name to be used for the downloaded file.
- [ICSavedFilename](icdownloadoption/savedfilename.md): The actual name of the saved file.
- [ICSavedAncillaryFiles](icdownloadoption/savedancillaryfiles.md): An array of files associated with the file being downloaded.
- [ICOverwrite](icdownloadoption/overwrite.md): A Boolean value indicating whether the downloaded file should overwrite an existing file with the same name and extension.
- [ICDeleteAfterSuccessfulDownload](icdownloadoption/deleteaftersuccessfuldownload.md): A Boolean value indicating whether to delete the file from the device after a successful download.
- [ICDownloadSidecarFiles](icdownloadoption/sidecarfiles.md): A Boolean value indicating whether to download all sidecar files along with the media file.

## See Also

### Downloading Files

- [cancelDownload](iccameradevice/canceldownload%28%29.md): Cancels a download from the camera.
- [requestDownloadFile:options:downloadDelegate:didDownloadSelector:contextInfo:](iccameradevice/requestdownloadfile%28__options_downloaddelegate_diddownloadselector_contextinfo_%29.md): Downloads a file from the camera.
- [ICCameraDeviceDownloadDelegate](iccameradevicedownloaddelegate.md): Methods for managing camera file downloads.
