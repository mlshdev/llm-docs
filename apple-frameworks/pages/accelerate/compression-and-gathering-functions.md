> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/compression-and-gathering-functions](https://developer.apple.com/documentation/accelerate/compression-and-gathering-functions)

# Compression and gathering functions (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Compress vectors based on the nonzero elements in a gating vector, or gather vectors based on a separate vector that contains indices.

## Topics

### Vector compression

The functions in this group compress an input vector by eliminating elements that correspond to zero values in a gating vector.

- [compress(\_:gatingVector:nonZeroGatingCount:)](vdsp/compress%28__gatingvector_nonzerogatingcount_%29-3c7yk.md): Returns a compressed copy of the specified single-precision vector using the nonzero values in a gating vector.
- [compress(\_:gatingVector:nonZeroGatingCount:)](vdsp/compress%28__gatingvector_nonzerogatingcount_%29-93v23.md): Returns a compressed copy of the specified double-precision vector using the nonzero values in a gating vector.
- [compress(\_:gatingVector:result:)](vdsp/compress%28__gatingvector_result_%29-7fvy9.md): Compresses the specified single-precision vector using the nonzero values in a gating vector.
- [compress(\_:gatingVector:result:)](vdsp/compress%28__gatingvector_result_%29-2yse4.md): Compresses the specified double-precision vector using the nonzero values in a gating vector.

### Vector gathering functions

The functions in this group use indices or pointers stored in a source vector to generate a new vector with elements from a second source vector or memory.

- [gather(\_:indices:)](vdsp/gather%28__indices_%29-4jwvh.md): Returns a gathered copy of the specified single-precision vector using a vector that defines the indices to keep.
- [gather(\_:indices:)](vdsp/gather%28__indices_%29-4yt3o.md): Returns a gathered copy of the specified double-precision vector using a vector that defines the indices to keep.
- [gather(\_:indices:result:)](vdsp/gather%28__indices_result_%29-7erii.md): Gathers the specified single-precision vector using a vector that defines the indices to keep.
- [gather(\_:indices:result:)](vdsp/gather%28__indices_result_%29-34yzg.md): Gathers the specified double-precision vector using a vector that defines the indices to keep.

## See Also

### Vector operations

- [Copying, element swapping, and merging functions](copying-element-swapping-and-merging-functions.md): Copy, swap, and merge the elements of two vectors.
- [Reversing and sorting functions](reversing-and-sorting-functions.md): Perform in-place reverse and sort operations on a vector.

# Compression and gathering functions (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Compress vectors based on the nonzero elements in a gating vector, or gather vectors based on a separate vector that contains indices.

## Topics

### Vector compression

The functions in this group compress an input vector by eliminating elements that correspond to zero values in a gating vector.

- [vDSP_vcmprs](vdsp_vcmprs.md): Generates a compressed copy of the specified single-precision vector using the nonzero values in a gating vector.
- [vDSP_vcmprsD](vdsp_vcmprsd.md): Generates a compressed copy of the specified double-precision vector using the nonzero values in a gating vector.

### Vector gathering functions

The functions in this group use indices or pointers stored in a source vector to generate a new vector with elements from a second source vector or memory.

- [vDSP_vindex](vdsp_vindex.md): Generates a gathered copy of the specified single-precision vector using a vector that defines the zero-based indices to keep.
- [vDSP_vindexD](vdsp_vindexd.md): Generates a gathered copy of the specified double-precision vector using a vector that defines the zero-based indices to keep.
- [vDSP_vgathr](vdsp_vgathr.md): Generates a gathered copy of the specified single-precision vector using a vector that defines the one-based indices to keep.
- [vDSP_vgathrD](vdsp_vgathrd.md): Generates a gathered copy of the specified double-precision vector using a vector that defines the one-based indices to keep.
- [vDSP_vgathra](vdsp_vgathra.md): Generates a gathered copy of the specified single-precision vector using a vector that defines the pointers to the values to keep.
- [vDSP_vgathraD](vdsp_vgathrad.md): Generates a gathered copy of the specified double-precision vector using a vector that defines the pointers to the values to keep.

## See Also

### Vector operations

- [Copying, element swapping, and merging functions](copying-element-swapping-and-merging-functions.md): Copy, swap, and merge the elements of two vectors.
- [Reversing and sorting functions](reversing-and-sorting-functions.md): Perform in-place reverse and sort operations on a vector.
