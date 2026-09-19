> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mltensor/shapedarray(of:)

# shapedArray(of:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a materialized representation of the tensor.

## Declaration

```swift
func shapedArray<Scalar>(of scalarType: Scalar.Type) async -> MLShapedArray<Scalar> where Scalar : MLShapedArrayScalar, Scalar : MLTensorScalar
```

<a id="return-value"></a>

## Return Value

A `MLShapedArray` with the contents of the tensor.
