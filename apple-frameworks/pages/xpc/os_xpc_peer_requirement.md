> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/os_xpc_peer_requirement](https://developer.apple.com/documentation/xpc/os_xpc_peer_requirement)

# OS_xpc_peer_requirement

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
@protocol OS_xpc_peer_requirement <NSObject>
```

<a id="overview"></a>

## Overview

XPC peer requirement is an abstract type that represents a validated requirement on peers.

Users can specify a requirement via `xpc_peer_requirement_create_*` API. These constructors will return a non-null xpc_peer_requirement_t if the requirement is valid. Users can set a xpc_peer_requirement_t on connections, sessions or listeners using one of `xpc_*_set_peer_requirement` API.

xpc_peer_requirement_t is reference counted and concurrency-safe. One xpc_peer_requirement_t can be shared among multiple connections, sessions or listeners.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)
