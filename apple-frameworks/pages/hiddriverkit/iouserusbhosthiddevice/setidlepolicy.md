> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserusbhosthiddevice/setidlepolicy](https://developer.apple.com/documentation/hiddriverkit/iouserusbhosthiddevice/setidlepolicy)

# setIdlePolicy

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Sets the amount of idle time that must pass before suspending the device.

## Declaration

```objectivec
virtual kern_return_t setIdlePolicy(USBIdlePolicyType type, uint16_t idleTimeMs);
```

## Parameters

- `type`: The target of the idle policy. For a list of possible values, see [USBIdlePolicyType](../usbidlepolicytype.md).
- `idleTimeMs`: The idle time in milliseconds.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Once the interface or pipe is idle, it defers electrical suspension of the device for the specified duration.

## See Also

### Configuring the Device

- [setProtocol](setprotocol.md): Sets the active protocol to use for communicating with the USB device.
- [setIdle](setidle.md): Sets the device’s idle time.
- [setProperty](setproperty.md): Updates the specified property on the corresponding kernel object.
- [reset](reset.md): Resets the USB device.
- [USBIdlePolicyType](../usbidlepolicytype.md): Constants that specify whether to apply the idle policy to an interface or pipe.
