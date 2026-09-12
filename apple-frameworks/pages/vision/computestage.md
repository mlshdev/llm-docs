> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/computestage](https://developer.apple.com/documentation/vision/computestage)

# ComputeStage

**Framework:** Vision  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Types that represent the compute stage.

## Declaration

```swift
enum ComputeStage
```

<a id="overview"></a>

## Overview

The main compute stage represents the essential functionality of a request. Requests that provide additional analysis — or conversion of the data by the main stage — can also report a post-processing stage.

## Topics

### Getting the compute stages

- [ComputeStage.main](computestage/main.md): A stage that represents where the system performs the main functionality.
- [ComputeStage.postProcessing](computestage/postprocessing.md): A stage that represents where the system performs additional analysis after the main compute stage.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a request

- [supportedIdentifiers](coremlrequest/supportedidentifiers.md): The classification identifiers supported by the request.
- [modelContainer](coremlrequest/modelcontainer.md): The model to base the image analysis request on.
- [CoreMLModelContainer](coremlmodelcontainer.md): A model container to use with an image-analysis request.
- [cropAndScaleAction](coremlrequest/cropandscaleaction.md): An optional setting that tells the Vision algorithm how to scale an input image.
- [ImageCropAndScaleAction](imagecropandscaleaction.md): A scale to apply to an input image before performing a request.
