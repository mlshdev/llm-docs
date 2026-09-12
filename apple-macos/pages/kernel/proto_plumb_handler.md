> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/proto_plumb_handler](https://developer.apple.com/documentation/kernel/proto_plumb_handler)

# proto_plumb_handler

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

## Declaration

```objectivec
typedef errno_t (*proto_plumb_handler)(ifnet_t ifp, protocol_family_t protocol);
```

## Parameters

- `ifp`: The interface the protocol should be attached to.
- `protocol_family`: The protocol that should be attached to the interface.

<a id="return_value"></a>

## Return Value

A non-zero value of the attach failed.

<a id="discussion"></a>

## Discussion

proto_plumb_handler is called to attach a protocol to an interface. A typical protocol plumb function would fill out an ifnet_attach_proto_param and call ifnet_attach_protocol.
