> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/coremlmodelcontainer](https://developer.apple.com/documentation/vision/coremlmodelcontainer)

# CoreMLModelContainer

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A model container to use with an image-analysis request.

## Declaration

```swift
struct CoreMLModelContainer
```

## Topics

### Creating a model container

- [init(model:featureProvider:)](coremlmodelcontainer/init%28model_featureprovider_%29.md)

### Getting the feature name

- [inputImageFeatureName](coremlmodelcontainer/inputimagefeaturename.md): The name of the feature value that Vision sets from the request handler.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a request

- [supportedIdentifiers](coremlrequest/supportedidentifiers.md): The classification identifiers supported by the request.
- [modelContainer](coremlrequest/modelcontainer.md): The model to base the image analysis request on.
- [ComputeStage](computestage.md): Types that represent the compute stage.
- [cropAndScaleAction](coremlrequest/cropandscaleaction.md): An optional setting that tells the Vision algorithm how to scale an input image.
- [ImageCropAndScaleAction](imagecropandscaleaction.md): A scale to apply to an input image before performing a request.
