> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/proto_media_resolve_multi](https://developer.apple.com/documentation/kernel/proto_media_resolve_multi)

# proto_media_resolve_multi

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

## Declaration

```objectivec
typedef errno_t (*proto_media_resolve_multi)(ifnet_t ifp, const struct sockaddr *proto_addr, struct sockaddr_dl *out_ll, size_t ll_len);
```

## Parameters

- `ifp`: The interface.
- `proto_addr`: The protocol address.
- `out_ll`: A sockaddr_dl to copy the link layer multicast in to.
- `ll_len`: The length of data allocated for out_ll.

<a id="return_value"></a>

## Return Value

Return zero on success or an errno error value on failure.

<a id="discussion"></a>

## Discussion

proto_media_resolve_multi is called to resolve a protocol layer mulitcast address to a link layer multicast address.
