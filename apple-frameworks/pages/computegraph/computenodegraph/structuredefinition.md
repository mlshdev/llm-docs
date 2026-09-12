> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/structuredefinition](https://developer.apple.com/documentation/computegraph/computenodegraph/structuredefinition)

# ComputeNodeGraph.StructureDefinition

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

A named structure type, pairing a type name with its in-memory layout.

## Declaration

```swift
struct StructureDefinition
```

<a id="overview"></a>

## Overview

A structure definition describes a composite value that can flow through a compute graph. It associates a Swift- or Metal-visible type name with a [ComputeNodeGraph.StructureLayout](structurelayout.md) that lays out the structure’s members, their offsets, and its overall size and stride.

Use a structure definition to refer to user-defined aggregate types from other graph types, such as [ComputeNodeGraph.ValueType.structure(definition:)](valuetype/structure%28definition_%29.md) or `ComputeNodeGraph/StateType/structure(typeName:layout:)`.

## Topics

### Initializers

- [init(typeName:layout:)](structuredefinition/init%28typename_layout_%29.md)

### Instance Properties

- [layout](structuredefinition/layout.md): The in-memory layout of the structure’s members.
- [typeName](structuredefinition/typename.md): The name used to refer to the structure type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
