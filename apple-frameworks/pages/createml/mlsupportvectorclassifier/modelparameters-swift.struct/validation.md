> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsupportvectorclassifier/modelparameters-swift.struct/validation](https://developer.apple.com/documentation/createml/mlsupportvectorclassifier/modelparameters-swift.struct/validation)

# validation

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+ (deprecated in 14.0)

Validation data.

## Declaration

```swift
var validation: MLSupportVectorClassifier.ModelParameters.ValidationData { get set }
```

<a id="discussion"></a>

## Discussion

The default is `.split(strategy: .automatic)`, which automatically generates the validation dataset from 0% to 10% of the training dataset.

## See Also

### Accessing parameters

- [convergenceThreshold](convergencethreshold.md): Deprecated.
- [featureRescaling](featurerescaling.md): Deprecated.
- [maxIterations](maxiterations.md): Deprecated.
- [penalty](penalty.md): Deprecated.
- [validationData](validationdata-swift.property.md): Deprecated. Validation data represented as a `MLDataTable`.
