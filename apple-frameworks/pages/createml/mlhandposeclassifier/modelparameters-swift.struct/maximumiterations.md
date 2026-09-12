> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandposeclassifier/modelparameters-swift.struct/maximumiterations](https://developer.apple.com/documentation/createml/mlhandposeclassifier/modelparameters-swift.struct/maximumiterations)

# maximumIterations

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The largest number of training iterations you allow the training session to use.

## Declaration

```swift
var maximumIterations: Int
```

## See Also

### Accessing hand pose training parameters

- [batchSize](batchsize.md): The number of images the model training session uses for each training iteration.
- [algorithm](algorithm.md): The algorithm the training session uses to create the hand pose classifier.
- [augmentationOptions](augmentationoptions.md): The variations the training session uses to add more variety to its training dataset.
- [validation](validation.md): A dataset the hand pose classifier task uses to evaluate the model that’s distinct from the training dataset.
