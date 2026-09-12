> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nialgorithmconvergencestatus-2fbmj/nialgorithmconvergencestatusnotconverged](https://developer.apple.com/documentation/nearbyinteraction/nialgorithmconvergencestatus-2fbmj/nialgorithmconvergencestatusnotconverged)

# NIAlgorithmConvergenceStatusNotConverged

**Interface language:** Objective-C

**Framework:** Nearby Interaction  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · watchOS

A status that indicates the framework’s Camera Assistance feature requires action from the user.

## Declaration

```objectivec
NIAlgorithmConvergenceStatusNotConverged
```

<a id="Discussion"></a>

## Discussion

In this state, the framework needs more information about the user’s physical environment before setting [horizontalAngle](../ninearbyobject/horizontalangle-9ibky.md) and/or [verticalDirectionEstimate](../ninearbyobject/verticaldirectionestimate-swift.property.md).

Look to the reasons array of the `convergence` object provided by  [session:didUpdateAlgorithmConvergence:forObject:](../nisessiondelegate/session%28__didupdatealgorithmconvergence_for_%29.md) for more information on the cause. Each reason indicates a specific action the user can do to provide ARKit with the necessary camera data to support Nearby Interaction’s Camera Assistance.
