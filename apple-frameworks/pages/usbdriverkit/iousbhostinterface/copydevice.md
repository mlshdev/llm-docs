> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostinterface/copydevice](https://developer.apple.com/documentation/usbdriverkit/iousbhostinterface/copydevice)

# CopyDevice

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Returns the host device object that contains this interface.

## Declaration

```objectivec
virtual kern_return_t CopyDevice(IOUSBHostDevice **device);
```

## Parameters

- `device`: A variable in which to store the [IOUSBHostDevice](../iousbhostdevice.md) object. It’s your responsibility to release this object when you finish using it.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).
