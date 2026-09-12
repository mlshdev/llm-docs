> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclibprotocolinterface/1508884-updateinputmasterplug](https://developer.apple.com/documentation/iokit/iofirewireavclibprotocolinterface/1508884-updateinputmasterplug)

# updateInputMasterPlug

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Updates the value of the primary input plug (simulating a lock transaction).

## Declaration

```objectivec
IOReturn (*updateInputMasterPlug)(void *self, UInt32 oldVal, UInt32 newVal);
```

## Parameters

- `self`: Pointer to [IOFireWireAVCLibProtocolInterface](../iofirewireavclibprotocolinterface.md).
- `oldVal`: Value returned by [readInputMasterPlug](1508765-readinputmasterplug.md).
- `newVal`: New value to store in plug if its current value is oldVal.
