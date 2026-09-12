> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/usbidlepolicytype](https://developer.apple.com/documentation/hiddriverkit/usbidlepolicytype)

# USBIdlePolicyType

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit · macOS

Constants that specify whether to apply the idle policy to an interface or pipe.

## Declaration

```objectivec
typedef enum { ... } USBIdlePolicyType;
```

## Topics

### Getting the Idle Policy

- [USBIdlePolicyTypeInterface](usbidlepolicytype/usbidlepolicytypeinterface.md): An idle policy that applies to the interface connected to the device.
- [USBIdlePolicyTypePipe](usbidlepolicytype/usbidlepolicytypepipe.md): An idle policy that applies to the pipe that communicates with the device.

## See Also

### Configuring the Device

- [setProtocol](iouserusbhosthiddevice/setprotocol.md): Sets the active protocol to use for communicating with the USB device.
- [setIdle](iouserusbhosthiddevice/setidle.md): Sets the device’s idle time.
- [setIdlePolicy](iouserusbhosthiddevice/setidlepolicy.md): Sets the amount of idle time that must pass before suspending the device.
- [setProperty](iouserusbhosthiddevice/setproperty.md): Updates the specified property on the corresponding kernel object.
- [reset](iouserusbhosthiddevice/reset.md): Resets the USB device.
