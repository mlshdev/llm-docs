> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nialgorithmconvergence](https://developer.apple.com/documentation/nearbyinteraction/nialgorithmconvergence)

# NIAlgorithmConvergence (Swift)

**Framework:** Nearby Interaction  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

An object that provides the state and reason for user coaching recommendations.

## Declaration

```swift
class NIAlgorithmConvergence
```

<a id="overview"></a>

## Overview

This class conveys the current state of the framework’s Camera Assistance feature when you turn on [isCameraAssistanceEnabled](ninearbypeerconfiguration/iscameraassistanceenabled.md). When the status indicates that user action is required to achieve the highest-quality results, instances of this class identify specific actions the user can do to help. To improve the status, the app needs to coach the user such as by presenting instructional text. The information you provide tells the user, for example, where and at what speed to pan the device around the environment.

To listen for the convergence status, implement [session(\_:didUpdateAlgorithmConvergence:for:)](nisessiondelegate/session%28__didupdatealgorithmconvergence_for_%29.md).

## Topics

### Determining convergence state

- [status](nialgorithmconvergence/status-654t.md): The current state of the framework’s Camera Assistance feature.

### Initializers

- [init(coder:)](nialgorithmconvergence/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Camera assistance

- [Finding devices with precision](finding-devices-with-precision.md): Leverage the spatial awareness of ARKit and Apple Ultra Wideband Chips in your app to guide users to a nearby device.
- [NIAlgorithmConvergenceStatus](nialgorithmconvergencestatus-2fnve.md): The possible states of Camera Assistance.
- [Algorithm Convergence Status](algorithm-convergence-status.md): The possible Objective-C states of Camera Assistance.

# NIAlgorithmConvergence (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

An object that provides the state and reason for user coaching recommendations.

## Declaration

```objectivec
@interface NIAlgorithmConvergence : NSObject
```

<a id="overview"></a>

## Overview

This class conveys the current state of the framework’s Camera Assistance feature when you turn on [cameraAssistanceEnabled](ninearbypeerconfiguration/iscameraassistanceenabled.md). When the status indicates that user action is required to achieve the highest-quality results, instances of this class identify specific actions the user can do to help. To improve the status, the app needs to coach the user such as by presenting instructional text. The information you provide tells the user, for example, where and at what speed to pan the device around the environment.

To listen for the convergence status, implement [session:didUpdateAlgorithmConvergence:forObject:](nisessiondelegate/session%28__didupdatealgorithmconvergence_for_%29.md).

## Topics

### Determining convergence state

- [status](nialgorithmconvergence/status-j61c.md): The current state of the framework’s Camera Assistance feature.

### Coaching the user based on convergence state

- [reasons](nialgorithmconvergence/reasons.md): An array of reasons that contribute to the convergence status.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Camera assistance

- [Finding devices with precision](finding-devices-with-precision.md): Leverage the spatial awareness of ARKit and Apple Ultra Wideband Chips in your app to guide users to a nearby device.
- [NIAlgorithmConvergenceStatus](nialgorithmconvergencestatus-2fbmj.md): Expose algorithm state to make it possible for apps to coach users.
- [Algorithm Convergence Status](algorithm-convergence-status.md): The possible Objective-C states of Camera Assistance.
