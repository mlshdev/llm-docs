> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldecisiontreeregressor/modelparameters-swift.struct/init(validation:maxdepth:minlossreduction:minchildweight:randomseed:)](https://developer.apple.com/documentation/createml/mldecisiontreeregressor/modelparameters-swift.struct/init(validation:maxdepth:minlossreduction:minchildweight:randomseed:))

# init(validation:maxDepth:minLossReduction:minChildWeight:randomSeed:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

## Declaration

```swift
init(validation: MLDecisionTreeRegressor.ModelParameters.ValidationData, maxDepth: Int = 6, minLossReduction: Double = 0, minChildWeight: Double = 0.1, randomSeed: Int = 42)
```

## See Also

### Creating parameters

- [init(validationData:maxDepth:minLossReduction:minChildWeight:randomSeed:)](init%28validationdata_maxdepth_minlossreduction_minchildweight_randomseed_%29.md): Deprecated. Creates a new set of parameters.
- [MLDecisionTreeRegressor.ModelParameters.ValidationData](validationdata-swift.enum.md): Values for specifying validation data.
