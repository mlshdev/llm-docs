> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewireavclibprotocolinterface/1508847-readoutputplug

# readOutputPlug

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Returns the current value of an output plug.

## Declaration

```objectivec
UInt32 (*readOutputPlug)(void *self, UInt32 plug);
```

## Parameters

- `self`: Pointer to IOFireWireAVCLibProtocolInterface.
- `plug`: Value returned by allocateOutputPlug.
