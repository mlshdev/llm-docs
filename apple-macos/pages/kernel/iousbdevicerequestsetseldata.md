> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbdevicerequestsetseldata](https://developer.apple.com/documentation/kernel/iousbdevicerequestsetseldata)

# IOUSBDeviceRequestSetSELData

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.15+

The structure for receiving system exit latency values.

## Declaration

```objectivec
typedef struct IOUSBDeviceRequestSetSELData IOUSBDeviceRequestSetSELData;
```

<a id="discussion"></a>

## Discussion

For information about the `Set SEL` request type, see USB 3.2, 9.4.12.

## Topics

### Instance Properties

- [u1Pel](iousbdevicerequestsetseldata/3166578-u1pel.md)
- [u1Sel](iousbdevicerequestsetseldata/3166579-u1sel.md)
- [u2Pel](iousbdevicerequestsetseldata/3166580-u2pel.md)
- [u2Sel](iousbdevicerequestsetseldata/3166581-u2sel.md)

## See Also

### Device Requests

- [IOUSBDevReqOOL](iousbdevreqool.md): An internal structure to pass parameters between IOUSBLib and UserClient.
- [IOUSBDevReqOOLTO](iousbdevreqoolto.md): An internal structure to pass parameters between IOUSBLib and UserClient.
- [IOUSBDevRequest](iousbdevrequest.md): A structure that defines a standard device request.
- [IOUSBDevRequestTO](iousbdevrequestto.md): A structure that defines a standard device request with timeout.
- [IOUSBDeviceRequest](iousbdevicerequest.md): A structure that defines a standard device request.
- [IOUSBDeviceRequestPtr](iousbdevicerequestptr.md): A pointer to a structure that defines a standard device request.
