> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/proto_media_event](https://developer.apple.com/documentation/kernel/proto_media_event)

# proto_media_event

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

## Declaration

```objectivec
typedef void (*proto_media_event)(ifnet_t ifp, protocol_family_t protocol, const struct kev_msg *event);
```

## Parameters

- `ifp`: The interface.
- `protocol_family`: The protocol family.
- `kev_msg`: The event.

<a id="discussion"></a>

## Discussion

proto_media_event is called to notify this layer of interface specific events.
