> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevice/tetheredcaptureenabled](https://developer.apple.com/documentation/imagecapturecore/iccameradevice/tetheredcaptureenabled)

# tetheredCaptureEnabled (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A Boolean value indicating whether tethered capture is enabled on the camera.

## Declaration

```swift
var tetheredCaptureEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Use [requestEnableTethering()](requestenabletethering%28%29.md) and [requestDisableTethering()](requestdisabletethering%28%29.md) to enable or disable tethered capture.

## See Also

### Taking Pictures

- [ptpEventHandler](ptpeventhandler.md): A closure for handling PTP event packets.
- [requestEnableTethering()](requestenabletethering%28%29.md): Deprecated. Enables tethered capture if the camera has the capability to take pictures while connected.
- [requestTakePicture()](requesttakepicture%28%29.md): Captures a new image using the camera.
- [requestSendPTPCommand(\_:outData:sendCommandDelegate:didSendCommand:contextInfo:)](requestsendptpcommand%28__outdata_sendcommanddelegate_didsendcommand_contextinfo_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestSendPTPCommand(\_:outData:completion:)](requestsendptpcommand%28__outdata_completion_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestDisableTethering()](requestdisabletethering%28%29.md): Deprecated. Disables tethered capture on the camera.

# tetheredCaptureEnabled (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A Boolean value indicating whether tethered capture is enabled on the camera.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL tetheredCaptureEnabled;
```

<a id="Discussion"></a>

## Discussion

Use [requestEnableTethering](requestenabletethering%28%29.md) and [requestDisableTethering](requestdisabletethering%28%29.md) to enable or disable tethered capture.

## See Also

### Taking Pictures

- [ptpEventHandler](ptpeventhandler.md): A closure for handling PTP event packets.
- [requestEnableTethering](requestenabletethering%28%29.md): Deprecated. Enables tethered capture if the camera has the capability to take pictures while connected.
- [requestTakePicture](requesttakepicture%28%29.md): Captures a new image using the camera.
- [requestSendPTPCommand:outData:sendCommandDelegate:didSendCommandSelector:contextInfo:](requestsendptpcommand%28__outdata_sendcommanddelegate_didsendcommand_contextinfo_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestSendPTPCommand:outData:completion:](requestsendptpcommand%28__outdata_completion_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestDisableTethering](requestdisabletethering%28%29.md): Deprecated. Disables tethered capture on the camera.
