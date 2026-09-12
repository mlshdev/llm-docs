> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/copying-element-swapping-and-merging-functions](https://developer.apple.com/documentation/accelerate/copying-element-swapping-and-merging-functions)

# Copying, element swapping, and merging functions (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Copy, swap, and merge the elements of two vectors.

## Topics

### Vector copying functions

The functions in this group copy one vector to another vector.

- [copy(\_:to:count:)](vdsp/copy%28__to_count_%29-96jr5.md): Copies a complex single-precision vector.
- [copy(\_:to:count:)](vdsp/copy%28__to_count_%29-7zpro.md): Copies a complex double-precision vector.

### Vector-to-vector element swapping functions

- [swapElements(\_:\_:)](vdsp/swapelements%28____%29-96xn7.md): Swaps the elements of two single-precision vectors.
- [swapElements(\_:\_:)](vdsp/swapelements%28____%29-62wvt.md): Swaps the elements of two double-precision vectors.

### Vector-to-vector merging functions

- [taperedMerge(\_:\_:)](vdsp/taperedmerge%28____%29-5dhoj.md): Returns the result of a tapered merge between two single-precision vectors.
- [taperedMerge(\_:\_:)](vdsp/taperedmerge%28____%29-9s9j5.md): Returns the result of a tapered merge between two double-precision vectors.
- [taperedMerge(\_:\_:result:)](vdsp/taperedmerge%28____result_%29-74fuy.md): Computes the result of a tapered merge between two single-precision vectors.
- [taperedMerge(\_:\_:result:)](vdsp/taperedmerge%28____result_%29-9361o.md): Computes the result of a tapered merge between two double-precision vectors.

## See Also

### Vector operations

- [Compression and gathering functions](compression-and-gathering-functions.md): Compress vectors based on the nonzero elements in a gating vector, or gather vectors based on a separate vector that contains indices.
- [Reversing and sorting functions](reversing-and-sorting-functions.md): Perform in-place reverse and sort operations on a vector.

# Copying, element swapping, and merging functions (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Copy, swap, and merge the elements of two vectors.

## Topics

### Vector copying functions

The functions in this group copy one vector to another vector.

- [vDSP_zvmov](vdsp_zvmov.md): Moves a complex single-precision vector.
- [vDSP_zvmovD](vdsp_zvmovd.md): Moves a complex double-precision vector.

### Vector-to-vector element swapping functions

- [vDSP_vswap](vdsp_vswap.md): Swaps the elements of two single-precision vectors using the specified stride.
- [vDSP_vswapD](vdsp_vswapd.md): Swaps the elements of two double-precision vectors using the specified stride.

### Vector-to-vector merging functions

- [vDSP_vtmerg](vdsp_vtmerg.md): Performs a tapered merge between two single-precision vectors.
- [vDSP_vtmergD](vdsp_vtmergd.md): Performs a tapered merge between two double-precision vectors.

## See Also

### Vector operations

- [Compression and gathering functions](compression-and-gathering-functions.md): Compress vectors based on the nonzero elements in a gating vector, or gather vectors based on a separate vector that contains indices.
- [Reversing and sorting functions](reversing-and-sorting-functions.md): Perform in-place reverse and sort operations on a vector.
