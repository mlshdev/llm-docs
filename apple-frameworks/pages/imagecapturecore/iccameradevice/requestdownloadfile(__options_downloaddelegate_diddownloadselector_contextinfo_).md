> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevice/requestdownloadfile(_:options:downloaddelegate:diddownloadselector:contextinfo:)](https://developer.apple.com/documentation/imagecapturecore/iccameradevice/requestdownloadfile(_:options:downloaddelegate:diddownloadselector:contextinfo:))

# requestDownloadFile(\_:options:downloadDelegate:didDownloadSelector:contextInfo:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Downloads a file from the camera.

## Declaration

```swift
func requestDownloadFile(_ file: ICCameraFile, options: [ICDownloadOption : Any] = [:], downloadDelegate: any ICCameraDeviceDownloadDelegate, didDownloadSelector selector: Selector, contextInfo: UnsafeMutableRawPointer?)
```

<a id="Discussion"></a>

## Discussion

Once this request completes, [didDownloadFile(\_:error:options:contextInfo:)](../iccameradevicedownloaddelegate/diddownloadfile%28__error_options_contextinfo_%29.md) is called on the `downloadDelegate`.

## See Also

### Downloading Files

- [ICDownloadOption](../icdownloadoption.md): An option for downloading a file from the camera.
- [cancelDownload()](canceldownload%28%29.md): Cancels a download from the camera.
- [ICCameraDeviceDownloadDelegate](../iccameradevicedownloaddelegate.md): Methods for managing camera file downloads.

# requestDownloadFile:options:downloadDelegate:didDownloadSelector:contextInfo: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Downloads a file from the camera.

## Declaration

```objectivec
- (void) requestDownloadFile:(ICCameraFile *) file options:(NSDictionary<NSString *,id> *) options downloadDelegate:(id<ICCameraDeviceDownloadDelegate>) downloadDelegate didDownloadSelector:(SEL) selector contextInfo:(void *) contextInfo;
```

<a id="Discussion"></a>

## Discussion

Once this request completes, [didDownloadFile:error:options:contextInfo:](../iccameradevicedownloaddelegate/diddownloadfile%28__error_options_contextinfo_%29.md) is called on the `downloadDelegate`.

## See Also

### Downloading Files

- [ICDownloadOption](../icdownloadoption.md): An option for downloading a file from the camera.
- [cancelDownload](canceldownload%28%29.md): Cancels a download from the camera.
- [ICCameraDeviceDownloadDelegate](../iccameradevicedownloaddelegate.md): Methods for managing camera file downloads.
