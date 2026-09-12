> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/forcemode/impulse](https://developer.apple.com/documentation/realitykit/forcemode/impulse)

# ForceMode.impulse

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A direct adjustment to a body’s linear or angular momentum.

## Declaration

```swift
case impulse
```

<a id="discussion"></a>

## Discussion

The quantity that user sets via [setForce(\_:index:)](../forceeffectparameters/setforce%28__index_%29.md) has the units of mass \* distance / time. `impulse` mode causes a change in linear momentum.

The quantity that user sets via [setTorque(\_:index:)](../forceeffectparameters/settorque%28__index_%29.md) has the units of mass \* distance^2 / time. `impulse` mode causes a change in angular momentum.
