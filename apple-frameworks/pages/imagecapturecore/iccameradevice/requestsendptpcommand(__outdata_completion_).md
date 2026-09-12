> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevice/requestsendptpcommand(_:outdata:completion:)](https://developer.apple.com/documentation/imagecapturecore/iccameradevice/requestsendptpcommand(_:outdata:completion:))

# requestSendPTPCommand(\_:outData:completion:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.

## Declaration

```swift
func requestSendPTPCommand(_ ptpCommand: Data, outData ptpData: Data?, completion: @escaping @Sendable (Data, Data, (any Error)?) -> Void)
```

```swift
func requestSendPTPCommand(_ ptpCommand: Data, outData ptpData: Data?) async throws -> (Data, Data)
```

<a id="Discussion"></a>

## Discussion

The block receives the response, data, and an error message, if present.

## See Also

### Taking Pictures

- [tetheredCaptureEnabled](tetheredcaptureenabled.md): A Boolean value indicating whether tethered capture is enabled on the camera.
- [ptpEventHandler](ptpeventhandler.md): A closure for handling PTP event packets.
- [requestEnableTethering()](requestenabletethering%28%29.md): Deprecated. Enables tethered capture if the camera has the capability to take pictures while connected.
- [requestTakePicture()](requesttakepicture%28%29.md): Captures a new image using the camera.
- [requestSendPTPCommand(\_:outData:sendCommandDelegate:didSendCommand:contextInfo:)](requestsendptpcommand%28__outdata_sendcommanddelegate_didsendcommand_contextinfo_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestDisableTethering()](requestdisabletethering%28%29.md): Deprecated. Disables tethered capture on the camera.

# requestSendPTPCommand:outData:completion: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.

## Declaration

```objectivec
- (void) requestSendPTPCommand:(NSData *) ptpCommand outData:(NSData *) ptpData completion:(void (^)(NSData *responseData, NSData *ptpResponseData, NSError *error)) completion;
```

<a id="Discussion"></a>

## Discussion

The block receives the response, data, and an error message, if present.

## See Also

### Taking Pictures

- [tetheredCaptureEnabled](tetheredcaptureenabled.md): A Boolean value indicating whether tethered capture is enabled on the camera.
- [ptpEventHandler](ptpeventhandler.md): A closure for handling PTP event packets.
- [requestEnableTethering](requestenabletethering%28%29.md): Deprecated. Enables tethered capture if the camera has the capability to take pictures while connected.
- [requestTakePicture](requesttakepicture%28%29.md): Captures a new image using the camera.
- [requestSendPTPCommand:outData:sendCommandDelegate:didSendCommandSelector:contextInfo:](requestsendptpcommand%28__outdata_sendcommanddelegate_didsendcommand_contextinfo_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestDisableTethering](requestdisabletethering%28%29.md): Deprecated. Disables tethered capture on the camera.
