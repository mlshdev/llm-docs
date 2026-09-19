> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/temporalestimator/appending(_:)

# appending(\_:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Composes this temporal estimator with a supervised temporal estimator.

## Declaration

```swift
@preconcurrency func appending<Other>(_ other: Other) -> some SupervisedTemporalEstimator<ComposedTemporalTransformer<Self.Transformer, TransformerToTemporalAdaptor<Other.Transformer>>, Other.Annotation> where Other : SupervisedEstimator, Other.Annotation : Sendable, Self.Transformer.Output == Other.Transformer.Input

```
