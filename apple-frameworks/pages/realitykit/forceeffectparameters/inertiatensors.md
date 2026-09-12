> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/forceeffectparameters/inertiatensors](https://developer.apple.com/documentation/realitykit/forceeffectparameters/inertiatensors)

# inertiaTensors

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The inertia tensor based on the current rigid body’s orientation, or nil if inertia tensor information was not requested.

## Declaration

```swift
let inertiaTensors: UnsafeForceEffectBuffer<simd_float3x3>?
```
