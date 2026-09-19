> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vntrajectoryobservation/movingaverageradius

# movingAverageRadius (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The moving average radius of the object the request is tracking.

## Declaration

```swift
var movingAverageRadius: CGFloat { get }
```

## See Also

### Evaluating an Observation

- [detectedPoints](detectedpoints.md): The centroid points of the detected contour along the trajectory.
- [projectedPoints](projectedpoints.md): The centroids of the calculated trajectory from the detected points.
- [equationCoefficients](equationcoefficients.md): The coefficients of the parabolic equation.

# movingAverageRadius (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The moving average radius of the object the request is tracking.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CGFloat movingAverageRadius;
```

## See Also

### Evaluating an Observation

- [detectedPoints](detectedpoints.md): The centroid points of the detected contour along the trajectory.
- [projectedPoints](projectedpoints.md): The centroids of the calculated trajectory from the detected points.
- [equationCoefficients](equationcoefficients.md): The coefficients of the parabolic equation.
