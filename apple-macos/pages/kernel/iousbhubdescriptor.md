> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhubdescriptor](https://developer.apple.com/documentation/kernel/iousbhubdescriptor)

# IOUSBHubDescriptor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Structure  
**Availability:** macOS 10.8+

A structure that defines the descriptor for a USB hub.

## Declaration

```objectivec
typedef struct IOUSBHubDescriptor {
    ...
} IOUSBHubDescriptor;
```

## Topics

### Instance Properties

- [characteristics](iousbhubdescriptor/1532467-characteristics.md)
- [hubCurrent](iousbhubdescriptor/1532331-hubcurrent.md)
- [hubType](iousbhubdescriptor/1532409-hubtype.md)
- [length](iousbhubdescriptor/1532267-length.md)
- [numPorts](iousbhubdescriptor/1532449-numports.md)
- [powerOnToGood](iousbhubdescriptor/1532412-powerontogood.md)
- [pwrCtlPortFlags](iousbhubdescriptor/1532245-pwrctlportflags.md)
- [removablePortFlags](iousbhubdescriptor/1532236-removableportflags.md)

## See Also

### Hub Descriptors

- [IOUSB20HubDescriptor](iousb20hubdescriptor.md): A structure that defines the descriptor for a USB 2.0 hub.
- [IOUSB3HubDescriptor](iousb3hubdescriptor.md): A structure that defines the descriptor for a USB 3.0 hub.
- [IOUSBHubPortReEnumerateParam](iousbhubportreenumerateparam.md): A structure for USB hub port reenumeration.
