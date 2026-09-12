> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbinterfacedescriptor/bdescriptortype](https://developer.apple.com/documentation/usbdriverkit/iousbinterfacedescriptor/bdescriptortype)

# bDescriptorType

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 19.0+

A constant value indicating an interface descriptor.

## Declaration

```objectivec
uint8_t bDescriptorType;
```

## See Also

### Accessing the Descriptor Properties

- [bLength](blength.md): The size of this descriptor in bytes.
- [bInterfaceNumber](binterfacenumber.md): The zero-based index of this interface in the current configuration.
- [bAlternateSetting](balternatesetting.md): The alternative setting for the interface.
- [bNumEndpoints](bnumendpoints.md): The number of endpoints that this interface uses.
- [bInterfaceClass](binterfaceclass.md): The class code indicating the behavior of this interface.
- [bInterfaceSubClass](binterfacesubclass.md): The subclass code that further defines the behavior of this interface.
- [bInterfaceProtocol](binterfaceprotocol.md): The protocol that this interface supports.
- [iInterface](iinterface.md): The index of a string descriptor that describes this interface.
