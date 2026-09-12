> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/scope](https://developer.apple.com/documentation/computegraph/computenodegraph/scope)

# ComputeNodeGraph.Scope

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

A scope is a named region of memory, indicating where a value lives

## Declaration

```swift
struct Scope
```

<a id="overview"></a>

## Overview

A value that exists on each element of a simulation would have a scope of [element](../element.md), whereas a value that exists on the emitter stage would have a scope of [emitter](../emitter.md).

Each stage of execution provides a subset of available scopes. Stages such as [group](../group.md) are available only when grouping is enabled for particles.

## Topics

### Initializers

- [init(\_:)](scope/init%28__%29.md)

### Instance Properties

- [name](scope/name.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
