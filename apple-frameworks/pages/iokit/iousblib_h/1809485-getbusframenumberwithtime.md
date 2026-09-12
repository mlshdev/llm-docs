> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousblib_h/1809485-getbusframenumberwithtime](https://developer.apple.com/documentation/iokit/iousblib_h/1809485-getbusframenumberwithtime)

# GetBusFrameNumberWithTime

**Interface language:** Objective-C

**Framework:** IOKit

Gets a recent frame number of the bus to which the device is attached, along with a system time corresponding to the start of that frame

## Declaration

```objectivec
IOReturn ( *GetBusFrameNumberWithTime)(
   void *self,
   UInt64 *frame,
   AbsoluteTime *atTime);
```

## Parameters

- `self`: Pointer to the IOUSBInterfaceInterface.
- `frame`: Pointer to UInt64 to hold the frame number.
- `atTime`: Pointer to a returned AbsoluteTime, which is the system time ("wall time") as close as possible to the beginning of that USB frame. The jitter on this value may be as much as 200 microseconds.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService, or kIOReturnUnsupported is the bus doesn't support this function.

<a id="overview"></a>

## Overview

The device does not have to be open to use this function.

## See Also

### Miscellaneous

- [FindNextAltInterface](1809466-findnextaltinterface.md)
- [FindNextAssociatedDescriptor](1809475-findnextassociateddescriptor.md): Find the next descriptor of the requested type associated with the interface.
- [GetPipePropertiesV2](1809494-getpipepropertiesv2.md): Gets the properties for a pipe, including the USB SuperSpeed endpoint companion properties.
