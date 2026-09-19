> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/updatablesupervisedestimator/appending(_:)

# appending(\_:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Composes this updatable estimator with an updatable estimator.

## Declaration

```swift
func appending<Other>(_ other: Other) -> some UpdatableSupervisedEstimator<ComposedTransformer<Self.Transformer, Other.Transformer>, Self.Annotation> where Other : UpdatableEstimator, Self.Transformer.Output == Other.Transformer.Input

```
