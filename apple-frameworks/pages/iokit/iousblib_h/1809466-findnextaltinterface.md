> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousblib_h/1809466-findnextaltinterface](https://developer.apple.com/documentation/iokit/iousblib_h/1809466-findnextaltinterface)

# FindNextAltInterface

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
IOUSBDescriptorHeader * ( *FindNextAltInterface)(
   void *self,
   const void *current,
   IOUSBFindInterfaceRequest *request);
```

## Parameters

- `self`: Pointer to the IOUSBInterfaceInterface.
- `current`: interface descriptor to start searching from, NULL to start at alternate interface 0.
- `request`: specifies what properties an interface must have to match.

<a id="return_value"></a>

## Return Value

Pointer to a matching interface descriptor, or NULL if none match.

<a id="overview"></a>

## Overview

return alternate interface descriptor satisfying the requirements specified in request, or NULL if there aren't any. discussion request is updated with the properties of the returned interface.

## See Also

### Miscellaneous

- [FindNextAssociatedDescriptor](1809475-findnextassociateddescriptor.md): Find the next descriptor of the requested type associated with the interface.
- [GetBusFrameNumberWithTime](1809485-getbusframenumberwithtime.md): Gets a recent frame number of the bus to which the device is attached, along with a system time corresponding to the start of that frame
- [GetPipePropertiesV2](1809494-getpipepropertiesv2.md): Gets the properties for a pipe, including the USB SuperSpeed endpoint companion properties.
