> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclibunitinterface/1508821-getprotocolinterface](https://developer.apple.com/documentation/iokit/iofirewireavclibunitinterface/1508821-getprotocolinterface)

# getProtocolInterface

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Creates a plug-in object for a protocol driver for the FireWire bus the AVC unit is connected to and returns an interface to it.

## Declaration

```objectivec
void *(*getProtocolInterface)(void *self, REFIID pluginType, REFIID iid);
```

## Parameters

- `self`: Pointer to IOFireWireAVCLibUnitInterface.
- `pluginType`: An ID number, of type CFUUIDBytes (see CFUUID.h), identifying the type of plug-in service to be returned for the created protocol object.
- `iid`: An ID number, of type CFUUIDBytes (see CFUUID.h), identifying the type of interface to be returned for the created protocol device object.

<a id="return_value"></a>

## Return Value

Returns a COM-style interface pointer. Returns 0 upon failure.

<a id="discussion"></a>

## Discussion

This function is only available if the interface version is \> 1 (macOS 10.2.0 or later?).
