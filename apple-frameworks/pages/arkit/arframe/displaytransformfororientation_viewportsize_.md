> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/displaytransformfororientation:viewportsize:](https://developer.apple.com/documentation/arkit/arframe/displaytransformfororientation:viewportsize:)

# displayTransformForOrientation:viewportSize:

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0)

Returns a display transform for the provided viewport size and orientation.

## Declaration

```objectivec
- (CGAffineTransform) displayTransformForOrientation:(UIInterfaceOrientation) orientation viewportSize:(CGSize) viewportSize;
```

## Parameters

- `orientation`: The orientation of the viewport.
- `viewportSize`: The size of the viewport.

<a id="return-value"></a>

## Return Value

The display transform matrix.

<a id="discussion"></a>

## Discussion

The display transform can be used to convert normalized points in the image-space coordinate system of the captured image to normalized points in the view’s coordinate space. The transform provides the correct rotation and aspect-fill for presenting the captured image in the given orientation and size.
