> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/trajectoryobservation/equationcoefficients](https://developer.apple.com/documentation/vision/trajectoryobservation/equationcoefficients)

# equationCoefficients

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The coefficients of the parabolic equation.

## Declaration

```swift
let equationCoefficients: simd_float3
```

<a id="Discussion"></a>

## Discussion

This equation describes the parabola on which the detected contour is traveling. The equation and the projected points get refined over time.

## See Also

### Inspecting an observation

- [detectedPoints](detectedpoints.md): The centroid points of the detected contour along the trajectory.
- [projectedPoints](projectedpoints.md): The centroids of the calculated trajectory from the detected points.
- [movingAverageRadius](movingaverageradius.md): The moving average radius of the object the request is tracking.
