> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewireavclibprotocolinterface/1508765-readinputmasterplug

# readInputMasterPlug

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Returns the current value of the input primary plug.

## Declaration

```objectivec
UInt32 (*readInputMasterPlug)(void *self);
```

## Parameters

- `self`: Pointer to IOFireWireAVCLibProtocolInterface.
