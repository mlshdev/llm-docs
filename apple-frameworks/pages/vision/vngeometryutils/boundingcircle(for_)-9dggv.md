> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngeometryutils/boundingcircle(for:)-9dggv](https://developer.apple.com/documentation/vision/vngeometryutils/boundingcircle(for:)-9dggv)

# boundingCircle(for:) (Swift)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Calculates a bounding circle for the specified array of points.

## Declaration

```swift
class func boundingCircle(for points: [VNPoint]) throws -> VNCircle
```

## Parameters

- `points`: A collection of points around which to calculate the bounding circle.

<a id="return-value"></a>

## Return Value

The bounding [VNCircle](../vncircle.md) object.

## See Also

### Calculating Bounding Circles

- [boundingCircle(for:)](boundingcircle%28for_%29-423ll.md): Calculates a bounding circle for the specified contour object.
- [boundingCircle(forSIMDPoints:pointCount:)](boundingcircle%28forsimdpoints_pointcount_%29.md): Calculates a bounding circle for the specified points.

# boundingCircleForPoints:error: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Calculates a bounding circle for the specified array of points.

## Declaration

```objectivec
+ (VNCircle *) boundingCircleForPoints:(NSArray<VNPoint *> *) points error:(NSError **) error;
```

## Parameters

- `points`: A collection of points around which to calculate the bounding circle.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The bounding [VNCircle](../vncircle.md) object. On failure, this method returns `nil`.

## See Also

### Calculating Bounding Circles

- [boundingCircleForContour:error:](boundingcircle%28for_%29-423ll.md): Calculates a bounding circle for the specified contour object.
- [boundingCircleForSIMDPoints:pointCount:error:](boundingcircle%28forsimdpoints_pointcount_%29.md): Calculates a bounding circle for the specified points.
