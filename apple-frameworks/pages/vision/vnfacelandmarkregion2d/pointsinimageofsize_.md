> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnfacelandmarkregion2d/pointsinimageofsize:](https://developer.apple.com/documentation/vision/vnfacelandmarkregion2d/pointsinimageofsize:)

# pointsInImageOfSize:

**Interface language:** Objective-C

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A buffer in memory containing landmark points in the coordinate space of the specified image size.

## Declaration

```objectivec
- (const CGPoint *) pointsInImageOfSize:(CGSize) imageSize;
```

## Parameters

- `imageSize`: The pixel dimensions of the image in which to present landmark points.

<a id="return-value"></a>

## Return Value

A pointer to a buffer containing a [CGPoint](../../corefoundation/cgpoint.md) for each landmark detected in the image, expressed in the coordinate space of the specified image size.
