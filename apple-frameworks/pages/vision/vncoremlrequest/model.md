> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncoremlrequest/model](https://developer.apple.com/documentation/vision/vncoremlrequest/model)

# model (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The model to base the image analysis request on.

## Declaration

```swift
var model: VNCoreMLModel { get }
```

<a id="Discussion"></a>

## Discussion

This object wraps a [Core ML](../../coreml.md) model.

## See Also

### Initializing with a Core ML Model

- [init(model:)](init%28model_%29.md): Creates a model container to use with an image analysis request based on the model you provide.
- [init(model:completionHandler:)](init%28model_completionhandler_%29.md): Creates a model container to use with an image analysis request based on the model you provide, with an optional completion handler.
- [VNCoreMLModel](../vncoremlmodel.md): A container for the model to use with Vision requests.

# model (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The model to base the image analysis request on.

## Declaration

```objectivec
@property (nonatomic, readonly) VNCoreMLModel * model;
```

<a id="Discussion"></a>

## Discussion

This object wraps a [Core ML](../../coreml.md) model.

## See Also

### Initializing with a Core ML Model

- [initWithModel:](init%28model_%29.md): Creates a model container to use with an image analysis request based on the model you provide.
- [initWithModel:completionHandler:](init%28model_completionhandler_%29.md): Creates a model container to use with an image analysis request based on the model you provide, with an optional completion handler.
- [VNCoreMLModel](../vncoremlmodel.md): A container for the model to use with Vision requests.
