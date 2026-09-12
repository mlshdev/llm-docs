> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/mlmodelimagefeatureextractor/init(model:inputname:outputname:context:)](https://developer.apple.com/documentation/createmlcomponents/mlmodelimagefeatureextractor/init(model:inputname:outputname:context:))

# init(model:inputName:outputName:context:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an image feature extractor from a CoreML model.

## Declaration

```swift
init(model: MLModel, inputName: String = "image", outputName: String, context: CIContext = CIContext()) throws
```

## Parameters

- `model`: The CoreML model which will be used for feature extraction.
- `inputName`: The name of the input which the `model` expects.
- `outputName`: The name of the output from the `model`.
- `context`: A Core Image context.

## See Also

### Creating the extractor

- [init(contentsOf:configuration:inputName:outputName:context:)](init%28contentsof_configuration_inputname_outputname_context_%29.md): Creates an image feature extractor from a CoreML model URL.
