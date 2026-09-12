> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbdescriptorheader](https://developer.apple.com/documentation/kernel/iousbdescriptorheader)

# IOUSBDescriptorHeader

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

The base descriptor header.

## Declaration

```objectivec
typedef struct IOUSBDescriptorHeader IOUSBDescriptorHeader;
```

<a id="discussion"></a>

## Discussion

This structure is the standard header for all USB descriptors. Use it to read the length of a descriptor so that it can allocate storage for the whole descriptor.

## Topics

### Getting the Descriptor Properties

- [bLength](iousbdescriptorheader/1546043-blength.md): The size of the descriptor.
- [bDescriptorType](iousbdescriptorheader/1546469-bdescriptortype.md): The type of the descriptor.

## See Also

### Descriptor Fundamentals

- [IOUSBDescriptor](iousbdescriptor.md): The base descriptor type.
- [tIOUSBDescriptorType](tiousbdescriptortype.md): Constants describing the types of descriptors available for a USB device.
- [tIOUSBDescriptorSize](tiousbdescriptorsize.md): Constants for the number of bytes in descriptor structures.
- [IOUSBDescriptorHeaderPtr](iousbdescriptorheaderptr.md): A pointer to a USB descriptor header.

### Related Documentation

- [IOUSBDescriptorHeader](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbdescriptorheader)
