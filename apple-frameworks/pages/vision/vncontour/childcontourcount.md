> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncontour/childcontourcount](https://developer.apple.com/documentation/vision/vncontour/childcontourcount)

# childContourCount (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The total number of detected child contours.

## Declaration

```swift
var childContourCount: Int { get }
```

## See Also

### Accessing Child Contours

- [childContours](childcontours.md): An array of contours that this contour encloses.
- [childContour(at:)](childcontour%28at_%29.md): Retrieves the child contour object at the specified index.

# childContourCount (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The total number of detected child contours.

## Declaration

```objectivec
@property (readonly) NSInteger childContourCount;
```

## See Also

### Accessing Child Contours

- [childContours](childcontours.md): An array of contours that this contour encloses.
- [childContourAtIndex:error:](childcontour%28at_%29.md): Retrieves the child contour object at the specified index.
