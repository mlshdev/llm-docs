> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/modelparameters-swift.struct/predictionwindowsize](https://developer.apple.com/documentation/createml/mlhandactionclassifier/modelparameters-swift.struct/predictionwindowsize)

# predictionWindowSize

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The number of video frames the model training session uses to train a hand action classifier.

## Declaration

```swift
var predictionWindowSize: Int
```

<a id="discussion"></a>

## Discussion

Set to 60 to capture hand actions with a 2 second duration from videos that have a frame rate of 30 frames per second.

## See Also

### Accessing hand action training parameters

- [maximumIterations](maximumiterations.md): The largest number of training iterations you allow the training session to use.
- [batchSize](batchsize.md): The number of videos the model training session uses for each training iteration.
- [targetFrameRate](targetframerate.md): The number of video frames per second the hand action classifier model expects as its input at runtime.
- [algorithm](algorithm.md): The algorithm the training session uses to create the hand action classifier.
- [augmentationOptions](augmentationoptions.md): The variations the training session uses to add more variety to its training dataset.
- [validation](validation.md): A dataset the hand action classifier task uses to evaluate the model that’s distinct from the training dataset.
