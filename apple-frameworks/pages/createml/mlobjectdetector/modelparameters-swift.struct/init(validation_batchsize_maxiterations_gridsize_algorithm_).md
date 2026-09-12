> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/modelparameters-swift.struct/init(validation:batchsize:maxiterations:gridsize:algorithm:)](https://developer.apple.com/documentation/createml/mlobjectdetector/modelparameters-swift.struct/init(validation:batchsize:maxiterations:gridsize:algorithm:))

# init(validation:batchSize:maxIterations:gridSize:algorithm:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates a model parameters instance for an object-detector training session.

## Declaration

```swift
init(validation: MLObjectDetector.ModelParameters.ValidationData = .split(strategy: .automatic), batchSize: Int? = nil, maxIterations: Int? = nil, gridSize: CGSize = CGSize(width: 13, height: 13), algorithm: MLObjectDetector.ModelParameters.ModelAlgorithmType = .darknetYolo)
```

## Parameters

- `validation`: An [MLObjectDetector.ModelParameters.ValidationData](validationdata.md) instance that contains your validation dataset.
- `batchSize`: The number of images the object detector uses for each training iteration. If you don’t have a preference, set this parameter to `nil` to tell Create ML to use an appropriate value when it trains the model.
- `maxIterations`: The largest number of training iterations the object detector can use. If you don’t have a preference, set this parameter to `nil` to tell Create ML to use an appropriate value when it trains the model.
- `gridSize`: The number of rectangles, vertically and horizontally, the training algorithm uses to analyze each input image.
- `algorithm`: The algorithm the training session uses to train the object detector.

## See Also

### Creating object detector parameters

- [init(validation:batchSize:maxIterations:)](init%28validation_batchsize_maxiterations_%29.md): Creates a model parameters instance for an object-detector training session set to use the full network algorithm.
- [init(validationData:batchSize:maxIterations:)](init%28validationdata_batchsize_maxiterations_%29.md): Deprecated. Creates a model parameters instance for an object-detector training session set to use the full network algorithm.
