> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nialgorithmconvergencestatus-2fnve/unknown](https://developer.apple.com/documentation/nearbyinteraction/nialgorithmconvergencestatus-2fnve/unknown)

# NIAlgorithmConvergenceStatus.unknown

**Framework:** Nearby Interaction  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

An indication that the framework is unsure of the Camera Assistance status.

## Declaration

```swift
case unknown
```

<a id="Discussion"></a>

## Discussion

Look to a subsequent call to [session(\_:didUpdateAlgorithmConvergence:for:)](../nisessiondelegate/session%28__didupdatealgorithmconvergence_for_%29.md) and check for a more definitive algorithm-convergence status.

## See Also

### Interpreting the convergence state

- [NIAlgorithmConvergenceStatus.converged](converged.md): A status that indicates the framework’s Camera Assistance feature is operational.
- [NIAlgorithmConvergenceStatus.notConverged(\_:)](notconverged%28__%29.md): A status that indicates the framework’s Camera Assistance feature requires action from the user.
