> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbdescriptor](https://developer.apple.com/documentation/kernel/iousbdescriptor)

# IOUSBDescriptor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.15+

The base descriptor type.

## Declaration

```objectivec
typedef IOUSBDescriptorHeader IOUSBDescriptor;
```

<a id="discussion"></a>

## Discussion

Use this type to represent generic descriptor definitions. For more information about descriptors, see USB 3.2, 9.5.

## See Also

### Descriptor Fundamentals

- [IOUSBDescriptorHeader](iousbdescriptorheader.md): The base descriptor header.
- [tIOUSBDescriptorType](tiousbdescriptortype.md): Constants describing the types of descriptors available for a USB device.
- [tIOUSBDescriptorSize](tiousbdescriptorsize.md): Constants for the number of bytes in descriptor structures.
- [IOUSBDescriptorHeaderPtr](iousbdescriptorheaderptr.md): A pointer to a USB descriptor header.
