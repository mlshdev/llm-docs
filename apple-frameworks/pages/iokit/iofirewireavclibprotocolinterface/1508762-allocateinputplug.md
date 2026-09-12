> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclibprotocolinterface/1508762-allocateinputplug](https://developer.apple.com/documentation/iokit/iofirewireavclibprotocolinterface/1508762-allocateinputplug)

# allocateInputPlug

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Allocates an input plug.

## Declaration

```objectivec
IOReturn (*allocateInputPlug)(void *self, void *refcon, IOFWAVCPCRCallback func, UInt32 *plug);
```

## Parameters

- `self`: Pointer to IOFireWireAVCLibProtocolInterface.
- `refcon`: Arbitrary value passed back as first argument of callback.
- `func`: Callback function when a successful lock transaction to the plug has been performed.
- `plug`: Set to the plug number if a plug is successfully allocated.
