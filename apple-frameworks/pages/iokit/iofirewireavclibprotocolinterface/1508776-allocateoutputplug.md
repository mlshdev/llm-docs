> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewireavclibprotocolinterface/1508776-allocateoutputplug

# allocateOutputPlug

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Allocates an output plug.

## Declaration

```objectivec
IOReturn (*allocateOutputPlug)(void *self, void *refcon, IOFWAVCPCRCallback func, UInt32 *plug);
```

## Parameters

- `self`: Pointer to IOFireWireAVCLibProtocolInterface.
- `refcon`: Arbitrary value passed back as first argument of callback.
- `func`: Callback function when a successful lock transaction to the plug has been performed.
- `plug`: Set to the plug number if a plug is successfully allocated.
