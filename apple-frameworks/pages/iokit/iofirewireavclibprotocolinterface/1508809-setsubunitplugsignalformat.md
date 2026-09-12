> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclibprotocolinterface/1508809-setsubunitplugsignalformat](https://developer.apple.com/documentation/iokit/iofirewireavclibprotocolinterface/1508809-setsubunitplugsignalformat)

# setSubunitPlugSignalFormat

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Sets the signal format of the specifed plug.

## Declaration

```objectivec
IOReturn (*setSubunitPlugSignalFormat)(void *self, UInt32 subunitTypeAndID, IOFWAVCPlugTypes plugType, UInt32 plugNum, UInt32 signalFormat);
```

## Parameters

- `self`: Pointer to IOFireWireAVCLibProtocolInterface.
- `subunitTypeAndID`: The subunit type and ID of the plug.
- `plugType`: The plug type.
- `plugNum`: The plug number.
- `signalFormat`: The 32-bit signal format value.
