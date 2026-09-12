> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncontour/normalizedpath](https://developer.apple.com/documentation/vision/vncontour/normalizedpath)

# normalizedPath (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The contour object as a path in normalized coordinates.

## Declaration

```swift
var normalizedPath: CGPath { get }
```

## See Also

### Inspecting the Contour

- [aspectRatio](aspectratio.md): The aspect ratio of the contour.
- [indexPath](indexpath.md): The contour object’s index path.
- [pointCount](pointcount.md): The contour’s number of points.
- [normalizedPoints](normalizedpoints-8n2s5.md): The contour’s array of points in normalized coordinates.
- [polygonApproximation(epsilon:)](polygonapproximation%28epsilon_%29.md): Simplifies the contour to a polygon using a Ramer-Douglas-Peucker algorithm.

# normalizedPath (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The contour object as a path in normalized coordinates.

## Declaration

```objectivec
@property (readonly) CGPathRef normalizedPath;
```

## See Also

### Inspecting the Contour

- [aspectRatio](aspectratio.md): The aspect ratio of the contour.
- [indexPath](indexpath.md): The contour object’s index path.
- [pointCount](pointcount.md): The contour’s number of points.
- [normalizedPoints](normalizedpoints-2orqj.md): The contour’s array of points in normalized coordinates.
- [polygonApproximationWithEpsilon:error:](polygonapproximation%28epsilon_%29.md): Simplifies the contour to a polygon using a Ramer-Douglas-Peucker algorithm.
