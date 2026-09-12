> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/trajectoryobservation/detectedpoints](https://developer.apple.com/documentation/vision/trajectoryobservation/detectedpoints)

# detectedPoints

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The centroid points of the detected contour along the trajectory.

## Declaration

```swift
let detectedPoints: [NormalizedPoint]
```

<a id="Discussion"></a>

## Discussion

The detected points may differ slightly from the ideal trajectory because they fall within the allowed tolerance. The system limits the maximum number of points based on the maximum trajectory length set in the request.

## See Also

### Inspecting an observation

- [projectedPoints](projectedpoints.md): The centroids of the calculated trajectory from the detected points.
- [equationCoefficients](equationcoefficients.md): The coefficients of the parabolic equation.
- [movingAverageRadius](movingaverageradius.md): The moving average radius of the object the request is tracking.
