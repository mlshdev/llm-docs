> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bindabledata](https://developer.apple.com/documentation/realitykit/bindabledata)

# BindableData

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An opaque base protocol for bindable data objects.

## Declaration

```swift
protocol BindableData
```

<a id="overview"></a>

## Overview

The templated bindable-value object, [BindableValue](bindablevalue.md) `<T>`, determines that the value you choose for type `T` adopts this protocol. The types that the framework accepts are: [Transform](transform.md), [Float](https://developer.apple.com/documentation/swift/float), [Double](https://developer.apple.com/documentation/swift/double), [SIMD2](https://developer.apple.com/documentation/swift/simd2), [SIMD3](https://developer.apple.com/documentation/swift/simd3), [SIMD4](https://developer.apple.com/documentation/swift/simd4), [simd_quatf](../simd/simd_quatf.md), [Bool](https://developer.apple.com/documentation/swift/bool), [Int](https://developer.apple.com/documentation/swift/int), and [String](https://developer.apple.com/documentation/swift/string).

## Relationships

### Conforming Types

- [Transform](transform.md)

## See Also

### Compliance-related protocols

- [AnimatableData](animatabledata.md): A functionality specification that animatable data types adopt.
