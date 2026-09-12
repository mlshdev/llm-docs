> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatableestimatortosupervisedadaptor/maketransformer()](https://developer.apple.com/documentation/createmlcomponents/updatableestimatortosupervisedadaptor/maketransformer())

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

### Fitting and Updating

- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a transformer to a sequence of examples, ignoring the annotations and the validation.
- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a transformer to a sequence of examples.
- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Updates a transformer with a new sequence of examples.
- [update(\_:with:validateOn:eventHandler:)](update%28__with_validateon_eventhandler_%29.md): Fits a transformer to a sequence of examples while validating with a validation sequence.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
