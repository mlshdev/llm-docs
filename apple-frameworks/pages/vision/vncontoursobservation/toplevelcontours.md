> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncontoursobservation/toplevelcontours](https://developer.apple.com/documentation/vision/vncontoursobservation/toplevelcontours)

# topLevelContours (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An array of contours that don’t have another contour enclosing them.

## Declaration

```swift
var topLevelContours: [VNContour] { get }
```

<a id="Discussion"></a>

## Discussion

This array constitutes the top of the contour hierarchy. You can iterate over each [VNContour](../vncontour.md) instance to determine its children.

## See Also

### Inspecting the Observation

- [contourCount](contourcount.md): The total number of detected contours.
- [normalizedPath](normalizedpath.md): The detected contours as a path object in normalized coordinates.
- [topLevelContourCount](toplevelcontourcount.md): The total number of detected top-level contours.
- [contour(at:)](contour%28at_%29-9on0y.md): Retrieves the contour object at the specified index, irrespective of hierarchy.
- [contour(at:)](contour%28at_%29-52odo.md): Retrieves the contour object at the specified index path.
- [VNContour](../vncontour.md): A class that represents a detected contour in an image.

# topLevelContours (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An array of contours that don’t have another contour enclosing them.

## Declaration

```objectivec
@property (readonly) NSArray<VNContour *> * topLevelContours;
```

<a id="Discussion"></a>

## Discussion

This array constitutes the top of the contour hierarchy. You can iterate over each [VNContour](../vncontour.md) instance to determine its children.

## See Also

### Inspecting the Observation

- [contourCount](contourcount.md): The total number of detected contours.
- [normalizedPath](normalizedpath.md): The detected contours as a path object in normalized coordinates.
- [topLevelContourCount](toplevelcontourcount.md): The total number of detected top-level contours.
- [contourAtIndex:error:](contour%28at_%29-9on0y.md): Retrieves the contour object at the specified index, irrespective of hierarchy.
- [contourAtIndexPath:error:](contour%28at_%29-52odo.md): Retrieves the contour object at the specified index path.
- [VNContour](../vncontour.md): A class that represents a detected contour in an image.
