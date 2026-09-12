> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerdevicedelegate/scannerdevice(_:didcompleteoverviewscanwitherror:)](https://developer.apple.com/documentation/imagecapturecore/icscannerdevicedelegate/scannerdevice(_:didcompleteoverviewscanwitherror:))

# scannerDevice(\_:didCompleteOverviewScanWithError:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Tells the client when the scanner completes an overview scan.

## Declaration

```swift
optional func scannerDevice(_ scanner: ICScannerDevice, didCompleteOverviewScanWithError error: (any Error)?)
```

## See Also

### Performing a Scan

- [scannerDevice(\_:didCompleteScanWithError:)](scannerdevice%28__didcompletescanwitherror_%29.md): Tells the client when the scanner completes a scan.
- [scannerDevice(\_:didScanTo:)](scannerdevice%28__didscanto_%29-6tht3.md): Tells the client when the scanner receives the requested scan progress notification and a band of data is sent for each notification received.
- [scannerDevice(\_:didScanTo:)](scannerdevice%28__didscanto_%29-10whl.md): Tells the client when the scanner receives the requested scan.

# scannerDevice:didCompleteOverviewScanWithError: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Tells the client when the scanner completes an overview scan.

## Declaration

```objectivec
- (void) scannerDevice:(ICScannerDevice *) scanner didCompleteOverviewScanWithError:(NSError *) error;
```

## See Also

### Performing a Scan

- [scannerDevice:didCompleteScanWithError:](scannerdevice%28__didcompletescanwitherror_%29.md): Tells the client when the scanner completes a scan.
- [scannerDevice:didScanToBandData:](scannerdevice%28__didscanto_%29-6tht3.md): Tells the client when the scanner receives the requested scan progress notification and a band of data is sent for each notification received.
- [scannerDevice:didScanToURL:](scannerdevice%28__didscanto_%29-10whl.md): Tells the client when the scanner receives the requested scan.
