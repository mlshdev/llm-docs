> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerdevice/requestoverviewscan()](https://developer.apple.com/documentation/imagecapturecore/icscannerdevice/requestoverviewscan())

# requestOverviewScan() (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Starts an overview scan on the selected functional unit.

## Declaration

```swift
func requestOverviewScan()
```

<a id="Discussion"></a>

## Discussion

Once the request to start an overview scan has completed, [scannerDevice(\_:didCompleteOverviewScanWithError:)](../icscannerdevicedelegate/scannerdevice%28__didcompleteoverviewscanwitherror_%29.md) is called on the delegate.

## See Also

### Performing a Scan

- [requestOpenSession(withCredentials:password:)](requestopensession%28withcredentials_password_%29.md): Opens a session on the protected device with the authorized username and passcode.
- [requestScan()](requestscan%28%29.md): Starts a scan on the selected functional unit.
- [cancelScan()](cancelscan%28%29.md): Cancels the current scan.
- [documentName](documentname.md): The document’s name.
- [documentUTI](documentuti.md): The document’s uniform type identifier.
- [downloadsDirectory](downloadsdirectory.md): The downloads directory.
- [transferMode](transfermode.md): The transfer mode for the scanned document.
- [maxMemoryBandSize](maxmemorybandsize.md): The total maximum band size requested when performing a memory-based transfer.

# requestOverviewScan (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Starts an overview scan on the selected functional unit.

## Declaration

```objectivec
- (void) requestOverviewScan;
```

<a id="Discussion"></a>

## Discussion

Once the request to start an overview scan has completed, [scannerDevice:didCompleteOverviewScanWithError:](../icscannerdevicedelegate/scannerdevice%28__didcompleteoverviewscanwitherror_%29.md) is called on the delegate.

## See Also

### Performing a Scan

- [requestOpenSessionWithCredentials:password:](requestopensession%28withcredentials_password_%29.md): Opens a session on the protected device with the authorized username and passcode.
- [requestScan](requestscan%28%29.md): Starts a scan on the selected functional unit.
- [cancelScan](cancelscan%28%29.md): Cancels the current scan.
- [documentName](documentname.md): The document’s name.
- [documentUTI](documentuti.md): The document’s uniform type identifier.
- [downloadsDirectory](downloadsdirectory.md): The downloads directory.
- [transferMode](transfermode.md): The transfer mode for the scanned document.
- [maxMemoryBandSize](maxmemorybandsize.md): The total maximum band size requested when performing a memory-based transfer.
