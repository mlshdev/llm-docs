> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbconfigurationdescheader](https://developer.apple.com/documentation/kernel/iousbconfigurationdescheader)

# IOUSBConfigurationDescHeader

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.1+

The header of a configuration descriptor.

## Declaration

```objectivec
typedef struct IOUSBConfigurationDescHeader IOUSBConfigurationDescHeader;
```

<a id="discussion"></a>

## Discussion

The header of a [IOUSBConfigurationDescriptor](https://developer.apple.com/documentation/iokit/iousbconfigurationdescriptor) that returns the total length of the descriptor.

## Topics

### Getting the Properties

- [bLength](iousbconfigurationdescheader/1546382-blength.md): The size of the descriptor.
- [bDescriptorType](iousbconfigurationdescheader/1546140-bdescriptortype.md): The type of the descriptor.
- [wTotalLength](iousbconfigurationdescheader/1546394-wtotallength.md): The total length of the descriptor, including the length of all related interface, endpoint, and vendor-specific descriptors.

## See Also

### Configuration Descriptors

- [IOUSBConfigurationDescriptor](iousbconfigurationdescriptor.md): The structure for storing a USB configuration descriptor.
- [IOUSBConfigurationDescriptorPtr](iousbconfigurationdescriptorptr.md): A pointer to a configuration descriptor.
- [IOUSBConfigurationDescHeaderPtr](iousbconfigurationdescheaderptr.md): A pointer to a configuration descriptor header.

### Related Documentation

- [IOUSBConfigurationDescHeader](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbconfigurationdescheader)
