> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/cast(like:)](https://developer.apple.com/documentation/coreml/mltensor/cast(like:))

# cast(like:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Casts the elements of the tensor to the scalar type of the given array.

## Declaration

```swift
func cast(like other: MLTensor) -> MLTensor
```

## Parameters

- `other`: The other tensor whose scalar type is used for the cast.

<a id="return-value"></a>

## Return Value

A new tensor with its contents cast to the scalar type of `other`.

<a id="discussion"></a>

## Discussion

For example:

```swift
let x = MLTensor([1, 2, 3], scalarType: Float.self)
let y = MLTensor([1, 2, 3], scalarType: Int32.self)
let z = y.cast(like: x)
z.scalarType // is Float
```

## See Also

### Casting the elements

- [cast(to:)](cast%28to_%29.md): Casts the elements of the tensor to the given scalar type.
