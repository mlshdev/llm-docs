> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncontour/childcontours](https://developer.apple.com/documentation/vision/vncontour/childcontours)

# childContours (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An array of contours that this contour encloses.

## Declaration

```swift
var childContours: [VNContour] { get }
```

## See Also

### Accessing Child Contours

- [childContourCount](childcontourcount.md): The total number of detected child contours.
- [childContour(at:)](childcontour%28at_%29.md): Retrieves the child contour object at the specified index.

# childContours (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An array of contours that this contour encloses.

## Declaration

```objectivec
@property (readonly) NSArray<VNContour *> * childContours;
```

## See Also

### Accessing Child Contours

- [childContourCount](childcontourcount.md): The total number of detected child contours.
- [childContourAtIndex:error:](childcontour%28at_%29.md): Retrieves the child contour object at the specified index.
