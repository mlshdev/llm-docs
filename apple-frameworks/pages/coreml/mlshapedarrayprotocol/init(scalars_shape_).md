> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayprotocol/init(scalars:shape:)](https://developer.apple.com/documentation/coreml/mlshapedarrayprotocol/init(scalars:shape:))

# init(scalars:shape:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a shaped array type from an array of values.

## Declaration

```swift
init<S>(scalars: S, shape: [Int]) where S : Sequence, Self.Scalar == S.Element
```

## Parameters

- `scalars`: A sequence of values.
- `shape`: An integer array. Each element represents the size of the shaped array’s corresponding dimension.

## See Also

### Creating a shaped array type

- [init(repeating:shape:)](init%28repeating_shape_%29.md): Creates a shaped array type that initializes every element to the same value.
- [init(identityMatrixOfSize:)](init%28identitymatrixofsize_%29.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `Scalar.RawSignificand` conforms to `FixedWidthInteger`. Initialize as an identity matrix.
- [init(randomScalarsIn:shape:)](init%28randomscalarsin_shape_%29.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `Scalar.RawSignificand` conforms to `FixedWidthInteger`. Initialize the shaped array with random scalar values.
- [init(bytesNoCopy:shape:deallocator:)](init%28bytesnocopy_shape_deallocator_%29.md): Creates a shaped array type from a data pointer.
- [init(bytesNoCopy:shape:strides:deallocator:)](init%28bytesnocopy_shape_strides_deallocator_%29.md): Creates a shaped array type from a data pointer with memory strides.
- [init(unsafeUninitializedShape:initializingWith:)](init%28unsafeuninitializedshape_initializingwith_%29.md): Creates a shaped array type from a shape and a closure that initializes its memory.
