> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/assembly/uniformbinding](https://developer.apple.com/documentation/computegraph/computenodegraph/assembly/uniformbinding)

# ComputeNodeGraph.Assembly.UniformBinding

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Describes how a uniform value is located within the graph’s uniform buffer.

## Declaration

```swift
struct UniformBinding
```

<a id="overview"></a>

## Overview

A uniform binding combines a `Relocation_v1` (the byte offset and size within the uniform buffer) with a [ComputeNodeGraph.StateType](../statetype.md) describing the data layout at that location.

## Topics

### Initializers

- [init(location:type:)](uniformbinding/init%28location_type_%29.md)

### Instance Properties

- [location](uniformbinding/location.md): The location of this uniform within the uniform buffer.
- [type](uniformbinding/type.md): The data type stored at this location.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
