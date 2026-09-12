> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngeometryutils/boundingcircle(for:)-423ll](https://developer.apple.com/documentation/vision/vngeometryutils/boundingcircle(for:)-423ll)

# boundingCircle(for:) (Swift)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Calculates a bounding circle for the specified contour object.

## Declaration

```swift
class func boundingCircle(for contour: VNContour) throws -> VNCircle
```

## Parameters

- `contour`: A contour around which to calculate the bounding circle.

<a id="return-value"></a>

## Return Value

The bounding [VNCircle](../vncircle.md) object.

## See Also

### Calculating Bounding Circles

- [boundingCircle(for:)](boundingcircle%28for_%29-9dggv.md): Calculates a bounding circle for the specified array of points.
- [boundingCircle(forSIMDPoints:pointCount:)](boundingcircle%28forsimdpoints_pointcount_%29.md): Calculates a bounding circle for the specified points.

# boundingCircleForContour:error: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Calculates a bounding circle for the specified contour object.

## Declaration

```objectivec
+ (VNCircle *) boundingCircleForContour:(VNContour *) contour error:(NSError **) error;
```

## Parameters

- `contour`: A contour around which to calculate the bounding circle.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The bounding [VNCircle](../vncircle.md) object. On failure, this method returns `nil`.

## See Also

### Calculating Bounding Circles

- [boundingCircleForPoints:error:](boundingcircle%28for_%29-9dggv.md): Calculates a bounding circle for the specified array of points.
- [boundingCircleForSIMDPoints:pointCount:error:](boundingcircle%28forsimdpoints_pointcount_%29.md): Calculates a bounding circle for the specified points.
