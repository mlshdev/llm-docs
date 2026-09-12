> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostpipe/getdeviceaddress](https://developer.apple.com/documentation/usbdriverkit/iousbhostpipe/getdeviceaddress)

# GetDeviceAddress

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Retrieves the address of the device.

## Declaration

```objectivec
virtual kern_return_t GetDeviceAddress(uint8_t *address) const;
```

## Parameters

- `address`: A pointer to a variable. On output, the variable contains the device’s address.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

## See Also

### Getting the Device Attributes

- [GetSpeed](getspeed.md): Retrieves the device’s operational speed.
- [tIOUSBHostConnectionSpeed](../tiousbhostconnectionspeed.md): Constants indicating the connection speed of the device.
