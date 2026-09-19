> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/forcemode/force

# ForceMode.force

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A constant force or torque applied to a body, influencing motion over time.

## Declaration

```swift
case force
```

<a id="discussion"></a>

## Discussion

The quantity that user sets via [setForce(\_:index:)](../forceeffectparameters/setforce%28__index_%29.md) has the units of mass \* distance /  time^2. i.e. a force ( mass \* acceleration ). `force` mode causes a change in acceleration that varies proportionally to a body’s mass.

The quantity that user sets via [setTorque(\_:index:)](../forceeffectparameters/settorque%28__index_%29.md) has the units of mass \* distance^2 / time^2. `force` mode causes a change in angular acceleration that varies proportionally to a body’s mass and inertia.
