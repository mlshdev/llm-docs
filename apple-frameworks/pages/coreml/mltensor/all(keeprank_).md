> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mltensor/all(keeprank:)

# all(keepRank:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Computes logical AND on elements across all axes of a tensor where the scalar type of the tensor is expected to be Boolean.

## Declaration

```swift
func all(keepRank: Bool = false) -> MLTensor
```

## Parameters

- `keepRank`: A Boolean indicating whether to keep the reduced axes or not. The default value is `false`.

<a id="return-value"></a>

## Return Value

The reduced Boolean tensor.

## See Also

### Performing a logical AND operation

- [all(alongAxes:keepRank:)](all%28alongaxes_keeprank_%29.md): Computes logical AND on elements across the specified axes of a tensor where the scalar type of the tensor is expected to be Boolean.
