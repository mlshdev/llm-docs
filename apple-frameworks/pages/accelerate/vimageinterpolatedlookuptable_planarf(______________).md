> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageinterpolatedlookuptable_planarf(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageinterpolatedlookuptable_planarf(_:_:_:_:_:_:_:))

# vImageInterpolatedLookupTable_PlanarF(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Uses an interpolated lookup table to transform a 32-bit planar image.

## Declaration

```swift
func vImageInterpolatedLookupTable_PlanarF(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ table: UnsafePointer<Pixel_F>, _ tableEntries: vImagePixelCount, _ maxFloat: Float, _ minFloat: Float, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the `height`, `width`, and `rowBytes` fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `table`: A lookup table that contains [Pixel_F](pixel_f.md) values.
- `tableEntries`: The number of values in the lookup table.
- `maxFloat`: A value of type `float`.
- `minFloat`: A value of type `float`.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

Provide this function with a lookup table with any number of values, but with a minimum value of `minFloat` and a maximum value of `maxFloat`. The function generates lookup values by linearly interpolating between the supplied values. The per-pixel conversion calculation is equivalent to the following:

```objc
float clippedPixel = MAX( MIN( src_pixel, maxFloat ), minFloat );    //clip src_pixel to be in range
float fIndex = (float) (tableEntries - 1) * (clippedPixel - minFloat ) / (maxFloat - minFloat);
float fract = fIndex - floor( fIndex );
unsigned long index =  fIndex;
float result = table[ index ] * ( 1.0f - fract ) + table[ index + 1] * fract;
```

The following code shows a lookup table that contains two values, `1` and `0`. The result is that the lookup transformation maps the source values `0...1` to the destination values `1...0`.

```swift
let lookupTable: [Float] = [1, 0]

let source = vImage.PixelBuffer<vImage.PlanarF>(
    pixelValues: [0.2, 0.4, 0.6, 0.8],
    size: .init(width: 4, height: 1))

let destination = vImage.PixelBuffer<vImage.PlanarF>(
    size: source.size)

source.withUnsafePointerToVImageBuffer{ src in
    destination.withUnsafePointerToVImageBuffer { dest in
        
        _ = vImageInterpolatedLookupTable_PlanarF(
            src,
            dest,
            lookupTable,
            vImagePixelCount(lookupTable.count),
            1, 0,
            vImage_Flags(kvImageNoFlags))
    }
}

// Prints "[0.8, 0.6, 0.4, 0.2]".
print(destination.array)
```

## See Also

### Transforming planar-to-planar with a lookup table

- [vImageTableLookUp_Planar8(\_:\_:\_:\_:)](vimagetablelookup_planar8%28________%29.md): Uses a lookup table to transform an 8-bit planar image to an 8-bit planar image.
- [vImageLookupTable_PlanarFtoPlanar8(\_:\_:\_:\_:)](vimagelookuptable_planarftoplanar8%28________%29.md): Uses a lookup table to transform a 32-bit planar image to an 8-bit planar image.
- [vImageLookupTable_Planar8toPlanar16(\_:\_:\_:\_:)](vimagelookuptable_planar8toplanar16%28________%29.md): Uses a lookup table to transform an 8-bit planar image to an unsigned 16-bit planar image.
- [vImageLookupTable_Planar8toPlanarF(\_:\_:\_:\_:)](vimagelookuptable_planar8toplanarf%28________%29.md): Uses a lookup table to transform an 8-bit planar image to a 32-bit planar image.
- [vImageLookupTable_8to64U(\_:\_:\_:\_:)](vimagelookuptable_8to64u%28________%29.md): Uses a lookup table to transform an 8-bit planar image to a 64-bit planar image.
- [vImageLookupTable_Planar16(\_:\_:\_:\_:)](vimagelookuptable_planar16%28________%29.md): Uses a lookup table to transform a 16-bit planar image.

# vImageInterpolatedLookupTable_PlanarF (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Uses an interpolated lookup table to transform a 32-bit planar image.

## Declaration

```objectivec
vImage_Error vImageInterpolatedLookupTable_PlanarF(const vImage_Buffer *src, const vImage_Buffer *dest, const Pixel_F *table, vImagePixelCount tableEntries, float maxFloat, float minFloat, vImage_Flags flags);
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the `height`, `width`, and `rowBytes` fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `table`: A lookup table that contains [Pixel_F](pixel_f.md) values.
- `tableEntries`: The number of values in the lookup table.
- `maxFloat`: A value of type `float`.
- `minFloat`: A value of type `float`.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

Provide this function with a lookup table with any number of values, but with a minimum value of `minFloat` and a maximum value of `maxFloat`. The function generates lookup values by linearly interpolating between the supplied values. The per-pixel conversion calculation is equivalent to the following:

```objc
float clippedPixel = MAX( MIN( src_pixel, maxFloat ), minFloat );    //clip src_pixel to be in range
float fIndex = (float) (tableEntries - 1) * (clippedPixel - minFloat ) / (maxFloat - minFloat);
float fract = fIndex - floor( fIndex );
unsigned long index =  fIndex;
float result = table[ index ] * ( 1.0f - fract ) + table[ index + 1] * fract;
```

The following code shows a lookup table that contains two values, `1` and `0`. The result is that the lookup transformation maps the source values `0...1` to the destination values `1...0`.

```swift
let lookupTable: [Float] = [1, 0]

let source = vImage.PixelBuffer<vImage.PlanarF>(
    pixelValues: [0.2, 0.4, 0.6, 0.8],
    size: .init(width: 4, height: 1))

let destination = vImage.PixelBuffer<vImage.PlanarF>(
    size: source.size)

source.withUnsafePointerToVImageBuffer{ src in
    destination.withUnsafePointerToVImageBuffer { dest in
        
        _ = vImageInterpolatedLookupTable_PlanarF(
            src,
            dest,
            lookupTable,
            vImagePixelCount(lookupTable.count),
            1, 0,
            vImage_Flags(kvImageNoFlags))
    }
}

// Prints "[0.8, 0.6, 0.4, 0.2]".
print(destination.array)
```

## See Also

### Transforming planar-to-planar with a lookup table

- [vImageTableLookUp_Planar8](vimagetablelookup_planar8%28________%29.md): Uses a lookup table to transform an 8-bit planar image to an 8-bit planar image.
- [vImageLookupTable_PlanarFtoPlanar8](vimagelookuptable_planarftoplanar8%28________%29.md): Uses a lookup table to transform a 32-bit planar image to an 8-bit planar image.
- [vImageLookupTable_Planar8toPlanar16](vimagelookuptable_planar8toplanar16%28________%29.md): Uses a lookup table to transform an 8-bit planar image to an unsigned 16-bit planar image.
- [vImageLookupTable_Planar8toPlanarF](vimagelookuptable_planar8toplanarf%28________%29.md): Uses a lookup table to transform an 8-bit planar image to a 32-bit planar image.
- [vImageLookupTable_8to64U](vimagelookuptable_8to64u%28________%29.md): Uses a lookup table to transform an 8-bit planar image to a 64-bit planar image.
- [vImageLookupTable_Planar16](vimagelookuptable_planar16%28________%29.md): Uses a lookup table to transform a 16-bit planar image.
