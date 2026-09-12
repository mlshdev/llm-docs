> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevice/requestenabletethering()](https://developer.apple.com/documentation/imagecapturecore/iccameradevice/requestenabletethering())

# requestEnableTethering() (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 14.0)

Enables tethered capture if the camera has the capability to take pictures while connected.

> Third party cameras that support the standard take picture command will have the capability enabled by default. This call will have no effect

## Declaration

```swift
func requestEnableTethering()
```

<a id="Discussion"></a>

## Discussion

To confirm whether a camera can take pictures while connected, check whether its [capabilities](../icdevice/capabilities.md) include [cameraDeviceCanTakePicture](../icdevicecapability/cameradevicecantakepicture.md).

## See Also

### Taking Pictures

- [tetheredCaptureEnabled](tetheredcaptureenabled.md): A Boolean value indicating whether tethered capture is enabled on the camera.
- [ptpEventHandler](ptpeventhandler.md): A closure for handling PTP event packets.
- [requestTakePicture()](requesttakepicture%28%29.md): Captures a new image using the camera.
- [requestSendPTPCommand(\_:outData:sendCommandDelegate:didSendCommand:contextInfo:)](requestsendptpcommand%28__outdata_sendcommanddelegate_didsendcommand_contextinfo_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestSendPTPCommand(\_:outData:completion:)](requestsendptpcommand%28__outdata_completion_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestDisableTethering()](requestdisabletethering%28%29.md): Deprecated. Disables tethered capture on the camera.

# requestEnableTethering (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 14.0)

Enables tethered capture if the camera has the capability to take pictures while connected.

> Third party cameras that support the standard take picture command will have the capability enabled by default. This call will have no effect

## Declaration

```objectivec
- (void) requestEnableTethering;
```

<a id="Discussion"></a>

## Discussion

To confirm whether a camera can take pictures while connected, check whether its [capabilities](../icdevice/capabilities.md) include [ICCameraDeviceCanTakePicture](../icdevicecapability/cameradevicecantakepicture.md).

## See Also

### Taking Pictures

- [tetheredCaptureEnabled](tetheredcaptureenabled.md): A Boolean value indicating whether tethered capture is enabled on the camera.
- [ptpEventHandler](ptpeventhandler.md): A closure for handling PTP event packets.
- [requestTakePicture](requesttakepicture%28%29.md): Captures a new image using the camera.
- [requestSendPTPCommand:outData:sendCommandDelegate:didSendCommandSelector:contextInfo:](requestsendptpcommand%28__outdata_sendcommanddelegate_didsendcommand_contextinfo_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestSendPTPCommand:outData:completion:](requestsendptpcommand%28__outdata_completion_%29.md): Sends a Picture Transfer Protocol (PTP) command to a camera asynchronously.
- [requestDisableTethering](requestdisabletethering%28%29.md): Deprecated. Disables tethered capture on the camera.
