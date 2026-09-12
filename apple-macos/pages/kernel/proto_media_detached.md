> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/proto_media_detached](https://developer.apple.com/documentation/kernel/proto_media_detached)

# proto_media_detached

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

## Declaration

```objectivec
typedef errno_t (*proto_media_detached)(ifnet_t ifp, protocol_family_t protocol);
```

## Parameters

- `ifp`: The interface.
- `protocol_family`: The protocol family.

<a id="return_value"></a>

## Return Value

See the discussion.

<a id="discussion"></a>

## Discussion

proto_media_detached notifies you that your protocol has been detached.
