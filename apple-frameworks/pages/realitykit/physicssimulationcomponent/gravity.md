> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicssimulationcomponent/gravity](https://developer.apple.com/documentation/realitykit/physicssimulationcomponent/gravity)

# gravity

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The gravity for the simulation relative to the simulation entity.

## Declaration

```swift
var gravity: SIMD3<Float>
```

<a id="discussion"></a>

## Discussion

The value stored in this property is the gravitational acceleration applied to dynamic physics body entities every frame along the negative world y-axis. The default value is `-9.81` meters per second squared.
