> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_packed_half4](https://developer.apple.com/documentation/simd/simd_packed_half4)

# simd_packed_half4 (Swift)

**Framework:** simd  
**Kind:** Type Alias

## Declaration

```swift
typealias simd_packed_half4 = SIMD4<Float16>
```

<a id="discussion"></a>

## Discussion

A vector of four 16-bit floating-point numbers with relaxed alignment.

simd::packed::half4. The alignment of this type is that of the underlying scalar element type, so you can use it to load or store from an array of that type.

# simd_packed_half4 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

## Declaration

```objectivec
typedef _Float16 __attribute__((ext_vector_type(4))) simd_packed_half4;
```

<a id="discussion"></a>

## Discussion

A vector of four 16-bit floating-point numbers with relaxed alignment.

simd::packed::half4. The alignment of this type is that of the underlying scalar element type, so you can use it to load or store from an array of that type.
