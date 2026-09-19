> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/proto_unplumb_handler

# proto_unplumb_handler

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

## Declaration

```objectivec
typedef void (*proto_unplumb_handler)(ifnet_t ifp, protocol_family_t protocol);
```

## Parameters

- `ifp`: The interface the protocol should be detached from.
- `protocol_family`: The protocol that should be detached from the interface.

<a id="discussion"></a>

## Discussion

proto_unplumb_handler is called to detach a protocol from an interface. A typical unplumb function would call ifnet_detach_protocol and perform any necessary cleanup.
