> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_vector_norm_float_complex(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/sparse_vector_norm_float_complex(_:_:_:_:))

# sparse_vector_norm_float_complex(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```swift
func sparse_vector_norm_float_complex(_ nz: sparse_dimension, _ x: OpaquePointer!, _ indx: UnsafePointer<sparse_index>!, _ norm: sparse_norm) -> Float
```

## See Also

### Complex vector operations

- [sparse_pack_vector_double_complex(\_:\_:\_:\_:\_:\_:)](sparse_pack_vector_double_complex%28____________%29.md)
- [sparse_pack_vector_float_complex(\_:\_:\_:\_:\_:\_:)](sparse_pack_vector_float_complex%28____________%29.md)
- [sparse_unpack_vector_double_complex(\_:\_:\_:\_:\_:\_:\_:)](sparse_unpack_vector_double_complex%28______________%29.md)
- [sparse_unpack_vector_float_complex(\_:\_:\_:\_:\_:\_:\_:)](sparse_unpack_vector_float_complex%28______________%29.md)
- [sparse_vector_norm_double_complex(\_:\_:\_:\_:)](sparse_vector_norm_double_complex%28________%29.md)

# sparse_vector_norm_float_complex (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```objectivec
float sparse_vector_norm_float_complex(sparse_dimension nz, const _Complex float * restrictx, const sparse_index * restrictindx, sparse_norm norm);
```

## See Also

### Complex vector operations

- [sparse_pack_vector_double_complex](sparse_pack_vector_double_complex%28____________%29.md)
- [sparse_pack_vector_float_complex](sparse_pack_vector_float_complex%28____________%29.md)
- [sparse_unpack_vector_double_complex](sparse_unpack_vector_double_complex%28______________%29.md)
- [sparse_unpack_vector_float_complex](sparse_unpack_vector_float_complex%28______________%29.md)
- [sparse_vector_norm_double_complex](sparse_vector_norm_double_complex%28________%29.md)
