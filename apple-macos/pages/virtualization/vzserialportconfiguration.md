> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzserialportconfiguration](https://developer.apple.com/documentation/virtualization/vzserialportconfiguration)

# VZSerialPortConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common configuration traits for serial port requests.

## Declaration

```swift
class VZSerialPortConfiguration
```

<a id="overview"></a>

## Overview

Don’t create a [VZSerialPortConfiguration](vzserialportconfiguration.md) object directly. Instead, instantiate a concrete instance of one of its subclasses, such as [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md). Use the [attachment](vzserialportconfiguration/attachment.md) property of this class to configure the medium through which serial communication happens.

## Topics

### Configuring the Attachment Point

- [attachment](vzserialportconfiguration/attachment.md): The object that defines how the configuration of the virtual machine’s serial port interfaces.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioConsoleDeviceSerialPortConfiguration](vzvirtioconsoledeviceserialportconfiguration.md)

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

- [VZVirtioConsoleDeviceSerialPortConfiguration](vzvirtioconsoledeviceserialportconfiguration.md): A configuration object that requests the creation of a console device to communicate with the guest system.

# VZSerialPortConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common configuration traits for serial port requests.

## Declaration

```objectivec
@interface VZSerialPortConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Don’t create a [VZSerialPortConfiguration](vzserialportconfiguration.md) object directly. Instead, instantiate a concrete instance of one of its subclasses, such as [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md). Use the [attachment](vzserialportconfiguration/attachment.md) property of this class to configure the medium through which serial communication happens.

## Topics

### Configuring the Attachment Point

- [attachment](vzserialportconfiguration/attachment.md): The object that defines how the configuration of the virtual machine’s serial port interfaces.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioConsoleDeviceSerialPortConfiguration](vzvirtioconsoledeviceserialportconfiguration.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Configurations

- [VZVirtioConsoleDeviceSerialPortConfiguration](vzvirtioconsoledeviceserialportconfiguration.md): A configuration object that requests the creation of a console device to communicate with the guest system.
