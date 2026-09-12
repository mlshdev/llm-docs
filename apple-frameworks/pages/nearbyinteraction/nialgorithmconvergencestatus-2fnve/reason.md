> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nialgorithmconvergencestatus-2fnve/reason](https://developer.apple.com/documentation/nearbyinteraction/nialgorithmconvergencestatus-2fnve/reason)

# NIAlgorithmConvergenceStatus.Reason

**Framework:** Nearby Interaction  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

The possible reasons for the Camera Assistance status.

## Declaration

```swift
struct Reason
```

<a id="overview"></a>

## Overview

When the app enables Camera Assistance by setting [isCameraAssistanceEnabled](../ninearbypeerconfiguration/iscameraassistanceenabled.md) to `true`, the framework provides the app with one or more reasons when the convergence status is [NIAlgorithmConvergenceStatus.notConverged(\_:)](notconverged%28__%29.md). The reasons detail specific user actions the framework requires to improve the results of Camera Assistance.

At runtime, the app needs to check the status in the `convergence` object provided by [session(\_:didUpdateAlgorithmConvergence:for:)](../nisessiondelegate/session%28__didupdatealgorithmconvergence_for_%29.md). If the status indicates that Camera Assistance requires user intervention, the app needs to coach the user, such as by presenting text that explains what to do for each circumstance that [reasons](../nialgorithmconvergence/reasons.md) can describe.

> **Note**

> The Objective-C version of this class is [NIAlgorithmConvergenceStatusReason](../nialgorithmconvergencestatusreason.md).

## Topics

### Comparing convergence status reasons

- [localizedDescription](reason/localizeddescription.md): A string that contains a description of the error.

### Interpreting the convergence status reason

- [insufficientMovement](reason/insufficientmovement.md): Indicates that the device needs to move from its current position in the physical environment.
- [insufficientHorizontalSweep](reason/insufficienthorizontalsweep.md): Indicates that the device needs more horizontal motion.
- [insufficientVerticalSweep](reason/insufficientverticalsweep.md): Indicates that the device needs more vertical motion.
- [insufficientLighting](reason/insufficientlighting.md): Indicates that the camera needs to view the physical environment under better lighting conditions.
- [insufficientSignalStrength](reason/insufficientsignalstrength.md): Indicates that the users might be too far apart.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
