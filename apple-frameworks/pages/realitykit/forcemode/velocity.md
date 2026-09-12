> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/forcemode/velocity](https://developer.apple.com/documentation/realitykit/forcemode/velocity)

# ForceMode.velocity

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A direct adjustment to a body’s linear or angular velocity, independent of its mass or inertia.

## Declaration

```swift
case velocity
```

<a id="discussion"></a>

## Discussion

The quantity that user sets via [setForce(\_:index:)](../forceeffectparameters/setforce%28__index_%29.md) has the units of distance / time. `velocity` mode causes a change in velocity independent of a body’s mass.

The quantity that user sets via [setTorque(\_:index:)](../forceeffectparameters/settorque%28__index_%29.md) has the units of 1 / time or radian / time. `velocity` mode causes a change in angular velocity independent of a body’s mass or inertia.
