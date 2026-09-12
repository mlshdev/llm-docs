> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/double-precision-floating-point-vectors](https://developer.apple.com/documentation/accelerate/double-precision-floating-point-vectors)

# Double-precision floating-point vectors (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Perform operations on vectors that contain double-precision floating-point elements.

<a id="overview"></a>

## Overview

The simd library provides many functions in this group, in three variants:

- The default variant—for example, [simd_rsqrt(\_:)](../simd/simd_rsqrt%28__%29-i5ka.md)
- The precise variant—for example, [simd_precise_rsqrt(\_:)](../simd/simd_precise_rsqrt%28__%29-136bw.md)
- The fast variant—for example, [simd_fast_rsqrt(\_:)](../simd/simd_fast_rsqrt%28__%29-8p6tk.md)

The precise variants are accurate to a few units in the last place (ULPs). The fast variants provide greater speed but may have as little as 22 bits of accuracy for double-precision functions.

The compiler flag defines the behavior of the default variant. Ordinarily, the compiler resolves the default variants to their precise counterparts. Set the `-ffast-math` compiler flag to specify that the default variants of the functions resolve to the fast variants.

## Topics

### Vector data types

- [simd_double1](../simd/simd_double1.md): A vector of one 64-bit floating-point element.
- [simd_double2](../simd/simd_double2.md): A vector of two 64-bit floating-point elements.
- [simd_double3](../simd/simd_double3.md): A vector of three 64-bit floating-point elements.
- [simd_double4](../simd/simd_double4.md): A vector of four 64-bit floating-point elements.
- [simd_double8](../simd/simd_double8.md): A vector of eight 64-bit floating-point elements.

### Packed vector data types

- [simd_packed_double2](../simd/simd_packed_double2.md): A packed vector of two 64-bit floating-point elements.
- [simd_packed_double4](../simd/simd_packed_double4.md): A packed vector of four 64-bit floating-point elements.
- [simd_packed_double8](../simd/simd_packed_double8.md): A packed vector of eight 64-bit floating-point elements.

## See Also

### Floating-Point Vectors

- [Working with Vectors](working-with-vectors.md): Use vectors to calculate geometric values, calculate dot products and cross products, and interpolate between values.
- [Half-precision floating-point vectors](half-precision-floating-point-vectors.md): Perform operations on vectors that contain half-precision floating-point elements.
- [Single-precision floating-point vectors](single-precision-floating-point-vectors.md): Perform operations on vectors that contain single-precision floating-point elements.

# Double-precision floating-point vectors (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Perform operations on vectors that contain double-precision floating-point elements.

<a id="overview"></a>

## Overview

The simd library provides many functions in this group, in three variants:

- The default variant—for example, [simd_rsqrt](../simd/simd_rsqrt%28__%29-i5ka.md)
- The precise variant—for example, [simd_precise_rsqrt](../simd/simd_precise_rsqrt%28__%29-136bw.md)
- The fast variant—for example, [simd_fast_rsqrt](../simd/simd_fast_rsqrt%28__%29-8p6tk.md)

The precise variants are accurate to a few units in the last place (ULPs). The fast variants provide greater speed but may have as little as 22 bits of accuracy for double-precision functions.

The compiler flag defines the behavior of the default variant. Ordinarily, the compiler resolves the default variants to their precise counterparts. Set the `-ffast-math` compiler flag to specify that the default variants of the functions resolve to the fast variants.

## Topics

### Vector data types

- [simd_double1](../simd/simd_double1.md): A vector of one 64-bit floating-point element.
- [simd_double2](../simd/simd_double2.md): A vector of two 64-bit floating-point elements.
- [simd_double3](../simd/simd_double3.md): A vector of three 64-bit floating-point elements.
- [simd_double4](../simd/simd_double4.md): A vector of four 64-bit floating-point elements.
- [simd_double8](../simd/simd_double8.md): A vector of eight 64-bit floating-point elements.

### Packed vector data types

- [simd_packed_double2](../simd/simd_packed_double2.md): A packed vector of two 64-bit floating-point elements.
- [simd_packed_double4](../simd/simd_packed_double4.md): A packed vector of four 64-bit floating-point elements.
- [simd_packed_double8](../simd/simd_packed_double8.md): A packed vector of eight 64-bit floating-point elements.

## See Also

### Floating-Point Vectors

- [Working with Vectors](working-with-vectors.md): Use vectors to calculate geometric values, calculate dot products and cross products, and interpolate between values.
- [Half-precision floating-point vectors](half-precision-floating-point-vectors.md): Perform operations on vectors that contain half-precision floating-point elements.
- [Single-precision floating-point vectors](single-precision-floating-point-vectors.md): Perform operations on vectors that contain single-precision floating-point elements.
