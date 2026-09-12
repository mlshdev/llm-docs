> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/tiffrepresentation(using:factor:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/tiffrepresentation(using:factor:))

# tiffRepresentation(using:factor:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a TIFF representation of the image using the specified compression.

## Declaration

```swift
func tiffRepresentation(using comp: NSBitmapImageRep.TIFFCompression, factor: Float) -> Data?
```

## Parameters

- `comp`: An enum constant that represents a TIFF data-compression scheme. Legal values for `compression` can be found in [NSBitmapImageRep.TIFFCompression](tiffcompression.md).
- `factor`: A `float` value that provides a hint for those compression types that implement variable compression ratios.

  Currently only JPEG compression uses a compression factor. JPEG compression in TIFF files is not supported, and `factor` is ignored.

<a id="Discussion"></a>

## Discussion

If the compression type isn’t supported for writing TIFF data (for example, [NSBitmapImageRep.TIFFCompression.next](tiffcompression/next.md)), the stored compression is changed to [NSBitmapImageRep.TIFFCompression.none](tiffcompression/none.md) before the TIFF representation is generated.

If a problem is encountered during generation of the TIFF, [tiffRepresentation(using:factor:)](tiffrepresentation%28using_factor_%29.md) raises an [NSTIFFException](../nstiffexception.md) or an [NSBadBitmapParametersException](../nsbadbitmapparametersexception.md).

## See Also

### Related Documentation

- [tiffRepresentation(using:factor:)](../nsimage/tiffrepresentation%28using_factor_%29.md): Returns a data object that contains TIFF data with the specified compression settings for all of the image representations in the image.
- [canBeCompressed(using:)](canbecompressed%28using_%29.md): Tests whether the bitmap image representation can be compressed by the specified compression scheme.
- [tiffRepresentation](../nsimage/tiffrepresentation.md): A data object containing TIFF data for all of the image representations in the image.

### Producing Other Representations of Images

- [tiffRepresentationOfImageReps(in:)](tiffrepresentationofimagereps%28in_%29.md): Returns a TIFF representation of the specified images.
- [tiffRepresentationOfImageReps(in:using:factor:)](tiffrepresentationofimagereps%28in_using_factor_%29.md): Returns a TIFF representation of the specified images using the specified compression scheme and factor.
- [tiffRepresentation](tiffrepresentation.md): A TIFF representation of the bitmap image data.
- [representationOfImageReps(in:using:properties:)](representationofimagereps%28in_using_properties_%29.md): Formats the specified bitmap images using the specified storage type and properties and returns them in a data object.
- [representation(using:properties:)](representation%28using_properties_%29.md): Formats the bitmap representation’s image data using the specified storage type and properties and returns it in a data object.
- [NSDrawBitmap(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../nsdrawbitmap%28______________________%29.md): Draws a bitmap image.

# TIFFRepresentationUsingCompression:factor: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a TIFF representation of the image using the specified compression.

## Declaration

```objectivec
- (NSData *) TIFFRepresentationUsingCompression:(NSTIFFCompression) comp factor:(float) factor;
```

## Parameters

- `comp`: An enum constant that represents a TIFF data-compression scheme. Legal values for `compression` can be found in [NSTIFFCompression](tiffcompression.md).
- `factor`: A `float` value that provides a hint for those compression types that implement variable compression ratios.

  Currently only JPEG compression uses a compression factor. JPEG compression in TIFF files is not supported, and `factor` is ignored.

<a id="Discussion"></a>

## Discussion

If the compression type isn’t supported for writing TIFF data (for example, [NSTIFFCompressionNEXT](tiffcompression/next.md)), the stored compression is changed to [NSTIFFCompressionNone](tiffcompression/none.md) before the TIFF representation is generated.

If a problem is encountered during generation of the TIFF, [TIFFRepresentationUsingCompression:factor:](tiffrepresentation%28using_factor_%29.md) raises an [NSTIFFException](../nstiffexception.md) or an [NSBadBitmapParametersException](../nsbadbitmapparametersexception.md).

## See Also

### Related Documentation

- [TIFFRepresentationUsingCompression:factor:](../nsimage/tiffrepresentation%28using_factor_%29.md): Returns a data object that contains TIFF data with the specified compression settings for all of the image representations in the image.
- [canBeCompressedUsing:](canbecompressed%28using_%29.md): Tests whether the bitmap image representation can be compressed by the specified compression scheme.
- [TIFFRepresentation](../nsimage/tiffrepresentation.md): A data object containing TIFF data for all of the image representations in the image.

### Producing Other Representations of Images

- [TIFFRepresentationOfImageRepsInArray:](tiffrepresentationofimagereps%28in_%29.md): Returns a TIFF representation of the specified images.
- [TIFFRepresentationOfImageRepsInArray:usingCompression:factor:](tiffrepresentationofimagereps%28in_using_factor_%29.md): Returns a TIFF representation of the specified images using the specified compression scheme and factor.
- [TIFFRepresentation](tiffrepresentation.md): A TIFF representation of the bitmap image data.
- [representationOfImageRepsInArray:usingType:properties:](representationofimagereps%28in_using_properties_%29.md): Formats the specified bitmap images using the specified storage type and properties and returns them in a data object.
- [representationUsingType:properties:](representation%28using_properties_%29.md): Formats the bitmap representation’s image data using the specified storage type and properties and returns it in a data object.
- [NSDrawBitmap](../nsdrawbitmap%28______________________%29.md): Draws a bitmap image.
