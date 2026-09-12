> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioconsoledeviceserialportconfiguration](https://developer.apple.com/documentation/virtualization/vzvirtioconsoledeviceserialportconfiguration)

# VZVirtioConsoleDeviceSerialPortConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

A configuration object that requests the creation of a console device to communicate with the guest system.

## Declaration

```swift
class VZVirtioConsoleDeviceSerialPortConfiguration
```

<a id="overview"></a>

## Overview

A [VZVirtioConsoleDeviceSerialPortConfiguration](vzvirtioconsoledeviceserialportconfiguration.md) object enables serial communication between the guest operating system and host computer through the Virtio interface. After you create this configuration object, configure its inherited [attachment](vzserialportconfiguration/attachment.md) property with an object that defines the type of serial communication you want to enable. Use a [VZFileHandleSerialPortAttachment](vzfilehandleserialportattachment.md) object to enable two-way communication between the guest and host, and use a [VZFileSerialPortAttachment](vzfileserialportattachment.md) object to enable one-way communication from the guest to the file you designate.

## Topics

### Creating the Configuration Object

- [init()](vzvirtioconsoledeviceserialportconfiguration/init%28%29.md): Creates a serial port configuration object.

## Relationships

### Inherits From

- [VZSerialPortConfiguration](vzserialportconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Configurations

- [VZSerialPortConfiguration](vzserialportconfiguration.md): The common configuration traits for serial port requests.

# VZVirtioConsoleDeviceSerialPortConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

A configuration object that requests the creation of a console device to communicate with the guest system.

## Declaration

```objectivec
@interface VZVirtioConsoleDeviceSerialPortConfiguration : VZSerialPortConfiguration
```

<a id="overview"></a>

## Overview

A [VZVirtioConsoleDeviceSerialPortConfiguration](vzvirtioconsoledeviceserialportconfiguration.md) object enables serial communication between the guest operating system and host computer through the Virtio interface. After you create this configuration object, configure its inherited [attachment](vzserialportconfiguration/attachment.md) property with an object that defines the type of serial communication you want to enable. Use a [VZFileHandleSerialPortAttachment](vzfilehandleserialportattachment.md) object to enable two-way communication between the guest and host, and use a [VZFileSerialPortAttachment](vzfileserialportattachment.md) object to enable one-way communication from the guest to the file you designate.

## Topics

### Creating the Configuration Object

- [init](vzvirtioconsoledeviceserialportconfiguration/init%28%29.md): Creates a serial port configuration object.

## Relationships

### Inherits From

- [VZSerialPortConfiguration](vzserialportconfiguration.md)

## See Also

### Configurations

- [VZSerialPortConfiguration](vzserialportconfiguration.md): The common configuration traits for serial port requests.
