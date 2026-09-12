> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostdevice/getaddress](https://developer.apple.com/documentation/usbdriverkit/iousbhostdevice/getaddress)

# GetAddress

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Returns the address of the device.

## Declaration

```objectivec
virtual kern_return_t GetAddress(uint8_t *address) const;
```

## Parameters

- `address`: A pointer to a variable. On output, the variable contains the device’s address.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

## See Also

### Getting Device Information

- [GetSpeed](getspeed.md): Retrieves the device’s operational speed.
- [GetFrameNumber](getframenumber.md): Gets the current frame number of the USB controller.
- [GetPortStatus](getportstatus.md): Returns the current port status of the device.
- [tIOUSBHostConnectionSpeed](../tiousbhostconnectionspeed.md): Constants indicating the connection speed of the device.
- [tIOUSBHostPortStatus](../tiousbhostportstatus.md): Constants indicating the state of a port.
- [tIOUSBHostPortType](../tiousbhostporttype.md): Constants indicating a port’s type.
