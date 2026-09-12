> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/standardscaler/decodewithoptimizer(from:)](https://developer.apple.com/documentation/createmlcomponents/standardscaler/decodewithoptimizer(from:))

# decodeWithOptimizer(from:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Reads the encoded transformer with a decoder.

## Declaration

```swift
func decodeWithOptimizer(from decoder: inout any EstimatorDecoder) throws -> StandardScaler<Element>.Transformer
```

## Parameters

- `decoder`: A decoder.

<a id="return-value"></a>

## Return Value

The decoded transformer.
