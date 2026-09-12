> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostdevice/getportstatus](https://developer.apple.com/documentation/usbdriverkit/iousbhostdevice/getportstatus)

# GetPortStatus

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Returns the current port status of the device.

## Declaration

```objectivec
virtual kern_return_t GetPortStatus(uint32_t *portStatus);
```

## Parameters

- `portStatus`: A pointer to a variable. On output, the variable contains the port status. For a list of possible values, see [tIOUSBHostPortStatus](../tiousbhostportstatus.md).

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

## See Also

### Getting Device Information

- [GetAddress](getaddress.md): Returns the address of the device.
- [GetSpeed](getspeed.md): Retrieves the device’s operational speed.
- [GetFrameNumber](getframenumber.md): Gets the current frame number of the USB controller.
- [tIOUSBHostConnectionSpeed](../tiousbhostconnectionspeed.md): Constants indicating the connection speed of the device.
- [tIOUSBHostPortStatus](../tiousbhostportstatus.md): Constants indicating the state of a port.
- [tIOUSBHostPortType](../tiousbhostporttype.md): Constants indicating a port’s type.
