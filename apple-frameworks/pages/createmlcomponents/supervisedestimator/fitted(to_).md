> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/supervisedestimator/fitted(to:)](https://developer.apple.com/documentation/createmlcomponents/supervisedestimator/fitted(to:))

# fitted(to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

## Declaration

```swift
func fitted<Input>(to input: Input) async throws -> Self.Transformer where Input : Sequence, Input.Element == AnnotatedFeature<Self.Transformer.Input, Self.Annotation>
```

## See Also

### Adapting and fitting

- [adaptedAsTemporal()](adaptedastemporal%28%29.md): Deprecated. Conforms when `Annotation` conforms to `Sendable`. Exposes this supervised estimator as a temporal supervised estimator.
- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a transformer to a sequence of examples.
- [fitted(to:validateOn:eventHandler:)](fitted%28to_validateon_eventhandler_%29.md): Fits a transformer to a sequence of examples while validating with a validation sequence.
- [fitted(to:validateOn:)](fitted%28to_validateon_%29.md)
