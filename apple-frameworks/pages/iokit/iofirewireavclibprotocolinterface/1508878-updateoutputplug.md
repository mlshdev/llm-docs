> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclibprotocolinterface/1508878-updateoutputplug](https://developer.apple.com/documentation/iokit/iofirewireavclibprotocolinterface/1508878-updateoutputplug)

# updateOutputPlug

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Updates the value of an output plug (simulating a lock transaction).

## Declaration

```objectivec
IOReturn (*updateOutputPlug)(void *self, UInt32 plug, UInt32 oldVal, UInt32 newVal);
```

## Parameters

- `self`: Pointer to IOFireWireAVCLibProtocolInterface.
- `plug`: Value returned by allocateOutputPlug.
- `oldVal`: Value returned by readOutputPlug.
- `newVal`: New value to store in plug if its current value is oldVal.
