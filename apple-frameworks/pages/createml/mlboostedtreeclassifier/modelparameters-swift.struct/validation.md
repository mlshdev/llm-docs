> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlboostedtreeclassifier/modelparameters-swift.struct/validation](https://developer.apple.com/documentation/createml/mlboostedtreeclassifier/modelparameters-swift.struct/validation)

# validation

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+

Validation data.

## Declaration

```swift
var validation: MLBoostedTreeClassifier.ModelParameters.ValidationData { get set }
```

<a id="discussion"></a>

## Discussion

The default is `.split(strategy: .automatic)`, which automatically generates the validation dataset from 0% to 10% of the training dataset.

## See Also

### Accessing parameters

- [validationData](validationdata-swift.property.md): Deprecated. Validation data represented as a `MLDataTable`.
- [maxDepth](maxdepth.md)
- [maxIterations](maxiterations.md)
- [minLossReduction](minlossreduction.md)
- [minChildWeight](minchildweight.md)
- [randomSeed](randomseed.md)
- [stepSize](stepsize.md): Must be in the range (0, 1).
- [earlyStoppingRounds](earlystoppingrounds.md): Validation data must be specified for an early stop.
- [rowSubsample](rowsubsample.md): Must be in the range (0, 1).
- [columnSubsample](columnsubsample.md): Must be in the range (0, 1).
