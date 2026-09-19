> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/forceeffectparameters/angularvelocities

# angularVelocities

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The angular velocities of all rigid bodies under the influence of the effect, or nil if angular velocity information was not requested.

## Declaration

```swift
let angularVelocities: UnsafeForceEffectBuffer<SIMD3<Float>>?
```
