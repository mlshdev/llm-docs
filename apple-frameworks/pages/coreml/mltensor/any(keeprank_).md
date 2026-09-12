> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/any(keeprank:)](https://developer.apple.com/documentation/coreml/mltensor/any(keeprank:))

# any(keepRank:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Computes logical OR on elements across all dimensions of a tensor where the scalar type of the tensor is expected to be Boolean.

## Declaration

```swift
func any(keepRank: Bool = false) -> MLTensor
```

## Parameters

- `keepRank`: A Boolean indicating whether to keep the reduced axes or not. The default value is `false`.

<a id="return-value"></a>

## Return Value

The reduced tensor.

## See Also

### Performing a logical OR operation

- [any(alongAxes:keepRank:)](any%28alongaxes_keeprank_%29.md): Computes logical OR on elements across the specified axes of a tensor where the scalar type of the tensor is expected to be Boolean.
