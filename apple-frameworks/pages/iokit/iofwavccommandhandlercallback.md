> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofwavccommandhandlercallback](https://developer.apple.com/documentation/iokit/iofwavccommandhandlercallback)

# IOFWAVCCommandHandlerCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Callback called when a incoming AVC command matching a registered command handler is received.

## Declaration

```objectivec
typedef IOReturn (*IOFWAVCCommandHandlerCallback)(void *refCon, UInt32 generation, UInt16 srcNodeID, IOFWSpeed speed, const UInt8 *command, UInt32 cmdLen);
```

## Parameters

- `refCon`: The refcon supplied when a client is registered
- `generation`: The FireWire bus generation value at the time the command was received
- `srcNodeID`: The node ID of the device who sent us this command
- `speed`: The speed the AVC command packet
- `command`: A pointer to the command bytes
- `cmdLen`: The length of the AVC command bytes buffer in bytes

<a id="return_value"></a>

## Return Value

The callback handler should return success if it will send the AVC response, or an error if it doesn't want to handle the command

## See Also

### Callbacks

- [IOFWAVCPCRCallback](iofwavcpcrcallback.md): Callback called after a successful lock transaction to a CMP plug.
- [IOFWAVCRequestCallback](iofwavcrequestcallback.md): This Callback has been deprecated. Use installAVCCommandHandler instead.
- [IOFWAVCSubunitPlugHandlerCallback](iofwavcsubunitplughandlercallback.md): Callback called when a incoming AVC command matching a registered command handler is received.
