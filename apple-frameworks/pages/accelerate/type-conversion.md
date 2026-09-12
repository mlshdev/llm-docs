> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/type-conversion](https://developer.apple.com/documentation/accelerate/type-conversion)

# Type conversion (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Perform element-wise floating-point to integer and integer to floating-point conversion.

## Topics

### Conversion between floating-point types

The functions in this group convert between single-precision and double-precision floating-point vectors.

- [doubleToFloat(\_:)](vdsp/doubletofloat%28__%29.md): Returns single-precision values converted from a double-precision source.
- [floatToDouble(\_:)](vdsp/floattodouble%28__%29.md): Returns double-precision values converted from a single-precision source.
- [convertElements(of:to:)](vdsp/convertelements%28of_to_%29-2ejgr.md): Converts single-precision values to double-precision values.
- [convertElements(of:to:)](vdsp/convertelements%28of_to_%29-698ye.md): Converts double-precision values to single-precision values.

### Conversion between floating-point and integer types

- [Integer to single-precision floating-point conversion](integer-to-single-precision-floating-point-conversion.md): Perform element-wise integer to single-precision floating-point conversion.
- [Integer to double-precision floating-point conversion](integer-to-double-precision-floating-point-conversion.md): Perform element-wise integer to double-precision floating-point conversion.
- [Single-precision floating point to integer conversion](single-precision-floating-point-to-integer-conversion.md): Perform element-wise single-precision floating-point to integer conversion.
- [Double-precision floating point to integer conversion](double-precision-floating-point-to-integer-conversion.md): Perform element-wise double-precision floating-point to integer conversion.

## See Also

### Vector conversion functions

- [Conversion to decibel equivalents](conversion-to-decibel-equivalents.md): Convert vectors that contain power or amplitude data to decibels.
- [Complex vector conversion](complex-vector-conversion.md): Perform element-wise split-complex to interleaved and interleaved to split-complex conversion.
- [Polar-rectangular conversion](polar-rectangular-conversion.md): Convert each element of a vector between radius-angle and Cartesian pairs.

# Type conversion (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Perform element-wise floating-point to integer and integer to floating-point conversion.

## Topics

### Conversion between floating-point types

The functions in this group convert between single-precision and double-precision floating-point vectors.

- [vDSP_vspdp](vdsp_vspdp.md): Converts a single-precision vector to a double-precision vector.
- [vDSP_vdpsp](vdsp_vdpsp.md): Converts a double-precision vector to a single-precision vector.

### Conversion between floating-point and integer types

- [Integer to single-precision floating-point conversion](integer-to-single-precision-floating-point-conversion.md): Perform element-wise integer to single-precision floating-point conversion.
- [Integer to double-precision floating-point conversion](integer-to-double-precision-floating-point-conversion.md): Perform element-wise integer to double-precision floating-point conversion.
- [Single-precision floating point to integer conversion](single-precision-floating-point-to-integer-conversion.md): Perform element-wise single-precision floating-point to integer conversion.
- [Double-precision floating point to integer conversion](double-precision-floating-point-to-integer-conversion.md): Perform element-wise double-precision floating-point to integer conversion.

## See Also

### Vector conversion functions

- [Conversion to decibel equivalents](conversion-to-decibel-equivalents.md): Convert vectors that contain power or amplitude data to decibels.
- [Complex vector conversion](complex-vector-conversion.md): Perform element-wise split-complex to interleaved and interleaved to split-complex conversion.
- [Polar-rectangular conversion](polar-rectangular-conversion.md): Convert each element of a vector between radius-angle and Cartesian pairs.
