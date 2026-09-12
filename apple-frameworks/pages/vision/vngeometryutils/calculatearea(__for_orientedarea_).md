> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngeometryutils/calculatearea(_:for:orientedarea:)](https://developer.apple.com/documentation/vision/vngeometryutils/calculatearea(_:for:orientedarea:))

# calculateArea(\_:for:orientedArea:) (Swift)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Calculates the area for the specified contour.

## Declaration

```swift
class func calculateArea(_ area: UnsafeMutablePointer<Double>, for contour: VNContour, orientedArea: Bool) throws
```

## Parameters

- `area`: The output parameter to populate with the calculated contour area.
- `contour`: The contour object for which to calculate the area.
- `orientedArea`: A Boolean value that indicates whether to calculate the signed area (positive for counterclockwise-oriented contours and negative for clockwise-oriented contours). If you specify [false](https://developer.apple.com/documentation/swift/false), the returned area is always positive.

<a id="Discussion"></a>

## Discussion

Attempting to calculate the area for a contour containing random points, or with self-crossing edges, produces undefined results.

## See Also

### Calculating Area and Perimeter

- [calculatePerimeter(\_:for:)](calculateperimeter%28__for_%29.md): Calculates the perimeter of a closed contour.

# calculateArea:forContour:orientedArea:error: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Calculates the area for the specified contour.

## Declaration

```objectivec
+ (BOOL) calculateArea:(double *) area forContour:(VNContour *) contour orientedArea:(BOOL) orientedArea error:(NSError **) error;
```

## Parameters

- `area`: The output parameter to populate with the calculated contour area.
- `contour`: The contour object for which to calculate the area.
- `orientedArea`: A Boolean value that indicates whether to calculate the signed area (positive for counterclockwise-oriented contours and negative for clockwise-oriented contours). If you specify [false](https://developer.apple.com/documentation/swift/false), the returned area is always positive.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the method is successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Attempting to calculate the area for a contour containing random points, or with self-crossing edges, produces undefined results.

## See Also

### Calculating Area and Perimeter

- [calculatePerimeter:forContour:error:](calculateperimeter%28__for_%29.md): Calculates the perimeter of a closed contour.
