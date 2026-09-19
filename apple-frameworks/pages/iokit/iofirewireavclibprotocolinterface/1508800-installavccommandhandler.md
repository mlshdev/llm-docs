> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewireavclibprotocolinterface/1508800-installavccommandhandler

# installAVCCommandHandler

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Installs a command handler for handling specific incoming AVC commands.

## Declaration

```objectivec
IOReturn (*installAVCCommandHandler)(void *self, UInt32 subUnitTypeAndID, UInt32 opCode, void *refCon, IOFWAVCCommandHandlerCallback callback);
```

## Parameters

- `self`: Pointer to IOFireWireAVCLibProtocolInterface.
- `subUnitTypeAndID`: The subunit type and ID for this command handler.
- `opCode`: The opcode for this command handler.
- `refCon`: Arbitrary value passed back as first argument of callback.
- `callback`: A pointer to the callback function
