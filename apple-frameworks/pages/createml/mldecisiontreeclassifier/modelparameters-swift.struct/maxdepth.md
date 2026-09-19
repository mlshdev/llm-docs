> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mldecisiontreeclassifier/modelparameters-swift.struct/maxdepth

# maxDepth

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

The maximum depth of the tree. Must be greater than 0.

## Declaration

```swift
var maxDepth: Int
```

## See Also

### Accessing parameters

- [validationData](validationdata-swift.property.md): Deprecated. The data used for the validation set to inform the model training process.
- [minLossReduction](minlossreduction.md): The minimum amount that the loss needs to be reduced to create a new split.
- [minChildWeight](minchildweight.md): The minimum weight of each leaf node.
- [randomSeed](randomseed.md): The seed value for random operations during tree building process.
- [validation](validation.md): Validation data.
