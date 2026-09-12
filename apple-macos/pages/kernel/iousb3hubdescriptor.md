> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousb3hubdescriptor](https://developer.apple.com/documentation/kernel/iousb3hubdescriptor)

# IOUSB3HubDescriptor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Structure  
**Availability:** macOS 10.8+

A structure that defines the descriptor for a USB 3.0 hub.

## Declaration

```objectivec
typedef struct IOUSB3HubDescriptor {
    ...
} IOUSB3HubDescriptor;
```

## Topics

### Instance Properties

- [characteristics](iousb3hubdescriptor/1532265-characteristics.md)
- [hubCurrent](iousb3hubdescriptor/1532329-hubcurrent.md)
- [hubDelay](iousb3hubdescriptor/1532444-hubdelay.md)
- [hubHdrDecLat](iousb3hubdescriptor/1532404-hubhdrdeclat.md)
- [hubType](iousb3hubdescriptor/1532260-hubtype.md)
- [length](iousb3hubdescriptor/1532353-length.md)
- [numPorts](iousb3hubdescriptor/1532398-numports.md)
- [powerOnToGood](iousb3hubdescriptor/1532362-powerontogood.md)
- [pwrCtlPortFlags](iousb3hubdescriptor/1532279-pwrctlportflags.md)
- [removablePortFlags](iousb3hubdescriptor/1532366-removableportflags.md)

## See Also

### Hub Descriptors

- [IOUSB20HubDescriptor](iousb20hubdescriptor.md): A structure that defines the descriptor for a USB 2.0 hub.
- [IOUSBHubDescriptor](iousbhubdescriptor.md): A structure that defines the descriptor for a USB hub.
- [IOUSBHubPortReEnumerateParam](iousbhubportreenumerateparam.md): A structure for USB hub port reenumeration.
