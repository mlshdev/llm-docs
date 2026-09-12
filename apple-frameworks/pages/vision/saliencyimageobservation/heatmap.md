> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/saliencyimageobservation/heatmap](https://developer.apple.com/documentation/vision/saliencyimageobservation/heatmap)

# heatMap

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A grayscale heat map of important areas across the image.

## Declaration

```swift
let heatMap: PixelBufferObservation
```

<a id="Discussion"></a>

## Discussion

The heat map is a pixel buffer in a one-component floating-point pixel format.

## See Also

### Inspecting an observation

- [RequestDescriptor](../requestdescriptor.md): A type that describes the request and revision combination.
- [PixelBufferObservation](../pixelbufferobservation.md): An object that represents an image that an image-analysis request produces.
- [salientObjects](salientobjects.md): A collection of objects describing the distinct areas of the saliency heat map.
- [RectangleObservation](../rectangleobservation.md): An object that represents the four vertices of a detected rectangle.
