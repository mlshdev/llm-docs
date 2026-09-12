> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerdevicedelegate/scannerdevice(_:didscanto:)-6tht3](https://developer.apple.com/documentation/imagecapturecore/icscannerdevicedelegate/scannerdevice(_:didscanto:)-6tht3)

# scannerDevice(\_:didScanTo:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the client when the scanner receives the requested scan progress notification and a band of data is sent for each notification received.

## Declaration

```swift
optional func scannerDevice(_ scanner: ICScannerDevice, didScanTo data: ICScannerBandData)
```

<a id="Discussion"></a>

## Discussion

In memory transfer mode, this method sends a band of the size selected by the client using the [maxMemoryBandSize](../icscannerdevice/maxmemorybandsize.md) property.

## See Also

### Performing a Scan

- [scannerDevice(\_:didCompleteOverviewScanWithError:)](scannerdevice%28__didcompleteoverviewscanwitherror_%29.md): Tells the client when the scanner completes an overview scan.
- [scannerDevice(\_:didCompleteScanWithError:)](scannerdevice%28__didcompletescanwitherror_%29.md): Tells the client when the scanner completes a scan.
- [scannerDevice(\_:didScanTo:)](scannerdevice%28__didscanto_%29-10whl.md): Tells the client when the scanner receives the requested scan.

# scannerDevice:didScanToBandData: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the client when the scanner receives the requested scan progress notification and a band of data is sent for each notification received.

## Declaration

```objectivec
- (void) scannerDevice:(ICScannerDevice *) scanner didScanToBandData:(ICScannerBandData *) data;
```

<a id="Discussion"></a>

## Discussion

In memory transfer mode, this method sends a band of the size selected by the client using the [maxMemoryBandSize](../icscannerdevice/maxmemorybandsize.md) property.

## See Also

### Performing a Scan

- [scannerDevice:didCompleteOverviewScanWithError:](scannerdevice%28__didcompleteoverviewscanwitherror_%29.md): Tells the client when the scanner completes an overview scan.
- [scannerDevice:didCompleteScanWithError:](scannerdevice%28__didcompletescanwitherror_%29.md): Tells the client when the scanner completes a scan.
- [scannerDevice:didScanToURL:](scannerdevice%28__didscanto_%29-10whl.md): Tells the client when the scanner receives the requested scan.
