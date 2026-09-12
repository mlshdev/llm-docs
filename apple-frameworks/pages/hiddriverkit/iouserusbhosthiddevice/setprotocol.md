> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserusbhosthiddevice/setprotocol](https://developer.apple.com/documentation/hiddriverkit/iouserusbhosthiddevice/setprotocol)

# setProtocol

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Sets the active protocol to use for communicating with the USB device.

## Declaration

```objectivec
virtual kern_return_t setProtocol(uint16_t protocol);
```

## Parameters

- `protocol`: The protocol to use for the device. Specify `0` to use the boot protocol or `1` to use the report protocol.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

At startup, the [Start](start.md) method sets the protocol to the report protocol.

## See Also

### Configuring the Device

- [setIdle](setidle.md): Sets the device’s idle time.
- [setIdlePolicy](setidlepolicy.md): Sets the amount of idle time that must pass before suspending the device.
- [setProperty](setproperty.md): Updates the specified property on the corresponding kernel object.
- [reset](reset.md): Resets the USB device.
- [USBIdlePolicyType](../usbidlepolicytype.md): Constants that specify whether to apply the idle policy to an interface or pipe.
