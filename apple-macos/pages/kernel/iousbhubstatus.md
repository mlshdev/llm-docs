> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhubstatus](https://developer.apple.com/documentation/kernel/iousbhubstatus)

# IOUSBHubStatus

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Structure  
**Availability:** macOS 10.8+

A structure that represents the USB hub status.

## Declaration

```objectivec
typedef struct IOUSBHubStatus {
    ...
} IOUSBHubStatus;
```

<a id="overview"></a>

## Overview

Use this structure when obtaining the port status and change flags with [GetPortStatus](iousbhostdevice/3294636-getportstatus.md).

## Topics

### Instance Properties

- [changeFlags](iousbhubstatus/1532400-changeflags.md)
- [statusFlags](iousbhubstatus/1532354-statusflags.md)

## See Also

### Hub Port Status Requests

- [IOUSB30HubPortStatusExt](iousb30hubportstatusext.md): A structure that represents an extension to the USB 3.0 hub port status.
- [IOUSBHubPortStatus](iousbhubportstatus.md): A structure that contains the USB hub port status.
- [IOUSBHubStatusPtr](iousbhubstatusptr.md): A pointer to a USB hub status structure.
