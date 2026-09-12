> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntrajectoryobservation/detectedpoints](https://developer.apple.com/documentation/vision/vntrajectoryobservation/detectedpoints)

# detectedPoints (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The centroid points of the detected contour along the trajectory.

## Declaration

```swift
var detectedPoints: [VNPoint] { get }
```

<a id="Discussion"></a>

## Discussion

The detected points may differ slightly from the ideal trajectory because they fall within the allowed tolerance. The system limits the maximum number of points based on the maximum trajectory length set in the request.

## See Also

### Evaluating an Observation

- [projectedPoints](projectedpoints.md): The centroids of the calculated trajectory from the detected points.
- [equationCoefficients](equationcoefficients.md): The coefficients of the parabolic equation.
- [movingAverageRadius](movingaverageradius.md): The moving average radius of the object the request is tracking.

# detectedPoints (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The centroid points of the detected contour along the trajectory.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<VNPoint *> * detectedPoints;
```

<a id="Discussion"></a>

## Discussion

The detected points may differ slightly from the ideal trajectory because they fall within the allowed tolerance. The system limits the maximum number of points based on the maximum trajectory length set in the request.

## See Also

### Evaluating an Observation

- [projectedPoints](projectedpoints.md): The centroids of the calculated trajectory from the detected points.
- [equationCoefficients](equationcoefficients.md): The coefficients of the parabolic equation.
- [movingAverageRadius](movingaverageradius.md): The moving average radius of the object the request is tracking.
