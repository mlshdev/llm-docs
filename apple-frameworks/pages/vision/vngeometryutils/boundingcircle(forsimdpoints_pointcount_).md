> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngeometryutils/boundingcircle(forsimdpoints:pointcount:)](https://developer.apple.com/documentation/vision/vngeometryutils/boundingcircle(forsimdpoints:pointcount:))

# boundingCircle(forSIMDPoints:pointCount:) (Swift)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Calculates a bounding circle for the specified points.

## Declaration

```swift
class func boundingCircle(forSIMDPoints points: UnsafePointer<simd_float2>, pointCount: Int) throws -> VNCircle
```

## Parameters

- `points`: A collection of points around which to calculate the bounding circle.
- `pointCount`: The number of points in the `points` argument.

<a id="return-value"></a>

## Return Value

The bounding [VNCircle](../vncircle.md) object.

## See Also

### Calculating Bounding Circles

- [boundingCircle(for:)](boundingcircle%28for_%29-423ll.md): Calculates a bounding circle for the specified contour object.
- [boundingCircle(for:)](boundingcircle%28for_%29-9dggv.md): Calculates a bounding circle for the specified array of points.

# boundingCircleForSIMDPoints:pointCount:error: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Calculates a bounding circle for the specified points.

## Declaration

```objectivec
+ (VNCircle *) boundingCircleForSIMDPoints:(const simd_float2 *) points pointCount:(NSInteger) pointCount error:(NSError **) error;
```

## Parameters

- `points`: A collection of points around which to calculate the bounding circle.
- `pointCount`: The number of points in the `points` argument.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The bounding [VNCircle](../vncircle.md) object. On failure, this method returns `nil`.

## See Also

### Calculating Bounding Circles

- [boundingCircleForContour:error:](boundingcircle%28for_%29-423ll.md): Calculates a bounding circle for the specified contour object.
- [boundingCircleForPoints:error:](boundingcircle%28for_%29-9dggv.md): Calculates a bounding circle for the specified array of points.
