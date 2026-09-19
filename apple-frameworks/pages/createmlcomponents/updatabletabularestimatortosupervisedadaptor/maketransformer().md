> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/updatabletabularestimatortosupervisedadaptor/maketransformer()

# makeTransformer()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a default-initialized transformer suitable for incremental fitting.

## Declaration

```swift
func makeTransformer() -> Estimator.Transformer
```

## See Also

### Fitting

- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a transformer to a data frame.
- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Updates a transformer with a new data frame containing examples.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
