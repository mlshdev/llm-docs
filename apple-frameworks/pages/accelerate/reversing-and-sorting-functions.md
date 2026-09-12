> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/reversing-and-sorting-functions](https://developer.apple.com/documentation/accelerate/reversing-and-sorting-functions)

# Reversing and sorting functions (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Perform in-place reverse and sort operations on a vector.

## Topics

### Vector reversing functions

- [reverse(\_:)](vdsp/reverse%28__%29-38ptd.md): Reverses a vector of single-precision values in-place.
- [reverse(\_:)](vdsp/reverse%28__%29-3aq38.md): Reverses a vector of double-precision values in-place.

### Vector sorting functions

The functions in this group sort the values in a vector.

- [sort(\_:sortOrder:)](vdsp/sort%28__sortorder_%29-wx0w.md): Sorts a vector of single-precision values in-place.
- [sort(\_:sortOrder:)](vdsp/sort%28__sortorder_%29-418g0.md): Sorts a vector of double-precision values in-place.
- [vDSP.SortOrder](vdsp/sortorder.md): Constants that specify the sorting order.

## See Also

### Vector operations

- [Compression and gathering functions](compression-and-gathering-functions.md): Compress vectors based on the nonzero elements in a gating vector, or gather vectors based on a separate vector that contains indices.
- [Copying, element swapping, and merging functions](copying-element-swapping-and-merging-functions.md): Copy, swap, and merge the elements of two vectors.

# Reversing and sorting functions (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Perform in-place reverse and sort operations on a vector.

## Topics

### Vector reversing functions

- [vDSP_vrvrs](vdsp_vrvrs.md): Performs an in-place reversal of a single-precision vector.
- [vDSP_vrvrsD](vdsp_vrvrsd.md): Performs an in-place reversal of a double-precision vector.

### Vector sorting functions

The functions in this group sort the values in a vector.

- [vDSP_vsort](vdsp_vsort.md): Performs an in-place sort of a single-precision vector.
- [vDSP_vsortD](vdsp_vsortd.md): Performs an in-place sort of a double-precision vector.
- [vDSP_vsorti](vdsp_vsorti.md): Performs an in-place sort of the indices into a single-precision vector.
- [vDSP_vsortiD](vdsp_vsortid.md): Performs an in-place sort of the indices into a double-precision vector.

## See Also

### Vector operations

- [Compression and gathering functions](compression-and-gathering-functions.md): Compress vectors based on the nonzero elements in a gating vector, or gather vectors based on a separate vector that contains indices.
- [Copying, element swapping, and merging functions](copying-element-swapping-and-merging-functions.md): Copy, swap, and merge the elements of two vectors.
