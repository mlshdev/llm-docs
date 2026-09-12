> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofwavcrequestcallback](https://developer.apple.com/documentation/iokit/iofwavcrequestcallback)

# IOFWAVCRequestCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

This Callback has been deprecated. Use installAVCCommandHandler instead.

## Declaration

```objectivec
typedef IOReturn (*IOFWAVCRequestCallback)(void *refCon, UInt32 generation, UInt16 srcNodeID, const UInt8 *command, UInt32 cmdLen, UInt8 *response, UInt32 *responseLen);
```

## See Also

### Callbacks

- [IOFWAVCCommandHandlerCallback](iofwavccommandhandlercallback.md): Callback called when a incoming AVC command matching a registered command handler is received.
- [IOFWAVCPCRCallback](iofwavcpcrcallback.md): Callback called after a successful lock transaction to a CMP plug.
- [IOFWAVCSubunitPlugHandlerCallback](iofwavcsubunitplughandlercallback.md): Callback called when a incoming AVC command matching a registered command handler is received.
