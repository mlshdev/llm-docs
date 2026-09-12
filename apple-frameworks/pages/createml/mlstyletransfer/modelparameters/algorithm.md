> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlstyletransfer/modelparameters/algorithm](https://developer.apple.com/documentation/createml/mlstyletransfer/modelparameters/algorithm)

# algorithm

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

The style transfer task’s training algorithm that prioritizes either speed or quality.

## Declaration

```swift
var algorithm: MLStyleTransfer.ModelParameters.ModelAlgorithmType
```

<a id="discussion"></a>

## Discussion

You choose the task’s training algorithm based on your intended use for this model.

Use [MLStyleTransfer.ModelParameters.ModelAlgorithmType.cnnLite](modelalgorithmtype/cnnlite.md) to train a model that prioritizes speed to stylize images with low latency, typically for frames of a video stream. Otherwise, select [MLStyleTransfer.ModelParameters.ModelAlgorithmType.cnn](modelalgorithmtype/cnn.md) to train a model that applies a higher-quality stylization, typically for a still image.

## See Also

### Setting style transfer parameters

- [debugDescription](debugdescription.md): A text representation of the style transfer model parameters that’s suitable for output during debugging.
- [description](description.md): A text representation of the style transfer model parameters.
- [maxIterations](maxiterations.md): The largest number of iterations the style transfer model can use during training.
- [playgroundDescription](playgrounddescription.md): A description of the style transfer model parameters shown in a playground.
- [styleStrength](stylestrength.md): The amount of influence the input style image has in the stylized image output.
- [textelDensity](texteldensity.md): The amount of detail the task applies from the input style image to the stylized image output.
- [validation](validation.md): The style transfer model’s validation dataset.
