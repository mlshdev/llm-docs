> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbdescriptor](https://developer.apple.com/documentation/usbdriverkit/iousbdescriptor)

# IOUSBDescriptor

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit 19.0+

The base descriptor type.

## Declaration

```objectivec
typedef IOUSBDescriptorHeader IOUSBDescriptor;
```

<a id="Discussion"></a>

## Discussion

Use this type to represent generic descriptor definitions. For more information about descriptors, see section 9.5 of the USB 2.0 specification at [https://www.usb.org/](https://www.usb.org/).

## See Also

### Descriptor Fundamentals

- [IOUSBDescriptorHeader](iousbdescriptorheader.md): The base descriptor header.
- [tIOUSBDescriptorType](tiousbdescriptortype.md): Constants describing the types of descriptors available for a USB device.
- [tIOUSBDescriptorSize](tiousbdescriptorsize.md): Constants for the number of bytes in descriptor structures.
- [Descriptor Utilities](descriptor-utilities.md): Iterate over the descriptors of a USB device and fetch specific values.
