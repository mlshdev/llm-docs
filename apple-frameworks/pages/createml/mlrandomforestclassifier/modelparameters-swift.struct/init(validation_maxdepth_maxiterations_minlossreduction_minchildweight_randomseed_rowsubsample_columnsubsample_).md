> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrandomforestclassifier/modelparameters-swift.struct/init(validation:maxdepth:maxiterations:minlossreduction:minchildweight:randomseed:rowsubsample:columnsubsample:)](https://developer.apple.com/documentation/createml/mlrandomforestclassifier/modelparameters-swift.struct/init(validation:maxdepth:maxiterations:minlossreduction:minchildweight:randomseed:rowsubsample:columnsubsample:))

# init(validation:maxDepth:maxIterations:minLossReduction:minChildWeight:randomSeed:rowSubsample:columnSubsample:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+

## Declaration

```swift
init(validation: MLRandomForestClassifier.ModelParameters.ValidationData = .split(strategy: .automatic), maxDepth: Int = 6, maxIterations: Int = 10, minLossReduction: Double = 0, minChildWeight: Double = 0.1, randomSeed: Int = 42, rowSubsample: Double = 0.8, columnSubsample: Double = 0.8)
```

## See Also

### Creating parameters

- [init(validationData:maxDepth:maxIterations:minLossReduction:minChildWeight:randomSeed:rowSubsample:columnSubsample:)](init%28validationdata_maxdepth_maxiterations_minlossreduction_minchildweight_randomseed_rowsubsample_columnsubsample_%29.md): Deprecated. Creates a new set of parameters.
- [MLRandomForestClassifier.ModelParameters.ValidationData](validationdata-swift.enum.md): Values for specifying validation data.
