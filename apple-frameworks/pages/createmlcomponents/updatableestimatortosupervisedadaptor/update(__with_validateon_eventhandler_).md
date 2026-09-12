> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatableestimatortosupervisedadaptor/update(_:with:validateon:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/updatableestimatortosupervisedadaptor/update(_:with:validateon:eventhandler:))

# update(\_:with:validateOn:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a transformer to a sequence of examples while validating with a validation sequence.

## Declaration

```swift
func update<InputSequence, Validation>(_ transformer: inout Estimator.Transformer, with input: InputSequence, validateOn validation: Validation, eventHandler: EventHandler? = nil) async throws where InputSequence : Sequence, Validation : Sequence, InputSequence.Element == AnnotatedFeature<Estimator.Transformer.Input, Annotation>, Validation.Element == AnnotatedFeature<Estimator.Transformer.Input, Annotation>
```

## Parameters

- `transformer`: A transformer to update.
- `input`: A sequence of examples.
- `validation`: A sequence of examples used for validation.
- `eventHandler`: An event handler.

## See Also

### Fitting and Updating

- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a transformer to a sequence of examples, ignoring the annotations and the validation.
- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a transformer to a sequence of examples.
- [makeTransformer()](maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Updates a transformer with a new sequence of examples.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
