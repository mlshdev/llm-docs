> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncoremlrequest/init(model:completionhandler:)](https://developer.apple.com/documentation/vision/vncoremlrequest/init(model:completionhandler:))

# init(model:completionHandler:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a model container to use with an image analysis request based on the model you provide, with an optional completion handler.

## Declaration

```swift
init(model: VNCoreMLModel, completionHandler: VNRequestCompletionHandler? = nil)
```

## Parameters

- `model`: The [Core ML](../../coreml.md) model on which to base the Vision request.
- `completionHandler`: An optional block of code to execute after model initialization.

<a id="Discussion"></a>

## Discussion

Initialization can fail if the [Core ML](../../coreml.md) model you provide isn’t supported in Vision, such as if the model doesn’t accept an image as input.

## See Also

### Initializing with a Core ML Model

- [init(model:)](init%28model_%29.md): Creates a model container to use with an image analysis request based on the model you provide.
- [model](model.md): The model to base the image analysis request on.
- [VNCoreMLModel](../vncoremlmodel.md): A container for the model to use with Vision requests.

# initWithModel:completionHandler: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a model container to use with an image analysis request based on the model you provide, with an optional completion handler.

## Declaration

```objectivec
- (instancetype) initWithModel:(VNCoreMLModel *) model completionHandler:(VNRequestCompletionHandler) completionHandler;
```

## Parameters

- `model`: The [Core ML](../../coreml.md) model on which to base the Vision request.
- `completionHandler`: An optional block of code to execute after model initialization.

<a id="Discussion"></a>

## Discussion

Initialization can fail if the [Core ML](../../coreml.md) model you provide isn’t supported in Vision, such as if the model doesn’t accept an image as input.

## See Also

### Initializing with a Core ML Model

- [initWithModel:](init%28model_%29.md): Creates a model container to use with an image analysis request based on the model you provide.
- [model](model.md): The model to base the image analysis request on.
- [VNCoreMLModel](../vncoremlmodel.md): A container for the model to use with Vision requests.
