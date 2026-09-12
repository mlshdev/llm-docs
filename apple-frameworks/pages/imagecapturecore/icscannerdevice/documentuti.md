> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerdevice/documentuti](https://developer.apple.com/documentation/imagecapturecore/icscannerdevice/documentuti)

# documentUTI (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

The document’s uniform type identifier.

## Declaration

```swift
var documentUTI: String { get set }
```

<a id="Discussion"></a>

## Discussion

Supported uniform type identifiers are `kUTTypeJPEG`, `kUTTypeJPEG2000`, `kUTTypeTIFF`, and `kUTTypePNG`.

## See Also

### Performing a Scan

- [requestOpenSession(withCredentials:password:)](requestopensession%28withcredentials_password_%29.md): Opens a session on the protected device with the authorized username and passcode.
- [requestOverviewScan()](requestoverviewscan%28%29.md): Starts an overview scan on the selected functional unit.
- [requestScan()](requestscan%28%29.md): Starts a scan on the selected functional unit.
- [cancelScan()](cancelscan%28%29.md): Cancels the current scan.
- [documentName](documentname.md): The document’s name.
- [downloadsDirectory](downloadsdirectory.md): The downloads directory.
- [transferMode](transfermode.md): The transfer mode for the scanned document.
- [maxMemoryBandSize](maxmemorybandsize.md): The total maximum band size requested when performing a memory-based transfer.

# documentUTI (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

The document’s uniform type identifier.

## Declaration

```objectivec
@property (copy) NSString * documentUTI;
```

<a id="Discussion"></a>

## Discussion

Supported uniform type identifiers are `kUTTypeJPEG`, `kUTTypeJPEG2000`, `kUTTypeTIFF`, and `kUTTypePNG`.

## See Also

### Performing a Scan

- [requestOpenSessionWithCredentials:password:](requestopensession%28withcredentials_password_%29.md): Opens a session on the protected device with the authorized username and passcode.
- [requestOverviewScan](requestoverviewscan%28%29.md): Starts an overview scan on the selected functional unit.
- [requestScan](requestscan%28%29.md): Starts a scan on the selected functional unit.
- [cancelScan](cancelscan%28%29.md): Cancels the current scan.
- [documentName](documentname.md): The document’s name.
- [downloadsDirectory](downloadsdirectory.md): The downloads directory.
- [transferMode](transfermode.md): The transfer mode for the scanned document.
- [maxMemoryBandSize](maxmemorybandsize.md): The total maximum band size requested when performing a memory-based transfer.
