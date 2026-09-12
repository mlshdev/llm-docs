> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayprotocol/init(randomscalarsin:shape:)](https://developer.apple.com/documentation/coreml/mlshapedarrayprotocol/init(randomscalarsin:shape:))

# init(randomScalarsIn:shape:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Initialize the shaped array with random scalar values.

## Declaration

```swift
init(randomScalarsIn range: Range<Self.Scalar>, shape: [Int])
```

## Parameters

- `range`: The value range of each scalar
- `shape`: The shape of the shaped array

## See Also

### Creating a shaped array type

- [init(scalars:shape:)](init%28scalars_shape_%29.md): Creates a shaped array type from an array of values.
- [init(repeating:shape:)](init%28repeating_shape_%29.md): Creates a shaped array type that initializes every element to the same value.
- [init(identityMatrixOfSize:)](init%28identitymatrixofsize_%29.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `Scalar.RawSignificand` conforms to `FixedWidthInteger`. Initialize as an identity matrix.
- [init(bytesNoCopy:shape:deallocator:)](init%28bytesnocopy_shape_deallocator_%29.md): Creates a shaped array type from a data pointer.
- [init(bytesNoCopy:shape:strides:deallocator:)](init%28bytesnocopy_shape_strides_deallocator_%29.md): Creates a shaped array type from a data pointer with memory strides.
- [init(unsafeUninitializedShape:initializingWith:)](init%28unsafeuninitializedshape_initializingwith_%29.md): Creates a shaped array type from a shape and a closure that initializes its memory.
