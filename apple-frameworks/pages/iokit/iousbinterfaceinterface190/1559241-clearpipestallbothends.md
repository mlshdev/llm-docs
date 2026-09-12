> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbinterfaceinterface190/1559241-clearpipestallbothends](https://developer.apple.com/documentation/iokit/iousbinterfaceinterface190/1559241-clearpipestallbothends)

# ClearPipeStallBothEnds

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

Equivalent to ClearPipeStall.

## Declaration

```objectivec
IOReturn (*ClearPipeStallBothEnds)(void *self, UInt8 pipeRef);
```

## Parameters

- `self`: Pointer to the IOUSBInterfaceInterface.
- `pipeRef`: Index for the desired pipe (1 - GetNumEndpoints).

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService, or kIOReturnNotOpen if the interface is not open for exclusive access.

<a id="discussion"></a>

## Discussion

This function is equivalent to ClearPipeStall except that it also attempts to clear the halt and toggle bits on the device's endpoint for the pipe by sending a ClearFeature(ENDPOINT_HALT) to the default control pipe in the device, specifying the endpoint for the pipe represented by pipeRef. For most devices, this resynchronizes the data toggle between the two endpoints to ensure that there is no loss of data.
