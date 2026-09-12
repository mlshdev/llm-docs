> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbdevicerequestptr](https://developer.apple.com/documentation/kernel/iousbdevicerequestptr)

# IOUSBDeviceRequestPtr

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

A pointer to a structure that defines a standard device request.

## Declaration

```objectivec
typedef IOUSBDevRequest *IOUSBDeviceRequestPtr;
```

## See Also

### Device Requests

- [IOUSBDevReqOOL](iousbdevreqool.md): An internal structure to pass parameters between IOUSBLib and UserClient.
- [IOUSBDevReqOOLTO](iousbdevreqoolto.md): An internal structure to pass parameters between IOUSBLib and UserClient.
- [IOUSBDevRequest](iousbdevrequest.md): A structure that defines a standard device request.
- [IOUSBDevRequestTO](iousbdevrequestto.md): A structure that defines a standard device request with timeout.
- [IOUSBDeviceRequest](iousbdevicerequest.md): A structure that defines a standard device request.
- [IOUSBDeviceRequestSetSELData](iousbdevicerequestsetseldata.md): The structure for receiving system exit latency values.
