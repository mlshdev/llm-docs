> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/coremlrequest/modelcontainer](https://developer.apple.com/documentation/vision/coremlrequest/modelcontainer)

# modelContainer

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The model to base the image analysis request on.

## Declaration

```swift
let modelContainer: CoreMLModelContainer
```

<a id="Discussion"></a>

## Discussion

This object wraps a [Core ML](../../coreml.md) model.

## See Also

### Configuring a request

- [supportedIdentifiers](supportedidentifiers.md): The classification identifiers supported by the request.
- [CoreMLModelContainer](../coremlmodelcontainer.md): A model container to use with an image-analysis request.
- [ComputeStage](../computestage.md): Types that represent the compute stage.
- [cropAndScaleAction](cropandscaleaction.md): An optional setting that tells the Vision algorithm how to scale an input image.
- [ImageCropAndScaleAction](../imagecropandscaleaction.md): A scale to apply to an input image before performing a request.
