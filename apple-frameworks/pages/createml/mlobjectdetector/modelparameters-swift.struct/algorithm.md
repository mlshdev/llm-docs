> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/modelparameters-swift.struct/algorithm](https://developer.apple.com/documentation/createml/mlobjectdetector/modelparameters-swift.struct/algorithm)

# algorithm

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The algorithm the training session uses to train the object detector.

## Declaration

```swift
var algorithm: MLObjectDetector.ModelParameters.ModelAlgorithmType { get set }
```

## See Also

### Accessing the training parameters

- [validation](validation.md): The object detector’s validation dataset for the training session.
- [batchSize](batchsize.md): The number of images the training session can use in a training iteration.
- [maxIterations](maxiterations.md): The maximum number of iterations the training session can use.
- [gridSize](gridsize.md): The number of rectangles, vertically and horizontally, the training algorithm uses to analyze each input image.
