> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/algorithm-convergence-status](https://developer.apple.com/documentation/nearbyinteraction/algorithm-convergence-status)

# Algorithm Convergence Status (Swift)

**Framework:** Nearby Interaction  
**Kind:** API Collection

The possible Objective-C states of Camera Assistance.

<a id="overview"></a>

## Overview

When the app enables Camera Assistance by setting [isCameraAssistanceEnabled](ninearbypeerconfiguration/iscameraassistanceenabled.md) = `true`, the framework may require user action before the feature is operational at runtime. This enumeration indicates whether Camera Assistance currently functions as expected on device, and the [NIAlgorithmConvergenceStatusReason](nialgorithmconvergencestatusreason.md) reasons define the recommended user actions to get Camera Assistance operational, if needed.

## Topics

### Status

- [NIAlgorithmConvergenceStatus](nialgorithmconvergencestatus-2fnve.md): The possible states of Camera Assistance.

## See Also

### Camera assistance

- [Finding devices with precision](finding-devices-with-precision.md): Leverage the spatial awareness of ARKit and Apple Ultra Wideband Chips in your app to guide users to a nearby device.
- [NIAlgorithmConvergence](nialgorithmconvergence.md): An object that provides the state and reason for user coaching recommendations.
- [NIAlgorithmConvergenceStatus](nialgorithmconvergencestatus-2fnve.md): The possible states of Camera Assistance.

# Algorithm Convergence Status (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** API Collection

The possible Objective-C states of Camera Assistance.

<a id="overview"></a>

## Overview

When the app enables Camera Assistance by setting [cameraAssistanceEnabled](ninearbypeerconfiguration/iscameraassistanceenabled.md) = `true`, the framework may require user action before the feature is operational at runtime. This enumeration indicates whether Camera Assistance currently functions as expected on device, and the [NIAlgorithmConvergenceStatusReason](nialgorithmconvergencestatusreason.md) reasons define the recommended user actions to get Camera Assistance operational, if needed.

## Topics

### Coaching recommendations

- [NIAlgorithmConvergenceStatusReasonInsufficientHorizontalSweep](nialgorithmconvergencestatusreasoninsufficienthorizontalsweep.md): Indicates that the camera needs to view the user’s environment from different horizontal angles.
- [NIAlgorithmConvergenceStatusReasonInsufficientVerticalSweep](nialgorithmconvergencestatusreasoninsufficientverticalsweep.md): Indicates that the camera needs to view the user’s environment from different vertical angles.
- [NIAlgorithmConvergenceStatusReasonInsufficientMovement](nialgorithmconvergencestatusreasoninsufficientmovement.md): Indicates that the device needs to move from its current position in the physical environment.
- [NIAlgorithmConvergenceStatusReasonInsufficientLighting](nialgorithmconvergencestatusreasoninsufficientlighting.md): Indicates that the camera needs to view the phsyical environment under better lighting conditions.

### Reasons

- [NIAlgorithmConvergenceStatusReason](nialgorithmconvergencestatusreason.md): The possible reasons for the framework’s Camera Assistance status.
- [NIAlgorithmConvergenceStatusReasonDescription](nialgorithmconvergencestatusreasondescription.md): A human-readable description for a particular convergence status reason.

## See Also

### Camera assistance

- [Finding devices with precision](finding-devices-with-precision.md): Leverage the spatial awareness of ARKit and Apple Ultra Wideband Chips in your app to guide users to a nearby device.
- [NIAlgorithmConvergence](nialgorithmconvergence.md): An object that provides the state and reason for user coaching recommendations.
- [NIAlgorithmConvergenceStatus](nialgorithmconvergencestatus-2fbmj.md): Expose algorithm state to make it possible for apps to coach users.
