> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatableestimatortosupervisedadaptor/fitted(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/updatableestimatortosupervisedadaptor/fitted(to:eventhandler:))

# fitted(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a transformer to a sequence of examples, ignoring the annotations and the validation.

## Declaration

```swift
func fitted<Input>(to input: Input, eventHandler: EventHandler? = nil) async throws -> UpdatableEstimatorToSupervisedAdaptor<Estimator, Annotation>.Transformer where Input : Sequence, Input.Element == AnnotatedFeature<Estimator.Transformer.Input, Annotation>
```

## Parameters

- `input`: A sequence of examples.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The pre-defined transformer.

## See Also

### Fitting and Updating

- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a transformer to a sequence of examples.
- [makeTransformer()](maketransformer%28%29.md): Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Updates a transformer with a new sequence of examples.
- [update(\_:with:validateOn:eventHandler:)](update%28__with_validateon_eventhandler_%29.md): Fits a transformer to a sequence of examples while validating with a validation sequence.
- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
