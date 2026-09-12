> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/gaussiansplatresource/sphericalharmonicdegree](https://developer.apple.com/documentation/realitykit/gaussiansplatresource/sphericalharmonicdegree)

# GaussianSplatResource.SphericalHarmonicDegree

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The amount of view-dependent color detail stored per splat.

## Declaration

```swift
enum SphericalHarmonicDegree
```

<a id="overview"></a>

## Overview

Higher degrees capture higher-frequency color variation as the viewing angle changes, at the cost of more data per splat.

## Topics

### Enumeration Cases

- [GaussianSplatResource.SphericalHarmonicDegree.first](sphericalharmonicdegree/first.md): 12 values: three first-order lobes plus the degree-zero diffuse color.
- [GaussianSplatResource.SphericalHarmonicDegree.second](sphericalharmonicdegree/second.md): 27 values: five second-order lobes plus the degree-one coefficients.
- [GaussianSplatResource.SphericalHarmonicDegree.third](sphericalharmonicdegree/third.md): 48 values: seven third-order lobes plus the degree-two coefficients.
- [GaussianSplatResource.SphericalHarmonicDegree.zero](sphericalharmonicdegree/zero.md): 3 values: diffuse color only.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
