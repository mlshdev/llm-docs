> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzserialportconfiguration/attachment](https://developer.apple.com/documentation/virtualization/vzserialportconfiguration/attachment)

# attachment (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The object that defines how the configuration of the virtual machine’s serial port interfaces.

## Declaration

```swift
var attachment: VZSerialPortAttachment? { get set }
```

<a id="Discussion"></a>

## Discussion

Assign an appropriate attachment object to this property, such as a [VZFileHandleSerialPortAttachment](../vzfilehandleserialportattachment.md) or [VZFileSerialPortAttachment](../vzfileserialportattachment.md) object. When configuring the serial ports, the virtual machine uses the attachment to set up the serial port communications.

# attachment (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The object that defines how the configuration of the virtual machine’s serial port interfaces.

## Declaration

```objectivec
@property (strong, readwrite, nullable) VZSerialPortAttachment * attachment;
```

<a id="Discussion"></a>

## Discussion

Assign an appropriate attachment object to this property, such as a [VZFileHandleSerialPortAttachment](../vzfilehandleserialportattachment.md) or [VZFileSerialPortAttachment](../vzfileserialportattachment.md) object. When configuring the serial ports, the virtual machine uses the attachment to set up the serial port communications.
