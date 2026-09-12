> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbbosdescriptor](https://developer.apple.com/documentation/kernel/iousbbosdescriptor)

# IOUSBBOSDescriptor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.7+

The structure for storing a binary object store (BOS) descriptor.

## Declaration

```objectivec
typedef struct IOUSBBOSDescriptor IOUSBBOSDescriptor;
```

<a id="discussion"></a>

## Discussion

For more information about this descriptor type, see USB 3.2, 9.6.2.

## Topics

### Getting the Properties

- [bLength](iousbbosdescriptor/1545985-blength.md): The size of the descriptor.
- [bDescriptorType](iousbbosdescriptor/1546245-bdescriptortype.md): The type of the descriptor.
- [wTotalLength](iousbbosdescriptor/1546141-wtotallength.md): The length of this descriptor and all of its subdescriptors.
- [bNumDeviceCaps](iousbbosdescriptor/1546040-bnumdevicecaps.md): The number of separate device capability descriptors in the binary object store.

## See Also

### BOS Descriptors

- [IOUSBBOSDescriptorPtr](iousbbosdescriptorptr.md): A pointer to a structure for storing a binary object store (BOS) descriptor.

### Related Documentation

- [IOUSBBOSDescriptor](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbbosdescriptor)
