> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerdevice/transfermode](https://developer.apple.com/documentation/imagecapturecore/icscannerdevice/transfermode)

# transferMode (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

The transfer mode for the scanned document.

## Declaration

```swift
var transferMode: ICScannerTransferMode { get set }
```

## See Also

### Performing a Scan

- [requestOpenSession(withCredentials:password:)](requestopensession%28withcredentials_password_%29.md): Opens a session on the protected device with the authorized username and passcode.
- [requestOverviewScan()](requestoverviewscan%28%29.md): Starts an overview scan on the selected functional unit.
- [requestScan()](requestscan%28%29.md): Starts a scan on the selected functional unit.
- [cancelScan()](cancelscan%28%29.md): Cancels the current scan.
- [documentName](documentname.md): The document’s name.
- [documentUTI](documentuti.md): The document’s uniform type identifier.
- [downloadsDirectory](downloadsdirectory.md): The downloads directory.
- [maxMemoryBandSize](maxmemorybandsize.md): The total maximum band size requested when performing a memory-based transfer.

# transferMode (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

The transfer mode for the scanned document.

## Declaration

```objectivec
@property ICScannerTransferMode transferMode;
```

## See Also

### Performing a Scan

- [requestOpenSessionWithCredentials:password:](requestopensession%28withcredentials_password_%29.md): Opens a session on the protected device with the authorized username and passcode.
- [requestOverviewScan](requestoverviewscan%28%29.md): Starts an overview scan on the selected functional unit.
- [requestScan](requestscan%28%29.md): Starts a scan on the selected functional unit.
- [cancelScan](cancelscan%28%29.md): Cancels the current scan.
- [documentName](documentname.md): The document’s name.
- [documentUTI](documentuti.md): The document’s uniform type identifier.
- [downloadsDirectory](downloadsdirectory.md): The downloads directory.
- [maxMemoryBandSize](maxmemorybandsize.md): The total maximum band size requested when performing a memory-based transfer.
