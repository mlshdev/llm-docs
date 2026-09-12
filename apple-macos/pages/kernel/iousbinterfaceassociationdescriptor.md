> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbinterfaceassociationdescriptor](https://developer.apple.com/documentation/kernel/iousbinterfaceassociationdescriptor)

# IOUSBInterfaceAssociationDescriptor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

The descriptor that associates multiple interfaces to the same function.

## Declaration

```objectivec
typedef struct IOUSBInterfaceAssociationDescriptor IOUSBInterfaceAssociationDescriptor;
```

<a id="discussion"></a>

## Discussion

See USB 3.2, 9.6.4 for more information.

## Topics

### Getting the Properties

- [bLength](iousbinterfaceassociationdescriptor/1545909-blength.md): The size of the descriptor.
- [bDescriptorType](iousbinterfaceassociationdescriptor/1546180-bdescriptortype.md): The type of the descriptor.
- [bFirstInterface](iousbinterfaceassociationdescriptor/1546445-bfirstinterface.md): The first interface of the descriptor.
- [bInterfaceCount](iousbinterfaceassociationdescriptor/1545905-binterfacecount.md): The number of interfaces.
- [bFunctionClass](iousbinterfaceassociationdescriptor/1546273-bfunctionclass.md): The function class.
- [bFunctionSubClass](iousbinterfaceassociationdescriptor/1546578-bfunctionsubclass.md): The function subclass.
- [bFunctionProtocol](iousbinterfaceassociationdescriptor/1546423-bfunctionprotocol.md): The function protocol.
- [iFunction](iousbinterfaceassociationdescriptor/1546285-ifunction.md): The descriptor’s function.

## See Also

### Interface Descriptors

- [IOUSBInterfaceDescriptor](iousbinterfacedescriptor.md): A descriptor for a specific interface of a USB device.
- [IOUSBInterfaceDescriptorPtr](iousbinterfacedescriptorptr.md): A pointer to a USB interface descriptor.
- [IOUSBInterfaceAssociationDescriptorPtr](iousbinterfaceassociationdescriptorptr.md): A pointer to a USB interface association descriptor.

### Related Documentation

- [IOUSBInterfaceAssociationDescriptor](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbinterfaceassociationdescriptor)
