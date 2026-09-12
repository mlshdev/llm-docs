> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerdevicedelegate/scannerdevice(_:didcompletescanwitherror:)](https://developer.apple.com/documentation/imagecapturecore/icscannerdevicedelegate/scannerdevice(_:didcompletescanwitherror:))

# scannerDevice(\_:didCompleteScanWithError:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Tells the client when the scanner completes a scan.

## Declaration

```swift
optional func scannerDevice(_ scanner: ICScannerDevice, didCompleteScanWithError error: (any Error)?)
```

## See Also

### Performing a Scan

- [scannerDevice(\_:didCompleteOverviewScanWithError:)](scannerdevice%28__didcompleteoverviewscanwitherror_%29.md): Tells the client when the scanner completes an overview scan.
- [scannerDevice(\_:didScanTo:)](scannerdevice%28__didscanto_%29-6tht3.md): Tells the client when the scanner receives the requested scan progress notification and a band of data is sent for each notification received.
- [scannerDevice(\_:didScanTo:)](scannerdevice%28__didscanto_%29-10whl.md): Tells the client when the scanner receives the requested scan.

# scannerDevice:didCompleteScanWithError: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Tells the client when the scanner completes a scan.

## Declaration

```objectivec
- (void) scannerDevice:(ICScannerDevice *) scanner didCompleteScanWithError:(NSError *) error;
```

## See Also

### Performing a Scan

- [scannerDevice:didCompleteOverviewScanWithError:](scannerdevice%28__didcompleteoverviewscanwitherror_%29.md): Tells the client when the scanner completes an overview scan.
- [scannerDevice:didScanToBandData:](scannerdevice%28__didscanto_%29-6tht3.md): Tells the client when the scanner receives the requested scan progress notification and a band of data is sent for each notification received.
- [scannerDevice:didScanToURL:](scannerdevice%28__didscanto_%29-10whl.md): Tells the client when the scanner receives the requested scan.
