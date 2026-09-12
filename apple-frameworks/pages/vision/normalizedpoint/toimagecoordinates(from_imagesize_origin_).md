> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/normalizedpoint/toimagecoordinates(from:imagesize:origin:)](https://developer.apple.com/documentation/vision/normalizedpoint/toimagecoordinates(from:imagesize:origin:))

# toImageCoordinates(from:imageSize:origin:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Converts a point normalized to a region within an image into full image coordinates.

## Declaration

```swift
func toImageCoordinates(from regionOfInterest: NormalizedRect, imageSize: CGSize, origin: CoordinateOrigin = .lowerLeft) -> CGPoint
```

## Parameters

- `regionOfInterest`: The region within an image that contains the normalized point.
- `imageSize`: The size of the image.
- `origin`: The origin.

## See Also

### Converting points

- [toImageCoordinates(\_:origin:)](toimagecoordinates%28__origin_%29.md): Converts a point in normalized coordinates into image coordinates.
