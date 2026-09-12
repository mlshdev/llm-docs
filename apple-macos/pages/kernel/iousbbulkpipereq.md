> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbbulkpipereq](https://developer.apple.com/documentation/kernel/iousbbulkpipereq)

# IOUSBBulkPipeReq

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.1+

The structure that represents a bulk pipe request.

## Declaration

```objectivec
typedef struct IOUSBBulkPipeReq IOUSBBulkPipeReq;
```

## Topics

### Getting the Properties

- [pipeRef](iousbbulkpipereq/1545941-piperef.md): A reference to the USB pipe.
- [buf](iousbbulkpipereq/1546177-buf.md): A pointer to the request buffer.
- [size](iousbbulkpipereq/1546366-size.md): The requested size of the pipe.
- [noDataTimeout](iousbbulkpipereq/1546036-nodatatimeout.md): The timeout if no data is available.
- [completionTimeout](iousbbulkpipereq/1545958-completiontimeout.md): The completion timeout value.

## See Also

### Communication Requests

- [IOUSBFindInterfaceRequest](iousbfindinterfacerequest.md): The structure for finding an interface request.
- [IOUSBFindEndpointRequest](iousbfindendpointrequest.md): The structure that represents an endoint request to locate.
