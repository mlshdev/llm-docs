> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlsupportvectorclassifier/modelparameters-swift.struct/validationdata-swift.property

# validationData

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.14+ (deprecated in 10.15)

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

- [convergenceThreshold](convergencethreshold.md): Deprecated.
- [featureRescaling](featurerescaling.md): Deprecated.
- [maxIterations](maxiterations.md): Deprecated.
- [penalty](penalty.md): Deprecated.
- [validation](validation.md): Deprecated. Validation data.
