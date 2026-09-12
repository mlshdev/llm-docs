> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncontoursobservation/contourcount](https://developer.apple.com/documentation/vision/vncontoursobservation/contourcount)

# contourCount (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The total number of detected contours.

## Declaration

```swift
var contourCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

Use this value to determine the number of indices available for calling [contour(at:)](contour%28at_%29-9on0y.md).

## See Also

### Inspecting the Observation

- [normalizedPath](normalizedpath.md): The detected contours as a path object in normalized coordinates.
- [topLevelContours](toplevelcontours.md): An array of contours that don’t have another contour enclosing them.
- [topLevelContourCount](toplevelcontourcount.md): The total number of detected top-level contours.
- [contour(at:)](contour%28at_%29-9on0y.md): Retrieves the contour object at the specified index, irrespective of hierarchy.
- [contour(at:)](contour%28at_%29-52odo.md): Retrieves the contour object at the specified index path.
- [VNContour](../vncontour.md): A class that represents a detected contour in an image.

# contourCount (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The total number of detected contours.

## Declaration

```objectivec
@property (readonly) NSInteger contourCount;
```

<a id="Discussion"></a>

## Discussion

Use this value to determine the number of indices available for calling [contourAtIndex:error:](contour%28at_%29-9on0y.md).

## See Also

### Inspecting the Observation

- [normalizedPath](normalizedpath.md): The detected contours as a path object in normalized coordinates.
- [topLevelContours](toplevelcontours.md): An array of contours that don’t have another contour enclosing them.
- [topLevelContourCount](toplevelcontourcount.md): The total number of detected top-level contours.
- [contourAtIndex:error:](contour%28at_%29-9on0y.md): Retrieves the contour object at the specified index, irrespective of hierarchy.
- [contourAtIndexPath:error:](contour%28at_%29-52odo.md): Retrieves the contour object at the specified index path.
- [VNContour](../vncontour.md): A class that represents a detected contour in an image.
