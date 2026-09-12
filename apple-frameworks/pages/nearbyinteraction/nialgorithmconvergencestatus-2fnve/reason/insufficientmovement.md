> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nialgorithmconvergencestatus-2fnve/reason/insufficientmovement](https://developer.apple.com/documentation/nearbyinteraction/nialgorithmconvergencestatus-2fnve/reason/insufficientmovement)

# insufficientMovement

**Framework:** Nearby Interaction  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

Indicates that the device needs to move from its current position in the physical environment.

## Declaration

```swift
static let insufficientMovement: NIAlgorithmConvergenceStatus.Reason
```

<a id="Discussion"></a>

## Discussion

Coach the user to resolve the issue, such as by presenting text that instructs the user to move around.

This reason prevents a nearby object from providing a [horizontalAngle](../../ninearbyobject/horizontalangle-hsg.md) and [verticalDirectionEstimate](../../ninearbyobject/verticaldirectionestimate-swift.property.md).

## See Also

### Interpreting the convergence status reason

- [insufficientHorizontalSweep](insufficienthorizontalsweep.md): Indicates that the device needs more horizontal motion.
- [insufficientVerticalSweep](insufficientverticalsweep.md): Indicates that the device needs more vertical motion.
- [insufficientLighting](insufficientlighting.md): Indicates that the camera needs to view the physical environment under better lighting conditions.
- [insufficientSignalStrength](insufficientsignalstrength.md): Indicates that the users might be too far apart.
