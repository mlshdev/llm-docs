> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/estimator/fitted(to:)](https://developer.apple.com/documentation/createmlcomponents/estimator/fitted(to:))

# fitted(to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

## Declaration

```swift
func fitted<S>(to input: S) async throws -> Self.Transformer where S : Sequence, S.Element == Self.Transformer.Input
```

## See Also

### Fitting and adapting

- [adaptedAsSupervised(annotationType:)](adaptedassupervised%28annotationtype_%29.md): Exposes this estimator as a supervised estimator.
- [adaptedAsTemporal()](adaptedastemporal%28%29.md): Deprecated. Exposes this estimator as a temporal estimator.
- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Fits a transformer to a sequence of examples.
