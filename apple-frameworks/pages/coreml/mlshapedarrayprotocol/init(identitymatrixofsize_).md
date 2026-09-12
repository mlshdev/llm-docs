> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayprotocol/init(identitymatrixofsize:)](https://developer.apple.com/documentation/coreml/mlshapedarrayprotocol/init(identitymatrixofsize:))

# init(identityMatrixOfSize:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Initialize as an identity matrix.

## Declaration

```swift
init(identityMatrixOfSize size: Int)
```

## Parameters

- `size`: The size (order) of the matrix

<a id="discussion"></a>

## Discussion

The initializer creates a shaped array of shape size x size where the contents are zeros except array\[scalarAt: x, x\], which are ones.

## See Also

### Creating a shaped array type

- [init(scalars:shape:)](init%28scalars_shape_%29.md): Creates a shaped array type from an array of values.
- [init(repeating:shape:)](init%28repeating_shape_%29.md): Creates a shaped array type that initializes every element to the same value.
- [init(randomScalarsIn:shape:)](init%28randomscalarsin_shape_%29.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `Scalar.RawSignificand` conforms to `FixedWidthInteger`. Initialize the shaped array with random scalar values.
- [init(bytesNoCopy:shape:deallocator:)](init%28bytesnocopy_shape_deallocator_%29.md): Creates a shaped array type from a data pointer.
- [init(bytesNoCopy:shape:strides:deallocator:)](init%28bytesnocopy_shape_strides_deallocator_%29.md): Creates a shaped array type from a data pointer with memory strides.
- [init(unsafeUninitializedShape:initializingWith:)](init%28unsafeuninitializedshape_initializingwith_%29.md): Creates a shaped array type from a shape and a closure that initializes its memory.
