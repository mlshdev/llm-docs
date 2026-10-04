> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/nearbyinteraction/nialgorithmconvergencestatus-2fbmj

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
