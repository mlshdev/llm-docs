> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikscannerdeviceviewdelegate/scannerdeviceview(_:didscanto:filedata:error:)](https://developer.apple.com/documentation/quartz/ikscannerdeviceviewdelegate/scannerdeviceview(_:didscanto:filedata:error:))

# scannerDeviceView(\_:didScanTo:fileData:error:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Invoked when the scan has completed and the data is available.

## Declaration

```swift
optional func scannerDeviceView(_ scannerDeviceView: IKScannerDeviceView!, didScanTo url: URL!, fileData data: Data!, error: (any Error)!)
```

## Parameters

- `scannerDeviceView`: The scanner device that sent the message.
- `url`: The URL to save the data.
- `data`: The data from the scan.
- `error`: Any error encountered during the scan.

<a id="Discussion"></a>

## Discussion

This method is called when the scan has completed..

If the `scannerDeviceView` [transferMode](../ikscannerdeviceview/transfermode.md) is [IKScannerDeviceViewTransferMode.fileBased](../ikscannerdeviceviewtransfermode/filebased.md), the scan will have been saved at the specified `url`. The URL will be in the download directory and be a complete path, including a ‘sequence number’ if the file already exists.

If the `scannerDeviceView` [transferMode](../ikscannerdeviceview/transfermode.md) is [IKScannerDeviceViewTransferMode.memoryBased](../ikscannerdeviceviewtransfermode/memorybased.md), the scanned data is contained in the data parameter. You can then take the action appropriate to your application.

In case of an error, the parameters (`url` and `data`) will be `NULL` and `error` (which may come directly from the scanner module / or the ImageCaptureCore framework) will describe why the scan or save failed.

# scannerDeviceView:didScanToURL:fileData:error: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Invoked when the scan has completed and the data is available.

## Declaration

```objectivec
- (void) scannerDeviceView:(IKScannerDeviceView *) scannerDeviceView didScanToURL:(NSURL *) url fileData:(NSData *) data error:(NSError *) error;
```

## Parameters

- `scannerDeviceView`: The scanner device that sent the message.
- `url`: The URL to save the data.
- `data`: The data from the scan.
- `error`: Any error encountered during the scan.

<a id="Discussion"></a>

## Discussion

This method is called when the scan has completed..

If the `scannerDeviceView` [transferMode](../ikscannerdeviceview/transfermode.md) is [IKScannerDeviceViewTransferModeFileBased](../ikscannerdeviceviewtransfermode/filebased.md), the scan will have been saved at the specified `url`. The URL will be in the download directory and be a complete path, including a ‘sequence number’ if the file already exists.

If the `scannerDeviceView` [transferMode](../ikscannerdeviceview/transfermode.md) is [IKScannerDeviceViewTransferModeMemoryBased](../ikscannerdeviceviewtransfermode/memorybased.md), the scanned data is contained in the data parameter. You can then take the action appropriate to your application.

In case of an error, the parameters (`url` and `data`) will be `NULL` and `error` (which may come directly from the scanner module / or the ImageCaptureCore framework) will describe why the scan or save failed.
