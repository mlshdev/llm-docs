> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncontour/aspectratio](https://developer.apple.com/documentation/vision/vncontour/aspectratio)

# aspectRatio (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The aspect ratio of the contour.

## Declaration

```swift
var aspectRatio: Float { get }
```

<a id="Discussion"></a>

## Discussion

The aspect ratio is the original image’s width divided by its height.

## See Also

### Inspecting the Contour

- [indexPath](indexpath.md): The contour object’s index path.
- [normalizedPath](normalizedpath.md): The contour object as a path in normalized coordinates.
- [pointCount](pointcount.md): The contour’s number of points.
- [normalizedPoints](normalizedpoints-8n2s5.md): The contour’s array of points in normalized coordinates.
- [polygonApproximation(epsilon:)](polygonapproximation%28epsilon_%29.md): Simplifies the contour to a polygon using a Ramer-Douglas-Peucker algorithm.

# aspectRatio (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The aspect ratio of the contour.

## Declaration

```objectivec
@property (readonly) float aspectRatio;
```

<a id="Discussion"></a>

## Discussion

The aspect ratio is the original image’s width divided by its height.

## See Also

### Inspecting the Contour

- [indexPath](indexpath.md): The contour object’s index path.
- [normalizedPath](normalizedpath.md): The contour object as a path in normalized coordinates.
- [pointCount](pointcount.md): The contour’s number of points.
- [normalizedPoints](normalizedpoints-2orqj.md): The contour’s array of points in normalized coordinates.
- [polygonApproximationWithEpsilon:error:](polygonapproximation%28epsilon_%29.md): Simplifies the contour to a polygon using a Ramer-Douglas-Peucker algorithm.
