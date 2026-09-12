> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spatialforcefalloff](https://developer.apple.com/documentation/realitykit/spatialforcefalloff)

# SpatialForceFalloff

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A type that modulates the force strength based on the distance of rigid bodies.

## Declaration

```swift
struct SpatialForceFalloff
```

<a id="overview"></a>

## Overview

Forces applied to rigid bodies near the effect’s origin have the largest strength and gradually decay to zero when approaching the boundary of [ForceEffectBounds](forceeffectbounds.md).

[rate](spatialforcefalloff/rate.md) controls how fast the force strength decays. Under the hood the rate is an exponent of the normalized distance over the spatial bounds. For example when the rate is 0, the falloff coefficient (i.e. distance raised to the power of 0) is constantly 1, and that implies no decay or falloff the force strength.

```swift
let noFalloff = SpatialForceFalloff(bounds: .sphere(radius: 10), rate: 0)
```

As another example, you can set [rate](spatialforcefalloff/rate.md) to `1` to decay the force strength linearly.

```swift
let linearFalloff = SpatialForceFalloff(bounds: .sphere(radius: 10), rate: 1)
```

## Topics

### Initializers

- [init(bounds:rate:distanceOffset:)](spatialforcefalloff/init%28bounds_rate_distanceoffset_%29.md): Creates a spatial force falloff.

### Instance Properties

- [bounds](spatialforcefalloff/bounds.md): The spatial bounds that define the area over which the force effect’s strength decreases.
- [distanceOffset](spatialforcefalloff/distanceoffset.md): A distance from the origin where the falloff begins.
- [rate](spatialforcefalloff/rate.md): The spatial falloff / attenuation rate.

## See Also

### Force effect constraints

- [ForceEffectBounds](forceeffectbounds.md): The boundary options for a force effect.
- [TimedForceFalloff](timedforcefalloff.md): A type that modulates the force strength based on how long the force effect has run.
