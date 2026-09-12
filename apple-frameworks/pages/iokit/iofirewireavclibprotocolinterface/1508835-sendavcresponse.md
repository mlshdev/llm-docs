> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclibprotocolinterface/1508835-sendavcresponse](https://developer.apple.com/documentation/iokit/iofirewireavclibprotocolinterface/1508835-sendavcresponse)

# sendAVCResponse

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Sends an AVC response packet.

## Declaration

```objectivec
IOReturn (*sendAVCResponse)(void *self, UInt32 generation, UInt16 nodeID, const char *response, UInt32 responseLen);
```

## Parameters

- `self`: Pointer to IOFireWireAVCLibProtocolInterface.
- `generation`: The Firewire bus generation that this response should be sent in.
- `nodeID`: The node ID of the device we are sending this response to.
- `response`: A pointer to the response bytes.
- `responseLen`: The number of response bytes.
