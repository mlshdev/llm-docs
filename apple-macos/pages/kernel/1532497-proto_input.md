> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1532497-proto_input](https://developer.apple.com/documentation/kernel/1532497-proto_input)

# proto_input

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
errno_t proto_input(protocol_family_t protocol, mbuf_t packet);
```

## Parameters

- `protocol`: The protocol of the packet.
- `packet`: The first packet in a chain of packets to be input.

<a id="return_value"></a>

## Return Value

A errno error on failure. Unless proto_input returns zero, the caller is responsible for freeing the mbuf.

<a id="discussion"></a>

## Discussion

Inputs a packet on the specified protocol from the input path.
