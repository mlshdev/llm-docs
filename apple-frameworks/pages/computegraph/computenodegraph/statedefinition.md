> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/statedefinition](https://developer.apple.com/documentation/computegraph/computenodegraph/statedefinition)

# ComputeNodeGraph.StateDefinition

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

A declaration of a named state value and where it lives in the simulation.

## Declaration

```swift
struct StateDefinition
```

<a id="overview"></a>

## Overview

State definitions are used by `ComputeNodeGraph/Node/Kind/loadState(definition:)` and `ComputeNodeGraph/Node/Kind/storeState(definition:)` nodes to read and write values at a particular scope.

## Topics

### Structures

- [ComputeNodeGraph.StateDefinition.Options](statedefinition/options-swift.struct.md)

### Initializers

- [init(scope:options:type:)](statedefinition/init%28scope_options_type_%29.md)

### Instance Properties

- [options](statedefinition/options-swift.property.md): Whether this state is read, written, or both. See [ComputeNodeGraph.StateDefinition.Options](statedefinition/options-swift.struct.md).
- [scope](statedefinition/scope.md): The scope that owns this state. For example, `ComputeNodeGraph/Scope/element` stores a value per particle, while `ComputeNodeGraph/Scope/emitter` stores a single value used by the emission stage.
- [type](statedefinition/type.md): The data type of the stored value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
