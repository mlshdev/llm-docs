> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousb20hubdescriptor](https://developer.apple.com/documentation/kernel/iousb20hubdescriptor)

# IOUSB20HubDescriptor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.15+

A structure that defines the descriptor for a USB 2.0 hub.

## Declaration

```objectivec
typedef struct IOUSB20HubDescriptor IOUSB20HubDescriptor;
```

<a id="discussion"></a>

## Discussion

For more information about this descriptor type, see USB 2.0, 11.23.2.1.

## Topics

### Instance Properties

- [bDescriptorType](iousb20hubdescriptor/3166550-bdescriptortype.md)
- [bHubControllerCurrent](iousb20hubdescriptor/3166551-bhubcontrollercurrent.md)
- [bLength](iousb20hubdescriptor/3166552-blength.md)
- [bNumberPorts](iousb20hubdescriptor/3166553-bnumberports.md)
- [bPowerOnToPowerGood](iousb20hubdescriptor/3166554-bpowerontopowergood.md)
- [deviceRemovable](iousb20hubdescriptor/3166555-deviceremovable.md)
- [reserved](iousb20hubdescriptor/3166556-reserved.md)
- [wHubCharacteristics](iousb20hubdescriptor/3166557-whubcharacteristics.md)

## See Also

### Hub Descriptors

- [IOUSB3HubDescriptor](iousb3hubdescriptor.md): A structure that defines the descriptor for a USB 3.0 hub.
- [IOUSBHubDescriptor](iousbhubdescriptor.md): A structure that defines the descriptor for a USB hub.
- [IOUSBHubPortReEnumerateParam](iousbhubportreenumerateparam.md): A structure for USB hub port reenumeration.
