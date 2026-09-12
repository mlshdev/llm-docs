> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbfindendpointrequest](https://developer.apple.com/documentation/kernel/iousbfindendpointrequest)

# IOUSBFindEndpointRequest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

The structure that represents an endoint request to locate.

## Declaration

```objectivec
typedef struct IOUSBFindEndpointRequest IOUSBFindEndpointRequest;
```

## Topics

### Getting the Properties

- [type](iousbfindendpointrequest/1546255-type.md): The type of endpoint.
- [direction](iousbfindendpointrequest/1546504-direction.md): The direction of the endpoint.
- [maxPacketSize](iousbfindendpointrequest/1546175-maxpacketsize.md): The maximum packet size of the endpoint.
- [interval](iousbfindendpointrequest/1546078-interval.md): The polling interval for the endpoint in milliseconds.

## See Also

### Communication Requests

- [IOUSBFindInterfaceRequest](iousbfindinterfacerequest.md): The structure for finding an interface request.
- [IOUSBBulkPipeReq](iousbbulkpipereq.md): The structure that represents a bulk pipe request.
