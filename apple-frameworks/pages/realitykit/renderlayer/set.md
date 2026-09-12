> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/renderlayer/set](https://developer.apple.com/documentation/realitykit/renderlayer/set)

# RenderLayer.Set

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An unordered collection of unique render layers.

## Declaration

```swift
struct Set
```

<a id="overview"></a>

## Overview

[RenderLayer.Set](set.md) represents a group of layers - for example, the layers a light illuminates ([layers](../directionallightcomponent/layers.md), [layers](../pointlightcomponent/layers.md), [layers](../spotlightcomponent/layers.md)) or the layers an entity participates in ([layers](../renderlayercomponent/layers.md)).

Create a [RenderLayer.Set](set.md) using an array literal:

```swift
let layers: RenderLayer.Set = [.defaultLayer, RenderLayer("com.myapp.hero")]
```

## Topics

### Inspecting the set

- [count](set/count.md): The number of layers in the set.
- [isEmpty](set/isempty.md): A Boolean value indicating whether the set contains no layers.
- [contains(\_:)](set/contains%28__%29.md): Returns a Boolean value indicating whether the set contains the given layer.

### Initializers

- [init()](set/init%28%29.md): Creates an empty set of render layers.
- [init(\_:)](set/init%28__%29.md): Creates a set of render layers from a sequence.

### Instance Methods

- [insert(\_:)](set/insert%28__%29.md): Inserts the given layer into the set.
- [remove(\_:)](set/remove%28__%29.md): Removes the given layer from the set if it exists.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)
