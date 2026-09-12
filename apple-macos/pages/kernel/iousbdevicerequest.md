> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbdevicerequest](https://developer.apple.com/documentation/kernel/iousbdevicerequest)

# IOUSBDeviceRequest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.15+

A structure that defines a standard device request.

## Declaration

```objectivec
typedef struct IOUSBDeviceRequest IOUSBDeviceRequest;
```

<a id="discussion"></a>

## Discussion

For information about device requests, see USB 3.2, 9.3.

## Topics

### Instance Properties

- [bRequest](iousbdevicerequest/3166572-brequest.md)
- [bmRequestType](iousbdevicerequest/3166573-bmrequesttype.md)
- [wIndex](iousbdevicerequest/3166574-windex.md)
- [wLength](iousbdevicerequest/3166575-wlength.md)
- [wValue](iousbdevicerequest/3166576-wvalue.md)

## See Also

### Device Requests

- [IOUSBDevReqOOL](iousbdevreqool.md): An internal structure to pass parameters between IOUSBLib and UserClient.
- [IOUSBDevReqOOLTO](iousbdevreqoolto.md): An internal structure to pass parameters between IOUSBLib and UserClient.
- [IOUSBDevRequest](iousbdevrequest.md): A structure that defines a standard device request.
- [IOUSBDevRequestTO](iousbdevrequestto.md): A structure that defines a standard device request with timeout.
- [IOUSBDeviceRequestPtr](iousbdevicerequestptr.md): A pointer to a structure that defines a standard device request.
- [IOUSBDeviceRequestSetSELData](iousbdevicerequestsetseldata.md): The structure for receiving system exit latency values.
