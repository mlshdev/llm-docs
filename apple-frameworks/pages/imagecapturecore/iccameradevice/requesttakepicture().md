> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevice/requesttakepicture()](https://developer.apple.com/documentation/imagecapturecore/iccameradevice/requesttakepicture())

# requestTakePicture() (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Captures a new image using the camera.

## Declaration

```swift
func requestTakePicture()
```

<a id="Discussion"></a>

## Discussion

Before taking a picture, you must first enable tethering by calling [requestEnableTethering()](requestenabletethering%28%29.md).

## See Also

### Taking Pictures

- [tetheredCaptureEnabled](tetheredcaptureenabled.md): A Boolean value indicating whether tethered capture is enabled on the camera.
- [ptpEventHandler](ptpeventhandler.md): A closure for handling PTP event packets.
- [requestEnableTethering()](requestenabletethering%28%29.md): Deprecated. Enables tethered capture if the camera has the capability to take pictures while connected.
- [requestSendPTPCommand(\_:outData:sendCommandDelegate:didSendCommand:contextInfo:)](requestsendptpcommand%28__outdata_sendcommanddelegate_didsendcommand_contextinfo_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestSendPTPCommand(\_:outData:completion:)](requestsendptpcommand%28__outdata_completion_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestDisableTethering()](requestdisabletethering%28%29.md): Deprecated. Disables tethered capture on the camera.

# requestTakePicture (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Captures a new image using the camera.

## Declaration

```objectivec
- (void) requestTakePicture;
```

<a id="Discussion"></a>

## Discussion

Before taking a picture, you must first enable tethering by calling [requestEnableTethering](requestenabletethering%28%29.md).

## See Also

### Taking Pictures

- [tetheredCaptureEnabled](tetheredcaptureenabled.md): A Boolean value indicating whether tethered capture is enabled on the camera.
- [ptpEventHandler](ptpeventhandler.md): A closure for handling PTP event packets.
- [requestEnableTethering](requestenabletethering%28%29.md): Deprecated. Enables tethered capture if the camera has the capability to take pictures while connected.
- [requestSendPTPCommand:outData:sendCommandDelegate:didSendCommandSelector:contextInfo:](requestsendptpcommand%28__outdata_sendcommanddelegate_didsendcommand_contextinfo_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestSendPTPCommand:outData:completion:](requestsendptpcommand%28__outdata_completion_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestDisableTethering](requestdisabletethering%28%29.md): Deprecated. Disables tethered capture on the camera.
