> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclibprotocolinterface/1508771-connecttargetplugs](https://developer.apple.com/documentation/iokit/iofirewireavclibprotocolinterface/1508771-connecttargetplugs)

# connectTargetPlugs

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Establishes an internal AVC plug connection between subunit/unit plugs.

## Declaration

```objectivec
IOReturn (*connectTargetPlugs)(void *self, UInt32 sourceSubunitTypeAndID, IOFWAVCPlugTypes sourcePlugType, UInt32 *pSourcePlugNum, UInt32 destSubunitTypeAndID, IOFWAVCPlugTypes destPlugType, UInt32 *pDestPlugNum, bool lockConnection, bool permConnection);
```

## Parameters

- `self`: Pointer to IOFireWireAVCLibProtocolInterface.
- `sourceSubunitTypeAndID`: The subunit type and ID for the source plug
- `sourcePlugType`: The source plug type.
- `pSourcePlugNum`: A pointer to the source plug num. Will return the actual source plug num here.
- `destSubunitTypeAndID`: The subunit type and ID for the destination plug.
- `destPlugType`: The dest plug type.
- `pDestPlugNum`: A pointer to the dest plug num. Will return the actual dest plug num here.
- `lockConnection`: A flag to specify if this connection should be locked.
- `permConnection`: A flag to specify if this connection is permanent.
