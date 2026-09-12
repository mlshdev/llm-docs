> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/single-precision-floating-point-to-integer-conversion](https://developer.apple.com/documentation/accelerate/single-precision-floating-point-to-integer-conversion)

# Single-precision floating point to integer conversion (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Perform element-wise single-precision floating-point to integer conversion.

## Topics

### Floating point to integer conversion

- [floatingPointToInteger(\_:integerType:rounding:)](vdsp/floatingpointtointeger%28__integertype_rounding_%29-9z84u.md): Returns single-precision values converted to integer values.
- [vDSP.RoundingMode](vdsp/roundingmode.md): Floating point to integer conversion rounding modes.

### Floating point to 8-bit integer conversion

The functions in this group convert the values in a vector from floating-point values to integer values of a given size.

- [convertElements(of:to:rounding:)](vdsp/convertelements%28of_to_rounding_%29-48635.md): Converts single-precision values to 8-bit signed integers.
- [convertElements(of:to:rounding:)](vdsp/convertelements%28of_to_rounding_%29-9qu7f.md): Converts single-precision values to 8-bit unsigned integers.
- [vDSP.RoundingMode](vdsp/roundingmode.md): Floating point to integer conversion rounding modes.

### Floating point to 16-bit integer conversion

- [convertElements(of:to:rounding:)](vdsp/convertelements%28of_to_rounding_%29-slaa.md): Converts single-precision values to 16-bit signed integers.
- [convertElements(of:to:rounding:)](vdsp/convertelements%28of_to_rounding_%29-3tofv.md): Converts single-precision values to 16-bit unsigned integers.
- [vDSP.RoundingMode](vdsp/roundingmode.md): Floating point to integer conversion rounding modes.

### Floating point to 24-bit integer conversion

The functions in this group scale and convert floating-point values to and from signed 24-bit integer values.

- [vDSP_int24](vdsp_int24.md): A data structure that holds a 24-bit signed integer value.
- [vDSP_uint24](vdsp_uint24.md): A data structure that holds a 24-bit unsigned integer value.

### Floating point to 32-bit integer conversion

- [convertElements(of:to:rounding:)](vdsp/convertelements%28of_to_rounding_%29-2dsry.md): Converts single-precision values to 32-bit signed integers.
- [convertElements(of:to:rounding:)](vdsp/convertelements%28of_to_rounding_%29-14dc1.md): Converts single-precision values to 32-bit unsigned integers.
- [vDSP.RoundingMode](vdsp/roundingmode.md): Floating point to integer conversion rounding modes.

## See Also

### Conversion between floating-point and integer types

- [Integer to single-precision floating-point conversion](integer-to-single-precision-floating-point-conversion.md): Perform element-wise integer to single-precision floating-point conversion.
- [Integer to double-precision floating-point conversion](integer-to-double-precision-floating-point-conversion.md): Perform element-wise integer to double-precision floating-point conversion.
- [Double-precision floating point to integer conversion](double-precision-floating-point-to-integer-conversion.md): Perform element-wise double-precision floating-point to integer conversion.

# Single-precision floating point to integer conversion (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Perform element-wise single-precision floating-point to integer conversion.

## Topics

### Floating point to 8-bit integer conversion

The functions in this group convert the values in a vector from floating-point values to integer values of a given size.

- [vDSP_vfix8](vdsp_vfix8.md): Converts a vector of single-precision floating-point values to signed 8-bit integer values, and rounds towards zero.
- [vDSP_vfixr8](vdsp_vfixr8.md): Converts a vector of single-precision floating-point values to signed 8-bit integer values, and rounds towards the nearest integer.
- [vDSP_vfixu8](vdsp_vfixu8.md): Converts a vector of single-precision floating-point values to unsigned 8-bit integer values, and rounds towards zero.
- [vDSP_vfixru8](vdsp_vfixru8.md): Converts a vector of single-precision floating-point values to unsigned 8-bit integer values, and rounds towards the nearest integer.

### Floating point to 16-bit integer conversion

- [vDSP_vfix16](vdsp_vfix16.md): Converts a vector of single-precision floating-point values to signed 16-bit integer values, and rounds towards zero.
- [vDSP_vfixr16](vdsp_vfixr16.md): Converts a vector of single-precision floating-point values to signed 16-bit integer values, and rounds towards the nearest integer.
- [vDSP_vfixu16](vdsp_vfixu16.md): Converts a vector of single-precision floating-point values to unsigned 16-bit integer values, and rounds towards zero.
- [vDSP_vfixru16](vdsp_vfixru16.md): Converts a vector of single-precision floating-point values to unsigned 16-bit integer values, and rounds towards the nearest integer.

### Floating point to 24-bit integer conversion

The functions in this group scale and convert floating-point values to and from signed 24-bit integer values.

- [vDSP_vsmfix24](vdsp_vsmfix24.md): Converts a vector of single-precision floating-point values to signed 24-bit integer values, and rounds towards zero.
- [vDSP_vsmfixu24](vdsp_vsmfixu24.md): Converts a vector of single-precision floating-point values to signed 24-bit integer values, and rounds towards the nearest integer.
- [vDSP_int24](vdsp_int24.md): A data structure that holds a 24-bit signed integer value.
- [vDSP_uint24](vdsp_uint24.md): A data structure that holds a 24-bit unsigned integer value.

### Floating point to 32-bit integer conversion

- [vDSP_vfix32](vdsp_vfix32.md): Converts a vector of single-precision floating-point values to signed 32-bit integer values, and rounds towards zero.
- [vDSP_vfixr32](vdsp_vfixr32.md): Converts a vector of single-precision floating-point values to signed 32-bit integer values, and rounds towards the nearest integer.
- [vDSP_vfixu32](vdsp_vfixu32.md): Converts a vector of single-precision floating-point values to unsigned 32-bit integer values, and rounds towards zero.
- [vDSP_vfixru32](vdsp_vfixru32.md): Converts a vector of single-precision floating-point values to unsigned 32-bit integer values, and rounds towards the nearest integer.

## See Also

### Conversion between floating-point and integer types

- [Integer to single-precision floating-point conversion](integer-to-single-precision-floating-point-conversion.md): Perform element-wise integer to single-precision floating-point conversion.
- [Integer to double-precision floating-point conversion](integer-to-double-precision-floating-point-conversion.md): Perform element-wise integer to double-precision floating-point conversion.
- [Double-precision floating point to integer conversion](double-precision-floating-point-to-integer-conversion.md): Perform element-wise double-precision floating-point to integer conversion.
