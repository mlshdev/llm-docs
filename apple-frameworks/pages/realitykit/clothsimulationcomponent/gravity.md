> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/gravity](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/gravity)

# gravity

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The gravitational acceleration for the bodies in the simulation, in m/s².

## Declaration

```swift
var gravity: SIMD3<Float>
```

<a id="discussion"></a>

## Discussion

Expressed in the simulation root entity’s local coordinate space.

The default value is 9.81 m/s² in the negative Y axis direction.

## See Also

### Applying forces

- [wind](wind.md): The wind force affecting all the cloth bodies in the simulation, in Newtons.
- [dampingFactor](dampingfactor.md): The damping factor affecting all the cloth bodies in the simulation. The expected range is between 0 and 1 (included).
