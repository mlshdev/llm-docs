> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/port/kind](https://developer.apple.com/documentation/computegraph/computenodegraph/port/kind)

# ComputeNodeGraph.Port.Kind

**Framework:** Compute Graph  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

The semantic role of a port, determining what it carries along an edge and whether the edge imposes execution ordering between its endpoints.

## Declaration

```swift
enum Kind
```

## Topics

### Enumeration Cases

- [ComputeNodeGraph.Port.Kind.context](kind/context.md): Carries an ambient runtime context handle injected by the graph at execution time. Destination reads the handle; no ordering effect.
- [ComputeNodeGraph.Port.Kind.dependency](kind/dependency.md): Pure “happens-after” edge. No runtime payload, no type lineage, no type compatibility check. The destination is ordered after the source but does not consume its output. Use this to splice a node (e.g. a compute stage) into execution order between two unrelated nodes.
- [ComputeNodeGraph.Port.Kind.event](kind/event.md): Carries a typed event payload. Triggers downstream execution per event AND carries data (e.g. spawn/update/terminate events with element data).
- [ComputeNodeGraph.Port.Kind.flow](kind/flow.md): Execution-ordering edge whose destination is conceptually a consumer of the source’s typed output. No runtime payload is transferred, but type compatibility is enforced. Used for stage → stage sequencing.
- [ComputeNodeGraph.Port.Kind.state](kind/state.md): Carries a read/write binding to named external storage (element, emitter, group, output attribute, threadgroup memory). Type is always `.state(definition:)`. No ordering effect.
- [ComputeNodeGraph.Port.Kind.value](kind/value.md): Carries a typed data value from source to destination. One-way read, no ordering effect.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
