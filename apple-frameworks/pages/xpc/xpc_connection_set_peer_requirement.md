> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_connection_set_peer_requirement](https://developer.apple.com/documentation/xpc/xpc_connection_set_peer_requirement)

# xpc_connection_set_peer_requirement

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
extern void xpc_connection_set_peer_requirement(xpc_connection_t connection, xpc_peer_requirement_t peer_requirement);
```

## Parameters

- `connection`: The connection object which is to be modified.
- `peer_requirement`: The requirement the peer must have. It is safe to deallocate the peer requirement after calling `xpc_connection_set_peer_requirement`.

<a id="discussion"></a>

## Discussion

Requires that the connection peer has the specified requirement.

It is a programming error to call multiple of the `xpc_connection_set_peer_*_requirement` family of functions on the same connection. If more complex combinations of requirements are required, use lightweight code requirement.

All messages received on this connection will be checked to ensure that they come from a peer who satisfies the requirement. For a listener connection, requests that do not satisfy the requirement are dropped. When a reply is expected on the connection and the peer does not satisfy the requirement `XPC_ERROR_PEER_CODE_SIGNING_REQUIREMENT` will be delivered instead of the reply.
