> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/statetype](https://developer.apple.com/documentation/computegraph/computenodegraph/statetype)

# ComputeNodeGraph.StateType

**Framework:** Compute Graph  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

The shape of a value stored in a compute graph’s state.

## Declaration

```swift
enum StateType
```

<a id="overview"></a>

## Overview

`StateType` describes what kind of value a state holds. The shape determines the slot’s size, alignment, and how it is surfaced in generated Metal source and in graph serialization.

## Topics

### Enumeration Cases

- [ComputeNodeGraph.StateType.array(definition:)](statetype/array%28definition_%29.md): Value is an array with the provided definition
- [ComputeNodeGraph.StateType.data(length:)](statetype/data%28length_%29.md): Value is a fixed number of untyped bytes
- [ComputeNodeGraph.StateType.dataType(type:)](statetype/datatype%28type_%29.md): Deprecated. Legacy. Do not construct in new code.
- [ComputeNodeGraph.StateType.primitive(type:)](statetype/primitive%28type_%29.md): Value is a primitive with the given type
- [ComputeNodeGraph.StateType.structure(definition:)](statetype/structure%28definition_%29.md): Value is a structure with the given layout

### Instance Methods

- [loadBuffer(from:)](statetype/loadbuffer%28from_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
