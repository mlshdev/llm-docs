> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nialgorithmconvergencestatus-2fbmj/nialgorithmconvergencestatusunknown](https://developer.apple.com/documentation/nearbyinteraction/nialgorithmconvergencestatus-2fbmj/nialgorithmconvergencestatusunknown)

# NIAlgorithmConvergenceStatusUnknown

**Interface language:** Objective-C

**Framework:** Nearby Interaction  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · watchOS

An indication that the framework is unsure of the Camera Assistance status.

## Declaration

```objectivec
NIAlgorithmConvergenceStatusUnknown
```

<a id="Discussion"></a>

## Discussion

Look to a subsequent call to [session:didUpdateAlgorithmConvergence:forObject:](../nisessiondelegate/session%28__didupdatealgorithmconvergence_for_%29.md) and check for a more definitive algorithm-convergence status.
