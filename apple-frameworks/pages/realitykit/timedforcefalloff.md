> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/timedforcefalloff](https://developer.apple.com/documentation/realitykit/timedforcefalloff)

# TimedForceFalloff

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A type that modulates the force strength based on how long the force effect has run.

## Declaration

```swift
struct TimedForceFalloff
```

<a id="overview"></a>

## Overview

Forces have the largest strength when the force effect starts to play and gradually decay to zero when approaching the given duration. The effect also stops playing when reaching the duration.

Similar to [SpatialForceFalloff](spatialforcefalloff.md), [rate](timedforcefalloff/rate.md) controls how fast the force strength decays. You can set the rate to zero to have a force effect with no temporal falloff.

```swift
let noTimedFalloff = TimedFalloff(duration: 1, rate: 0)
```

## Topics

### Initializers

- [init(duration:rate:)](timedforcefalloff/init%28duration_rate_%29.md): Creates a timed force falloff.

### Instance Properties

- [duration](timedforcefalloff/duration.md): The lifetime of the effect in seconds.
- [rate](timedforcefalloff/rate.md): The temporal falloff / attenuation rate.

## See Also

### Force effect constraints

- [ForceEffectBounds](forceeffectbounds.md): The boundary options for a force effect.
- [SpatialForceFalloff](spatialforcefalloff.md): A type that modulates the force strength based on the distance of rigid bodies.
