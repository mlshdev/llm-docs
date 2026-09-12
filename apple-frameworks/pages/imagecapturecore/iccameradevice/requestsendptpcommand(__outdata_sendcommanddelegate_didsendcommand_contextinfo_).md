> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevice/requestsendptpcommand(_:outdata:sendcommanddelegate:didsendcommand:contextinfo:)](https://developer.apple.com/documentation/imagecapturecore/iccameradevice/requestsendptpcommand(_:outdata:sendcommanddelegate:didsendcommand:contextinfo:))

# requestSendPTPCommand(\_:outData:sendCommandDelegate:didSendCommand:contextInfo:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 10.4+ · visionOS 1.0+

Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.

## Declaration

```swift
func requestSendPTPCommand(_ command: Data, outData data: Data?, sendCommandDelegate: Any, didSendCommand selector: Selector, contextInfo: UnsafeMutableRawPointer?)
```

<a id="Discussion"></a>

## Discussion

Call this method only if the [capabilities](../icdevice/capabilities.md) property contains [cameraDeviceCanAcceptPTPCommands](../icdevicecapability/cameradevicecanacceptptpcommands.md). All PTP cameras have this capability.

The `sendCommandDelegate` must implement a function with the signature `- (void)didSendPTPCommand:(NSData*)command inData:(NSData*)data response:(NSData*)response error:(NSError*)error contextInfo:(void*)contextInfo`, to be called when the request is completed.

## See Also

### Taking Pictures

- [tetheredCaptureEnabled](tetheredcaptureenabled.md): A Boolean value indicating whether tethered capture is enabled on the camera.
- [ptpEventHandler](ptpeventhandler.md): A closure for handling PTP event packets.
- [requestEnableTethering()](requestenabletethering%28%29.md): Deprecated. Enables tethered capture if the camera has the capability to take pictures while connected.
- [requestTakePicture()](requesttakepicture%28%29.md): Captures a new image using the camera.
- [requestSendPTPCommand(\_:outData:completion:)](requestsendptpcommand%28__outdata_completion_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestDisableTethering()](requestdisabletethering%28%29.md): Deprecated. Disables tethered capture on the camera.

# requestSendPTPCommand:outData:sendCommandDelegate:didSendCommandSelector:contextInfo: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 10.4+ · visionOS 1.0+

Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.

## Declaration

```objectivec
- (void) requestSendPTPCommand:(NSData *) command outData:(NSData *) data sendCommandDelegate:(id) sendCommandDelegate didSendCommandSelector:(SEL) selector contextInfo:(void *) contextInfo;
```

<a id="Discussion"></a>

## Discussion

Call this method only if the [capabilities](../icdevice/capabilities.md) property contains [ICCameraDeviceCanAcceptPTPCommands](../icdevicecapability/cameradevicecanacceptptpcommands.md). All PTP cameras have this capability.

The `sendCommandDelegate` must implement a function with the signature `- (void)didSendPTPCommand:(NSData*)command inData:(NSData*)data response:(NSData*)response error:(NSError*)error contextInfo:(void*)contextInfo`, to be called when the request is completed.

## See Also

### Taking Pictures

- [tetheredCaptureEnabled](tetheredcaptureenabled.md): A Boolean value indicating whether tethered capture is enabled on the camera.
- [ptpEventHandler](ptpeventhandler.md): A closure for handling PTP event packets.
- [requestEnableTethering](requestenabletethering%28%29.md): Deprecated. Enables tethered capture if the camera has the capability to take pictures while connected.
- [requestTakePicture](requesttakepicture%28%29.md): Captures a new image using the camera.
- [requestSendPTPCommand:outData:completion:](requestsendptpcommand%28__outdata_completion_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestDisableTethering](requestdisabletethering%28%29.md): Deprecated. Disables tethered capture on the camera.
