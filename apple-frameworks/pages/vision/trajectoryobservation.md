> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/trajectoryobservation](https://developer.apple.com/documentation/vision/trajectoryobservation)

# TrajectoryObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An observation that describes a detected trajectory.

## Declaration

```swift
struct TrajectoryObservation
```

## Topics

### Creating an observation

- [init(\_:)](trajectoryobservation/init%28__%29.md): Creates a trajectory observation.

### Inspecting an observation

- [detectedPoints](trajectoryobservation/detectedpoints.md): The centroid points of the detected contour along the trajectory.
- [projectedPoints](trajectoryobservation/projectedpoints.md): The centroids of the calculated trajectory from the detected points.
- [equationCoefficients](trajectoryobservation/equationcoefficients.md): The coefficients of the parabolic equation.
- [movingAverageRadius](trajectoryobservation/movingaverageradius.md): The moving average radius of the object the request is tracking.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VisionObservation](visionobservation.md)
