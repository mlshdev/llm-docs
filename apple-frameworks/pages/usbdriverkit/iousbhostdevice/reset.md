> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostdevice/reset](https://developer.apple.com/documentation/usbdriverkit/iousbhostdevice/reset)

# Reset

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Terminates the device and attempts to reenumerate it.

## Declaration

```objectivec
virtual kern_return_t Reset();
```

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

This method resets and releases the current [IOUSBHostDevice](../iousbhostdevice.md) object and all of its children. If the reset and release of the device object are successful, this method creates a new [IOUSBHostDevice](../iousbhostdevice.md) object and registers it.

Don’t call this function from the port workloop thread.

## See Also

### Managing the Device Session

- [Open](open.md): Opens a session to a host device.
- [Close](close.md): Closes the session to the host device.
