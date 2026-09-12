> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_peer_requirement_t](https://developer.apple.com/documentation/xpc/xpc_peer_requirement_t)

# xpc_peer_requirement_t (Swift)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
typealias xpc_peer_requirement_t = OS_xpc_peer_requirement
```

<a id="discussion"></a>

## Discussion

XPC peer requirement is an abstract type that represents a validated requirement on peers.

Users can specify a requirement via `xpc_peer_requirement_create_*` API. These constructors will return a non-null xpc_peer_requirement_t if the requirement is valid. Users can set a xpc_peer_requirement_t on connections, sessions or listeners using one of `xpc_*_set_peer_requirement` API.

xpc_peer_requirement_t is reference counted and concurrency-safe. One xpc_peer_requirement_t can be shared among multiple connections, sessions or listeners.

# xpc_peer_requirement_t (Objective-C)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef NSObject<OS_xpc_peer_requirement> * xpc_peer_requirement_t;
```

<a id="discussion"></a>

## Discussion

XPC peer requirement is an abstract type that represents a validated requirement on peers.

Users can specify a requirement via `xpc_peer_requirement_create_*` API. These constructors will return a non-null xpc_peer_requirement_t if the requirement is valid. Users can set a xpc_peer_requirement_t on connections, sessions or listeners using one of `xpc_*_set_peer_requirement` API.

xpc_peer_requirement_t is reference counted and concurrency-safe. One xpc_peer_requirement_t can be shared among multiple connections, sessions or listeners.
