> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobjectinitoptions/devicecapture](https://developer.apple.com/documentation/iousbhost/iousbhostobjectinitoptions/devicecapture)

# deviceCapture (Swift)

**Framework:** IOUSBHost  
**Kind:** Type Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The option to capture the device and terminate existing drivers.

## Declaration

```swift
static var deviceCapture: IOUSBHostObjectInitOptions { get }
```

<a id="Discussion"></a>

## Discussion

Callers must have either the com.apple.vm.device-access entitlement and the [IOUSBHostDevice](../iousbhostdevice.md) object from [IOServiceAuthorize(\_:\_:)](https://developer.apple.com/documentation/iokit/1514533-ioserviceauthorize) authorization, or have root privileges. Using this option terminates all clients and drivers of the [IOUSBHostDevice](../iousbhostdevice.md) and associated [IOUSBHostInterface](../../kernel/iousbhostinterface.md) clients, as well as the caller. Upon [destroy()](../iousbhostobject/destroy%28%29.md) of the [IOUSBHostDevice](../iousbhostdevice.md), the device resets and [IOUSBHostInterface](../../kernel/iousbhostinterface.md) reregisters for [IOKit](https://developer.apple.com/documentation/iokit) matching.

# IOUSBHostObjectInitOptionsDeviceCapture (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The option to capture the device and terminate existing drivers.

## Declaration

```objectivec
IOUSBHostObjectInitOptionsDeviceCapture
```

<a id="Discussion"></a>

## Discussion

Callers must have either the com.apple.vm.device-access entitlement and the [IOUSBHostDevice](../iousbhostdevice.md) object from [IOServiceAuthorize](https://developer.apple.com/documentation/iokit/1514533-ioserviceauthorize) authorization, or have root privileges. Using this option terminates all clients and drivers of the [IOUSBHostDevice](../iousbhostdevice.md) and associated [IOUSBHostInterface](../../kernel/iousbhostinterface.md) clients, as well as the caller. Upon [destroy](../iousbhostobject/destroy%28%29.md) of the [IOUSBHostDevice](../iousbhostdevice.md), the device resets and [IOUSBHostInterface](../../kernel/iousbhostinterface.md) reregisters for [IOKit](https://developer.apple.com/documentation/iokit) matching.

## See Also

### Options

- [IOUSBHostObjectInitOptionsNone](iousbhostobjectinitoptionsnone.md): The default argument for initializing the host object.
