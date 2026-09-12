> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncontour/polygonapproximation(epsilon:)](https://developer.apple.com/documentation/vision/vncontour/polygonapproximation(epsilon:))

# polygonApproximation(epsilon:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Simplifies the contour to a polygon using a Ramer-Douglas-Peucker algorithm.

## Declaration

```swift
func polygonApproximation(epsilon: Float) throws -> VNContour
```

## Parameters

- `epsilon`: This parameter defines the distance threshold the algorithm uses. It preserves points whose perpendicular distance to the line segment they are on is greater than `epsilon`, and removes all others.

<a id="return-value"></a>

## Return Value

A simplified polygon contour from the points of the original contour.

## See Also

### Inspecting the Contour

- [aspectRatio](aspectratio.md): The aspect ratio of the contour.
- [indexPath](indexpath.md): The contour object’s index path.
- [normalizedPath](normalizedpath.md): The contour object as a path in normalized coordinates.
- [pointCount](pointcount.md): The contour’s number of points.
- [normalizedPoints](normalizedpoints-8n2s5.md): The contour’s array of points in normalized coordinates.

# polygonApproximationWithEpsilon:error: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Simplifies the contour to a polygon using a Ramer-Douglas-Peucker algorithm.

## Declaration

```objectivec
- (VNContour *) polygonApproximationWithEpsilon:(float) epsilon error:(NSError **) error;
```

## Parameters

- `epsilon`: This parameter defines the distance threshold the algorithm uses. It preserves points whose perpendicular distance to the line segment they are on is greater than `epsilon`, and removes all others.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A simplified polygon contour from the points of the original contour. On failure, this method returns `nil`.

## See Also

### Inspecting the Contour

- [aspectRatio](aspectratio.md): The aspect ratio of the contour.
- [indexPath](indexpath.md): The contour object’s index path.
- [normalizedPath](normalizedpath.md): The contour object as a path in normalized coordinates.
- [pointCount](pointcount.md): The contour’s number of points.
- [normalizedPoints](normalizedpoints-2orqj.md): The contour’s array of points in normalized coordinates.
