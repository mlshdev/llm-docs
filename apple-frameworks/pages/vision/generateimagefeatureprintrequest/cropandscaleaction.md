> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/generateimagefeatureprintrequest/cropandscaleaction](https://developer.apple.com/documentation/vision/generateimagefeatureprintrequest/cropandscaleaction)

# cropAndScaleAction

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An optional setting that tells the algorithm how to scale an input image before generating the result.

## Declaration

```swift
var cropAndScaleAction: ImageCropAndScaleAction
```

<a id="Discussion"></a>

## Discussion

The system applies scaling before generating the feature print. The default value is [ImageCropAndScaleAction.scaleToFill](../imagecropandscaleaction/scaletofill.md).

## See Also

### Configuring a request

- [ImageCropAndScaleAction](../imagecropandscaleaction.md): A scale to apply to an input image before performing a request.
