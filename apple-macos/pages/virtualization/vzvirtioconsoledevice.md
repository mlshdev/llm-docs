> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioconsoledevice](https://developer.apple.com/documentation/virtualization/vzvirtioconsoledevice)

# VZVirtioConsoleDevice (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

A class that represents a Virtio console device in a virtual machine.

## Declaration

```swift
class VZVirtioConsoleDevice
```

## Topics

### Configuring the console

- [ports](vzvirtioconsoledevice/ports.md): The array of console ports that a specific device uses.
- [delegate](vzvirtioconsoledevice/delegate.md): The delegate object for the console device.
- [VZVirtioConsoleDeviceDelegate](vzvirtioconsoledevicedelegate.md): Optional methods that you use to respond when a console port opens or closes in the virtual machine.

## Relationships

### Inherits From

- [VZConsoleDevice](vzconsoledevice.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZConsoleDeviceConfiguration](vzconsoledeviceconfiguration.md): The base class for a console device configuration.

### Devices

- [VZConsoleDevice](vzconsoledevice.md): A class that represents a console device in a VM.

# VZVirtioConsoleDevice (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

A class that represents a Virtio console device in a virtual machine.

## Declaration

```objectivec
@interface VZVirtioConsoleDevice : VZConsoleDevice
```

## Topics

### Configuring the console

- [ports](vzvirtioconsoledevice/ports.md): The array of console ports that a specific device uses.
- [delegate](vzvirtioconsoledevice/delegate.md): The delegate object for the console device.
- [VZVirtioConsoleDeviceDelegate](vzvirtioconsoledevicedelegate.md): Optional methods that you use to respond when a console port opens or closes in the virtual machine.

## Relationships

### Inherits From

- [VZConsoleDevice](vzconsoledevice.md)

## See Also

### Related Documentation

- [VZConsoleDeviceConfiguration](vzconsoledeviceconfiguration.md): The base class for a console device configuration.

### Devices

- [VZConsoleDevice](vzconsoledevice.md): A class that represents a console device in a VM.
