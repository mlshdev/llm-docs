> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/assembly/attachment](https://developer.apple.com/documentation/computegraph/computenodegraph/assembly/attachment)

# ComputeNodeGraph.Assembly.Attachment

**Framework:** Compute Graph  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Identifies where a resource is attached in the compute graph.

## Declaration

```swift
enum Attachment
```

<a id="overview"></a>

## Overview

Each buffer and texture bound to a compute pipeline is sourced from a specific attachment point: the graph itself, or a named input or output port on a node.

## Topics

### Enumeration Cases

- [ComputeNodeGraph.Assembly.Attachment.graph](attachment/graph.md): The resource is owned by the graph and shared across all stages.
- [ComputeNodeGraph.Assembly.Attachment.input(\_:)](attachment/input%28__%29.md): The resource is read by an input port at the given address.
- [ComputeNodeGraph.Assembly.Attachment.output(\_:)](attachment/output%28__%29.md): The resource is produced by an output port at the given address.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
