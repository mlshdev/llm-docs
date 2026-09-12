> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/normalizedrect/toimagecoordinates(_:origin:)](https://developer.apple.com/documentation/vision/normalizedrect/toimagecoordinates(_:origin:))

# toImageCoordinates(\_:origin:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Converts a rectangle in normalized coordinates into image coordinates.

## Declaration

```swift
func toImageCoordinates(_ imageSize: CGSize, origin: CoordinateOrigin = .lowerLeft) -> CGRect
```

## Parameters

- `imageSize`: The size of the image.
- `origin`: The origin.

## See Also

### Converting rectangles

- [toImageCoordinates(from:imageSize:origin:)](toimagecoordinates%28from_imagesize_origin_%29.md): Converts a rectangle normalized to a region within an image into full image coordinates.
