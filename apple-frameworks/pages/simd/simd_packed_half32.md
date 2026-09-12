> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_packed_half32](https://developer.apple.com/documentation/simd/simd_packed_half32)

# simd_packed_half32 (Swift)

**Framework:** simd  
**Kind:** Type Alias

## Declaration

```swift
typealias simd_packed_half32 = SIMD32<Float16>
```

<a id="discussion"></a>

## Discussion

A vector of thirty-two 16-bit floating-point numbers with relaxed alignment.

This type is not available in Metal. The alignment of this type is only that of the underlying scalar element type, so you can use it to load or store from an array of that type.

# simd_packed_half32 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

## Declaration

```objectivec
typedef _Float16 __attribute__((ext_vector_type(32))) simd_packed_half32;
```

<a id="discussion"></a>

## Discussion

A vector of thirty-two 16-bit floating-point numbers with relaxed alignment.

This type is not available in Metal. The alignment of this type is only that of the underlying scalar element type, so you can use it to load or store from an array of that type.
