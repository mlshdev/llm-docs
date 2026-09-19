> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewireavclibprotocolinterface/1508815-disconnecttargetplugs

# disconnectTargetPlugs

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Breaks an internal AVC plug connection between subunit/unit plugs.

## Declaration

```objectivec
IOReturn (*disconnectTargetPlugs)(void *self, UInt32 sourceSubunitTypeAndID, IOFWAVCPlugTypes sourcePlugType, UInt32 sourcePlugNum, UInt32 destSubunitTypeAndID, IOFWAVCPlugTypes destPlugType, UInt32 destPlugNum);
```

## Parameters

- `self`: Pointer to IOFireWireAVCLibProtocolInterface.
- `sourceSubunitTypeAndID`: The subunit type and ID for the source plug.
- `sourcePlugType`: The source plug type.
- `sourcePlugNum`: The source plug num.
- `destSubunitTypeAndID`: The subunit type and ID for the destination plug.
- `destPlugType`: The dest plug type.
- `destPlugNum`: The dest plug num.
