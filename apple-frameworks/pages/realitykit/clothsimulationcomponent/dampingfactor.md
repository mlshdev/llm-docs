> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/dampingfactor](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/dampingfactor)

# dampingFactor

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The damping factor affecting all the cloth bodies in the simulation. The expected range is between 0 and 1 (included).

## Declaration

```swift
var dampingFactor: Float { get set }
```

<a id="discussion"></a>

## Discussion

Damping reduces particle velocities each time step, simulating drag from the surrounding medium. A value of 0 does not damp the body at all, so the velocities of the particles are unaltered. A value of 1 damps all movement, such that the particle velocities remain at zero.

The default value is 0

## See Also

### Applying forces

- [gravity](gravity.md): The gravitational acceleration for the bodies in the simulation, in m/s².
- [wind](wind.md): The wind force affecting all the cloth bodies in the simulation, in Newtons.
