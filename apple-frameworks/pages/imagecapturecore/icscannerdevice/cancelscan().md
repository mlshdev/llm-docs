> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerdevice/cancelscan()](https://developer.apple.com/documentation/imagecapturecore/icscannerdevice/cancelscan())

# cancelScan() (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Cancels the current scan.

## Declaration

```swift
func cancelScan()
```

<a id="Discussion"></a>

## Discussion

Cancels the scan in progress by calling [requestOverviewScan()](requestoverviewscan%28%29.md) or [requestScan()](requestscan%28%29.md).

## See Also

### Performing a Scan

- [requestOpenSession(withCredentials:password:)](requestopensession%28withcredentials_password_%29.md): Opens a session on the protected device with the authorized username and passcode.
- [requestOverviewScan()](requestoverviewscan%28%29.md): Starts an overview scan on the selected functional unit.
- [requestScan()](requestscan%28%29.md): Starts a scan on the selected functional unit.
- [documentName](documentname.md): The document’s name.
- [documentUTI](documentuti.md): The document’s uniform type identifier.
- [downloadsDirectory](downloadsdirectory.md): The downloads directory.
- [transferMode](transfermode.md): The transfer mode for the scanned document.
- [maxMemoryBandSize](maxmemorybandsize.md): The total maximum band size requested when performing a memory-based transfer.

# cancelScan (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Cancels the current scan.

## Declaration

```objectivec
- (void) cancelScan;
```

<a id="Discussion"></a>

## Discussion

Cancels the scan in progress by calling [requestOverviewScan](requestoverviewscan%28%29.md) or [requestScan](requestscan%28%29.md).

## See Also

### Performing a Scan

- [requestOpenSessionWithCredentials:password:](requestopensession%28withcredentials_password_%29.md): Opens a session on the protected device with the authorized username and passcode.
- [requestOverviewScan](requestoverviewscan%28%29.md): Starts an overview scan on the selected functional unit.
- [requestScan](requestscan%28%29.md): Starts a scan on the selected functional unit.
- [documentName](documentname.md): The document’s name.
- [documentUTI](documentuti.md): The document’s uniform type identifier.
- [downloadsDirectory](downloadsdirectory.md): The downloads directory.
- [transferMode](transfermode.md): The transfer mode for the scanned document.
- [maxMemoryBandSize](maxmemorybandsize.md): The total maximum band size requested when performing a memory-based transfer.
