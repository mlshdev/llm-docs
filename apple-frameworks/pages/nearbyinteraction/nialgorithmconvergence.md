> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/nearbyinteraction/nialgorithmconvergence

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
