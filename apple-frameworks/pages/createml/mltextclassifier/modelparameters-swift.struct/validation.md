> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/modelparameters-swift.struct/validation](https://developer.apple.com/documentation/createml/mltextclassifier/modelparameters-swift.struct/validation)

# validation

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

The validation dataset.

## Declaration

```swift
var validation: MLTextClassifier.ModelParameters.ValidationData { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [MLTextClassifier.ModelParameters.ValidationData.split(strategy:)](validationdata-swift.enum/split%28strategy_%29.md) with the [MLSplitStrategy.automatic](../../mlsplitstrategy/automatic.md) split strategy\`\`, which automatically generates the validation dataset by partitioning up to 10% of the training dataset.

## See Also

### Accessing parameters

- [algorithm](algorithm.md): The parameter’s algorithm setting.
- [language](language.md): The parameter’s language setting.
- [maxIterations](maxiterations.md): The maximum number of training iterations.
