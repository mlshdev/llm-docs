> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlstyletransfer/modelparameters/init(algorithm:validation:maxiterations:texteldensity:stylestrength:)](https://developer.apple.com/documentation/createml/mlstyletransfer/modelparameters/init(algorithm:validation:maxiterations:texteldensity:stylestrength:))

# init(algorithm:validation:maxIterations:textelDensity:styleStrength:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Creates a new set of training parameters for a style transfer model.

## Declaration

```swift
init(algorithm: MLStyleTransfer.ModelParameters.ModelAlgorithmType = .cnn, validation: MLStyleTransfer.ModelParameters.ValidationData = .none, maxIterations: Int = MLStyleTransfer.__Defaults.maxIterations, textelDensity: Int = MLStyleTransfer.__Defaults.textelDensity, styleStrength: Int = MLStyleTransfer.__Defaults.styleStrength)
```

## Parameters

- `algorithm`: The style transfer task’s training algorithm that prioritizes either speed or quality.
- `validation`: The style transfer model’s validation dataset.
- `maxIterations`: The largest number of training iterations the style transfer model can use.
- `textelDensity`: The amount of detail the task applies from the input style image to the stylized image output.
- `styleStrength`: The amount of influence the style image has in the stylized image output.
