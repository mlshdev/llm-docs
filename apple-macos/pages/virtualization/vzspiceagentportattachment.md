> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzspiceagentportattachment](https://developer.apple.com/documentation/virtualization/vzspiceagentportattachment)

# VZSpiceAgentPortAttachment (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

An attachment point that enables the Spice clipboard sharing capability.

## Declaration

```swift
class VZSpiceAgentPortAttachment
```

## Topics

### Creating a shared clipboard

- [init()](vzspiceagentportattachment/init%28%29.md): Creates a new Spice agent port attachment.

### Enabling clipboard sharing between the host and the VM

- [sharesClipboard](vzspiceagentportattachment/sharesclipboard.md): A Boolean value that indicates whether the framework needs to share the clipboard between the host and the VM.

### Naming the Virtio console port for the Spice guest agent

- [spiceAgentPortName](vzspiceagentportattachment/spiceagentportname.md): The name of the Virtio console port for the Spice guest agent.

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

# VZSpiceAgentPortAttachment (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

An attachment point that enables the Spice clipboard sharing capability.

## Declaration

```objectivec
@interface VZSpiceAgentPortAttachment : VZSerialPortAttachment
```

## Topics

### Creating a shared clipboard

- [init](vzspiceagentportattachment/init%28%29.md): Creates a new Spice agent port attachment.

### Enabling clipboard sharing between the host and the VM

- [sharesClipboard](vzspiceagentportattachment/sharesclipboard.md): A Boolean value that indicates whether the framework needs to share the clipboard between the host and the VM.

### Naming the Virtio console port for the Spice guest agent

- [spiceAgentPortName](vzspiceagentportattachment/spiceagentportname.md): The name of the Virtio console port for the Spice guest agent.

## Relationships

### Inherits From

- [VZSerialPortAttachment](vzserialportattachment.md)
