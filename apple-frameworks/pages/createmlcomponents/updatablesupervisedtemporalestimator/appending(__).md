> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/updatablesupervisedtemporalestimator/appending(_:)

# appending(\_:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Composes this updatable supervised temporal estimator with another updatable supervised temporal estimator.

## Declaration

```swift
func appending<Other>(_ other: Other) -> some UpdatableSupervisedTemporalEstimator<ComposedTemporalTransformer<Self.Transformer, Other.Transformer>, Self.Annotation> where Other : UpdatableSupervisedTemporalEstimator, Self.Annotation == Other.Annotation, Self.Transformer.Output == Other.Transformer.Input

```
