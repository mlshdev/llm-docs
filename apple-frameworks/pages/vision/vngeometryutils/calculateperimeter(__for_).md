> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngeometryutils/calculateperimeter(_:for:)](https://developer.apple.com/documentation/vision/vngeometryutils/calculateperimeter(_:for:))

# calculatePerimeter(\_:for:) (Swift)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Calculates the perimeter of a closed contour.

## Declaration

```swift
class func calculatePerimeter(_ perimeter: UnsafeMutablePointer<Double>, for contour: VNContour) throws
```

## Parameters

- `perimeter`: The output parameter to populate with the calculated contour perimeter.
- `contour`: The contour object for which to calculate the perimeter.

## See Also

### Calculating Area and Perimeter

- [calculateArea(\_:for:orientedArea:)](calculatearea%28__for_orientedarea_%29.md): Calculates the area for the specified contour.

# calculatePerimeter:forContour:error: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Calculates the perimeter of a closed contour.

## Declaration

```objectivec
+ (BOOL) calculatePerimeter:(double *) perimeter forContour:(VNContour *) contour error:(NSError **) error;
```

## Parameters

- `perimeter`: The output parameter to populate with the calculated contour perimeter.
- `contour`: The contour object for which to calculate the perimeter.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the method is successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Calculating Area and Perimeter

- [calculateArea:forContour:orientedArea:error:](calculatearea%28__for_orientedarea_%29.md): Calculates the area for the specified contour.
