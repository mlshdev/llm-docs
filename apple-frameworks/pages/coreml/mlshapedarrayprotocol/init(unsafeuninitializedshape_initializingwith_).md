> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayprotocol/init(unsafeuninitializedshape:initializingwith:)](https://developer.apple.com/documentation/coreml/mlshapedarrayprotocol/init(unsafeuninitializedshape:initializingwith:))

# init(unsafeUninitializedShape:initializingWith:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a shaped array type from a shape and a closure that initializes its memory.

## Declaration

```swift
init(unsafeUninitializedShape shape: [Int], initializingWith initializer: (inout UnsafeMutableBufferPointer<Self.Scalar>, [Int]) throws -> Void) rethrows
```

## Parameters

- `shape`: An integer array. Each element represents the size of the shaped array’s corresponding dimension.
- `initializer`: A closure you provide that initializes the shaped array’s underlying memory. The initializer calls your closure with a pointer to the memory and an array of strides that correspond to the shaped array’s dimensions.

## See Also

### Creating a shaped array type

- [init(scalars:shape:)](init%28scalars_shape_%29.md): Creates a shaped array type from an array of values.
- [init(repeating:shape:)](init%28repeating_shape_%29.md): Creates a shaped array type that initializes every element to the same value.
- [init(identityMatrixOfSize:)](init%28identitymatrixofsize_%29.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `Scalar.RawSignificand` conforms to `FixedWidthInteger`. Initialize as an identity matrix.
- [init(randomScalarsIn:shape:)](init%28randomscalarsin_shape_%29.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `Scalar.RawSignificand` conforms to `FixedWidthInteger`. Initialize the shaped array with random scalar values.
- [init(bytesNoCopy:shape:deallocator:)](init%28bytesnocopy_shape_deallocator_%29.md): Creates a shaped array type from a data pointer.
- [init(bytesNoCopy:shape:strides:deallocator:)](init%28bytesnocopy_shape_strides_deallocator_%29.md): Creates a shaped array type from a data pointer with memory strides.
