> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncontoursobservation/toplevelcontourcount](https://developer.apple.com/documentation/vision/vncontoursobservation/toplevelcontourcount)

# topLevelContourCount (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The total number of detected top-level contours.

## Declaration

```swift
var topLevelContourCount: Int { get }
```

## See Also

### Inspecting the Observation

- [contourCount](contourcount.md): The total number of detected contours.
- [normalizedPath](normalizedpath.md): The detected contours as a path object in normalized coordinates.
- [topLevelContours](toplevelcontours.md): An array of contours that don’t have another contour enclosing them.
- [contour(at:)](contour%28at_%29-9on0y.md): Retrieves the contour object at the specified index, irrespective of hierarchy.
- [contour(at:)](contour%28at_%29-52odo.md): Retrieves the contour object at the specified index path.
- [VNContour](../vncontour.md): A class that represents a detected contour in an image.

# topLevelContourCount (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The total number of detected top-level contours.

## Declaration

```objectivec
@property (readonly) NSInteger topLevelContourCount;
```

## See Also

### Inspecting the Observation

- [contourCount](contourcount.md): The total number of detected contours.
- [normalizedPath](normalizedpath.md): The detected contours as a path object in normalized coordinates.
- [topLevelContours](toplevelcontours.md): An array of contours that don’t have another contour enclosing them.
- [contourAtIndex:error:](contour%28at_%29-9on0y.md): Retrieves the contour object at the specified index, irrespective of hierarchy.
- [contourAtIndexPath:error:](contour%28at_%29-52odo.md): Retrieves the contour object at the specified index path.
- [VNContour](../vncontour.md): A class that represents a detected contour in an image.
