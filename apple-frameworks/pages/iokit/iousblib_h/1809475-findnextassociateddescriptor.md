> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousblib_h/1809475-findnextassociateddescriptor](https://developer.apple.com/documentation/iokit/iousblib_h/1809475-findnextassociateddescriptor)

# FindNextAssociatedDescriptor

**Interface language:** Objective-C

**Framework:** IOKit

Find the next descriptor of the requested type associated with the interface.

## Declaration

```objectivec
IOUSBDescriptorHeader * ( *FindNextAssociatedDescriptor)(
   void *self,
   const void *currentDescriptor,
   UInt8 descriptorType);
```

## Parameters

- `self`: Pointer to the IOUSBInterfaceInterface.
- `currentDescriptor`: Descriptor to start searching from, NULL to start from beginning of list.
- `descriptorType`: Descriptor type to search for, or kUSBAnyDesc to return any descriptor type.

<a id="return_value"></a>

## Return Value

Pointer to the descriptor, or NULL if no matching descriptors found.

<a id="overview"></a>

## Overview

The interface does not have to be open to use this function.

## See Also

### Miscellaneous

- [FindNextAltInterface](1809466-findnextaltinterface.md)
- [GetBusFrameNumberWithTime](1809485-getbusframenumberwithtime.md): Gets a recent frame number of the bus to which the device is attached, along with a system time corresponding to the start of that frame
- [GetPipePropertiesV2](1809494-getpipepropertiesv2.md): Gets the properties for a pipe, including the USB SuperSpeed endpoint companion properties.
