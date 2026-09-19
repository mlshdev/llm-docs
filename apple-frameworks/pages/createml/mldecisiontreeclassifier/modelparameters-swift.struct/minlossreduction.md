> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mldecisiontreeclassifier/modelparameters-swift.struct/minlossreduction

# minLossReduction

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

The minimum amount that the loss needs to be reduced to create a new split.

## Declaration

```swift
var minLossReduction: Double
```

## See Also

### Accessing parameters

- [validationData](validationdata-swift.property.md): Deprecated. The data used for the validation set to inform the model training process.
- [maxDepth](maxdepth.md): The maximum depth of the tree. Must be greater than 0.
- [minChildWeight](minchildweight.md): The minimum weight of each leaf node.
- [randomSeed](randomseed.md): The seed value for random operations during tree building process.
- [validation](validation.md): Validation data.
