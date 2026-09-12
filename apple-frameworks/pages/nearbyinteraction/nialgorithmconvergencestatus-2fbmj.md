> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nialgorithmconvergencestatus-2fbmj](https://developer.apple.com/documentation/nearbyinteraction/nialgorithmconvergencestatus-2fbmj)

# NIAlgorithmConvergenceStatus

**Interface language:** Objective-C

**Framework:** Nearby Interaction  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · watchOS

Expose algorithm state to make it possible for apps to coach users.

## Declaration

```objectivec
enum NIAlgorithmConvergenceStatus : NSInteger;
```

## Topics

### Enumeration Cases

- [NIAlgorithmConvergenceStatusConverged](nialgorithmconvergencestatus-2fbmj/nialgorithmconvergencestatusconverged.md): A status that indicates the framework’s Camera Assistance feature is operational.
- [NIAlgorithmConvergenceStatusNotConverged](nialgorithmconvergencestatus-2fbmj/nialgorithmconvergencestatusnotconverged.md): A status that indicates the framework’s Camera Assistance feature requires action from the user.
- [NIAlgorithmConvergenceStatusUnknown](nialgorithmconvergencestatus-2fbmj/nialgorithmconvergencestatusunknown.md): An indication that the framework is unsure of the Camera Assistance status.

## See Also

### Camera assistance

- [Finding devices with precision](finding-devices-with-precision.md): Leverage the spatial awareness of ARKit and Apple Ultra Wideband Chips in your app to guide users to a nearby device.
- [NIAlgorithmConvergence](nialgorithmconvergence.md): An object that provides the state and reason for user coaching recommendations.
- [Algorithm Convergence Status](algorithm-convergence-status.md): The possible Objective-C states of Camera Assistance.
