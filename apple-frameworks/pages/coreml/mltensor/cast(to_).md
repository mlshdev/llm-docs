> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/cast(to:)](https://developer.apple.com/documentation/coreml/mltensor/cast(to:))

# cast(to:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Casts the elements of the tensor to the given scalar type.

## Declaration

```swift
func cast<Scalar>(to scalarType: Scalar.Type) -> MLTensor where Scalar : MLTensorScalar
```

## Parameters

- `scalarType`: The destination scalar type.

<a id="return-value"></a>

## Return Value

A new tensor with its contents cast to the given scalar type.

<a id="discussion"></a>

## Discussion

For example:

```swift
let x = MLTensor([1, 2, 3], scalarType: Int32.self)
let y = x.cast(to: Float.self)
y.scalarType // is Float
```

## See Also

### Casting the elements

- [cast(like:)](cast%28like_%29.md): Casts the elements of the tensor to the scalar type of the given array.
