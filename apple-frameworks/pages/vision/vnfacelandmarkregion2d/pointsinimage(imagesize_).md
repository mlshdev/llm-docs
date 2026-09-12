> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnfacelandmarkregion2d/pointsinimage(imagesize:)](https://developer.apple.com/documentation/vision/vnfacelandmarkregion2d/pointsinimage(imagesize:))

# pointsInImage(imageSize:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.13+ · tvOS 11.0+

Returns an array containing landmark points in the coordinate space of the specified image size.

## Declaration

```swift
@nonobjc func pointsInImage(imageSize: CGSize) -> [CGPoint]
```

## Parameters

- `imageSize`: The pixel dimensions of the image in which to present landmark points.

<a id="return-value"></a>

## Return Value

An array containing a [CGPoint](../../corefoundation/cgpoint.md) for each landmark the system detects in the image, expressed in the coordinate space of the specified image size.
