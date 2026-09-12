> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzserialportattachment](https://developer.apple.com/documentation/virtualization/vzserialportattachment)

# VZSerialPortAttachment (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common behaviors for the serial attachment points of your virtual machine.

## Declaration

```swift
class VZSerialPortAttachment
```

<a id="overview"></a>

## Overview

Don’t create a [VZSerialPortAttachment](vzserialportattachment.md) object directly. Instead, instantiate a concrete subclass such as [VZFileHandleSerialPortAttachment](vzfilehandleserialportattachment.md) to configure how the virtual machine’s serial port connects with the host computer.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZFileHandleSerialPortAttachment](vzfilehandleserialportattachment.md)
- [VZFileSerialPortAttachment](vzfileserialportattachment.md)
- [VZSpiceAgentPortAttachment](vzspiceagentportattachment.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Attachment points

- [VZFileHandleSerialPortAttachment](vzfilehandleserialportattachment.md): An attachment point that allows bidirectional communication using file handles.
- [VZFileSerialPortAttachment](vzfileserialportattachment.md): An attachment point that writes data from the guest system to a file.

# VZSerialPortAttachment (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common behaviors for the serial attachment points of your virtual machine.

## Declaration

```objectivec
@interface VZSerialPortAttachment : NSObject
```

<a id="overview"></a>

## Overview

Don’t create a [VZSerialPortAttachment](vzserialportattachment.md) object directly. Instead, instantiate a concrete subclass such as [VZFileHandleSerialPortAttachment](vzfilehandleserialportattachment.md) to configure how the virtual machine’s serial port connects with the host computer.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZFileHandleSerialPortAttachment](vzfilehandleserialportattachment.md)
- [VZFileSerialPortAttachment](vzfileserialportattachment.md)
- [VZSpiceAgentPortAttachment](vzspiceagentportattachment.md)

## See Also

### Attachment points

- [VZFileHandleSerialPortAttachment](vzfilehandleserialportattachment.md): An attachment point that allows bidirectional communication using file handles.
- [VZFileSerialPortAttachment](vzfileserialportattachment.md): An attachment point that writes data from the guest system to a file.
