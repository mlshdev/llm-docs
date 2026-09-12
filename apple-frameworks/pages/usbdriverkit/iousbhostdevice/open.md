> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostdevice/open](https://developer.apple.com/documentation/usbdriverkit/iousbhostdevice/open)

# Open

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Opens a session to a host device.

## Declaration

```objectivec
virtual kern_return_t Open(IOService *forClient, IOOptionBits options, uintptr_t arg);
```

## Parameters

- `forClient`: The service object that is opening the session.
- `options`: The options to use when opening the session. Specify `0` for this parameter.
- `arg`: Additional arguments to the function. Specify `NULL` for this parameter.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

This method opens a session to the [IOUSBHostDevice](../iousbhostdevice.md), and acquires the service’s workloop lock. Child [IOUSBHostInterface](../iousbhostinterface.md) objects may open simultaneous sessions, but only one [IOUSBHostDevice](../iousbhostdevice.md) object at a time may open a session to the device.

## See Also

### Managing the Device Session

- [Close](close.md): Closes the session to the host device.
- [Reset](reset.md): Terminates the device and attempts to reenumerate it.
