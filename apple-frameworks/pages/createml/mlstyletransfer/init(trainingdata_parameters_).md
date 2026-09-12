> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlstyletransfer/init(trainingdata:parameters:)](https://developer.apple.com/documentation/createml/mlstyletransfer/init(trainingdata:parameters:))

# init(trainingData:parameters:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Creates a style transfer model with a training dataset represented by a data source.

## Declaration

```swift
init(trainingData: MLStyleTransfer.DataSource, parameters: MLStyleTransfer.ModelParameters = .init()) throws
```

## Parameters

- `trainingData`: A style image and a content image, represented by a data source.
- `parameters`: An [MLStyleTransfer.ModelParameters](modelparameters.md) instance you use to configure the model for the training session.
