> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/proto_media_input](https://developer.apple.com/documentation/kernel/proto_media_input)

# proto_media_input

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

## Declaration

```objectivec
typedef errno_t (*proto_media_input)(ifnet_t ifp, protocol_family_t protocol, mbuf_t packet, char *header);
```

## Parameters

- `ifp`: The interface the packet was received on.
- `protocol_family`: The protocol of the packet received.
- `packet`: The packet being input.
- `header`: The frame header.

<a id="return_value"></a>

## Return Value

If the result is zero, the caller will assume the packet was passed to the protocol. If the result is non-zero and not EJUSTRETURN, the caller will free the packet.

<a id="discussion"></a>

## Discussion

proto_media_input is called for all inbound packets for a specific protocol on a specific interface. This function is registered on an interface using ifnet_attach_protocol.
