> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlactivityclassifier/modelparameters-swift.struct/predictionwindowsize

# predictionWindowSize

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The number of samples for each labeled activity.

## Declaration

```swift
var predictionWindowSize: Int?
```

## See Also

### Accessing the training parameters

- [validationData](validationdata.md): Deprecated. The activity classifier’s validation dataset.
- [batchSize](batchsize.md): The number of sequence chunks the training session uses per iteration.
- [maximumIterations](maximumiterations.md): The maximum number of iterations over the training data the training session uses.
- [validation](validation-swift.property.md): The validation data source.
