> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/resizemethod/bilinear(aligncorners:)](https://developer.apple.com/documentation/coreml/mltensor/resizemethod/bilinear(aligncorners:))

# MLTensor.ResizeMethod.bilinear(alignCorners:)

**Framework:** Core ML  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The bilinear interpolation mode where values are computed using bilinear interpolation of 4 neighboring pixels.

## Declaration

```swift
case bilinear(alignCorners: Bool = false)
```

<a id="discussion"></a>

## Discussion

`alignCorners` is a Boolean indicating whether to align the corners of the upscaling grid to the centre of the scaling dimensions rather than the edges.

## See Also

### Resize methods

- [MLTensor.ResizeMethod.nearestNeighbor](nearestneighbor.md): The nearest interpolation mode where values are interpolated using the closest neighbor pixel.
