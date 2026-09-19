> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbhubportreenumerateparam

# IOUSBHubPortReEnumerateParam

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Structure  
**Availability:** macOS 10.8+

A structure for USB hub port reenumeration.

## Declaration

```objectivec
typedef struct IOUSBHubPortReEnumerateParam {
    ...
} IOUSBHubPortReEnumerateParam;
```

<a id="overview"></a>

## Overview

Use this structure to specify the port that needs reenumeration.

## Topics

### Instance Properties

- [options](iousbhubportreenumerateparam/1532360-options.md)
- [portNumber](iousbhubportreenumerateparam/1532365-portnumber.md)

## See Also

### Hub Descriptors

- [IOUSB20HubDescriptor](iousb20hubdescriptor.md): A structure that defines the descriptor for a USB 2.0 hub.
- [IOUSB3HubDescriptor](iousb3hubdescriptor.md): A structure that defines the descriptor for a USB 3.0 hub.
- [IOUSBHubDescriptor](iousbhubdescriptor.md): A structure that defines the descriptor for a USB hub.
