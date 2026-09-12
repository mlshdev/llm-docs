> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nialgorithmconvergencestatusreasoninsufficientmovement](https://developer.apple.com/documentation/nearbyinteraction/nialgorithmconvergencestatusreasoninsufficientmovement)

# NIAlgorithmConvergenceStatusReasonInsufficientMovement

**Interface language:** Objective-C

**Framework:** Nearby Interaction  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

Indicates that the device needs to move from its current position in the physical environment.

## Declaration

```objectivec
extern NIAlgorithmConvergenceStatusReason const NIAlgorithmConvergenceStatusReasonInsufficientMovement;
```

<a id="Discussion"></a>

## Discussion

Coach the user to resolve the issue, such as by presenting text that instructs the user to move around.

## See Also

### Coaching recommendations

- [NIAlgorithmConvergenceStatusReasonInsufficientHorizontalSweep](nialgorithmconvergencestatusreasoninsufficienthorizontalsweep.md): Indicates that the camera needs to view the user’s environment from different horizontal angles.
- [NIAlgorithmConvergenceStatusReasonInsufficientVerticalSweep](nialgorithmconvergencestatusreasoninsufficientverticalsweep.md): Indicates that the camera needs to view the user’s environment from different vertical angles.
- [NIAlgorithmConvergenceStatusReasonInsufficientLighting](nialgorithmconvergencestatusreasoninsufficientlighting.md): Indicates that the camera needs to view the phsyical environment under better lighting conditions.
