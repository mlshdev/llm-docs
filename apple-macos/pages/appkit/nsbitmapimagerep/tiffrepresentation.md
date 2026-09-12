> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/tiffrepresentation](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/tiffrepresentation)

# tiffRepresentation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A TIFF representation of the bitmap image data.

## Declaration

```swift
var tiffRepresentation: Data? { get }
```

<a id="Discussion"></a>

## Discussion

Accessing this property results in a call to the [tiffRepresentation(using:factor:)](tiffrepresentation%28using_factor_%29.md) method using the stored compression type and factor retrieved from the initial image data or changed using the [setCompression(\_:factor:)](setcompression%28__factor_%29.md) method. If the stored compression type isn’t supported for writing TIFF data (for example, [NSBitmapImageRep.TIFFCompression.next](tiffcompression/next.md)), the stored compression is changed to [NSBitmapImageRep.TIFFCompression.none](tiffcompression/none.md) before calling the [tiffRepresentation(using:factor:)](tiffrepresentation%28using_factor_%29.md) method using the compression that’s returned by [getCompression(\_:factor:)](getcompression%28__factor_%29.md) (if applicable).

If a problem is encountered during generation of the TIFF, an [NSTIFFException](../nstiffexception.md) or an [NSBadBitmapParametersException](../nsbadbitmapparametersexception.md) is raised.

## See Also

### Related Documentation

- [tiffRepresentation(using:factor:)](../nsimage/tiffrepresentation%28using_factor_%29.md): Returns a data object that contains TIFF data with the specified compression settings for all of the image representations in the image.
- [tiffRepresentation](../nsimage/tiffrepresentation.md): A data object containing TIFF data for all of the image representations in the image.

### Producing Other Representations of Images

- [tiffRepresentationOfImageReps(in:)](tiffrepresentationofimagereps%28in_%29.md): Returns a TIFF representation of the specified images.
- [tiffRepresentationOfImageReps(in:using:factor:)](tiffrepresentationofimagereps%28in_using_factor_%29.md): Returns a TIFF representation of the specified images using the specified compression scheme and factor.
- [tiffRepresentation(using:factor:)](tiffrepresentation%28using_factor_%29.md): Returns a TIFF representation of the image using the specified compression.
- [representationOfImageReps(in:using:properties:)](representationofimagereps%28in_using_properties_%29.md): Formats the specified bitmap images using the specified storage type and properties and returns them in a data object.
- [representation(using:properties:)](representation%28using_properties_%29.md): Formats the bitmap representation’s image data using the specified storage type and properties and returns it in a data object.
- [NSDrawBitmap(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../nsdrawbitmap%28______________________%29.md): Draws a bitmap image.

# TIFFRepresentation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A TIFF representation of the bitmap image data.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSData * TIFFRepresentation;
```

<a id="Discussion"></a>

## Discussion

Accessing this property results in a call to the [TIFFRepresentationUsingCompression:factor:](tiffrepresentation%28using_factor_%29.md) method using the stored compression type and factor retrieved from the initial image data or changed using the [setCompression:factor:](setcompression%28__factor_%29.md) method. If the stored compression type isn’t supported for writing TIFF data (for example, [NSTIFFCompressionNEXT](tiffcompression/next.md)), the stored compression is changed to [NSTIFFCompressionNone](tiffcompression/none.md) before calling the [TIFFRepresentationUsingCompression:factor:](tiffrepresentation%28using_factor_%29.md) method using the compression that’s returned by [getCompression:factor:](getcompression%28__factor_%29.md) (if applicable).

If a problem is encountered during generation of the TIFF, an [NSTIFFException](../nstiffexception.md) or an [NSBadBitmapParametersException](../nsbadbitmapparametersexception.md) is raised.

## See Also

### Related Documentation

- [TIFFRepresentationUsingCompression:factor:](../nsimage/tiffrepresentation%28using_factor_%29.md): Returns a data object that contains TIFF data with the specified compression settings for all of the image representations in the image.
- [TIFFRepresentation](../nsimage/tiffrepresentation.md): A data object containing TIFF data for all of the image representations in the image.

### Producing Other Representations of Images

- [TIFFRepresentationOfImageRepsInArray:](tiffrepresentationofimagereps%28in_%29.md): Returns a TIFF representation of the specified images.
- [TIFFRepresentationOfImageRepsInArray:usingCompression:factor:](tiffrepresentationofimagereps%28in_using_factor_%29.md): Returns a TIFF representation of the specified images using the specified compression scheme and factor.
- [TIFFRepresentationUsingCompression:factor:](tiffrepresentation%28using_factor_%29.md): Returns a TIFF representation of the image using the specified compression.
- [representationOfImageRepsInArray:usingType:properties:](representationofimagereps%28in_using_properties_%29.md): Formats the specified bitmap images using the specified storage type and properties and returns them in a data object.
- [representationUsingType:properties:](representation%28using_properties_%29.md): Formats the bitmap representation’s image data using the specified storage type and properties and returns it in a data object.
- [NSDrawBitmap](../nsdrawbitmap%28______________________%29.md): Draws a bitmap image.
