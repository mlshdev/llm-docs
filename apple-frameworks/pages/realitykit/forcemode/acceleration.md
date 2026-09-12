> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/forcemode/acceleration](https://developer.apple.com/documentation/realitykit/forcemode/acceleration)

# ForceMode.acceleration

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A direct adjustment to a body’s linear or angular acceleration, independent of its mass or inertia.

## Declaration

```swift
case acceleration
```

<a id="discussion"></a>

## Discussion

The quantity that user sets via [setForce(\_:index:)](../forceeffectparameters/setforce%28__index_%29.md) has the units of distance / time^2. `acceleration` mode causes a change in acceleration independent of a body’s mass.

The quantity that user sets via [setTorque(\_:index:)](../forceeffectparameters/settorque%28__index_%29.md) has the units of 1 / time^2 or radian / time^2. `acceleration` mode causes a change in angular acceleration independent of a body’s mass or inertia.
