> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/nearbyinteraction/nialgorithmconvergencestatusreasoninsufficienthorizontalsweep

# NIAlgorithmConvergenceStatusReasonInsufficientHorizontalSweep

**Interface language:** Objective-C

**Framework:** Nearby Interaction  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

Indicates that the camera needs to view the user’s environment from different horizontal angles.

## Declaration

```objectivec
extern NIAlgorithmConvergenceStatusReason const NIAlgorithmConvergenceStatusReasonInsufficientHorizontalSweep;
```

<a id="Discussion"></a>

## Discussion

Coach the user to resolve the issue, such as by presenting text that instructs the user to sweep the device horizontally from side to side.

## See Also

### Coaching recommendations

- [NIAlgorithmConvergenceStatusReasonInsufficientVerticalSweep](nialgorithmconvergencestatusreasoninsufficientverticalsweep.md): Indicates that the camera needs to view the user’s environment from different vertical angles.
- [NIAlgorithmConvergenceStatusReasonInsufficientMovement](nialgorithmconvergencestatusreasoninsufficientmovement.md): Indicates that the device needs to move from its current position in the physical environment.
- [NIAlgorithmConvergenceStatusReasonInsufficientLighting](nialgorithmconvergencestatusreasoninsufficientlighting.md): Indicates that the camera needs to view the phsyical environment under better lighting conditions.
