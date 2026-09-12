> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntrajectoryobservation](https://developer.apple.com/documentation/vision/vntrajectoryobservation)

# VNTrajectoryObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An observation that describes a detected trajectory.

## Declaration

```swift
class VNTrajectoryObservation
```

## Mentioned In

- [Identifying Trajectories in Video](identifying-trajectories-in-video.md)

## Topics

### Evaluating an Observation

- [detectedPoints](vntrajectoryobservation/detectedpoints.md): The centroid points of the detected contour along the trajectory.
- [projectedPoints](vntrajectoryobservation/projectedpoints.md): The centroids of the calculated trajectory from the detected points.
- [equationCoefficients](vntrajectoryobservation/equationcoefficients.md): The coefficients of the parabolic equation.
- [movingAverageRadius](vntrajectoryobservation/movingaverageradius.md): The moving average radius of the object the request is tracking.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

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
- [VNRequestRevisionProviding](vnrequestrevisionproviding.md)

## See Also

### Inspecting the Results

- [results](vndetecttrajectoriesrequest/results.md): The array of detected trajectory observations.

# VNTrajectoryObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An observation that describes a detected trajectory.

## Declaration

```objectivec
@interface VNTrajectoryObservation : VNObservation
```

## Mentioned In

- [Identifying Trajectories in Video](identifying-trajectories-in-video.md)

## Topics

### Evaluating an Observation

- [detectedPoints](vntrajectoryobservation/detectedpoints.md): The centroid points of the detected contour along the trajectory.
- [projectedPoints](vntrajectoryobservation/projectedpoints.md): The centroids of the calculated trajectory from the detected points.
- [equationCoefficients](vntrajectoryobservation/equationcoefficients.md): The coefficients of the parabolic equation.
- [movingAverageRadius](vntrajectoryobservation/movingaverageradius.md): The moving average radius of the object the request is tracking.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

## See Also

### Inspecting the Results

- [results](vndetecttrajectoriesrequest/results.md): The array of detected trajectory observations.
