> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/complex-vector-conversion](https://developer.apple.com/documentation/accelerate/complex-vector-conversion)

# Complex vector conversion (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Perform element-wise split-complex to interleaved and interleaved to split-complex conversion.

## Topics

### Converting interleaved-complex vectors to split-complex vectors

- [convert(interleavedComplexVector:toSplitComplexVector:)](vdsp/convert%28interleavedcomplexvector_tosplitcomplexvector_%29-4lnrf.md): Converts the contents of an interleaved single-precision complex vector to a split complex vector.
- [convert(interleavedComplexVector:toSplitComplexVector:)](vdsp/convert%28interleavedcomplexvector_tosplitcomplexvector_%29-8cqd4.md): Converts the contents of an interleaved double-precision complex vector to a split complex vector.

### Converting split-complex vectors to interleaved-complex vectors

- [convert(splitComplexVector:toInterleavedComplexVector:)](vdsp/convert%28splitcomplexvector_tointerleavedcomplexvector_%29-65gyx.md): Converts the contents of a split single-precision complex vector to an interleaved vector.
- [convert(splitComplexVector:toInterleavedComplexVector:)](vdsp/convert%28splitcomplexvector_tointerleavedcomplexvector_%29-9v193.md): Converts the contents of a split double-precision complex vector to an interleaved vector.

## See Also

### Vector conversion functions

- [Conversion to decibel equivalents](conversion-to-decibel-equivalents.md): Convert vectors that contain power or amplitude data to decibels.
- [Type conversion](type-conversion.md): Perform element-wise floating-point to integer and integer to floating-point conversion.
- [Polar-rectangular conversion](polar-rectangular-conversion.md): Convert each element of a vector between radius-angle and Cartesian pairs.

# Complex vector conversion (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Perform element-wise split-complex to interleaved and interleaved to split-complex conversion.

## Topics

### Converting interleaved-complex vectors to split-complex vectors

- [vDSP_ctoz](vdsp_ctoz.md): Copies the contents of an interleaved single-precision complex vector to a split complex vector.
- [vDSP_ctozD](vdsp_ctozd.md): Copies the contents of an interleaved double-precision complex vector to a split complex vector.

### Converting split-complex vectors to interleaved-complex vectors

- [vDSP_ztoc](vdsp_ztoc.md): Copies the contents of a split single-precision complex vector to an interleaved vector.
- [vDSP_ztocD](vdsp_ztocd.md): Copies the contents of a split double-precision complex vector to an interleaved vector.

## See Also

### Vector conversion functions

- [Conversion to decibel equivalents](conversion-to-decibel-equivalents.md): Convert vectors that contain power or amplitude data to decibels.
- [Type conversion](type-conversion.md): Perform element-wise floating-point to integer and integer to floating-point conversion.
- [Polar-rectangular conversion](polar-rectangular-conversion.md): Convert each element of a vector between radius-angle and Cartesian pairs.
