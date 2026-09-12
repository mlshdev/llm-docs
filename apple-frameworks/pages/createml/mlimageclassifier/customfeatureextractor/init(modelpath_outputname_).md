> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/customfeatureextractor/init(modelpath:outputname:)](https://developer.apple.com/documentation/createml/mlimageclassifier/customfeatureextractor/init(modelpath:outputname:))

# init(modelPath:outputName:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

Creates a custom feature extractor given a model file and an optional output layer name.

## Declaration

```swift
init(modelPath: URL, outputName: String? = nil)
```

## Parameters

- `modelPath`: The location of the neural network `.mlmodel` which contains the feature extractor.
- `outputName`: The name of a feature extraction layer within the model has one output type of [MLMultiArray](../../../coreml/mlmultiarray.md). Set this value to `nil` if the model, as a whole, accepts an input image and has exactly one output of type [MLMultiArray](../../../coreml/mlmultiarray.md).
