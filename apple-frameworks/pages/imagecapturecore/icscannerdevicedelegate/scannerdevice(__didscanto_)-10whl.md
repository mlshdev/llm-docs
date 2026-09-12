> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerdevicedelegate/scannerdevice(_:didscanto:)-10whl](https://developer.apple.com/documentation/imagecapturecore/icscannerdevicedelegate/scannerdevice(_:didscanto:)-10whl)

# scannerDevice(\_:didScanTo:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the client when the scanner receives the requested scan.

## Declaration

```swift
optional func scannerDevice(_ scanner: ICScannerDevice, didScanTo url: URL)
```

<a id="Discussion"></a>

## Discussion

If the [selectedFunctionalUnit](../icscannerdevice/selectedfunctionalunit.md) is a document feeder, then this message is sent once for each scanned page.

## See Also

### Performing a Scan

- [scannerDevice(\_:didCompleteOverviewScanWithError:)](scannerdevice%28__didcompleteoverviewscanwitherror_%29.md): Tells the client when the scanner completes an overview scan.
- [scannerDevice(\_:didCompleteScanWithError:)](scannerdevice%28__didcompletescanwitherror_%29.md): Tells the client when the scanner completes a scan.
- [scannerDevice(\_:didScanTo:)](scannerdevice%28__didscanto_%29-6tht3.md): Tells the client when the scanner receives the requested scan progress notification and a band of data is sent for each notification received.

# scannerDevice:didScanToURL: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the client when the scanner receives the requested scan.

## Declaration

```objectivec
- (void) scannerDevice:(ICScannerDevice *) scanner didScanToURL:(NSURL *) url;
```

<a id="Discussion"></a>

## Discussion

If the [selectedFunctionalUnit](../icscannerdevice/selectedfunctionalunit.md) is a document feeder, then this message is sent once for each scanned page.

## See Also

### Performing a Scan

- [scannerDevice:didCompleteOverviewScanWithError:](scannerdevice%28__didcompleteoverviewscanwitherror_%29.md): Tells the client when the scanner completes an overview scan.
- [scannerDevice:didCompleteScanWithError:](scannerdevice%28__didcompletescanwitherror_%29.md): Tells the client when the scanner completes a scan.
- [scannerDevice:didScanToBandData:](scannerdevice%28__didscanto_%29-6tht3.md): Tells the client when the scanner receives the requested scan progress notification and a band of data is sent for each notification received.
