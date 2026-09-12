> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzfilehandleserialportattachment](https://developer.apple.com/documentation/virtualization/vzfilehandleserialportattachment)

# VZFileHandleSerialPortAttachment (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

An attachment point that allows bidirectional communication using file handles.

## Declaration

```swift
class VZFileHandleSerialPortAttachment
```

<a id="overview"></a>

## Overview

Use a [VZFileHandleSerialPortAttachment](vzfilehandleserialportattachment.md) object to configure a serial port using separate file handles for reading and writing data. In your virtual machine, use the file handles in this object in the following way:

- To send data to the guest operating system, write data to the file handle in the [fileHandleForReading](vzfilehandleserialportattachment/filehandleforreading.md) property.
- To receive data from the guest operating system, read data from the file handle in the [fileHandleForWriting](vzfilehandleserialportattachment/filehandleforwriting.md) property.

## Topics

### Creating the attachment point

- [init(fileHandleForReading:fileHandleForWriting:)](vzfilehandleserialportattachment/init%28filehandleforreading_filehandleforwriting_%29.md): Creates a serial port attachment object from the specified file handles.

### Getting the file handles

- [fileHandleForReading](vzfilehandleserialportattachment/filehandleforreading.md): The file handle that the guest operating system uses to read data.
- [fileHandleForWriting](vzfilehandleserialportattachment/filehandleforwriting.md): The file handle that the guest operating system uses to write data.

## Relationships

### Inherits From

- [VZSerialPortAttachment](vzserialportattachment.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Attachment points

- [VZFileSerialPortAttachment](vzfileserialportattachment.md): An attachment point that writes data from the guest system to a file.
- [VZSerialPortAttachment](vzserialportattachment.md): The common behaviors for the serial attachment points of your virtual machine.

# VZFileHandleSerialPortAttachment (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

An attachment point that allows bidirectional communication using file handles.

## Declaration

```objectivec
@interface VZFileHandleSerialPortAttachment : VZSerialPortAttachment
```

<a id="overview"></a>

## Overview

Use a [VZFileHandleSerialPortAttachment](vzfilehandleserialportattachment.md) object to configure a serial port using separate file handles for reading and writing data. In your virtual machine, use the file handles in this object in the following way:

- To send data to the guest operating system, write data to the file handle in the [fileHandleForReading](vzfilehandleserialportattachment/filehandleforreading.md) property.
- To receive data from the guest operating system, read data from the file handle in the [fileHandleForWriting](vzfilehandleserialportattachment/filehandleforwriting.md) property.

## Topics

### Creating the attachment point

- [initWithFileHandleForReading:fileHandleForWriting:](vzfilehandleserialportattachment/init%28filehandleforreading_filehandleforwriting_%29.md): Creates a serial port attachment object from the specified file handles.

### Getting the file handles

- [fileHandleForReading](vzfilehandleserialportattachment/filehandleforreading.md): The file handle that the guest operating system uses to read data.
- [fileHandleForWriting](vzfilehandleserialportattachment/filehandleforwriting.md): The file handle that the guest operating system uses to write data.

## Relationships

### Inherits From

- [VZSerialPortAttachment](vzserialportattachment.md)

## See Also

### Attachment points

- [VZFileSerialPortAttachment](vzfileserialportattachment.md): An attachment point that writes data from the guest system to a file.
- [VZSerialPortAttachment](vzserialportattachment.md): The common behaviors for the serial attachment points of your virtual machine.
