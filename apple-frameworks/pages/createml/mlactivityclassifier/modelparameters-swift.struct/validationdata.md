> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/modelparameters-swift.struct/validationdata](https://developer.apple.com/documentation/createml/mlactivityclassifier/modelparameters-swift.struct/validationdata)

# validationData

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+ (deprecated in 14.0)

The activity classifier’s validation dataset.

> Use validationDataSource

## Declaration

```swift
var validationData: MLDataTable?
```

<a id="discussion"></a>

## Discussion

If you don’t specify validation data, the training process automatically sets aside a random subset of the training data as the validation data.

## See Also

### Accessing the training parameters

- [batchSize](batchsize.md): The number of sequence chunks the training session uses per iteration.
- [maximumIterations](maximumiterations.md): The maximum number of iterations over the training data the training session uses.
- [predictionWindowSize](predictionwindowsize.md): The number of samples for each labeled activity.
- [validation](validation-swift.property.md): The validation data source.
