> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nialgorithmconvergencestatus-2fnve/reason/insufficientsignalstrength](https://developer.apple.com/documentation/nearbyinteraction/nialgorithmconvergencestatus-2fnve/reason/insufficientsignalstrength)

# insufficientSignalStrength

**Framework:** Nearby Interaction  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

Indicates that the users might be too far apart.

## Declaration

```swift
static let insufficientSignalStrength: NIAlgorithmConvergenceStatus.Reason
```

<a id="Discussion"></a>

## Discussion

Coach the user to resolve the issue, such as by presenting text that instructs the user to move closer to the nearby peer or object.

## See Also

### Interpreting the convergence status reason

- [insufficientMovement](insufficientmovement.md): Indicates that the device needs to move from its current position in the physical environment.
- [insufficientHorizontalSweep](insufficienthorizontalsweep.md): Indicates that the device needs more horizontal motion.
- [insufficientVerticalSweep](insufficientverticalsweep.md): Indicates that the device needs more vertical motion.
- [insufficientLighting](insufficientlighting.md): Indicates that the camera needs to view the physical environment under better lighting conditions.
