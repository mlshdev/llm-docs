> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldecisiontreeclassifier/modelparameters-swift.struct/validationdata-swift.property](https://developer.apple.com/documentation/createml/mldecisiontreeclassifier/modelparameters-swift.struct/validationdata-swift.property)

# validationData

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 16.0) · iPadOS 15.0+ (deprecated in 16.0) · Mac Catalyst 15.0+ (deprecated in 16.0) · macOS 10.14+ (deprecated in 10.15) · visionOS 1.0+

The data used for the validation set to inform the model training process.

> Use the validation property instead.

## Declaration

```swift
var validationData: MLDataTable? { get set }
```

## See Also

### Accessing parameters

- [maxDepth](maxdepth.md): The maximum depth of the tree. Must be greater than 0.
- [minLossReduction](minlossreduction.md): The minimum amount that the loss needs to be reduced to create a new split.
- [minChildWeight](minchildweight.md): The minimum weight of each leaf node.
- [randomSeed](randomseed.md): The seed value for random operations during tree building process.
- [validation](validation.md): Validation data.
