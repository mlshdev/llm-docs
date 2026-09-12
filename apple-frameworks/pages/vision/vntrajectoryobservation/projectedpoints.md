> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntrajectoryobservation/projectedpoints](https://developer.apple.com/documentation/vision/vntrajectoryobservation/projectedpoints)

# projectedPoints (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The centroids of the calculated trajectory from the detected points.

## Declaration

```swift
var projectedPoints: [VNPoint] { get }
```

<a id="Discussion"></a>

## Discussion

The projected points define the ideal trajectory described by the parabolic equation. The equation’s coefficients and the projected points of the detected trajectory get refined over time. The system limits the maximum number of cached points to the maximum points needed to describe the trajectory together with the parabolic equation.

## See Also

### Evaluating an Observation

- [detectedPoints](detectedpoints.md): The centroid points of the detected contour along the trajectory.
- [equationCoefficients](equationcoefficients.md): The coefficients of the parabolic equation.
- [movingAverageRadius](movingaverageradius.md): The moving average radius of the object the request is tracking.

# projectedPoints (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The centroids of the calculated trajectory from the detected points.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<VNPoint *> * projectedPoints;
```

<a id="Discussion"></a>

## Discussion

The projected points define the ideal trajectory described by the parabolic equation. The equation’s coefficients and the projected points of the detected trajectory get refined over time. The system limits the maximum number of cached points to the maximum points needed to describe the trajectory together with the parabolic equation.

## See Also

### Evaluating an Observation

- [detectedPoints](detectedpoints.md): The centroid points of the detected contour along the trajectory.
- [equationCoefficients](equationcoefficients.md): The coefficients of the parabolic equation.
- [movingAverageRadius](movingaverageradius.md): The moving average radius of the object the request is tracking.
