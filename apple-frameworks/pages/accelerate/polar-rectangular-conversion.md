> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/polar-rectangular-conversion](https://developer.apple.com/documentation/accelerate/polar-rectangular-conversion)

# Polar-rectangular conversion (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Convert each element of a vector between radius-angle and Cartesian pairs.

## Topics

### Converting polar coordinates to rectangular coordinates

- [polarToRectangular(\_:)](vdsp/polartorectangular%28__%29-8upqj.md): Returns single-precision rectangular coordinates converted from polar coordinates.
- [polarToRectangular(\_:)](vdsp/polartorectangular%28__%29-jgv8.md): Returns double-precision rectangular coordinates converted from polar coordinates.
- [convert(polarCoordinates:toRectangularCoordinates:)](vdsp/convert%28polarcoordinates_torectangularcoordinates_%29-3vpjf.md): Converts single-precision polar coordinates to rectangular coordinates.
- [convert(polarCoordinates:toRectangularCoordinates:)](vdsp/convert%28polarcoordinates_torectangularcoordinates_%29-22zz0.md): Converts double-precision polar coordinates to rectangular coordinates.

### Converting rectangular coordinates to polar coordinates

- [rectangularToPolar(\_:)](vdsp/rectangulartopolar%28__%29-5p4kg.md): Returns single-precision polar coordinates converted from rectangular coordinates.
- [rectangularToPolar(\_:)](vdsp/rectangulartopolar%28__%29-3txg1.md): Returns double-precision polar coordinates converted from rectangular coordinates.
- [convert(rectangularCoordinates:toPolarCoordinates:)](vdsp/convert%28rectangularcoordinates_topolarcoordinates_%29-1zi4t.md): Converts single-precision rectangular coordinates to polar coordinates.
- [convert(rectangularCoordinates:toPolarCoordinates:)](vdsp/convert%28rectangularcoordinates_topolarcoordinates_%29-84131.md): Converts double-precision rectangular coordinates to polar coordinates.

## See Also

### Vector conversion functions

- [Conversion to decibel equivalents](conversion-to-decibel-equivalents.md): Convert vectors that contain power or amplitude data to decibels.
- [Type conversion](type-conversion.md): Perform element-wise floating-point to integer and integer to floating-point conversion.
- [Complex vector conversion](complex-vector-conversion.md): Perform element-wise split-complex to interleaved and interleaved to split-complex conversion.

# Polar-rectangular conversion (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Convert each element of a vector between radius-angle and Cartesian pairs.

## Topics

### Converting polar coordinates to rectangular coordinates

- [vDSP_rect](vdsp_rect.md): Converts single-precision polar coordinates to rectangular coordinates, using the specified stride.
- [vDSP_rectD](vdsp_rectd.md): Converts double-precision polar coordinates to rectangular coordinates, using the specified stride.

### Converting rectangular coordinates to polar coordinates

- [vDSP_polar](vdsp_polar.md): Converts single-precision rectangular coordinates to polar coordinates, using the specified stride.
- [vDSP_polarD](vdsp_polard.md): Converts double-precision rectangular coordinates to polar coordinates, using the specified stride.

## See Also

### Vector conversion functions

- [Conversion to decibel equivalents](conversion-to-decibel-equivalents.md): Convert vectors that contain power or amplitude data to decibels.
- [Type conversion](type-conversion.md): Perform element-wise floating-point to integer and integer to floating-point conversion.
- [Complex vector conversion](complex-vector-conversion.md): Perform element-wise split-complex to interleaved and interleaved to split-complex conversion.
