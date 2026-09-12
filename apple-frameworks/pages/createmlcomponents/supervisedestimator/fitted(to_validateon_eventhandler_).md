> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/supervisedestimator/fitted(to:validateon:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/supervisedestimator/fitted(to:validateon:eventhandler:))

# fitted(to:validateOn:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a transformer to a sequence of examples while validating with a validation sequence.

## Declaration

```swift
func fitted<Input, Validation>(to input: Input, validateOn validation: Validation, eventHandler: EventHandler?) async throws -> Self.Transformer where Input : Sequence, Validation : Sequence, Input.Element == AnnotatedFeature<Self.Transformer.Input, Self.Annotation>, Validation.Element == AnnotatedFeature<Self.Transformer.Input, Self.Annotation>
```

## Parameters

- `input`: A sequence of examples used for fitting the transformer.
- `validation`: A sequence of examples used for validating the fitted transformer.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted transformer.

## Mentioned In

- [Creating a multi-label image classifier](../creating-a-multi-label-image-classifier.md)

## Default Implementations

### SupervisedEstimator Implementations

- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29-5v8ky.md): Fits a transformer to an async sequence of examples while validating with a validation sequence.

## See Also

### Adapting and fitting

- [adaptedAsTemporal()](adaptedastemporal%28%29.md): Deprecated. Conforms when `Annotation` conforms to `Sendable`. Exposes this supervised estimator as a temporal supervised estimator.
- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a transformer to a sequence of examples.
- [fitted(to:)](fitted%28to_%29.md)
- [fitted(to:validateOn:)](fitted%28to_validateon_%29.md)
