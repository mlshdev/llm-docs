> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlactivityclassifier/modelparameters-swift.struct/maximumiterations

# maximumIterations

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The maximum number of iterations over the training data the training session uses.

## Declaration

```swift
var maximumIterations: Int?
```

## See Also

### Accessing the training parameters

- [validationData](validationdata.md): Deprecated. The activity classifier’s validation dataset.
- [batchSize](batchsize.md): The number of sequence chunks the training session uses per iteration.
- [predictionWindowSize](predictionwindowsize.md): The number of samples for each labeled activity.
- [validation](validation-swift.property.md): The validation data source.
