> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclibprotocolinterface/1508858-updateinputplug](https://developer.apple.com/documentation/iokit/iofirewireavclibprotocolinterface/1508858-updateinputplug)

# updateInputPlug

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Updates the value of an input plug (simulating a lock transaction).

## Declaration

```objectivec
IOReturn (*updateInputPlug)(void *self, UInt32 plug, UInt32 oldVal, UInt32 newVal);
```

## Parameters

- `self`: Pointer to IOFireWireAVCLibProtocolInterface.
- `plug`: Value returned by allocateInputPlug.
- `oldVal`: Value returned by readInputPlug.
- `newVal`: New value to store in plug if its current value is oldVal.
