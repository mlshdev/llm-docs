> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtagger/modelparameters-swift.struct/validation](https://developer.apple.com/documentation/createml/mlwordtagger/modelparameters-swift.struct/validation)

# validation

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The validation dataset.

## Declaration

```swift
var validation: MLWordTagger.ModelParameters.ValidationData { get set }
```

<a id="discussion"></a>

## Discussion

The default value is an [MLWordTagger.ModelParameters.ValidationData.split(strategy:)](validationdata-swift.enum/split%28strategy_%29.md) instance with the [MLSplitStrategy.automatic](../../mlsplitstrategy/automatic.md) split strategy\`\`, which automatically generates the validation dataset by partitioning up to 10% of the training dataset.

## See Also

### Accessing parameters

- [algorithm](algorithm.md): The algorithm type.
- [language](language.md): The language setting.
- [maxIterations](maxiterations.md): The maximum training iterations.
