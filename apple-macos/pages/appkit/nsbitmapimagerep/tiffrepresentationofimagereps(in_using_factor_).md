> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/tiffrepresentationofimagereps(in:using:factor:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/tiffrepresentationofimagereps(in:using:factor:))

# tiffRepresentationOfImageReps(in:using:factor:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a TIFF representation of the specified images using the specified compression scheme and factor.

## Declaration

```swift
class func tiffRepresentationOfImageReps(in array: [NSImageRep], using comp: NSBitmapImageRep.TIFFCompression, factor: Float) -> Data?
```

## Parameters

- `array`: An array containing objects representing bitmap image representations.
- `comp`: An enum constant that represents a TIFF data-compression scheme. Legal values for `compression` can be found in [NSBitmapImageRep.TIFFCompression](tiffcompression.md).
- `factor`: A `float` value that provides a hint for those compression types that implement variable compression ratios.

  Currently only JPEG compression uses a compression factor. JPEG compression in TIFF files is not supported, and `factor` is ignored.

<a id="return-value"></a>

## Return Value

A data object containing a TIFF image representation.

<a id="Discussion"></a>

## Discussion

If the specified compression isn’t applicable, no compression is used. If a problem is encountered during generation of the TIFF, the method raises an [NSTIFFException](../nstiffexception.md) or an [NSBadBitmapParametersException](../nsbadbitmapparametersexception.md).

## See Also

### Producing Other Representations of Images

- [tiffRepresentationOfImageReps(in:)](tiffrepresentationofimagereps%28in_%29.md): Returns a TIFF representation of the specified images.
- [tiffRepresentation](tiffrepresentation.md): A TIFF representation of the bitmap image data.
- [tiffRepresentation(using:factor:)](tiffrepresentation%28using_factor_%29.md): Returns a TIFF representation of the image using the specified compression.
- [representationOfImageReps(in:using:properties:)](representationofimagereps%28in_using_properties_%29.md): Formats the specified bitmap images using the specified storage type and properties and returns them in a data object.
- [representation(using:properties:)](representation%28using_properties_%29.md): Formats the bitmap representation’s image data using the specified storage type and properties and returns it in a data object.
- [NSDrawBitmap(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../nsdrawbitmap%28______________________%29.md): Draws a bitmap image.

# TIFFRepresentationOfImageRepsInArray:usingCompression:factor: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a TIFF representation of the specified images using the specified compression scheme and factor.

## Declaration

```objectivec
+ (NSData *) TIFFRepresentationOfImageRepsInArray:(NSArray<NSImageRep *> *) array usingCompression:(NSTIFFCompression) comp factor:(float) factor;
```

## Parameters

- `array`: An array containing objects representing bitmap image representations.
- `comp`: An enum constant that represents a TIFF data-compression scheme. Legal values for `compression` can be found in [NSTIFFCompression](tiffcompression.md).
- `factor`: A `float` value that provides a hint for those compression types that implement variable compression ratios.

  Currently only JPEG compression uses a compression factor. JPEG compression in TIFF files is not supported, and `factor` is ignored.

<a id="return-value"></a>

## Return Value

A data object containing a TIFF image representation.

<a id="Discussion"></a>

## Discussion

If the specified compression isn’t applicable, no compression is used. If a problem is encountered during generation of the TIFF, the method raises an [NSTIFFException](../nstiffexception.md) or an [NSBadBitmapParametersException](../nsbadbitmapparametersexception.md).

## See Also

### Producing Other Representations of Images

- [TIFFRepresentationOfImageRepsInArray:](tiffrepresentationofimagereps%28in_%29.md): Returns a TIFF representation of the specified images.
- [TIFFRepresentation](tiffrepresentation.md): A TIFF representation of the bitmap image data.
- [TIFFRepresentationUsingCompression:factor:](tiffrepresentation%28using_factor_%29.md): Returns a TIFF representation of the image using the specified compression.
- [representationOfImageRepsInArray:usingType:properties:](representationofimagereps%28in_using_properties_%29.md): Formats the specified bitmap images using the specified storage type and properties and returns them in a data object.
- [representationUsingType:properties:](representation%28using_properties_%29.md): Formats the bitmap representation’s image data using the specified storage type and properties and returns it in a data object.
- [NSDrawBitmap](../nsdrawbitmap%28______________________%29.md): Draws a bitmap image.
