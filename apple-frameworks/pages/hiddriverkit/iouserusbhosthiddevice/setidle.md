> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserusbhosthiddevice/setidle](https://developer.apple.com/documentation/hiddriverkit/iouserusbhosthiddevice/setidle)

# setIdle

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Sets the device’s idle time.

## Declaration

```objectivec
virtual kern_return_t setIdle(uint16_t idleTimeMs);
```

## Parameters

- `idleTimeMs`: The idle time in milliseconds.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

The idle rate determines how often a device resends data that hasn’t changed since the last report. Use this method to limit the reporting frequency of an interrupt `IN` endpoint.

## See Also

### Configuring the Device

- [setProtocol](setprotocol.md): Sets the active protocol to use for communicating with the USB device.
- [setIdlePolicy](setidlepolicy.md): Sets the amount of idle time that must pass before suspending the device.
- [setProperty](setproperty.md): Updates the specified property on the corresponding kernel object.
- [reset](reset.md): Resets the USB device.
- [USBIdlePolicyType](../usbidlepolicytype.md): Constants that specify whether to apply the idle policy to an interface or pipe.
