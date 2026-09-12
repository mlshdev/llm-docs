> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzfileserialportattachment](https://developer.apple.com/documentation/virtualization/vzfileserialportattachment)

# VZFileSerialPortAttachment (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

An attachment point that writes data from the guest system to a file.

## Declaration

```swift
class VZFileSerialPortAttachment
```

<a id="overview"></a>

## Overview

Use a [VZFileSerialPortAttachment](vzfileserialportattachment.md) object to configure a one-way serial port from the guest operating system to the virtual machine. When the guest sends data to the serial port, the virtual machine writes that data to the specified file. You can’t use this serial port to send data back to the guest.

Create a [VZSerialPortAttachment](vzserialportattachment.md) object and assign it to an appropriate subclass of [VZSerialPortConfiguration](vzserialportconfiguration.md) object, such as [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md). The file you use to create this object must be writable.

## Topics

### Creating the attachment point

- [init(url:append:)](vzfileserialportattachment/init%28url_append_%29-37g72.md): Creates a file-based serial port attachment object.

### Getting the file details

- [url](vzfileserialportattachment/url.md): The URL of a file on the local file system.
- [append](vzfileserialportattachment/append.md): A Boolean that indicates whether the virtual machine appends data to the file.

### Initializers

- [init(URL:append:)](vzfileserialportattachment/init%28url_append_%29-7xoxy.md)

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

- [VZFileHandleSerialPortAttachment](vzfilehandleserialportattachment.md): An attachment point that allows bidirectional communication using file handles.
- [VZSerialPortAttachment](vzserialportattachment.md): The common behaviors for the serial attachment points of your virtual machine.

# VZFileSerialPortAttachment (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

An attachment point that writes data from the guest system to a file.

## Declaration

```objectivec
@interface VZFileSerialPortAttachment : VZSerialPortAttachment
```

<a id="overview"></a>

## Overview

Use a [VZFileSerialPortAttachment](vzfileserialportattachment.md) object to configure a one-way serial port from the guest operating system to the virtual machine. When the guest sends data to the serial port, the virtual machine writes that data to the specified file. You can’t use this serial port to send data back to the guest.

Create a [VZSerialPortAttachment](vzserialportattachment.md) object and assign it to an appropriate subclass of [VZSerialPortConfiguration](vzserialportconfiguration.md) object, such as [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md). The file you use to create this object must be writable.

## Topics

### Creating the attachment point

- [initWithURL:append:error:](vzfileserialportattachment/init%28url_append_%29-37g72.md): Creates a file-based serial port attachment object.

### Getting the file details

- [URL](vzfileserialportattachment/url.md): The URL of a file on the local file system.
- [append](vzfileserialportattachment/append.md): A Boolean that indicates whether the virtual machine appends data to the file.

## Relationships

### Inherits From

- [VZSerialPortAttachment](vzserialportattachment.md)

## See Also

### Attachment points

- [VZFileHandleSerialPortAttachment](vzfilehandleserialportattachment.md): An attachment point that allows bidirectional communication using file handles.
- [VZSerialPortAttachment](vzserialportattachment.md): The common behaviors for the serial attachment points of your virtual machine.
