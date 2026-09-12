> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrandomforestclassifier/modelparameters-swift.struct/validation](https://developer.apple.com/documentation/createml/mlrandomforestclassifier/modelparameters-swift.struct/validation)

# validation

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+

Validation data.

## Declaration

```swift
var validation: MLRandomForestClassifier.ModelParameters.ValidationData { get set }
```

<a id="discussion"></a>

## Discussion

The default is `.split(strategy: .automatic)`, which automatically generates the validation dataset from 0% to 10% of the training dataset.

## See Also

### Accessing parameters

- [columnSubsample](columnsubsample.md): Must be in the range (0, 1).
- [maxDepth](maxdepth.md)
- [maxIterations](maxiterations.md)
- [minChildWeight](minchildweight.md)
- [minLossReduction](minlossreduction.md)
- [randomSeed](randomseed.md)
- [rowSubsample](rowsubsample.md): Must be in the range (0, 1).
- [validationData](validationdata-swift.property.md): Deprecated. Validation data represented as a `MLDataTable`.
