> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostdevice/getframenumber](https://developer.apple.com/documentation/usbdriverkit/iousbhostdevice/getframenumber)

# GetFrameNumber

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Gets the current frame number of the USB controller.

## Declaration

```objectivec
virtual kern_return_t GetFrameNumber(uint64_t *frameNumber, uint64_t *theTime);
```

## Parameters

- `frameNumber`: A pointer to a variable. On return, this variable contains the current frame number.
- `theTime`: A pointer to a variable. On return, this variable contains the current time.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

This method returns the current frame number of the USB controller, omitting the microframe. Use this information to schedule future isochronous requests.

## See Also

### Getting Device Information

- [GetAddress](getaddress.md): Returns the address of the device.
- [GetSpeed](getspeed.md): Retrieves the device’s operational speed.
- [GetPortStatus](getportstatus.md): Returns the current port status of the device.
- [tIOUSBHostConnectionSpeed](../tiousbhostconnectionspeed.md): Constants indicating the connection speed of the device.
- [tIOUSBHostPortStatus](../tiousbhostportstatus.md): Constants indicating the state of a port.
- [tIOUSBHostPortType](../tiousbhostporttype.md): Constants indicating a port’s type.
