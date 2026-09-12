> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/modelparameters-swift.struct/validation-swift.property](https://developer.apple.com/documentation/createml/mlactivityclassifier/modelparameters-swift.struct/validation-swift.property)

# validation

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The validation data source.

## Declaration

```swift
var validation: MLActivityClassifier.ModelParameters.Validation { get set }
```

<a id="discussion"></a>

## Discussion

If you don’t specify validation data, the training process automatically sets aside a random subset of the training data as the validation data.

## See Also

### Accessing the training parameters

- [validationData](validationdata.md): Deprecated. The activity classifier’s validation dataset.
- [batchSize](batchsize.md): The number of sequence chunks the training session uses per iteration.
- [maximumIterations](maximumiterations.md): The maximum number of iterations over the training data the training session uses.
- [predictionWindowSize](predictionwindowsize.md): The number of samples for each labeled activity.
