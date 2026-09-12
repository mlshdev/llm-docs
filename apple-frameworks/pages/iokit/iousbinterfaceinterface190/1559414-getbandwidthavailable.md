> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbinterfaceinterface190/1559414-getbandwidthavailable](https://developer.apple.com/documentation/iokit/iousbinterfaceinterface190/1559414-getbandwidthavailable)

# GetBandwidthAvailable

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

Returns the amount of bandwidth available on the bus for allocation to isochronous pipes. If the device is a high speed device, it will be the number of bytes per microframe (125 µsecs). If it is a full speed device, it will be the number of bytes per frame (1ms)

## Declaration

```objectivec
IOReturn (*GetBandwidthAvailable)(void *self, UInt32 *bandwidth);
```

## Parameters

- `self`: Pointer to the IOUSBInterfaceInterface.
- `bandwidth`: Pointer to UInt32 to hold the amount of bandwidth available (in bytes per 1ms frame).

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService.

<a id="discussion"></a>

## Discussion

This function is useful for determining the correct AltInterface setting as well as for using SetPipePolicy.

The interface does not have to be open to use this function.
