> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clippingcomponent/featherededge-swift.struct](https://developer.apple.com/documentation/realitykit/clippingcomponent/featherededge-swift.struct)

# ClippingComponent.FeatheredEdge

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Configuration for feathering the clipping boundaries.

## Declaration

```swift
struct FeatheredEdge
```

<a id="overview"></a>

## Overview

Feathering is defined separately for positive and negative edges of each axis, providing fine-grained control over how content fades out near the clipping bounds.

## Topics

### Creating a feathered edge

- [init(symmetricEdgeInset:falloff:)](featherededge-swift.struct/init%28symmetricedgeinset_falloff_%29.md): Initializes both [positiveEdgeInset](featherededge-swift.struct/positiveedgeinset.md) and [negativeEdgeInset](featherededge-swift.struct/negativeedgeinset.md) with the same symmetric value.

### Configuring edge insets

- [positiveEdgeInset](featherededge-swift.struct/positiveedgeinset.md): The distance from each positive edge (+X, +Y, +Z) of the clip bounds over which opacity fades to 0, expressed in local coordinate space units.
- [negativeEdgeInset](featherededge-swift.struct/negativeedgeinset.md): The distance from each negative edge (-X, -Y, -Z) of the clip bounds over which opacity fades to 0, expressed in local coordinate space units.

### Controlling the falloff

- [falloff](featherededge-swift.struct/falloff-swift.property.md): The falloff function used for the feathered edge computation.
- [ClippingComponent.FeatheredEdge.Falloff](featherededge-swift.struct/falloff-swift.enum.md)

### Type Properties

- [none](featherededge-swift.struct/none.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Feathering clipped edges

- [featheredEdge](featherededge-swift.property.md): The feathering configuration for the clipping boundaries.
