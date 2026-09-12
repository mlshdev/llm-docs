> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioconsoleport](https://developer.apple.com/documentation/virtualization/vzvirtioconsoleport)

# VZVirtioConsolePort (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

A class that represents a Virtio console port in a VM.

## Declaration

```swift
class VZVirtioConsolePort
```

<a id="overview"></a>

## Overview

Don’t instantiate a `VZVirtioConsolePort` directly. You retrieve this object from the [VZVirtioConsoleDevice](vzvirtioconsoledevice.md) [ports](vzvirtioconsoledevice/ports.md) property.

## Topics

### Configuring the port

- [name](vzvirtioconsoleport/name.md): The name of the port.
- [attachment](vzvirtioconsoleport/attachment.md): An array of serial port attachments.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Console ports

- [VZVirtioConsolePortArray](vzvirtioconsoleportarray.md): A class that represents a collection of Virtio console ports.

# VZVirtioConsolePort (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

A class that represents a Virtio console port in a VM.

## Declaration

```objectivec
@interface VZVirtioConsolePort : NSObject
```

<a id="overview"></a>

## Overview

Don’t instantiate a `VZVirtioConsolePort` directly. You retrieve this object from the [VZVirtioConsoleDevice](vzvirtioconsoledevice.md) [ports](vzvirtioconsoledevice/ports.md) property.

## Topics

### Configuring the port

- [name](vzvirtioconsoleport/name.md): The name of the port.
- [attachment](vzvirtioconsoleport/attachment.md): An array of serial port attachments.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Console ports

- [VZVirtioConsolePortArray](vzvirtioconsoleportarray.md): A class that represents a collection of Virtio console ports.
