> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntrajectoryobservation/equationcoefficients](https://developer.apple.com/documentation/vision/vntrajectoryobservation/equationcoefficients)

# equationCoefficients (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The coefficients of the parabolic equation.

## Declaration

```swift
var equationCoefficients: simd_float3 { get }
```

<a id="Discussion"></a>

## Discussion

This equation describes the parabola on which the detected contour is traveling. The equation and the projected points get refined over time.

## See Also

### Evaluating an Observation

- [detectedPoints](detectedpoints.md): The centroid points of the detected contour along the trajectory.
- [projectedPoints](projectedpoints.md): The centroids of the calculated trajectory from the detected points.
- [movingAverageRadius](movingaverageradius.md): The moving average radius of the object the request is tracking.

# equationCoefficients (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The coefficients of the parabolic equation.

## Declaration

```objectivec
@property (nonatomic, readonly) simd_float3 equationCoefficients;
```

<a id="Discussion"></a>

## Discussion

This equation describes the parabola on which the detected contour is traveling. The equation and the projected points get refined over time.

## See Also

### Evaluating an Observation

- [detectedPoints](detectedpoints.md): The centroid points of the detected contour along the trajectory.
- [projectedPoints](projectedpoints.md): The centroids of the calculated trajectory from the detected points.
- [movingAverageRadius](movingaverageradius.md): The moving average radius of the object the request is tracking.
