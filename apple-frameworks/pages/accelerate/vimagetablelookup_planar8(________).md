> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagetablelookup_planar8(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagetablelookup_planar8(_:_:_:_:))

# vImageTableLookUp_Planar8(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Uses a lookup table to transform an 8-bit planar image to an 8-bit planar image.

## Declaration

```swift
func vImageTableLookUp_Planar8(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ table: UnsafePointer<Pixel_8>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the `height`, `width`, and `rowBytes` fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `table`: A lookup table that contains 256 [Pixel_8](pixel_8.md) values.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

For each pixel, this function uses the 8-bit value from the source image as an index to the 16-bit value from the table. The per-pixel conversion calculation is equivalent to the following:

```objc
Pixel_8 table[256];
Pixel_8 result_pixel = table[input_8_bit_pixel];
```

You can use this function with multichannel data by scaling the width of the image to compensate for the additional channels. In this case, all channels use the same lookup table.

This function doesn’t work in place.

## See Also

### Transforming planar-to-planar with a lookup table

- [vImageLookupTable_PlanarFtoPlanar8(\_:\_:\_:\_:)](vimagelookuptable_planarftoplanar8%28________%29.md): Uses a lookup table to transform a 32-bit planar image to an 8-bit planar image.
- [vImageLookupTable_Planar8toPlanar16(\_:\_:\_:\_:)](vimagelookuptable_planar8toplanar16%28________%29.md): Uses a lookup table to transform an 8-bit planar image to an unsigned 16-bit planar image.
- [vImageLookupTable_Planar8toPlanarF(\_:\_:\_:\_:)](vimagelookuptable_planar8toplanarf%28________%29.md): Uses a lookup table to transform an 8-bit planar image to a 32-bit planar image.
- [vImageLookupTable_8to64U(\_:\_:\_:\_:)](vimagelookuptable_8to64u%28________%29.md): Uses a lookup table to transform an 8-bit planar image to a 64-bit planar image.
- [vImageLookupTable_Planar16(\_:\_:\_:\_:)](vimagelookuptable_planar16%28________%29.md): Uses a lookup table to transform a 16-bit planar image.
- [vImageInterpolatedLookupTable_PlanarF(\_:\_:\_:\_:\_:\_:\_:)](vimageinterpolatedlookuptable_planarf%28______________%29.md): Uses an interpolated lookup table to transform a 32-bit planar image.

# vImageTableLookUp_Planar8 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Uses a lookup table to transform an 8-bit planar image to an 8-bit planar image.

## Declaration

```objectivec
vImage_Error vImageTableLookUp_Planar8(const vImage_Buffer *src, const vImage_Buffer *dest, const Pixel_8 table[256], vImage_Flags flags);
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the `height`, `width`, and `rowBytes` fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `table`: A lookup table that contains 256 [Pixel_8](pixel_8.md) values.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

For each pixel, this function uses the 8-bit value from the source image as an index to the 16-bit value from the table. The per-pixel conversion calculation is equivalent to the following:

```objc
Pixel_8 table[256];
Pixel_8 result_pixel = table[input_8_bit_pixel];
```

You can use this function with multichannel data by scaling the width of the image to compensate for the additional channels. In this case, all channels use the same lookup table.

This function doesn’t work in place.

## See Also

### Transforming planar-to-planar with a lookup table

- [vImageLookupTable_PlanarFtoPlanar8](vimagelookuptable_planarftoplanar8%28________%29.md): Uses a lookup table to transform a 32-bit planar image to an 8-bit planar image.
- [vImageLookupTable_Planar8toPlanar16](vimagelookuptable_planar8toplanar16%28________%29.md): Uses a lookup table to transform an 8-bit planar image to an unsigned 16-bit planar image.
- [vImageLookupTable_Planar8toPlanarF](vimagelookuptable_planar8toplanarf%28________%29.md): Uses a lookup table to transform an 8-bit planar image to a 32-bit planar image.
- [vImageLookupTable_8to64U](vimagelookuptable_8to64u%28________%29.md): Uses a lookup table to transform an 8-bit planar image to a 64-bit planar image.
- [vImageLookupTable_Planar16](vimagelookuptable_planar16%28________%29.md): Uses a lookup table to transform a 16-bit planar image.
- [vImageInterpolatedLookupTable_PlanarF](vimageinterpolatedlookuptable_planarf%28______________%29.md): Uses an interpolated lookup table to transform a 32-bit planar image.
