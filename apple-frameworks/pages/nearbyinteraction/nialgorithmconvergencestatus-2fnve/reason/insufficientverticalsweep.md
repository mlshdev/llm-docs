> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nialgorithmconvergencestatus-2fnve/reason/insufficientverticalsweep](https://developer.apple.com/documentation/nearbyinteraction/nialgorithmconvergencestatus-2fnve/reason/insufficientverticalsweep)

# insufficientVerticalSweep

**Framework:** Nearby Interaction  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

Indicates that the device needs more vertical motion.

## Declaration

```swift
static let insufficientVerticalSweep: NIAlgorithmConvergenceStatus.Reason
```

<a id="Discussion"></a>

## Discussion

Coach the user to resolve the issue, such as by presenting text that asks the user to move the device in a vertical direction.

This reason may prevent a nearby object from providing a [verticalDirectionEstimate](../../ninearbyobject/verticaldirectionestimate-swift.property.md). This reason doesn’t effect the [horizontalAngle](../../ninearbyobject/horizontalangle-hsg.md) property.

## See Also

### Interpreting the convergence status reason

- [insufficientMovement](insufficientmovement.md): Indicates that the device needs to move from its current position in the physical environment.
- [insufficientHorizontalSweep](insufficienthorizontalsweep.md): Indicates that the device needs more horizontal motion.
- [insufficientLighting](insufficientlighting.md): Indicates that the camera needs to view the physical environment under better lighting conditions.
- [insufficientSignalStrength](insufficientsignalstrength.md): Indicates that the users might be too far apart.
