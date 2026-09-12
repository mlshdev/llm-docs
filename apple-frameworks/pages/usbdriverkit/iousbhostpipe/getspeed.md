> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostpipe/getspeed](https://developer.apple.com/documentation/usbdriverkit/iousbhostpipe/getspeed)

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

### Getting the Device Attributes

- [GetDeviceAddress](getdeviceaddress.md): Retrieves the address of the device.
- [tIOUSBHostConnectionSpeed](../tiousbhostconnectionspeed.md): Constants indicating the connection speed of the device.
