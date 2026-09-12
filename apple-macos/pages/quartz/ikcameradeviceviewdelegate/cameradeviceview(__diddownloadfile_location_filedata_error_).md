> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikcameradeviceviewdelegate/cameradeviceview(_:diddownloadfile:location:filedata:error:)](https://developer.apple.com/documentation/quartz/ikcameradeviceviewdelegate/cameradeviceview(_:diddownloadfile:location:filedata:error:))

# cameraDeviceView(\_:didDownloadFile:location:fileData:error:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Invoked for each file that is downloaded from the camera device.

## Declaration

```swift
optional func cameraDeviceView(_ cameraDeviceView: IKCameraDeviceView!, didDownloadFile file: ICCameraFile!, location url: URL!, fileData data: Data!, error: (any Error)!)
```

## Parameters

- `cameraDeviceView`: The camera device view that sent the message.
- `file`: The camera file.
- `url`: The URL to save the data.
- `data`: The data.
- `error`: Any errors encountered during downloading.

<a id="Discussion"></a>

## Discussion

If the [IKCameraDeviceView](../ikcameradeviceview.md) [transferMode](../ikcameradeviceview/transfermode.md) property is [IKCameraDeviceViewTransferMode.fileBased](../ikcameradeviceviewtransfermode/filebased.md) then camera file will have been saved to  `url`. The URL will be a complete path to save the file, including a ‘sequence number’ if the file already exists.

If the [transferMode](../ikcameradeviceview/transfermode.md) is [IKCameraDeviceViewTransferMode.memoryBased](../ikcameradeviceviewtransfermode/memorybased.md) then the `data` parameter contains the image data and can be handled as appropriate for your application.

In case of an error, the passed data (both `url` and `data`) will be `NULL` and `error` (which may come directly from the camera module / or the ImageCaptureCore framework) will describe why the download or save failed.

# cameraDeviceView:didDownloadFile:location:fileData:error: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Invoked for each file that is downloaded from the camera device.

## Declaration

```objectivec
- (void) cameraDeviceView:(IKCameraDeviceView *) cameraDeviceView didDownloadFile:(ICCameraFile *) file location:(NSURL *) url fileData:(NSData *) data error:(NSError *) error;
```

## Parameters

- `cameraDeviceView`: The camera device view that sent the message.
- `file`: The camera file.
- `url`: The URL to save the data.
- `data`: The data.
- `error`: Any errors encountered during downloading.

<a id="Discussion"></a>

## Discussion

If the [IKCameraDeviceView](../ikcameradeviceview.md) [transferMode](../ikcameradeviceview/transfermode.md) property is [IKCameraDeviceViewTransferModeFileBased](../ikcameradeviceviewtransfermode/filebased.md) then camera file will have been saved to  `url`. The URL will be a complete path to save the file, including a ‘sequence number’ if the file already exists.

If the [transferMode](../ikcameradeviceview/transfermode.md) is [IKCameraDeviceViewTransferModeMemoryBased](../ikcameradeviceviewtransfermode/memorybased.md) then the `data` parameter contains the image data and can be handled as appropriate for your application.

In case of an error, the passed data (both `url` and `data`) will be `NULL` and `error` (which may come directly from the camera module / or the ImageCaptureCore framework) will describe why the download or save failed.
