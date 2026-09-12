> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nialgorithmconvergencestatus-2fnve/converged](https://developer.apple.com/documentation/nearbyinteraction/nialgorithmconvergencestatus-2fnve/converged)

# NIAlgorithmConvergenceStatus.converged

**Framework:** Nearby Interaction  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

A status that indicates the framework’s Camera Assistance feature is operational.

## Declaration

```swift
case converged
```

<a id="Discussion"></a>

## Discussion

In this state, the app doesn’t need to coach the user and receives all the benefits of Camera Assistance described in [isCameraAssistanceEnabled](../ninearbypeerconfiguration/iscameraassistanceenabled.md).

## See Also

### Interpreting the convergence state

- [NIAlgorithmConvergenceStatus.notConverged(\_:)](notconverged%28__%29.md): A status that indicates the framework’s Camera Assistance feature requires action from the user.
- [NIAlgorithmConvergenceStatus.unknown](unknown.md): An indication that the framework is unsure of the Camera Assistance status.
