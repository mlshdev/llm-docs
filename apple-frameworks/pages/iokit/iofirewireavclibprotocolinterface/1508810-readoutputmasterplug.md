> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewireavclibprotocolinterface/1508810-readoutputmasterplug

# readOutputMasterPlug

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Returns the current value of the output primary plug.

## Declaration

```objectivec
UInt32 (*readOutputMasterPlug)(void *self);
```

## Parameters

- `self`: Pointer to IOFireWireAVCLibProtocolInterface.
