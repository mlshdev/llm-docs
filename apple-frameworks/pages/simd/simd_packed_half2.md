> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_packed_half2](https://developer.apple.com/documentation/simd/simd_packed_half2)

# simd_packed_half2 (Swift)

**Framework:** simd  
**Kind:** Type Alias

## Declaration

```swift
typealias simd_packed_half2 = SIMD2<Float16>
```

<a id="discussion"></a>

## Discussion

A vector of two 16-bit floating-point numbers with relaxed alignment.

simd::packed::half2. The alignment of this type is that of the underlying scalar element type, so you can use it to load or store from an array of that type.

# simd_packed_half2 (Objective-C)

**Framework:** simd  
**Kind:** Type Alias

## Declaration

```objectivec
typedef _Float16 __attribute__((ext_vector_type(2))) simd_packed_half2;
```

<a id="discussion"></a>

## Discussion

A vector of two 16-bit floating-point numbers with relaxed alignment.

simd::packed::half2. The alignment of this type is that of the underlying scalar element type, so you can use it to load or store from an array of that type.
