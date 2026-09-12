> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevice/ptpeventhandler](https://developer.apple.com/documentation/imagecapturecore/iccameradevice/ptpeventhandler)

# ptpEventHandler (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

A closure for handling PTP event packets.

## Declaration

```swift
var ptpEventHandler: (Data) -> Void { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property as an alternative to setting up an object to handle PTP event packets. If the handler is set, it is called in place of the [delegate](../icdevice/delegate.md). If the handler is `nil`, the [delegate](../icdevice/delegate.md) is called, if present. If both are set, only the handler is called.

## See Also

### Taking Pictures

- [tetheredCaptureEnabled](tetheredcaptureenabled.md): A Boolean value indicating whether tethered capture is enabled on the camera.
- [requestEnableTethering()](requestenabletethering%28%29.md): Deprecated. Enables tethered capture if the camera has the capability to take pictures while connected.
- [requestTakePicture()](requesttakepicture%28%29.md): Captures a new image using the camera.
- [requestSendPTPCommand(\_:outData:sendCommandDelegate:didSendCommand:contextInfo:)](requestsendptpcommand%28__outdata_sendcommanddelegate_didsendcommand_contextinfo_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestSendPTPCommand(\_:outData:completion:)](requestsendptpcommand%28__outdata_completion_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestDisableTethering()](requestdisabletethering%28%29.md): Deprecated. Disables tethered capture on the camera.

# ptpEventHandler (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

A closure for handling PTP event packets.

## Declaration

```objectivec
@property (nonatomic, copy) void (^ptpEventHandler)(NSData *eventData);
```

<a id="Discussion"></a>

## Discussion

Set this property as an alternative to setting up an object to handle PTP event packets. If the handler is set, it is called in place of the [delegate](../icdevice/delegate.md). If the handler is `nil`, the [delegate](../icdevice/delegate.md) is called, if present. If both are set, only the handler is called.

## See Also

### Taking Pictures

- [tetheredCaptureEnabled](tetheredcaptureenabled.md): A Boolean value indicating whether tethered capture is enabled on the camera.
- [requestEnableTethering](requestenabletethering%28%29.md): Deprecated. Enables tethered capture if the camera has the capability to take pictures while connected.
- [requestTakePicture](requesttakepicture%28%29.md): Captures a new image using the camera.
- [requestSendPTPCommand:outData:sendCommandDelegate:didSendCommandSelector:contextInfo:](requestsendptpcommand%28__outdata_sendcommanddelegate_didsendcommand_contextinfo_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestSendPTPCommand:outData:completion:](requestsendptpcommand%28__outdata_completion_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestDisableTethering](requestdisabletethering%28%29.md): Deprecated. Disables tethered capture on the camera.
