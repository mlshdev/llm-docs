> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldecisiontreeclassifier/modelparameters-swift.struct/minchildweight](https://developer.apple.com/documentation/createml/mldecisiontreeclassifier/modelparameters-swift.struct/minchildweight)

# minChildWeight

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

The minimum weight of each leaf node.

## Declaration

```swift
var minChildWeight: Double
```

<a id="discussion"></a>

## Discussion

The minimum child weight controls when the tree building should terminate based comparing the sum of the instance weights to the [minChildWeight](minchildweight.md).

## See Also

### Accessing parameters

- [validationData](validationdata-swift.property.md): Deprecated. The data used for the validation set to inform the model training process.
- [maxDepth](maxdepth.md): The maximum depth of the tree. Must be greater than 0.
- [minLossReduction](minlossreduction.md): The minimum amount that the loss needs to be reduced to create a new split.
- [randomSeed](randomseed.md): The seed value for random operations during tree building process.
- [validation](validation.md): Validation data.
