> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iouserusbhosthiddevice/reset

# reset

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Resets the USB device.

## Declaration

```objectivec
virtual void reset();
```

## See Also

### Configuring the Device

- [setProtocol](setprotocol.md): Sets the active protocol to use for communicating with the USB device.
- [setIdle](setidle.md): Sets the device’s idle time.
- [setIdlePolicy](setidlepolicy.md): Sets the amount of idle time that must pass before suspending the device.
- [setProperty](setproperty.md): Updates the specified property on the corresponding kernel object.
- [USBIdlePolicyType](../usbidlepolicytype.md): Constants that specify whether to apply the idle policy to an interface or pipe.
