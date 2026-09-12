> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncontoursobservation/contour(at:)-9on0y](https://developer.apple.com/documentation/vision/vncontoursobservation/contour(at:)-9on0y)

# contour(at:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Retrieves the contour object at the specified index, irrespective of hierarchy.

## Declaration

```swift
func contour(at contourIndex: Int) throws -> VNContour
```

## Parameters

- `contourIndex`: The index of the contour to retrieve. Valid values are in the range of 0 to [contourCount](contourcount.md) \- 1.

<a id="return-value"></a>

## Return Value

The contour object at the specified index.

## See Also

### Inspecting the Observation

- [contourCount](contourcount.md): The total number of detected contours.
- [normalizedPath](normalizedpath.md): The detected contours as a path object in normalized coordinates.
- [topLevelContours](toplevelcontours.md): An array of contours that don’t have another contour enclosing them.
- [topLevelContourCount](toplevelcontourcount.md): The total number of detected top-level contours.
- [contour(at:)](contour%28at_%29-52odo.md): Retrieves the contour object at the specified index path.
- [VNContour](../vncontour.md): A class that represents a detected contour in an image.

# contourAtIndex:error: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Retrieves the contour object at the specified index, irrespective of hierarchy.

## Declaration

```objectivec
- (VNContour *) contourAtIndex:(NSInteger) contourIndex error:(NSError **) error;
```

## Parameters

- `contourIndex`: The index of the contour to retrieve. Valid values are in the range of 0 to [contourCount](contourcount.md) \- 1.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The contour object at the specified index. On failure, this method returns `nil`.

## See Also

### Inspecting the Observation

- [contourCount](contourcount.md): The total number of detected contours.
- [normalizedPath](normalizedpath.md): The detected contours as a path object in normalized coordinates.
- [topLevelContours](toplevelcontours.md): An array of contours that don’t have another contour enclosing them.
- [topLevelContourCount](toplevelcontourcount.md): The total number of detected top-level contours.
- [contourAtIndexPath:error:](contour%28at_%29-52odo.md): Retrieves the contour object at the specified index path.
- [VNContour](../vncontour.md): A class that represents a detected contour in an image.
