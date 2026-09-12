> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbinterfacedescriptor/1546353-binterfacesubclass](https://developer.apple.com/documentation/kernel/iousbinterfacedescriptor/1546353-binterfacesubclass)

# bInterfaceSubClass

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The subclass code.

## Declaration

```objectivec
uint8_t bInterfaceSubClass;
```

## See Also

### Getting the Properties

- [bLength](1546453-blength.md): The size of the descriptor.
- [bDescriptorType](1546203-bdescriptortype.md): The type of the descriptor.
- [bInterfaceNumber](1545982-binterfacenumber.md): The number of this interface.
- [bAlternateSetting](1546130-balternatesetting.md): The value for selecting an alternative setting for the interface that the interface number references.
- [bNumEndpoints](1546478-bnumendpoints.md): The number of endpoints that the interface uses.
- [bInterfaceClass](1546292-binterfaceclass.md): The class code.
- [bInterfaceProtocol](1545890-binterfaceprotocol.md): The protocol code.
- [iInterface](1545956-iinterface.md): The index of the string descriptor describing this interface.
