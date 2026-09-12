> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevicedownloaddelegate/didreceivedownloadprogress(for:downloadedbytes:maxbytes:)](https://developer.apple.com/documentation/imagecapturecore/iccameradevicedownloaddelegate/didreceivedownloadprogress(for:downloadedbytes:maxbytes:))

# didReceiveDownloadProgress(for:downloadedBytes:maxBytes:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Updates the delegate about the status of the download.

## Declaration

```swift
optional func didReceiveDownloadProgress(for file: ICCameraFile, downloadedBytes: off_t, maxBytes: off_t)
```

## See Also

### Responding to Download Status

- [didDownloadFile(\_:error:options:contextInfo:)](diddownloadfile%28__error_options_contextinfo_%29.md): Tells the delegate that the requested download has completed.

# didReceiveDownloadProgressForFile:downloadedBytes:maxBytes: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Updates the delegate about the status of the download.

## Declaration

```objectivec
- (void) didReceiveDownloadProgressForFile:(ICCameraFile *) file downloadedBytes:(off_t) downloadedBytes maxBytes:(off_t) maxBytes;
```

## See Also

### Responding to Download Status

- [didDownloadFile:error:options:contextInfo:](diddownloadfile%28__error_options_contextinfo_%29.md): Tells the delegate that the requested download has completed.
