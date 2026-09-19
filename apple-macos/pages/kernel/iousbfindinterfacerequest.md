> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbfindinterfacerequest

# IOUSBFindInterfaceRequest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

The structure for finding an interface request.

## Declaration

```objectivec
typedef struct IOUSBFindInterfaceRequest IOUSBFindInterfaceRequest;
```

## Topics

### Getting the Properties

- [bAlternateSetting](iousbfindinterfacerequest/1546002-balternatesetting.md): The alternative setting to find.
- [bInterfaceClass](iousbfindinterfacerequest/1546291-binterfaceclass.md): The interface class to find.
- [bInterfaceProtocol](iousbfindinterfacerequest/1546022-binterfaceprotocol.md): The interface protocol to find.
- [bInterfaceSubClass](iousbfindinterfacerequest/1546058-binterfacesubclass.md): The interface subclass to find.

## See Also

### Communication Requests

- [IOUSBBulkPipeReq](iousbbulkpipereq.md): The structure that represents a bulk pipe request.
- [IOUSBFindEndpointRequest](iousbfindendpointrequest.md): The structure that represents an endoint request to locate.
