> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/estimator/appending(_:)](https://developer.apple.com/documentation/createmlcomponents/estimator/appending(_:))

# appending(\_:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Composes this estimator with another estimator.

## Declaration

```swift
func appending<Other>(_ other: Other) -> some Estimator<ComposedTransformer<Self.Transformer, Other.Transformer>> where Other : Estimator, Self.Transformer.Output == Other.Transformer.Input

```
