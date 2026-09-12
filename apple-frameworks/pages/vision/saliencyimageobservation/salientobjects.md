> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/saliencyimageobservation/salientobjects](https://developer.apple.com/documentation/vision/saliencyimageobservation/salientobjects)

# salientObjects

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A collection of objects describing the distinct areas of the saliency heat map.

## Declaration

```swift
let salientObjects: [RectangleObservation]
```

<a id="Discussion"></a>

## Discussion

The objects in this array don’t follow any specific ordering. It’s up to your app to iterate across the observations and apply desired ordering.

## See Also

### Inspecting an observation

- [RequestDescriptor](../requestdescriptor.md): A type that describes the request and revision combination.
- [heatMap](heatmap.md): A grayscale heat map of important areas across the image.
- [PixelBufferObservation](../pixelbufferobservation.md): An object that represents an image that an image-analysis request produces.
- [RectangleObservation](../rectangleobservation.md): An object that represents the four vertices of a detected rectangle.
