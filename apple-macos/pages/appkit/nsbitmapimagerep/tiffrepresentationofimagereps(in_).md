> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/tiffrepresentationofimagereps(in:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/tiffrepresentationofimagereps(in:))

# tiffRepresentationOfImageReps(in:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a TIFF representation of the specified images.

## Declaration

```swift
class func tiffRepresentationOfImageReps(in array: [NSImageRep]) -> Data?
```

## Parameters

- `array`: An array containing objects representing bitmap image representations.

<a id="return-value"></a>

## Return Value

A data object containing a TIFF image representation.

<a id="Discussion"></a>

## Discussion

This method uses the compression returned by [getCompression(\_:factor:)](getcompression%28__factor_%29.md) (if applicable). If a problem is encountered during generation of the TIFF, this method raises an [NSTIFFException](../nstiffexception.md) or an [NSBadBitmapParametersException](../nsbadbitmapparametersexception.md).

## See Also

### Producing Other Representations of Images

- [tiffRepresentationOfImageReps(in:using:factor:)](tiffrepresentationofimagereps%28in_using_factor_%29.md): Returns a TIFF representation of the specified images using the specified compression scheme and factor.
- [tiffRepresentation](tiffrepresentation.md): A TIFF representation of the bitmap image data.
- [tiffRepresentation(using:factor:)](tiffrepresentation%28using_factor_%29.md): Returns a TIFF representation of the image using the specified compression.
- [representationOfImageReps(in:using:properties:)](representationofimagereps%28in_using_properties_%29.md): Formats the specified bitmap images using the specified storage type and properties and returns them in a data object.
- [representation(using:properties:)](representation%28using_properties_%29.md): Formats the bitmap representation’s image data using the specified storage type and properties and returns it in a data object.
- [NSDrawBitmap(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../nsdrawbitmap%28______________________%29.md): Draws a bitmap image.

# TIFFRepresentationOfImageRepsInArray: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a TIFF representation of the specified images.

## Declaration

```objectivec
+ (NSData *) TIFFRepresentationOfImageRepsInArray:(NSArray<NSImageRep *> *) array;
```

## Parameters

- `array`: An array containing objects representing bitmap image representations.

<a id="return-value"></a>

## Return Value

A data object containing a TIFF image representation.

<a id="Discussion"></a>

## Discussion

This method uses the compression returned by [getCompression:factor:](getcompression%28__factor_%29.md) (if applicable). If a problem is encountered during generation of the TIFF, this method raises an [NSTIFFException](../nstiffexception.md) or an [NSBadBitmapParametersException](../nsbadbitmapparametersexception.md).

## See Also

### Producing Other Representations of Images

- [TIFFRepresentationOfImageRepsInArray:usingCompression:factor:](tiffrepresentationofimagereps%28in_using_factor_%29.md): Returns a TIFF representation of the specified images using the specified compression scheme and factor.
- [TIFFRepresentation](tiffrepresentation.md): A TIFF representation of the bitmap image data.
- [TIFFRepresentationUsingCompression:factor:](tiffrepresentation%28using_factor_%29.md): Returns a TIFF representation of the image using the specified compression.
- [representationOfImageRepsInArray:usingType:properties:](representationofimagereps%28in_using_properties_%29.md): Formats the specified bitmap images using the specified storage type and properties and returns them in a data object.
- [representationUsingType:properties:](representation%28using_properties_%29.md): Formats the bitmap representation’s image data using the specified storage type and properties and returns it in a data object.
- [NSDrawBitmap](../nsdrawbitmap%28______________________%29.md): Draws a bitmap image.
