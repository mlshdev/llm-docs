> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostdevice/getspeed](https://developer.apple.com/documentation/usbdriverkit/iousbhostdevice/getspeed)

# GetSpeed

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Retrieves the device’s operational speed.

## Declaration

```objectivec
virtual kern_return_t GetSpeed(uint8_t *speed) const;
```

## Parameters

- `speed`: A pointer to a variable. On output, the variable contains the operational speed of the device. For a list of possible values, see [tIOUSBHostConnectionSpeed](../tiousbhostconnectionspeed.md).

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

## See Also

### Getting Device Information

- [GetAddress](getaddress.md): Returns the address of the device.
- [GetFrameNumber](getframenumber.md): Gets the current frame number of the USB controller.
- [GetPortStatus](getportstatus.md): Returns the current port status of the device.
- [tIOUSBHostConnectionSpeed](../tiousbhostconnectionspeed.md): Constants indicating the connection speed of the device.
- [tIOUSBHostPortStatus](../tiousbhostportstatus.md): Constants indicating the state of a port.
- [tIOUSBHostPortType](../tiousbhostporttype.md): Constants indicating a port’s type.
