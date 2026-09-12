> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/modelparameters-swift.struct/batchsize](https://developer.apple.com/documentation/createml/mlobjectdetector/modelparameters-swift.struct/batchsize)

# batchSize

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The number of images the training session can use in a training iteration.

## Declaration

```swift
var batchSize: Int?
```

<a id="discussion"></a>

## Discussion

If you don’t have a preference, set this property to `nil` to tell Create ML to use an appropriate value when it trains the model.

## See Also

### Accessing the training parameters

- [validation](validation.md): The object detector’s validation dataset for the training session.
- [maxIterations](maxiterations.md): The maximum number of iterations the training session can use.
- [algorithm](algorithm.md): The algorithm the training session uses to train the object detector.
- [gridSize](gridsize.md): The number of rectangles, vertically and horizontally, the training algorithm uses to analyze each input image.
