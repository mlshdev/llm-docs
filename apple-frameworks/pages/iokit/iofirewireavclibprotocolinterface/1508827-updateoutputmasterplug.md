> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewireavclibprotocolinterface/1508827-updateoutputmasterplug

# updateOutputMasterPlug

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Updates the value of the primary output plug (simulating a lock transaction).

## Declaration

```objectivec
IOReturn (*updateOutputMasterPlug)(void *self, UInt32 oldVal, UInt32 newVal);
```

## Parameters

- `self`: Pointer to [IOFireWireAVCLibProtocolInterface](../iofirewireavclibprotocolinterface.md).
- `oldVal`: Value returned by [readOutputMasterPlug](1508810-readoutputmasterplug.md).
- `newVal`: New value to store in plug if its current value is `oldVal`.
