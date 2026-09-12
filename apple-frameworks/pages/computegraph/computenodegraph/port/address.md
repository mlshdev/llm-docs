> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/port/address](https://developer.apple.com/documentation/computegraph/computenodegraph/port/address)

# ComputeNodeGraph.Port.Address

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

A location of a specific port on a node, identified by the node and the port’s index.

## Declaration

```swift
struct Address
```

## Topics

### Initializers

- [init(node:index:)](address/init%28node_index_%29.md)

### Instance Properties

- [index](address/index.md): The index of the port within the node’s input or output list.
- [node](address/node.md): The node that owns this port.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
