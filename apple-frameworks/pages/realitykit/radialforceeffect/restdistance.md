> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/radialforceeffect/restdistance](https://developer.apple.com/documentation/realitykit/radialforceeffect/restdistance)

# restDistance

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A distance at which the rigid bodies receive zero radial force.

## Declaration

```swift
let restDistance: Float
```

<a id="discussion"></a>

## Discussion

Use a **non-negative** rate. The force field pulls rigid bodies to the effect’s origin along the radial direction if this value is `0`.
