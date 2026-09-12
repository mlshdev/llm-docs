> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagetablelookup_argb8888(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagetablelookup_argb8888(_:_:_:_:_:_:_:))

# vImageTableLookUp_ARGB8888(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Uses a lookup table to transform an interleaved, four-channel 8-bit planar image to an interleaved, four-channel 8-bit planar image.

## Declaration

```swift
func vImageTableLookUp_ARGB8888(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ alphaTable: UnsafePointer<Pixel_8>!, _ redTable: UnsafePointer<Pixel_8>!, _ greenTable: UnsafePointer<Pixel_8>!, _ blueTable: UnsafePointer<Pixel_8>!, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the `height`, `width`, and `rowBytes` fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `alphaTable`: A lookup table for the alpha channel that contains 256 [Pixel_8](pixel_8.md) values. Pass `nil` to specify that the function copies the alpha channel unchanged to the destination buffer.
- `redTable`: A lookup table for the red channel that contains 256 [Pixel_8](pixel_8.md) values. Pass `nil` to specify that the function copies the alpha channel unchanged to the destination buffer.
- `greenTable`: A lookup table for the green channel that contains 256 [Pixel_8](pixel_8.md) values. Pass `nil` to specify that the function copies the alpha channel unchanged to the destination buffer.
- `blueTable`: A lookup table for the blue channel that contains 256 [Pixel_8](pixel_8.md) values. Pass `nil` to specify that the function copies the alpha channel unchanged to the destination buffer.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

# vImageTableLookUp_ARGB8888 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Uses a lookup table to transform an interleaved, four-channel 8-bit planar image to an interleaved, four-channel 8-bit planar image.

## Declaration

```objectivec
vImage_Error vImageTableLookUp_ARGB8888(const vImage_Buffer *src, const vImage_Buffer *dest, const Pixel_8 alphaTable[256], const Pixel_8 redTable[256], const Pixel_8 greenTable[256], const Pixel_8 blueTable[256], vImage_Flags flags);
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the `height`, `width`, and `rowBytes` fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `alphaTable`: A lookup table for the alpha channel that contains 256 [Pixel_8](pixel_8.md) values. Pass `nil` to specify that the function copies the alpha channel unchanged to the destination buffer.
- `redTable`: A lookup table for the red channel that contains 256 [Pixel_8](pixel_8.md) values. Pass `nil` to specify that the function copies the alpha channel unchanged to the destination buffer.
- `greenTable`: A lookup table for the green channel that contains 256 [Pixel_8](pixel_8.md) values. Pass `nil` to specify that the function copies the alpha channel unchanged to the destination buffer.
- `blueTable`: A lookup table for the blue channel that contains 256 [Pixel_8](pixel_8.md) values. Pass `nil` to specify that the function copies the alpha channel unchanged to the destination buffer.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion
