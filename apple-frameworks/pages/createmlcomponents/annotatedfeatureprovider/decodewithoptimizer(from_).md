> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/annotatedfeatureprovider/decodewithoptimizer(from:)

# decodeWithOptimizer(from:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Reads the encoded transformer and optimizer with a decoder.

## Declaration

```swift
func decodeWithOptimizer(from decoder: inout any EstimatorDecoder) throws -> AnnotatedFeatureProvider<Base, UnwrappedInput>.Transformer
```

## Parameters

- `decoder`: A decoder.

<a id="return-value"></a>

## Return Value

The decoded transformer.
