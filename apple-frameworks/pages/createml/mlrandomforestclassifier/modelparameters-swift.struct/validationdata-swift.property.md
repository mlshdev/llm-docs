> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrandomforestclassifier/modelparameters-swift.struct/validationdata-swift.property](https://developer.apple.com/documentation/createml/mlrandomforestclassifier/modelparameters-swift.struct/validationdata-swift.property)

# validationData

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 16.0) · iPadOS 15.0+ (deprecated in 16.0) · Mac Catalyst 15.0+ (deprecated in 16.0) · macOS 10.14+ (deprecated in 10.15) · visionOS 1.0+

Validation data represented as a `MLDataTable`.

> Use the validation property instead.

## Declaration

```swift
var validationData: MLDataTable? { get set }
```

<a id="discussion"></a>

## Discussion

> **Note**

> Setting this to `nil` means that the training data will be automatically split for validation. Setting it to an empty table means to not use a validation set.

## See Also

### Accessing parameters

- [columnSubsample](columnsubsample.md): Must be in the range (0, 1).
- [maxDepth](maxdepth.md)
- [maxIterations](maxiterations.md)
- [minChildWeight](minchildweight.md)
- [minLossReduction](minlossreduction.md)
- [randomSeed](randomseed.md)
- [rowSubsample](rowsubsample.md): Must be in the range (0, 1).
- [validation](validation.md): Validation data.
