> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mllogisticregressionclassifier/modelparameters-swift.struct/validation](https://developer.apple.com/documentation/createml/mllogisticregressionclassifier/modelparameters-swift.struct/validation)

# validation

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+

Validation data.

## Declaration

```swift
var validation: MLLogisticRegressionClassifier.ModelParameters.ValidationData { get set }
```

<a id="discussion"></a>

## Discussion

The default is `.split(strategy: .automatic)`, which automatically generates the validation dataset from 0% to 10% of the training dataset.

## See Also

### Accessing parameters

- [convergenceThreshold](convergencethreshold.md)
- [featureRescaling](featurerescaling.md)
- [l1Penalty](l1penalty.md)
- [l2Penalty](l2penalty.md)
- [maxIterations](maxiterations.md)
- [stepSize](stepsize.md)
- [validationData](validationdata-swift.property.md): Deprecated. Validation data represented as a `MLDataTable`.
