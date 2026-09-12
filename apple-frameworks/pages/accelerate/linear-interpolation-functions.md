> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/linear-interpolation-functions](https://developer.apple.com/documentation/accelerate/linear-interpolation-functions)

# Linear interpolation functions (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Compute the linear average between two vectors or between the neighboring elements in one vector.

## Topics

### Vector-to-Vector Linear Interpolation

- [linearInterpolate(\_:\_:using:)](vdsp/linearinterpolate%28____using_%29-3j5d2.md): Returns the linear interpolation between the supplied double-precision vectors.
- [linearInterpolate(\_:\_:using:)](vdsp/linearinterpolate%28____using_%29-71as1.md): Returns the linear interpolation between the supplied single-precision vectors.
- [linearInterpolate(\_:\_:using:result:)](vdsp/linearinterpolate%28____using_result_%29-6o7a9.md): Calculates the linear interpolation between the supplied double-precision vectors.
- [linearInterpolate(\_:\_:using:result:)](vdsp/linearinterpolate%28____using_result_%29-55avl.md): Calculates the linear interpolation between the supplied single-precision vectors.

### Single-Vector Linear Interpolation

The functions in this group calculate the linear interpolation between neighboring elements.

- [Using linear interpolation to construct new data points](using-linear-interpolation-to-construct-new-data-points.md): Fill the gaps in arrays of numerical data using linear interpolation.
- [linearInterpolate(elementsOf:using:)](vdsp/linearinterpolate%28elementsof_using_%29-5i3jc.md): Returns the interpolation between the neighboring elements of a double-precision vector.
- [linearInterpolate(elementsOf:using:)](vdsp/linearinterpolate%28elementsof_using_%29-49r3c.md): Returns the interpolation between the neighboring elements of a single-precision vector.
- [linearInterpolate(elementsOf:using:result:)](vdsp/linearinterpolate%28elementsof_using_result_%29-4n3lr.md): Calculates the interpolation between the neighboring elements of a double-precision vector.
- [linearInterpolate(elementsOf:using:result:)](vdsp/linearinterpolate%28elementsof_using_result_%29-9y61c.md): Calculates the interpolation between the neighboring elements of a single-precision vector.

## See Also

### Vector interpolation

- [Quadratic interpolation functions](quadratic-interpolation-functions.md): Compute the quadratic interpolation between the neighboring elements in a vector.

# Linear interpolation functions (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Compute the linear average between two vectors or between the neighboring elements in one vector.

## Topics

### Vector-to-Vector Linear Interpolation

- [vDSP_vintb](vdsp_vintb.md): Calculates the linear interpolation between the supplied single-precision vectors using the specified stride.
- [vDSP_vintbD](vdsp_vintbd.md): Calculates the linear interpolation between the supplied double-precision vectors using the specified stride.

### Single-Vector Linear Interpolation

The functions in this group calculate the linear interpolation between neighboring elements.

- [Using linear interpolation to construct new data points](using-linear-interpolation-to-construct-new-data-points.md): Fill the gaps in arrays of numerical data using linear interpolation.
- [vDSP_vlint](vdsp_vlint.md): Calculates the interpolation between the neighboring elements of a single-precision vector using the specified stride.
- [vDSP_vlintD](vdsp_vlintd.md): Calculates the interpolation between the neighboring elements of a double-precision vector using the specified stride.

## See Also

### Vector interpolation

- [Quadratic interpolation functions](quadratic-interpolation-functions.md): Compute the quadratic interpolation between the neighboring elements in a vector.
