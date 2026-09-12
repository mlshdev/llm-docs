> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/lineartimeseriesforecaster/decode(from:)](https://developer.apple.com/documentation/createmlcomponents/lineartimeseriesforecaster/decode(from:))

# decode(from:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Decodes a previously fitted model.

## Declaration

```swift
func decode(from decoder: inout any EstimatorDecoder) throws -> LinearTimeSeriesForecaster<Scalar>.Transformer
```
