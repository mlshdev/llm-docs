> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/lineartimeseriesforecaster/encode(_:to:)

# encode(\_:to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Encodes a fitted model.

## Declaration

```swift
func encode(_ model: LinearTimeSeriesForecaster<Scalar>.Transformer, to encoder: inout any EstimatorEncoder) throws
```
