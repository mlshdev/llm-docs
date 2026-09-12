> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/trajectoryobservation/projectedpoints](https://developer.apple.com/documentation/vision/trajectoryobservation/projectedpoints)

# projectedPoints

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The centroids of the calculated trajectory from the detected points.

## Declaration

```swift
let projectedPoints: [NormalizedPoint]
```

<a id="Discussion"></a>

## Discussion

The projected points define the ideal trajectory described by the parabolic equation. The equation’s coefficients and the projected points of the detected trajectory get refined over time. The system limits the maximum number of cached points to the maximum points needed to describe the trajectory together with the parabolic equation.

## See Also

### Inspecting an observation

- [detectedPoints](detectedpoints.md): The centroid points of the detected contour along the trajectory.
- [equationCoefficients](equationcoefficients.md): The coefficients of the parabolic equation.
- [movingAverageRadius](movingaverageradius.md): The moving average radius of the object the request is tracking.
