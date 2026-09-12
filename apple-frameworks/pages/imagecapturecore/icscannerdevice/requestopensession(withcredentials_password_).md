> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerdevice/requestopensession(withcredentials:password:)](https://developer.apple.com/documentation/imagecapturecore/icscannerdevice/requestopensession(withcredentials:password:))

# requestOpenSession(withCredentials:password:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Opens a session on the protected device with the authorized username and passcode.

## Declaration

```swift
func requestOpenSession(withCredentials username: String, password: String)
```

<a id="Discussion"></a>

## Discussion

If the device reports a failure of credentials, you can provide them here for the launch. A client must open a session on a device in order to use the device.

Before calling this method, set the receiver’s delegate; otherwise, the request is ignored.

Once the request to open the session has completed, [device(\_:didOpenSessionWithError:)](../icdevicedelegate/device%28__didopensessionwitherror_%29.md) is called on the delegate.

No more messages are sent to the delegate if this request fails.

## See Also

### Performing a Scan

- [requestOverviewScan()](requestoverviewscan%28%29.md): Starts an overview scan on the selected functional unit.
- [requestScan()](requestscan%28%29.md): Starts a scan on the selected functional unit.
- [cancelScan()](cancelscan%28%29.md): Cancels the current scan.
- [documentName](documentname.md): The document’s name.
- [documentUTI](documentuti.md): The document’s uniform type identifier.
- [downloadsDirectory](downloadsdirectory.md): The downloads directory.
- [transferMode](transfermode.md): The transfer mode for the scanned document.
- [maxMemoryBandSize](maxmemorybandsize.md): The total maximum band size requested when performing a memory-based transfer.

# requestOpenSessionWithCredentials:password: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Opens a session on the protected device with the authorized username and passcode.

## Declaration

```objectivec
- (void) requestOpenSessionWithCredentials:(NSString *) username password:(NSString *) password;
```

<a id="Discussion"></a>

## Discussion

If the device reports a failure of credentials, you can provide them here for the launch. A client must open a session on a device in order to use the device.

Before calling this method, set the receiver’s delegate; otherwise, the request is ignored.

Once the request to open the session has completed, [device:didOpenSessionWithError:](../icdevicedelegate/device%28__didopensessionwitherror_%29.md) is called on the delegate.

No more messages are sent to the delegate if this request fails.

## See Also

### Performing a Scan

- [requestOverviewScan](requestoverviewscan%28%29.md): Starts an overview scan on the selected functional unit.
- [requestScan](requestscan%28%29.md): Starts a scan on the selected functional unit.
- [cancelScan](cancelscan%28%29.md): Cancels the current scan.
- [documentName](documentname.md): The document’s name.
- [documentUTI](documentuti.md): The document’s uniform type identifier.
- [downloadsDirectory](downloadsdirectory.md): The downloads directory.
- [transferMode](transfermode.md): The transfer mode for the scanned document.
- [maxMemoryBandSize](maxmemorybandsize.md): The total maximum band size requested when performing a memory-based transfer.
