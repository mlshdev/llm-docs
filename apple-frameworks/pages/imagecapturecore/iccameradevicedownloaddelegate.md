> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevicedownloaddelegate](https://developer.apple.com/documentation/imagecapturecore/iccameradevicedownloaddelegate)

# ICCameraDeviceDownloadDelegate (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Methods for managing camera file downloads.

## Declaration

```swift
protocol ICCameraDeviceDownloadDelegate : NSObjectProtocol
```

## Topics

### Responding to Download Status

- [didDownloadFile(\_:error:options:contextInfo:)](iccameradevicedownloaddelegate/diddownloadfile%28__error_options_contextinfo_%29.md): Tells the delegate that the requested download has completed.
- [didReceiveDownloadProgress(for:downloadedBytes:maxBytes:)](iccameradevicedownloaddelegate/didreceivedownloadprogress%28for_downloadedbytes_maxbytes_%29.md): Updates the delegate about the status of the download.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Downloading Files

- [ICDownloadOption](icdownloadoption.md): An option for downloading a file from the camera.
- [cancelDownload()](iccameradevice/canceldownload%28%29.md): Cancels a download from the camera.
- [requestDownloadFile(\_:options:downloadDelegate:didDownloadSelector:contextInfo:)](iccameradevice/requestdownloadfile%28__options_downloaddelegate_diddownloadselector_contextinfo_%29.md): Downloads a file from the camera.

# ICCameraDeviceDownloadDelegate (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Methods for managing camera file downloads.

## Declaration

```objectivec
@protocol ICCameraDeviceDownloadDelegate <NSObject>
```

## Topics

### Responding to Download Status

- [didDownloadFile:error:options:contextInfo:](iccameradevicedownloaddelegate/diddownloadfile%28__error_options_contextinfo_%29.md): Tells the delegate that the requested download has completed.
- [didReceiveDownloadProgressForFile:downloadedBytes:maxBytes:](iccameradevicedownloaddelegate/didreceivedownloadprogress%28for_downloadedbytes_maxbytes_%29.md): Updates the delegate about the status of the download.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Downloading Files

- [ICDownloadOption](icdownloadoption.md): An option for downloading a file from the camera.
- [cancelDownload](iccameradevice/canceldownload%28%29.md): Cancels a download from the camera.
- [requestDownloadFile:options:downloadDelegate:didDownloadSelector:contextInfo:](iccameradevice/requestdownloadfile%28__options_downloaddelegate_diddownloadselector_contextinfo_%29.md): Downloads a file from the camera.
