> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevicedownloaddelegate/diddownloadfile(_:error:options:contextinfo:)](https://developer.apple.com/documentation/imagecapturecore/iccameradevicedownloaddelegate/diddownloadfile(_:error:options:contextinfo:))

# didDownloadFile(\_:error:options:contextInfo:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate that the requested download has completed.

## Declaration

```swift
optional func didDownloadFile(_ file: ICCameraFile, error: (any Error)?, options: [String : Any] = [:], contextInfo: UnsafeMutableRawPointer?)
```

## See Also

### Responding to Download Status

- [didReceiveDownloadProgress(for:downloadedBytes:maxBytes:)](didreceivedownloadprogress%28for_downloadedbytes_maxbytes_%29.md): Updates the delegate about the status of the download.

# didDownloadFile:error:options:contextInfo: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS

Tells the delegate that the requested download has completed.

## Declaration

```objectivec
- (void) didDownloadFile:(ICCameraFile *) file error:(NSError *) error options:(NSDictionary<NSString *,id> *) options contextInfo:(void *) contextInfo;
```

## See Also

### Responding to Download Status

- [didReceiveDownloadProgressForFile:downloadedBytes:maxBytes:](didreceivedownloadprogress%28for_downloadedbytes_maxbytes_%29.md): Updates the delegate about the status of the download.
