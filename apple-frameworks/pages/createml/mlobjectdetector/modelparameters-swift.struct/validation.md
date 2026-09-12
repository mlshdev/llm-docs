> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/modelparameters-swift.struct/validation](https://developer.apple.com/documentation/createml/mlobjectdetector/modelparameters-swift.struct/validation)

# validation

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The object detector’s validation dataset for the training session.

## Declaration

```swift
var validation: MLObjectDetector.ModelParameters.ValidationData
```

## See Also

### Accessing the training parameters

- [batchSize](batchsize.md): The number of images the training session can use in a training iteration.
- [maxIterations](maxiterations.md): The maximum number of iterations the training session can use.
- [algorithm](algorithm.md): The algorithm the training session uses to train the object detector.
- [gridSize](gridsize.md): The number of rectangles, vertically and horizontally, the training algorithm uses to analyze each input image.
