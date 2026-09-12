> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nialgorithmconvergencestatusreasoninsufficientverticalsweep](https://developer.apple.com/documentation/nearbyinteraction/nialgorithmconvergencestatusreasoninsufficientverticalsweep)

# NIAlgorithmConvergenceStatusReasonInsufficientVerticalSweep

**Interface language:** Objective-C

**Framework:** Nearby Interaction  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

Indicates that the camera needs to view the user’s environment from different vertical angles.

## Declaration

```objectivec
extern NIAlgorithmConvergenceStatusReason const NIAlgorithmConvergenceStatusReasonInsufficientVerticalSweep;
```

<a id="Discussion"></a>

## Discussion

Coach the user to resolve the issue, such as by presenting text that instructs the user to sweep the device vertically up and down.

## See Also

### Coaching recommendations

- [NIAlgorithmConvergenceStatusReasonInsufficientHorizontalSweep](nialgorithmconvergencestatusreasoninsufficienthorizontalsweep.md): Indicates that the camera needs to view the user’s environment from different horizontal angles.
- [NIAlgorithmConvergenceStatusReasonInsufficientMovement](nialgorithmconvergencestatusreasoninsufficientmovement.md): Indicates that the device needs to move from its current position in the physical environment.
- [NIAlgorithmConvergenceStatusReasonInsufficientLighting](nialgorithmconvergencestatusreasoninsufficientlighting.md): Indicates that the camera needs to view the phsyical environment under better lighting conditions.
