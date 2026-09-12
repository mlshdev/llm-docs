> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animatabledata](https://developer.apple.com/documentation/realitykit/animatabledata)

# AnimatableData

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A functionality specification that animatable data types adopt.

## Declaration

```swift
protocol AnimatableData
```

<a id="overview"></a>

## Overview

The templated animation objects, for example [BlendTreeAnimation](blendtreeanimation.md) `<Value>`, determine that the type you specify for `Value` adopts this protocol. The types that the framework accepts are: [JointTransforms](jointtransforms.md), [Transform](transform.md), [Float](https://developer.apple.com/documentation/swift/float), [Double](https://developer.apple.com/documentation/swift/double), [SIMD2](https://developer.apple.com/documentation/swift/simd2), [SIMD3](https://developer.apple.com/documentation/swift/simd3), [SIMD4](https://developer.apple.com/documentation/swift/simd4), and [simd_quatf](../simd/simd_quatf.md).

## Relationships

### Conforming Types

- [BlendShapeWeights](blendshapeweights.md)
- [JointTransforms](jointtransforms.md)
- [Transform](transform.md)

## See Also

### Compliance-related protocols

- [BindableData](bindabledata.md): An opaque base protocol for bindable data objects.
