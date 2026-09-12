> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncontour/childcontour(at:)](https://developer.apple.com/documentation/vision/vncontour/childcontour(at:))

# childContour(at:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Retrieves the child contour object at the specified index.

## Declaration

```swift
func childContour(at childContourIndex: Int) throws -> VNContour
```

## Parameters

- `childContourIndex`: The child contour index value.

<a id="return-value"></a>

## Return Value

The child contour object.

## See Also

### Accessing Child Contours

- [childContourCount](childcontourcount.md): The total number of detected child contours.
- [childContours](childcontours.md): An array of contours that this contour encloses.

# childContourAtIndex:error: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Retrieves the child contour object at the specified index.

## Declaration

```objectivec
- (VNContour *) childContourAtIndex:(NSUInteger) childContourIndex error:(NSError **) error;
```

## Parameters

- `childContourIndex`: The child contour index value.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The child contour object. On failure, this method returns `nil`.

## See Also

### Accessing Child Contours

- [childContourCount](childcontourcount.md): The total number of detected child contours.
- [childContours](childcontours.md): An array of contours that this contour encloses.
