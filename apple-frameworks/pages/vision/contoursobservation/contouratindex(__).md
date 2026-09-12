> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/contoursobservation/contouratindex(_:)](https://developer.apple.com/documentation/vision/contoursobservation/contouratindex(_:))

# contourAtIndex(\_:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Retrieves the contour object at the specified index, irrespective of hierarchy.

## Declaration

```swift
func contourAtIndex(_ index: Int) -> ContoursObservation.Contour?
```

## Parameters

- `index`: The index of the contour to retrieve. Valid values are in the range of `0` to `contourCount - 1`.

<a id="return-value"></a>

## Return Value

The contour object at the specified index, or `nil` if the index is invalid.

## See Also

### Getting the contours

- [ContoursObservation.Contour](contour.md): An object that represents a detected contour in an image.
- [countourAtIndexPath(\_:)](countouratindexpath%28__%29.md): Retrieves the contour object at the specified index, irrespective of hierarchy.
