> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncoremlmodel/init(for:)](https://developer.apple.com/documentation/vision/vncoremlmodel/init(for:))

# init(for:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a model container to use with a Core ML request.

## Declaration

```swift
convenience init(for model: MLModel) throws
```

## Parameters

- `model`: The model to create the model container from.

<a id="Discussion"></a>

## Discussion

This method may fail if the framework doesn’t support the Core ML model. For example, a model that doesn’t accept an image as any of its inputs will yield an [VNErrorCode.invalidModel](../vnerrorcode/invalidmodel.md) error.

## See Also

### Initializing a Model

- [init(forMLModel:)](init%28formlmodel_%29.md)

# modelForMLModel:error: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a model container to use with a Core ML request.

## Declaration

```objectivec
+ (instancetype) modelForMLModel:(MLModel *) model error:(NSError **) error;
```

## Parameters

- `model`: The model to create the model container from.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="Discussion"></a>

## Discussion

This method may fail if the framework doesn’t support the Core ML model. For example, a model that doesn’t accept an image as any of its inputs will yield an [VNErrorInvalidModel](../vnerrorcode/invalidmodel.md) error.
